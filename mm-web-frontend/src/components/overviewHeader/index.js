import React from "react";
import { rowFlex } from "../../assets/css/common";

class OverviewHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          ...rowFlex,
          flex: 1,
          height: "10vh"
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
    );
  }
}

export default OverviewHeader;
