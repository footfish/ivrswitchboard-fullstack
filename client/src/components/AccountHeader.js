import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import api from '../lib/SwitchboardAPI';

const AccountHeader = (props) => {


return (
    <div className="row no-gutters px-1">
    <div className="col-6 col-lg-7 col-md-7 ">
    <div className="text-primary">Switchboard
    <h2>{props.switchboardNumber}</h2>
    </div>
    </div>
    <div className="col-2 col-lg-1 col-md-1">
    { props.linksActive && <ProfileMenu/>}
    </div>
    </div>
)

}

const ProfileMenu = () => 
        <div className="text-primary text-center dropdown" >
        <a data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#1"><FontAwesomeIcon icon={faUserCircle} size="3x"/><br/><FontAwesomeIcon icon={faEllipsisH} size="1x"/></a>
        <div className="dropdown-menu dropdown-menu-right">
        <Link className="dropdown-item" to="/account">Account Profile</Link>
        <Link className="dropdown-item" to="/payment">Payment Settings</Link>
        <Link className="dropdown-item" to="/billing">Billing Statement</Link>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item" to="/" onClick={api.logout}>Sign Out</Link>
        </div>
        </div>

export default AccountHeader

