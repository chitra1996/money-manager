import React from "react";
import { colors } from "../../assets/css/colors";

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { payload } = this.props;

        return (
            <div style={{
                justifyContent: 'flex-end',
                display: 'flex',
                width: "85%"
            }}>
                <div style={{
                    padding: "8px 20px",
                    fontWeight: "bold",
                    backgroundColor: colors.secondaryColor,
                    borderRadius: "4px",
                    color: "#fff",
                }} onClick={() => {
                    console.log(payload)
                }}>
                    LOGIN ➔
                </div>
            </div>
        )
    }
}

export default Button