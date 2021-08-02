import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../redux/reducers/reducer";
import { withRouter } from "react-router-dom";
import { getAllCategory, getAllExpenses } from "../../services/apiCalls";
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
      category: [],
      authToken: "",
      userId: "",
    };
  }

  async componentDidMount() {
    this.setState(
      {
        authToken: localStorage.getItem("authToken"),
        userId: localStorage.getItem("userId"),
      },
      async () => {
        if (!this.state.authToken) {
          this.props.history.push("/");
        }
        await this.getAllCategories();
        return await this.getAllExpenses();
      }
    );
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

  getAllCategories = async () => {
    try {
      const category = await getAllCategory(
        this.state.userId,
        this.state.authToken
      );
      if (category.data) {
        this.setState({
          category: category.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { expenses = [] } = this.props,
      categories = this.state.category;

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
            <ExpenseForm categories={categories} />

            {/* EXPENSE GRAPHS */}
            <ExpenseGraph />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(Overview));
