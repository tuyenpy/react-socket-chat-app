import React from 'react';
import './Menu.css';
import Account from '../Account/Account';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import SortByAlphaOutlinedIcon from '@material-ui/icons/SortByAlphaOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styleIcon = {
  color: "#9B9FA5",
  fontSize: 30
}

const Menu = () => {
  return(
    <div className="Menu">
      <div className="Menu-account">
        <Account />
      </div>
      <div className="Menu-search">
        <SearchOutlinedIcon style={styleIcon}/>

      </div>
      <div className="Menu-public">
        <PublicOutlinedIcon style={styleIcon}/>
        
      </div>

      <div className="Menu-list">
        <FormatListBulletedOutlinedIcon style={styleIcon}/>
        
      </div>

      <div className="Menu-sort">
        <SortByAlphaOutlinedIcon style={styleIcon}/>
        
      </div>

      <div className="Menu-create">
        <AddCircleOutlineOutlinedIcon style={styleIcon}/>
        
      </div>
      <div className="Menu-more">
        <MoreVertIcon style={styleIcon} />
        
      </div>

    </div>
  )
}

export default Menu;