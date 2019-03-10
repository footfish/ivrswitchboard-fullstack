import React, { Component } from 'react'

import MenuSectionDigitPressed from './components/MenuSectionDigitPressed'
import MenuSectionCallRx from './components/MenuSectionCallRx'
import AccountHeader from './components/AccountHeader'
import MainMenu from './components/MainMenu'
import { switchboard } from './config'

export default class MenuApp extends Component {

  constructor(props) {
    super(props)
    if(this.props.location.pathname.replace(/\//g, '')==="open") {
       this.state = switchboard.openMenu
    } else {
      this.state = switchboard.closedMenu
    }

    this.state["recordings"] = switchboard.recordings
    this.handlerNotifyClick=this.handlerNotifyClick.bind(this)
    this.handlerDigitActionChange=this.handlerDigitActionChange.bind(this)
    this.handlerDigitActionDelete=this.handlerDigitActionDelete.bind(this)    
    this.handlerDigitActionAdd=this.handlerDigitActionAdd.bind(this)    
    this.handlerDigitSelectionClick=this.handlerDigitSelectionClick.bind(this) 
    this.handlerGreetingChange=this.handlerGreetingChange.bind(this) 
  }

  handlerNotifyClick() {
    this.setState( (state) => { state.emailNotification = !state.emailNotification ; return state})
  }

  handlerDigitActionDelete(digit,index) {
    this.setState( (state) => { state.menu[digit].splice(index, 1) ; return state})
  }

  handlerDigitActionAdd(digit) {
    this.setState( (state) => { state.menu[digit].push( { action: "playRecording", recordingId: 0 }) ; return state})
  }

  handlerDigitActionChange(digit,field,index,value) {
  const actionPrimer = { notifyEmail: { action: "notifyEmail", email: "", label: "" },
                         forwardToNumber: { action: "forwardToNumber", number: "", ringTimer: 30 },
                         forwardToNumberWhisper: { action: "forwardToNumberWhisper", number: "", ringTimer: 30 },
                         forwardToNumberConfirm: { action: "forwardToNumberConfirm", number: "", ringTimer: 30 },                                                  
                         voicemailToEmail: { action: "voicemailToEmail", email: "", label: "" },
                         analytics: { action: "analytics", label: "" },
                         backToMenu: { action: "backToMenu" },
                         playRecording: { action: "playRecording", recordingId: 0 },
  }

  if (field === "action")
    {
      this.setState( (state) => { state.menu[digit][index] = actionPrimer[value] ; return state})
    } else {
    this.setState( (state) => { state.menu[digit][index][field] = value ; return state})
    }    
    
  }

  handlerDigitSelectionClick(a,digit,menuAdd,) {

    if (menuAdd) { //add to menu 
      this.setState( (state) => { state.menu[digit]= [{ action: "playRecording", recordingId: 0 }] ; return state})
    }
    else { //remove from menu 
      this.setState( (state) => { delete state.menu[digit]; return state})
      }
    }

  handlerGreetingChange( field, value ){
      this.setState( (state) => { state.greeting[field]=value; return state})
    }


  render() {
    return (
      <div>
      <AccountHeader switchboardNumber={switchboard.number}/>
      <MainMenu tab={this.props.location.pathname.replace(/\//g, '')} />
      <MenuSectionCallRx menuSettings={this.state} recordingOptions={this.state.recordings} onGreetingChange={this.handlerGreetingChange} onNotifyClick={this.handlerNotifyClick} onDigitClick={this.handlerDigitSelectionClick} />
      <MenuSectionDigitPressed digitMenu={this.state.menu} recordingOptions={this.state.recordings} onChange={this.handlerDigitActionChange} onDeleteClick={this.handlerDigitActionDelete} onAddClick={this.handlerDigitActionAdd} />
      </div>
    )
  }
}


