import React from "react";
import { colors } from "../../assets/css/colors";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import { Button } from "../../components";
import { connect } from "react-redux";
import { mapStateToProps } from "../../redux/reducers/reducer";
import DatePicker from "react-date-picker";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: "",
      userId: "",
      selectedCategory: null,
      selectedDate: new Date(),
    };
  }

  async componentDidMount() {
    this.setState({
      authToken: localStorage.getItem("authToken"),
      userId: localStorage.getItem("userId"),
    });
  }

  render() {
    const { categories } = this.props;

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
                <Form.Group controlId="classification">
                  <Form.Label>
                    Classification<sup>*</sup>
                  </Form.Label>
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
                  />
                </Form.Group>

                <Form.Group style={{ width: "100%" }}>
                  <Form.Label>
                    Category<sup>*</sup>
                  </Form.Label>
                  <div>
                    <DropdownButton
                      title={
                        this.state.selectedCategory
                          ? this.state.selectedCategory
                          : "Category"
                      }
                      id="input-group-dropdown-1"
                      variant="outline-secondary"
                      size="md"
                      onSelect={(e) => {
                        const newE = JSON.parse(e);
                        this.setState((prevState) => ({
                          expensePayload: {
                            ...prevState.expensePayload,
                            category_id: newE.category_id,
                          },
                          selectedCategory: newE.category_name,
                        }));
                      }}
                      style={{
                        backgroundColor: "transparent"
                      }}
                    >
                      {categories.map((category) => {
                        return (
                          <Dropdown.Item eventKey={JSON.stringify(category)}>
                            {category.category_name}
                          </Dropdown.Item>
                        );
                      })}
                    </DropdownButton>
                  </div>
                </Form.Group>
              </div>

              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Form.Group style={{ width: "100%" }} controlId="Amount">
                  <Form.Label>
                    Enter Amount<sup>*</sup>
                  </Form.Label>
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
                  />
                </Form.Group>

                <Form.Group style={{ width: "100%" }} controlId="expenseDate">
                  <Form.Label>Select Date</Form.Label>
                  <div
                    style={{
                      display: "block",
                      width: "100%",
                      height: "calc(1.5em + .75rem + 2px)",
                      padding: ".375rem .75rem",
                      fontSize: "1rem",
                      fontWeight: "400",
                      lineHeight: "1.5",
                      color: "#495057",
                      backgroundColor: "#fff",
                      backgroundClip: "padding-box",
                      border: "1px solid #ced4da",
                      borderRadius: ".25rem",
                      transition:
                        "borderColor .15s ease-in-out,boxShadow .15s ease-in-out",
                    }}
                  >
                    <DatePicker
                      onChange={(date) => {
                        this.setState((prevState) => ({
                          expensePayload: {
                            ...prevState.expensePayload,
                            expense_date: date,
                          },
                        }));
                      }}
                      value={this.state.selectedDate}
                    />
                  </div>
                </Form.Group>
              </div>

              <div>
                <Form.Group style={{ width: "100%" }} controlId="description">
                  <Form.Label>
                    Description<sup>*</sup>
                  </Form.Label>
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

export default connect(mapStateToProps)(ExpenseForm);
