const listStyle = {
    padding: "10px",
    border: "solid #e3e3e3 0.5px",
    cursor: "pointer"
}

const rowFlex = {
    display: "flex",
    flexDirection: "row"
}

const columnFlex = {
    display: "flex",
    flexDirection: "column"
}

const centerAlign = {
    alignItems: "center",
    textAlign: "center"
}

const headerStyle = {
    backgroundColor: "#353A4E",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
}

const shadowStyle = {
    // boxShadow: "#707070 3px 3px 18px 2px",
    // boxShadow: "#eee 8px 7px 12px 0px",
    boxShadow: "0 4px 8px 8px rgb(0 0 0 / 20%)",


    borderRadius: 8
}

module.exports = {
    listStyle,
    rowFlex,
    columnFlex,
    centerAlign,
    headerStyle,
    shadowStyle
}