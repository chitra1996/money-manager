import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "../../components";
import { withRouter } from "react-router-dom";
import { shadowStyle } from "../../assets/css/common";
import app_logo from "../../assets/svg/app_logo.svg";
import login_decor from "../../assets/svg/login_decor.svg";
import login_decor_bottom from "../../assets/svg/login_decor_bottom.svg";
import { colors } from "../../assets/css/colors";
import { connect } from "react-redux";
import { mapStateToProps } from "../../redux/reducers/reducer";
import ApiCall from "../../services/httpService";
import { loginUser } from "../../services/apiCalls";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: "",
      loginPayload: {
        userEmail: "emailnewnew",
        password: "password",
      },
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          backgroundColor: colors.bgColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "100%",
            position: "absolute",
            top: 0,
          }}
          alt="LOGO"
          src={login_decor}
        />

        <img
          style={{
            width: "100%",
            position: "absolute",
            bottom: -60,
          }}
          alt="LOGO"
          src={login_decor_bottom}
        />

        <div
          style={{
            position: "absolute",
            bottom: 10,
            color: "#fff",
            fontSize: "18px",
          }}
        >
          Manage Your Budget Easy
        </div>

        <div
          style={{
            width: "25%",
            backgroundColor: "#fff",
            zIndex: 1,
            marginTop: "100px",
            ...shadowStyle,
          }}
        >
          <Form
            style={{
              backgroundColor: "transparent",
              borderRadius: "4pt",
              padding: "30pt 10pt",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: "1",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                style={{
                  width: "30%",
                }}
                alt="LOGO"
                src={app_logo}
              />
              <Form.Group
                style={{
                  fontWeight: "bold",
                  color: colors.titleColor,
                  fontSize: "20px",
                  width: "85%",
                }}
                controlId="formBasicEmail"
              >
                <Form.Label>LOGIN</Form.Label>
              </Form.Group>
              <Form.Group style={{ width: "85%" }} controlId="formBasicEmail">
                <Form.Control
                  placeholder="User Email"
                  type="text"
                  name="userEmail"
                  onChange={(e) => {
                    this.setState((prevState) => ({
                      loginPayload: {
                        ...prevState.loginPayload,
                        userEmail: e.target.value,
                      },
                    }));
                  }}
                  required
                />
              </Form.Group>

              <Form.Group
                style={{ width: "85%" }}
                controlId="formBasicPassword"
              >
                <Form.Control
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={(e) => {
                    this.setState((prevState) => ({
                      loginPayload: {
                        ...prevState.loginPayload,
                        password: e.target.value,
                      },
                    }));
                  }}
                  required
                />
              </Form.Group>
              <Button
                title={"LOGIN ➔"}
                onClick={() => {
                  this.props.dispatch({
                    type: "LOGGING_IN_USER",
                    payload: {
                      loginPayload: this.state.loginPayload,
                      history: this.props.history,
                    },
                  });
                }}
              />
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(Login));
