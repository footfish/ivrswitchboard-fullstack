import React, { Component } from 'react'

import MenuSectionDigitPressed from './components/MenuSectionDigitPressed'
import MenuSectionCallRx from './components/MenuSectionCallRx'
import AccountHeader from './components/AccountHeader'
import MainMenu from './components/MainMenu'
import api from './test/StubAPI'

export default class MenuApp extends Component {

  constructor(props) {
    super(props)
    this.state = {number: "loading..."}


    this.handlerNotifyClick=this.handlerNotifyClick.bind(this)
    this.handlerDigitActionChange=this.handlerDigitActionChange.bind(this)
    this.handlerDigitActionDelete=this.handlerDigitActionDelete.bind(this)    
    this.handlerDigitActionAdd=this.handlerDigitActionAdd.bind(this)    
    this.handlerDigitSelectionClick=this.handlerDigitSelectionClick.bind(this) 
    this.handlerGreetingChange=this.handlerGreetingChange.bind(this) 
  }

  componentDidMount() {
    if(this.props.location.pathname.replace(/\//g, '')==="open") {
          api.getOpenMenu(this)
    } else {
          api.getClosedMenu(this)
    }
}


  handlerNotifyClick() {
    this.setState( (state) => state.emailNotification = !state.emailNotification)
  }

  handlerDigitActionDelete(digit,index) {
    this.setState( (state) => state.menu[digit].splice(index, 1))
  }

  handlerDigitActionAdd(digit) {
    this.setState( (state) => state.menu[digit].push( { action: "playRecording", recordingId: 0 }))
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
      this.setState( (state) => state.menu[digit][index] = actionPrimer[value] )
    } else {
    this.setState( (state) => state.menu[digit][index][field] = value )
    }    
  }

  handlerDigitSelectionClick(a,digit,menuAdd,) {

    if (menuAdd) { //add to menu 
      this.setState( (state) => state.menu[digit]= [{ action: "playRecording", recordingId: 0 }] )
    }
    else { //remove from menu 
      this.setState( (state) => delete state.menu[digit])
      }
    }

  handlerGreetingChange( field, value ){
      this.setState( (state) => state.greeting[field]=value)
    }


  render() {
    console.log("render")
    return (
      <div>
      <AccountHeader switchboardNumber={this.state.number}/>
      <MainMenu tab={this.props.location.pathname.replace(/\//g, '')} />
      { this.state.number !== 'loading...' && <MenuSectionCallRx menuSettings={this.state} recordingOptions={this.state.recordings} onGreetingChange={this.handlerGreetingChange} onNotifyClick={this.handlerNotifyClick} onDigitClick={this.handlerDigitSelectionClick} />}
      { this.state.number !== 'loading...' && <MenuSectionDigitPressed digitMenu={this.state.menu} recordingOptions={this.state.recordings} onChange={this.handlerDigitActionChange} onDeleteClick={this.handlerDigitActionDelete} onAddClick={this.handlerDigitActionAdd} />}
      </div>
    )
  }
}


