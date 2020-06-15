import React from 'react';
import { withCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { createUser } from '../../actions';

import './Signup.css';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

const refName = React.createRef();
const refPhone = React.createRef();
const refEmail = React.createRef();
const refPassword = React.createRef();

const styleIcon = {
  fontSize: 30,
}

let Signup = (props) => {

  let { createUser, cookies, newUser } = props;

  const onSignup = async (e) => {
    e.preventDefault();
    createUser({
      name: refName.current.value,
      phone: refPhone.current.value,
      email: refEmail.current.value,
      password: refPassword.current.value
    });
  }

  // set cookie
  if (newUser.user) {
    let { _id } = newUser.user;
    cookies.set("userID", _id);
  }

  // show errors
  if (newUser.errors) {
    var { errors } = newUser;
  }
  return (
    <div className="Signup">
      {
        cookies.get('userID') ? (
          <Redirect to="/" />
        ) : (
            <form className="Signup-form">
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
                <button onClick={onSignup}>SignUp</button>

              </div>
              <div className="Signup-form-link">
                <a href="/">Login</a>
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
  createUser: createUser,
}

Signup = connect(mapStateToProp, mapDispatchToProp)(Signup);

export default withCookies(Signup);