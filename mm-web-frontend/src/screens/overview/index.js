import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../redux/reducers/reducer";
import { withRouter } from "react-router-dom";
import { getAllExpenses } from "../../services/apiCalls";
import OverviewHeader from "../../components/overviewHeader";
import ExpenseTable from "../../components/expenseTable";
import ExpenseGraph from "../../components/expenseGraph";
import ExpenseForm from "../../components/expenseForm";

const columnFlex = {
  display: "flex",
  flexDirection: "column",
};

const rowFlex = {
  display: "flex",
  flexDirection: "row",
};

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
    };
  }

  async componentDidMount() {
    this.state.authToken = localStorage.getItem("authToken");
    this.state.userId = localStorage.getItem("userId");
    if (!this.state.authToken) {
      this.props.history.push("/");
    }
    return await this.getAllExpenses();
  }

  getAllExpenses = async () => {
    try {
      const userData = await getAllExpenses(
        this.state.userId,
        this.state.authToken
      );
      if (userData.data) {
        this.setState({
          expenses: userData.data,
        });
        this.props.dispatch({
          type: "SET_EXPENSES",
          expenses: userData.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { expenses = [] } = this.props;

    return (
      <div
        style={{
          ...columnFlex,
          flex: 1,
        }}
      >
        {/* HEADING OF THE PAGE */}
        <OverviewHeader />

        {/* EXPENSE DATA IN TABLE */}
        <div
          style={{
            ...rowFlex,
            flex: 11,
          }}
        >
          <ExpenseTable expenses={expenses} />

          {/* EXPENSE GRAPHS & FORM */}
          <div
            style={{
              ...columnFlex,
              flex: 1,
            }}
          >
            {/* EXPENSE ADDITION FORM */}
            <ExpenseForm />

            {/* EXPENSE GRAPHS */}
            <ExpenseGraph />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(Overview));
