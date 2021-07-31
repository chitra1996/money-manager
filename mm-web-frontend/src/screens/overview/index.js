import React from "react";
import { Form, Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { colors } from "../../assets/css/colors";
import { Button } from "../../components";

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
    this.state = {};
  }

  render() {
    let tableRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 22];
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
                width: "100%",
                
                backgroundColor: "#fff",
                borderRadius: "8px",
                overflow: 'hidden',
              

              }}
            >
              <Table
                responsive
                style={{
                  margin: "10pt",
                  width: "96%",
                  paddingBottom: 20
                  // backgroundColor:'red'
                }}
              >
                <div>
                  <thead>
                    <tr align={"center"}>
                      <th width="5%">Date</th>
                      <th width="10%">Category</th>
                      <th width="75%">Description</th>
                      <th align={"left"} width="10%">
                        Amount
                      </th>
                    </tr>
                  </thead>
                </div>
                <div
                  style={{
                    // display: 'block',
                    maxHeight: '80vh',
                    overflowY: 'scroll',
                    width: '100%'

                  }}
                >
                  <tbody

                  >

                    {tableRows.map((i) => {
                      return (
                        <tr
                          align={"center"}
                          style={{
                            width: '100%',
                            backgroundColor:
                              i % 2 == 0 ? colors.bgRed : colors.bgGreen,
                            color: colors.textBlack,
                          }}
                        >
                          <td width="5%">{i}</td>
                          <td width="10%">Groceries</td>
                          <td width="75%">Rice, Sugar</td>
                          <td align={"left"} width="10%">
                            ₹323/-
                          </td>
                        </tr>
                      );
                    })}

                  </tbody>
                </div>
                
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
                    width: "25%",
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
                              loginPayload: {
                                ...prevState.loginPayload,
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
                              loginPayload: {
                                ...prevState.loginPayload,
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
                          type="password"
                          name="category"
                          onChange={(e) => {
                            this.setState((prevState) => ({
                              loginPayload: {
                                ...prevState.loginPayload,
                                category: e.target.value,
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
                          type="password"
                          name="classification"
                          onChange={(e) => {
                            this.setState((prevState) => ({
                              loginPayload: {
                                ...prevState.loginPayload,
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
                          type="password"
                          name="description"
                          onChange={(e) => {
                            this.setState((prevState) => ({
                              loginPayload: {
                                ...prevState.loginPayload,
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
                      <Button payload={this.state.loginPayload} />
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default withRouter(Overview);
