import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from "./login";
import Main from "./main";

class MoneyManager extends React.Component {
    render() {
        return (
            <div style={{
                    height: "100vh",
                    display: "flex"
                }}>
                <Router>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/main">
                            <Main />
                        </Route>
                        <Route path="/">
                            <Login />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default MoneyManager;