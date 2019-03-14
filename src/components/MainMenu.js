import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faDoorOpen, faDoorClosed, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

const MainMenu = () => {
              const iconSize = "2x"
              const menuItems = [{tab: "times", label: "Times", icon: faClock},
                                 {tab: "open", label: "Open", icon: faDoorOpen}, 
                                 {tab: "closed", label: "Closed", icon: faDoorClosed},
                                 {tab: "recordings", label: "Recordings", icon: faMicrophone}]
                                 
              return (
                <ul className="nav nav-pills justify-content-center nav-fill mb-3 border-bottom border-primary">
                {menuItems.map( menuItem => {
                    return(
                        <li key={menuItem.tab} className="nav-item">
                        <NavLink to={"/"+menuItem.tab} activeClassName="rounded-0 nav-link active" className="rounded-0 nav-link"><FontAwesomeIcon icon={menuItem.icon} size={iconSize} /> <br/>{menuItem.label}</NavLink>
                        </li>
                    )
                })}
                </ul>
              )
          }
    
export default MainMenu