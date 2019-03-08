import React from 'react'
import MenuActionSequence from './MenuActionSequence'
import MenuActionAddAction from './MenuActionAddAction'
import SectionBorder from './SectionBorder'


const MenuSectionDigitPressed = (props) => {
    const addMoreEnabled = {playRecording: true, 
                        forwardToNumber: true,
                        forwardToNumberWhisper: true,
                        forwardToNumberConfirm: true, 
                        voicemailToEmail: false,
                        notifyEmail: true, 
                        analytics: true, 
                        backToMenu: false}
    const sectionLabel = { "0": "On '0' Pressed",
                       "1": "On '1' Pressed",
                       "2": "On '2' Pressed",
                       "3": "On '3' Pressed",
                       "4": "On '4' Pressed",
                       "5": "On '5' Pressed",
                       "6": "On '6' Pressed",
                       "7": "On '7' Pressed",
                       "8": "On '8' Pressed",
                       "9": "On '9' Pressed",
                       "10": "On '#' Pressed",
                       "11": "On '*' Pressed",
                       "none": "When nothing pressed",
}

    const handleAddClick = (digitPressed) => {
        props.onAddClick(digitPressed)
    }

    const handleDeleteClick = (digitPressed, e) => {
        props.onDeleteClick(digitPressed, e)
    }

    const handleChange = ( digitPressed,n , i, v) => {
        props.onChange( digitPressed, n, i, v)
    }


    return(
        <>{ Object.keys(props.digitMenu).map( (key, idx) => {
            let menuActions = props.digitMenu[key]
            let lastAction = menuActions[menuActions.length-1].action
            return(
            <SectionBorder label={sectionLabel[key]} borderBottom={idx === Object.keys(props.digitMenu).length-1}>
            <MenuActionSequence actionSettingsArray={menuActions} recordingOptions={props.recordingOptions} onChange={ (n,i,v) => handleChange(key,n,i,v) } onDeleteClick={ (i) => handleDeleteClick(key, i )} />
            {addMoreEnabled[lastAction] &&     <li class="list-group-item"><MenuActionAddAction onAddClick={ () => handleAddClick(key)}/></li> }
            </SectionBorder>
        )})}</>
   
    )
}

export default MenuSectionDigitPressed
