import React from 'react'
import MenuActionWaitDTMF from './MenuActionWaitDTMF'
import MenuActionNotifyEmail from './MenuActionNotifyEmail'
import MenuActionPlayback from './MenuActionPlayback'

const MenuSectionCallRx = (props) => {
return(
    <div class="card  border-primary rounded-0 border-bottom-0">
    <div class="card-header p-0 border-0 bg-white"><button type="button" class="btn btn-primary rounded-0">On Call Received</button></div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">
    <MenuActionNotifyEmail notifyState={props.notifyState} onClick={props.onNotifyClick} />
    </li><li class="list-group-item">
    <MenuActionPlayback settings={props.playbackSettings} recordings={props.playbackRecordings} onChange={props.onChange}/>
    </li><li class="list-group-item">
    <MenuActionWaitDTMF  activeDigits={props.activeDigits} onClick={props.onDigitClick}/>
    </li>
    </ul>
    </div>
)
}

export default MenuSectionCallRx
