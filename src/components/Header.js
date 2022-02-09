import React from 'react';
import './Header.css';
import LogoGran from "../images/LogoGran.png";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';



function Header() {
  return <div className="header">
    <div className="header__left">
    <img
        src={LogoGran}
        alt="Logo"
       />

  <div className="header__input">
  <IconButton>
    <SearchIcon />
  </IconButton>
    <input type ="text" />
    </div>
</div>

    <div className="header__middle">
    <div className="header__option">
    <IconButton>
      <HomeIcon fontSize= "large"  />
    </IconButton>
    </div>
    </div>

    <div className="header__right">
      <div className="header__info">
      <IconButton>
        <Avatar />
      </IconButton>
        <h4>Eddy Van Praet</h4>
      </div>

      
        
      

    </div>
  </div>;
}

export default Header;
