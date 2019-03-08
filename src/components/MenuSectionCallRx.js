import React from 'react'
import MenuActionWaitDTMF from './MenuActionWaitDTMF'
import MenuActionNotifyEmail from './MenuActionNotifyEmail'
import MenuActionGreeting from './MenuActionGreeting'
import SectionBorder from './SectionBorder'

const MenuSectionCallRx = (props) => {
return(
    <SectionBorder label="On Call Received" borderBottom={false}>
    <li class="list-group-item">
    <MenuActionNotifyEmail notifyState={props.menuSettings.emailNotification} onClick={props.onNotifyClick} />
    </li><li class="list-group-item">
    <MenuActionGreeting settings={props.menuSettings.greeting} recordingOptions={props.recordingOptions} onChange={props.onGreetingChange}/>
    </li><li class="list-group-item">
    <MenuActionWaitDTMF digitMenu={props.menuSettings.menu} onClick={props.onDigitClick}/>
    </li>
    </SectionBorder>
)
}

export default MenuSectionCallRx
