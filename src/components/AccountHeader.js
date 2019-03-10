import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const AccountHeader = (props) => {

return (
    <div className="row no-gutters">
    <div className="col-10 col-lg-11 col-md-11 ">
    <div className="text-primary">Switchboard
    <h2>{props.switchboardNumber}</h2>
    </div>
    </div>
    <div className="col-2 col-lg-1 col-md-1">
    <ProfileMenu/>
    </div>
    </div>
)

}

const ProfileMenu = () => {
    return(
        <div className="text-primary text-center dropdown"><a data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#1"><FontAwesomeIcon icon={faUserCircle} size="3x"/><br/><FontAwesomeIcon icon={faEllipsisH} size="1x"/></a>
        <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="/#">Account Profile</a>
        <a className="dropdown-item" href="/#">Payment Settings</a>
        <a className="dropdown-item" href="/#">Billing Statement</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="/#">Sign Out</a>
        </div>
        </div>
    )
}

export default AccountHeader

