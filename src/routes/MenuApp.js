import React, { Component } from 'react'

import MenuSectionDigitPressed from '../components/MenuSectionDigitPressed'
import MenuSectionCallRx from '../components/MenuSectionCallRx'
import AccountHeader from '../components/AccountHeader'
import MainMenu from '../components/MainMenu'
import AppStatus from '../components/AppStatus'
import MenuSubmit from '../components/MenuSubmit'
import api from '../lib/SwitchboardAPI'


export default class MenuApp extends Component {

  constructor(props) {
    console.log("construct")
    super(props)
    this.id = "7021a27d04454b5fa817a2c391bff69e" //temp 
    this.menuType=this.props.location.pathname.replace(/\//g, '')
    this.state = {localChanges: false, status: "loading" }
 
    this.handlerNotifyClick=this.handlerNotifyClick.bind(this)
    this.handlerDigitActionChange=this.handlerDigitActionChange.bind(this)
    this.handlerDigitActionDelete=this.handlerDigitActionDelete.bind(this)    
    this.handlerDigitActionAdd=this.handlerDigitActionAdd.bind(this)    
    this.handlerDigitSelectionClick=this.handlerDigitSelectionClick.bind(this) 
    this.handlerGreetingChange=this.handlerGreetingChange.bind(this) 
    this.handlerApi=this.handlerApi.bind(this) 
    this.handlerRevertChanges=this.handlerRevertChanges.bind(this) 
    this.handlerApplyChanges=this.handlerApplyChanges.bind(this) 
  }

  componentDidMount() {
    this.setState( {status: "loading"} )
    if(this.menuType==="open") {
          api.readOpenMenu(this.id, this.handlerApi)
    } else {
          api.readClosedMenu(this.id, this.handlerApi)
    }
}

  handlerApi(response) {
      this.setState( state => response )
  }

  handlerNotifyClick() {
    this.setState( state => state.emailNotification = !state.emailNotification)
    this.flagLocalChange()
  }

  handlerDigitActionDelete(digit,index) {
    this.setState( state => state.menu[digit].splice(index, 1))
    this.flagLocalChange()
  }

  handlerDigitActionAdd(digit) {
    this.setState( state => state.menu[digit].push( { action: "playRecording", recordingId: 0 }))
    this.flagLocalChange()
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
      this.setState( state => state.menu[digit][index] = actionPrimer[value])
    } else {
      this.setState( state => state.menu[digit][index][field] = value )
    }    
    this.flagLocalChange()
  }

  handlerDigitSelectionClick(a,digit,menuAdd,) {

    if (menuAdd) { //add to menu 
      this.setState( state => state.menu[digit]= [{ action: "playRecording", recordingId: 0 }]  )
    }
    else { //remove from menu 
      this.setState( state => delete state.menu[digit])
      }
    this.flagLocalChange()
    }

  handlerGreetingChange( field, value ){
      this.setState( state => state.greeting[field]=value)
      this.flagLocalChange()
    }

  flagLocalChange(){
    this.setState( {localChanges:true, status: "modified" })
  }

  handlerRevertChanges(){
    this.setState( {localChanges: false, status: "loading"} )
    if(this.menuType==="open") {
      api.readOpenMenu(this.id, this.handlerApi)
    } else {
      api.readClosedMenu(this.id, this.handlerApi)
    }
  }

  handlerApplyChanges(){
    this.setState( {localChanges: false, status: "uploading" } )

     if(this.menuType==="open") {
      const menuData = { openMenu: { menu: this.state.menu, emailNotification: this.state.emailNotification, greeting: this.state.greeting}}
      api.updateOpenMenu(this.id, menuData, this.handlerApi)
    } else {
      const menuData = { closedMenu: { menu: this.state.menu, emailNotification: this.state.emailNotification, greeting: this.state.greeting}}
      api.updateClosedMenu(this.id, menuData, this.handlerApi)
    }
  }


  render() {
    console.log("render")
    return (
      <div>
      <AccountHeader switchboardNumber={this.state.number}/>
      <MainMenu/>
      <AppStatus status={this.state.status} />
      { this.state.localChanges && <MenuSubmit onRevert={this.handlerRevertChanges} onApply={this.handlerApplyChanges} />}
      { this.state.status !== 'loading' && <MenuSectionCallRx menuSettings={this.state} recordingOptions={this.state.recordings} onGreetingChange={this.handlerGreetingChange} onNotifyClick={this.handlerNotifyClick} onDigitClick={this.handlerDigitSelectionClick} />}
      { this.state.status !== 'loading' && <MenuSectionDigitPressed digitMenu={this.state.menu} recordingOptions={this.state.recordings} onChange={this.handlerDigitActionChange} onDeleteClick={this.handlerDigitActionDelete} onAddClick={this.handlerDigitActionAdd} />}
      </div>
    )
  }
}



