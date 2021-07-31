import React from "react";
import Overview from "../overview";
import Category from "../category";
import { colors } from "../../assets/css/colors";
import { shadowStyle } from "../../assets/css/common";
import app_logo from "../../assets/svg/app_logo.svg";
import login_decor_bottom from "../../assets/svg/login_decor_bottom.svg";
import logout from "../../assets/svg/logout.svg";

import home_color from "../../assets/svg/home_color.svg";
import home_dark from "../../assets/svg/home_dark.svg";
import categories_color from "../../assets/svg/categories_color.svg";
import categories_dark from "../../assets/svg/categories_dark.svg";

const navBarData = [
    {
        index: 0,
        title: 'Overview',
        selectedIcon: home_color,
        unselectedIcon: home_dark
    },
    {
        index: 1,
        title: 'Categories',
        selectedIcon: categories_color,
        unselectedIcon: categories_dark
    }
]

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0
        }
    }

    render() {
        const { selectedTab } = this.state;
        const data = navBarData;
        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                flex: 1
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1.5,
                    backgroundColor: "#fff",
                    zIndex: 1,
                    ...shadowStyle,
                    borderRadius: 0
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '25%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{

                            alignSelf: 'center',
                            width: "50%"
                        }} alt="LOGO" src={app_logo} />

                        <div style={{ marginTop: 16, fontWeight: 'bold', color: "#35404A" }}><span style={{ color: colors.themeColour }}>M</span>oney <span style={{ color: colors.themeColour }}>M</span>anager</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '100%', alignItems: 'center', }}>

                        {
                            data.map((item, ind) => {
                                let selected = ind == this.state.selectedTab;
                                return (
                                    <div
                                        onClick={() => this.setState({ selectedTab: ind })}
                                        style={{ display: 'flex', cursor:'pointer', flexDirection: 'row', backgroundColor: selected ? '#F9F5FD' : '#fff', width: '90%', padding: 8, alignItems: 'center', borderRadius: 8, marginTop: 8 }}>
                                        <img style={{
                                            width: 16,
                                        }} alt="LOGO" src={selected ? item.selectedIcon : item.unselectedIcon} />

                                        <div style={{ marginLeft: 10, fontWeight: 500, color: selected ? colors.themeColour : '#9E9FA3', fontSize: 14 }}>{item.title}</div>
                                    </div>
                                )
                            })
                        }

                    </div>


                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ position: 'absolute', bottom: 20, backgroundColor: colors.secondaryColor, ...shadowStyle, height: 56, width: 56, borderRadius: 60 / 2, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }}>
                            <img style={{
                                width: "60%",
                            }} alt="LOGO" src={logout} />
                        </div>

                        <img style={{
                            width: "100%",
                            bottom: -80
                        }} alt="LOGO" src={login_decor_bottom} />
                    </div>



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