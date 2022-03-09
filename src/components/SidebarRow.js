import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';

function SidebarRow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
            <button className="register__btn" onClick={logout}>
          Log Out
        </button>
        </div>
    );
}

export default SidebarRow;