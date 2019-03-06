import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const AccountHeader = (props) => {

return (
    <div class="row no-gutters">
    <div class="col-10 col-lg-11 col-md-11 ">
    <p class="text-primary">Switchboard
    <h2>{props.swithboardNumber}</h2>
    </p>
    </div>
    <div class="col-2 col-lg-1 col-md-1">
    <ProfileMenu/>
    </div>
    </div>
)

}

const ProfileMenu = () => {
    return(
        <div class="text-primary text-center dropdown"><a data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#1"><FontAwesomeIcon icon={faUserCircle} size="3x"/><br/><FontAwesomeIcon icon={faEllipsisH} size="1x"/></a>
        <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="/#">Account Profile</a>
        <a class="dropdown-item" href="/#">Payment Settings</a>
        <a class="dropdown-item" href="/#">Billing Statement</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="/#">Sign Out</a>
        </div>
        </div>
    )
}

export default AccountHeader

