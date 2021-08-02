import React from "react";
import { colors } from "../../assets/css/colors";
import { Form } from "react-bootstrap";
import { Button } from "../../components";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
    );
  }
}

export default ExpenseForm;
