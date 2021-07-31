import React from "react";
import { headerStyle } from "../../assets/css/common";

class AppHeader extends React.Component {
    render() {
        return (
            <div style={{ width: "100%", height: "10vh" }}>
                <div style={headerStyle}>
                    <h3 style={{ color: "#ffffff" }}>MONEY MANAGER</h3>
                </div>
            </div>
        )
    }
}

export default AppHeader