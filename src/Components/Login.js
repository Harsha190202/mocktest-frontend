import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginAuth } from "./Loginauth";
function Login() {
  useLoginAuth();
  const navigate = useNavigate();
  let [islogin, setIslogin] = useState(true);
  let [passwordup, setPasswordup] = useState("password");
  let [passwordin, setPasswordin] = useState("password");
  let [signUpState, setSignUpState] = useState({
    username: "",
    fullname: "",
    password: "",
  });
  let [signInState, setSignInState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInState),
    });

    const data = await res.json();
    const userdata = JSON.stringify(data);
    if (data.success) {
      localStorage.setItem("userdata", userdata);
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpState),
    });

    const registerdata = await res.json();

    if (registerdata.success) {
      alert("user created");
    } else {
      alert(registerdata.message);
    }
  };
  return (
    <div className="Login-Page">
      <div className="left-login"></div>
      <div className="right-login">
        <div className="login-info">
          <div className="welcome-tab">WELCOME TO JEE MAIN MOCK TESTS</div>

          <div className="sign-up-in-tab">
            <div className={`Sign-in-tab ${islogin === true ? "tabcolorless" : "tabcolor"}`} onClick={() => setIslogin(false)}>
              Sign Up{" "}
            </div>
            <div className={`Sign-in-tab ${islogin === true ? "tabcolor" : "tabcolorless"}`} onClick={() => setIslogin(true)}>
              Sign in{" "}
            </div>
          </div>

          {islogin === false ? (
            <div>
              <div className="username-tab">
                <h4 className="username-tab-h4">Username</h4>
                <input
                  type="text"
                  className="login-input border-box"
                  value={signUpState.username}
                  onChange={(e) => {
                    setSignUpState((prev) => {
                      return { ...prev, username: e.target.value };
                    });
                  }}
                />
              </div>

              <div className="email-tab">
                <h4 className="email-tab-h4">Full Name</h4>
                <input
                  type="text"
                  className="login-input border-box"
                  value={signUpState.fullname}
                  onChange={(e) => {
                    setSignUpState((prev) => {
                      return { ...prev, fullname: e.target.value };
                    });
                  }}
                />
              </div>

              <div className="password-tab">
                <div className="password-inner-tab ">
                  <h4 className="password-tab-h4">Password</h4>
                  {passwordup === "password" ? (
                    <h5
                      onClick={() => {
                        setPasswordup("text");
                      }}
                    >
                      Show
                    </h5>
                  ) : (
                    <h5
                      onClick={() => {
                        setPasswordup("password");
                      }}
                    >
                      Hide
                    </h5>
                  )}
                </div>

                <input
                  type={passwordup}
                  className="login-input border-box"
                  value={signUpState.password}
                  onChange={(e) => {
                    setSignUpState((prev) => {
                      return { ...prev, password: e.target.value };
                    });
                  }}
                />
              </div>

              <div className="sign-in-button" onClick={handleRegister}>
                SIGN UP
              </div>
            </div>
          ) : (
            <div>
              <div className="email-tab">
                <h4 className="email-tab-h4">Username Or Full Name</h4>
                <input
                  type="text"
                  className="login-input border-box"
                  value={signInState.username}
                  onChange={(e) => {
                    setSignInState((prev) => {
                      return { ...prev, username: e.target.value };
                    });
                  }}
                />
              </div>

              <div className="password-tab">
                <div className="password-inner-tab ">
                  <h4 className="password-tab-h4">Password</h4>
                  {passwordin === "password" ? (
                    <h5
                      onClick={() => {
                        setPasswordin("text");
                      }}
                    >
                      Show
                    </h5>
                  ) : (
                    <h5
                      onClick={() => {
                        setPasswordin("password");
                      }}
                    >
                      Hide
                    </h5>
                  )}
                </div>

                <input
                  type={passwordin}
                  className="login-input border-box"
                  value={signInState.password}
                  onChange={(e) => {
                    setSignInState((prev) => {
                      return { ...prev, password: e.target.value };
                    });
                  }}
                />
              </div>

              <div className="sign-in-section">
                <div className="sign-in-button" onClick={handleLogin}>
                  LOGIN NOW
                </div>
                <div className="forget-text">Forget Password ?</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
