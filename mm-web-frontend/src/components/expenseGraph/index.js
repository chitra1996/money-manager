import React from "react";
import { colors } from "../../assets/css/colors";

class ExpenseGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
    );
  }
}

export default ExpenseGraph;
