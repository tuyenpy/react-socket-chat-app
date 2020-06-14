import React from 'react';
import './Login.css';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';

const refEmail = React.createRef();
const refPassword = React.createRef();

const styleIcon = {
  fontSize: 30,
}

const Login = () => {
  return (
    <div className="Login">
      <form className="Login-form">
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
          <button>Login</button>
        </div>
        <div className="Login-form-link">
          <a href="/forgotpassword">Forgot password?</a>
          <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  )
}

export default Login;