import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faInfoCircle, faDoorOpen, faDoorClosed, faMicrophone } from '@fortawesome/free-solid-svg-icons'

export default class MainMenu extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick(e) {
            this.props.onClick(e.href);
          }
          
          
          render() {
              let activeTip
              const iconSize = "2x"
              const menuItems = [{tab: "times", label: "Times", icon: faClock, tip: "Configure times when your switchboard routes calls to the open or closed menu."},
                                 {tab: "open", label: "Open", icon: faDoorOpen, tip: "Configure how your switchboard routes calls during open hours"}, 
                                 {tab: "closed", label: "Closed", icon: faDoorClosed, tip: "Configure how your switchboard routes calls during closed hours"},
                                 {tab: "recordings", label: "Recordings", icon: faMicrophone, tip: "Manage the recordings used for playback on your switchboard"}]
                                 
              return (
                <><ul class="nav nav-pills justify-content-center nav-fill mb-3 border-bottom border-primary">
                {menuItems.map( menuItem => {
                    if(this.props.tab === menuItem.tab) {
                        activeTip = menuItem.tip
                    }
                    return(
                        <li class="nav-item">
                        <a class={ "rounded-0 nav-link " + (this.props.tab === menuItem.tab && "active")} onClick={this.handleClick} href={"#"+menuItem.tab}><FontAwesomeIcon icon={menuItem.icon} size={iconSize} /> <br/>{menuItem.label}</a>
                        </li>
                    )
                })}
                </ul>
                <div class="alert alert-light" role="alert"><FontAwesomeIcon icon={faInfoCircle}/>&nbsp; {activeTip}
                </div>
                </>
              )
          }
        }
    
