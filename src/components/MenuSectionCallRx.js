import React from 'react'
import MenuActionWaitDTMF from './MenuActionWaitDTMF'
import MenuActionNotifyEmail from './MenuActionNotifyEmail'
import MenuActionPlayback from './MenuActionPlayback'
import SectionBorder from './SectionBorder'

const MenuSectionCallRx = (props) => {
return(
    <SectionBorder label="On Call Received" borderBottom={false}>
    <li class="list-group-item">
    <MenuActionNotifyEmail notifyState={props.menuSettings.emailNotification} onClick={props.onNotifyClick} />
    </li><li class="list-group-item">
    <MenuActionPlayback settings={props.menuSettings.greeting} recordings={props.playbackRecordings} onChange={props.onChange}/>
    </li><li class="list-group-item">
    <MenuActionWaitDTMF  menu={props.menuSettings.menu} onClick={props.onDigitClick}/>
    </li>
    </SectionBorder>
)
}

export default MenuSectionCallRx
