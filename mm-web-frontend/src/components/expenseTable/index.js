import React from "react";
import { Table } from "react-bootstrap";
import { colors } from "../../assets/css/colors";

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { expenses } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          padding: "10px"
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            overflow: "hidden",
            maxHeight: "90vh",
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
                            ? new Date(expense.expense_date).toLocaleDateString()
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
    );
  }
}

export default ExpenseTable;
