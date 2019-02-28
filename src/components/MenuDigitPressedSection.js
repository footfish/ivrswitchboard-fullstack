import React from 'react'
import MenuActionSequence from './MenuActionSequence'
import MenuActionAddAction from './MenuActionAddAction'

const MenuDigitPressedSection = (props) => {
    const addMoreEnabled = {playRecording: true, 
                        forwardToNumber: true,
                        forwardToNumberWhisper: true,
                        forwardToNumberConfirm: true, 
                        voicemailToEmail: false,
                        notifyEmail: true, 
                        analytics: true, 
                        backToMenu: false}
    const lastAction = props.actionSettingsArray[props.actionSettingsArray.length-1].action

    return(
        <div class="card  border-primary">
        <div class="card-header p-0 border-0 bg-white"><button type="button" class="btn btn-primary rounded-0">{props.label}</button></div>
        <div class="card-body">
        <div class="row">
        <MenuActionSequence {...props} />
        </div>
        <div class="row">
        {addMoreEnabled[lastAction] && <MenuActionAddAction onAddClick={props.onAddClick}/> }
        </div></div></div>
    )
}

export default MenuDigitPressedSection
