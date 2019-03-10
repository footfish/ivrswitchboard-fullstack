

import React, { Component } from 'react'

import MenuSectionDigitPressed from './components/MenuSectionDigitPressed'
import MenuSectionCallRx from './components/MenuSectionCallRx'
import AccountHeader from './components/AccountHeader'
import MainMenu from './components/MainMenu'
import { switchboard } from './config'

class App extends Component {


  constructor(props) {
    super(props)
    this.state = switchboard
    this.handlerNotifyClick=this.handlerNotifyClick.bind(this)
    this.handlerDigitActionChange=this.handlerDigitActionChange.bind(this)
    this.handlerDigitActionDelete=this.handlerDigitActionDelete.bind(this)    
    this.handlerDigitActionAdd=this.handlerDigitActionAdd.bind(this)    
    this.handlerDigitSelectionClick=this.handlerDigitSelectionClick.bind(this) 
    this.handlerGreetingChange=this.handlerGreetingChange.bind(this) 
  }

  handlerNotifyClick() {
    this.setState( (state) => { state.openMenu.emailNotification = !state.openMenu.emailNotification ; return state})
  }

  handlerDigitActionDelete(digit,index) {
    this.setState( (state) => { state.openMenu.menu[digit].splice(index, 1) ; return state})
  }

  handlerDigitActionAdd(digit) {
    this.setState( (state) => { state.openMenu.menu[digit].push( { action: "playRecording", recordingId: 0 }) ; return state})
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
      this.setState( (state) => { state.openMenu.menu[digit][index] = actionPrimer[value] ; return state})
    } else {
    this.setState( (state) => { state.openMenu.menu[digit][index][field] = value ; return state})
    }    
    
  }

  handlerDigitSelectionClick(a,digit,menuAdd,) {

    if (menuAdd) { //add to menu 
      this.setState( (state) => { state.openMenu.menu[digit]= [{ action: "playRecording", recordingId: 0 }] ; return state})
    }
    else { //remove from menu 
      this.setState( (state) => { delete state.openMenu.menu[digit]; return state})
      }
    }

  handlerGreetingChange( field, value ){
      this.setState( (state) => { state.openMenu.greeting[field]=value; return state})
    }


  render() {
    return (
      <div>
      <AccountHeader switchboardNumber={switchboard.number}/>
      {this.props.location.pathname}
      <MainMenu tab="open" />
      <MenuSectionCallRx menuSettings={this.state.openMenu} recordingOptions={this.state.recordings} onGreetingChange={this.handlerGreetingChange} onNotifyClick={this.handlerNotifyClick} onDigitClick={this.handlerDigitSelectionClick} />
      <MenuSectionDigitPressed digitMenu={this.state.openMenu.menu} recordingOptions={this.state.recordings} onChange={this.handlerDigitActionChange} onDeleteClick={this.handlerDigitActionDelete} onAddClick={this.handlerDigitActionAdd} />
      </div>
    )
  }
}

export default App;

