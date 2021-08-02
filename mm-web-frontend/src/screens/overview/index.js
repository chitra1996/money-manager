import React from "react";
import { Form, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { mapStateToProps } from "../../redux/reducers/reducer";
import { withRouter } from "react-router-dom";
import { colors } from "../../assets/css/colors";
import { Button } from "../../components";
import ApiCall from "../../services/httpService";
import { getAllExpenses } from "../../services/apiCalls";

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
          expenses: userData.data
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { expenses = [] } = this.props;
    console.log("expensessaga", expenses);

    return (
      <div
        style={{
          ...columnFlex,
          flex: 1,
        }}
      >
        {/* HEADING OF THE PAGE */}
        <div
          style={{
            ...rowFlex,
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              fontWeight: "bolder",
              fontSize: "xx-large",
              color: "#9b9b9b",
              marginLeft: "15px",
            }}
          >
            OVERVIEW{" "}
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              fontWeight: "bolder",
              fontSize: "xx-large",
              color: "#9b9b9b",
              marginRight: "15px",
              justifyContent: "flex-end",
            }}
          >
            calendar{" "}
          </div>
        </div>

        {/* EXPENSE DATA IN TABLE */}
        <div
          style={{
            ...rowFlex,
            flex: 11,
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              height: "90vh",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                overflow: "hidden",
                maxHeight: "80vh",
                overflowY: "scroll",
                width: "100%",
              }}
            >
              <Table
                responsive
                style={{
                  margin: "10pt",
                  width: "96%",
                  paddingBottom: 20,
                }}
              >
                <thead>
                  <tr key={"title"} align={"center"}>
                    <th width="5%">Date</th>
                    <th width="10%">Classification</th>
                    <th width="75%">Description</th>
                    <th align={"left"} width="10%">
                      Amount
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {expenses.length > 0
                    ? expenses.map((expense) => {
                        return (
                          <tr
                            key={expense.expense_id}
                            align={"center"}
                            style={{
                              width: "100%",
                              backgroundColor: ["CREDIT", "REFUND"].includes(
                                expense.classification
                                  ? expense.classification.toUpperCase()
                                  : null
                              )
                                ? colors.bgGreen
                                : colors.bgRed,
                              color: colors.textBlack,
                            }}
                          >
                            <td width="5%">
                              {expense.createdAt
                                ? new Date(
                                    expense.createdAt
                                  ).toLocaleDateString()
                                : null}
                            </td>
                            <td width="10%">{expense.classification}</td>
                            <td width="75%">{expense.description}</td>
                            <td align={"left"} width="10%">
                              ₹{expense.amount}
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </Table>
            </div>
          </div>

          {/* EXPENSE GRAPHS & FORM */}
          <div
            style={{
              ...columnFlex,
              flex: 1,
            }}
          >
            {/* EXPENSE GRAPHS */}
            <div
              style={{
                display: "flex",
                flex: 2,
                padding: "10px 10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  color: colors.titleColor,
                  fontSize: "20px",
                  fontWeight: "bold",
                  padding: "10pt",
                }}
              >
                EXPENSE GRAPHS
              </div>
            </div>

            {/* EXPENSE ADDITION FORM */}
            <div
              style={{
                display: "flex",
                flex: 1,
                padding: "10px 10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                }}
              >
                <Form
                  style={{
                    backgroundColor: "white",
                    borderRadius: "4pt",
                    padding: "10pt",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      color: colors.titleColor,
                      fontSize: "20px",
                      fontWeight: "bold",
                      padding: "10px 10px 16px 10px",
                    }}
                  >
                    Add Expense
                  </div>

                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Form.Group
                        style={{ width: "100%" }}
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Select Date</Form.Label>
                        <Form.Control
                          placeholder="DD/MM/YYYY"
                          type="text"
                          name="expenseDate"
                          onChange={(e) => {
                            this.setState((prevState) => ({
                              expensePayload: {
                                ...prevState.expensePayload,
                                expenseDate: e.target.value,
                              },
                            }));
                          }}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        style={{ width: "100%" }}
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Enter Amount</Form.Label>
                        <Form.Control
                          placeholder="Enter Amount"
                          type="text"
                          name="amount"
                          onChange={(e) => {
                            this.setState((prevState) => ({
                              expensePayload: {
                                ...prevState.expensePayload,
                                amount: e.target.value,
                              },
                            }));
                          }}
                          required
                        />
                      </Form.Group>
                    </div>

                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Form.Group
                        style={{ width: "100%" }}
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                          placeholder="Select"
                          type="text"
                          name="category_id"
                          onChange={(e) => {
                            this.setState((prevState) => ({
                              expensePayload: {
                                ...prevState.expensePayload,
                                category_id: e.target.value,
                              },
                            }));
                          }}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        style={{ width: "100%" }}
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Classification</Form.Label>
                        <Form.Control
                          placeholder="Select"
                          type="text"
                          name="classification"
                          onChange={(e) => {
                            this.setState((prevState) => ({
                              expensePayload: {
                                ...prevState.expensePayload,
                                classification: e.target.value,
                              },
                            }));
                          }}
                          required
                        />
                      </Form.Group>
                    </div>

                    <div>
                      <Form.Group
                        style={{ width: "100%" }}
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          placeholder="Enter description here"
                          type="text"
                          name="description"
                          onChange={(e) => {
                            this.setState((prevState) => ({
                              expensePayload: {
                                ...prevState.expensePayload,
                                description: e.target.value,
                              },
                            }));
                          }}
                          required
                        />
                      </Form.Group>
                    </div>

                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        justifyContent: "flex-end",
                        padding: "0 10px",
                      }}
                    >
                      <Button
                        title={"SUBMIT ➔"}
                        onClick={() => {
                          this.props.dispatch({
                            type: "CREATING_NEW_EXPENSE",
                            payload: {
                              expensePayload: this.state.expensePayload,
                              authToken: this.state.authToken,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(Overview));
