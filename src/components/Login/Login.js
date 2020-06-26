import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import './Login.css';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';

const refEmail = React.createRef();
const refPassword = React.createRef();

const styleIcon = {
  fontSize: 30,
}

let Login = (props) => {
  let { loginUser, newUser } = props;
  let [, setCookie,] = useCookies(['userID']);
  let [state, setState] = useState(true);
  // onClick
  const onLogin = (e) => {
    e.preventDefault();
    if (!refEmail.current.value || !refPassword.current.value) return;
    loginUser({
      email: refEmail.current.value,
      password: refPassword.current.value
    });
    setState(false);
  }
  // if login success
  if (newUser.user) {
    var { _id } = newUser.user;
    setCookie('userID', _id);
  }

  //set cookies when the user successfully login

  if (newUser.errors) {
    var { errors } = newUser;
  }
  return (
    <>
      {
        !_id ? (
          <div className="Login">
            <form className="Login-form">
              <div className="Login-form-icon">
                <span>
                  <VpnKeyOutlinedIcon style={styleIcon} />

                </span>
              </div>
              {
                errors ? (
                  <div className="error">
                    <ul>
                      {
                        errors.map(error => <li key={error}>{error}</li>)
                      }
                    </ul>
                  </div>
                ) : (<></>)
              }

              <div className="Login-form-group">
                <label>Email</label>
                <input type="email"
                  ref={refEmail}
                  placeholder="Please fill a email"
                />
              </div>
              <div className="Login-form-group">
                <label>Password</label>
                <input type="password"
                  ref={refPassword}
                  placeholder="Please fill a password"
                />
              </div>
              <div className="Login-form-button">
                {
                  (state || errors) ? (
                    <button onClick={onLogin}>Login</button>

                  ) : (
                      <button onClick={onLogin}><i
                        className="fa fa-refresh fa-spin"
                        style={{ marginRight: "5px" }}
                      />Loading</button>

                    )
                }
              </div>
              <div className="Login-form-link">
                <a href="/forgotpassword">Forgot password?</a>
                <a href="/signup">Sign Up</a>
              </div>
            </form>
          </div>
        ) : (
            <Redirect to="/" />
          )
      }
    </>
  )
}

const mapStateToProp = (state) => ({
  newUser: state.user,
});

const mapDispatchToProp = {
  loginUser: loginUser,
}

Login = connect(mapStateToProp, mapDispatchToProp)(Login);

export default Login;