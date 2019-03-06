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
    const sectionLabel = { zero: "On '0' Pressed",
                       one: "On '1' Pressed",
                       two: "On '2' Pressed",
                       three: "On '3' Pressed",
                       four: "On '4' Pressed",
                       five: "On '5' Pressed",
                       six: "On '6' Pressed",
                       seven: "On '7' Pressed",
                       eight: "On '8' Pressed",
                       nine: "On '9' Pressed",
                       hash: "On '#' Pressed",
                       star: "On '*' Pressed",
                       none: "When nothing pressed",
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
        <>{ props.digitSectionArray.map( (digitSection, idx) => {
            let lastAction = digitSection.actions[digitSection.actions.length-1].action
            return(
            <SectionBorder label={sectionLabel[digitSection.digitPressed]} borderBottom={idx === props.digitSectionArray.length-1}>
            <MenuActionSequence actionSettingsArray={digitSection.actions} recordingOptions={props.recordingOptions} onChange={ (n,i,v) => handleChange(digitSection.digitPressed,n,i,v) } onDeleteClick={ (i) => handleDeleteClick(digitSection.digitPressed, i )} />
            {addMoreEnabled[lastAction] &&     <li class="list-group-item"><MenuActionAddAction onAddClick={ () => handleAddClick(digitSection.digitPressed)}/></li> }
            </SectionBorder>
        )})}</>
   
    )
}

export default MenuSectionDigitPressed
