import React from 'react';
import './Signup.css';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

const refName = React.createRef();
const refPhone = React.createRef();
const refEmail = React.createRef();
const refPassword = React.createRef();

const styleIcon = {
  fontSize: 30,
}

const Signup = () => {
  return (
    <div className="Signup">
      <form className="Signup-form">
        <div className="Signup-form-icon">
          <span>
            <LockOpenOutlinedIcon style={styleIcon} />

          </span>
        </div>
        <div className="Signup-form-group">
          <label>Name</label>
          <input type="name"
            ref={refName}
            placeholder="Please fill a name"
          />
        </div>
        <div className="Signup-form-group">
          <label>Phone</label>
          <input type="phone"
            ref={refPhone}
            placeholder="Please fill a phone"
          />
        </div>
        <div className="Signup-form-group">
          <label>Email</label>
          <input type="email"
            ref={refEmail}
            placeholder="Please fill a email"
          />
        </div>
        <div className="Signup-form-group">
          <label>Password</label>
          <input type="password"
            ref={refPassword}
            placeholder="Please fill a password"
          />
        </div>
        <div className="Signup-form-button">
          <button>SignUp</button>

        </div>
        <div className="Signup-form-link">
          <a href="/">Login</a>
        </div>
      </form>
    </div>
  )
}

export default Signup;