import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faDoorOpen, faDoorClosed, faMicrophone } from '@fortawesome/free-solid-svg-icons'

export default class MainMenu extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick(e) {
            this.props.onClick(e.href);
          }
          
          
          render() {
              const iconSize = "2x"
              const menuItems = [{tab: "times", label: "Times", icon: faClock},
                                 {tab: "open", label: "Open", icon: faDoorOpen},
                                 {tab: "closed", label: "Closed", icon: faDoorClosed},
                                 {tab: "recordings", label: "Recordings", icon: faMicrophone}]
                                 
              return (
                <ul class="nav nav-tabs justify-content-center nav-fill">
                {menuItems.map( menuItem => {
                    return(
                        <li class="nav-item">
                        <a class={ "nav-link " + (this.props.tab === menuItem.tab && "active")} onClick={this.handleClick} href={"#"+menuItem.tab}><FontAwesomeIcon icon={menuItem.icon} size={iconSize} /> <br/>{menuItem.label}</a>
                        </li>
                    )
                })}
                </ul>
              )
          }
        }
    
