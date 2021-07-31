import React from "react";
import Overview from "../overview";
import Category from "../category";
import { colors } from "../../assets/css/colors";
import { shadowStyle } from "../../assets/css/common";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0
        }
    }

    render() {
        const { selectedTab } = this.state;
        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                flex: 1
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    backgroundColor: "#fff",
                    zIndex: 1,
                    ...shadowStyle,
                    borderRadius: 0
                }}>
                    NavBar
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 10,
                    backgroundColor: colors.bgColor
                }}>
                    {selectedTab == 0 ?
                        <Overview />
                        :
                        <Category />
                    }
                </div>
            </div>
        )
    }
}

export default Main