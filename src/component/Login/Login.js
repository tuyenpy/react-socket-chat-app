import React from 'react';
import { withCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
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
  let { loginUser, cookies, newUser, } = props;
  // onClick
  const onLogin = (e) => {
    e.preventDefault();
    loginUser({
      email: refEmail.current.value,
      password: refPassword.current.value
    });
  }

  //set cookies when the user successfully login
  if (newUser.user) {
    let { _id } = newUser.user;
    cookies.set('userID', _id);
  }

  if (newUser.errors) {
    var { errors } = newUser;
  }
  return (
    <div className="Login">
      {
        cookies.get('userID') ? (
          <Redirect to="/" />
        ) : (

            <form className="Login-form">
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
              <div className="Login-form-icon">
                <span>
                  <VpnKeyOutlinedIcon style={styleIcon} />

                </span>
              </div>
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
                <button onClick={onLogin}>Login</button>
              </div>
              <div className="Login-form-link">
                <a href="/forgotpassword">Forgot password?</a>
                <a href="/signup">Sign Up</a>
              </div>
            </form>
          )
      }
    </div>
  )
}

const mapStateToProp = (state) => ({
  newUser: state.user,
});

const mapDispatchToProp = {
  loginUser: loginUser,
}

Login = connect(mapStateToProp, mapDispatchToProp)(Login);

export default withCookies(Login);