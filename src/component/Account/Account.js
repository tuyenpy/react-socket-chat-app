import React from 'react';
import './Account.css';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const styleIcon = {
  color: "#9B9FA5",
  fontSize: 30
}

const Account = (props) => {
  let { avatar } = props;
  return(
    <div className="Account">
      <div className="Account-avatar">
        {avatar}
      </div>
    </div>
  )
}

Account.defaultProps = {
  avatar: <PersonOutlineIcon style={styleIcon} />
}
export default Account;