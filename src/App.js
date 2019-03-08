import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import React, { Component } from 'react'

import AccountHeader from './components/AccountHeader'
import MainMenu from './components/MainMenu'
import MenuSectionDigitPressed from './components/MenuSectionDigitPressed'
import MenuSectionCallRx from './components/MenuSectionCallRx'
import TimesSectionWeek from './components/TimesSectionWeek'

const action = (e) => {
  console.log(e)
}

const  switchboard =  {
  id : "123",
  number: "084412314555",
  routeOption : "scheduled",  //scheduled, alwaysOpen, alwaysClosed
  schedule : {
    openHours: [  { day: "mon", active: true, begin: "09:00", end: "17:00" },
                  { day: "tue", active: true, begin: "09:00", end: "17:00" },
                  { day: "wed", active: true, begin: "09:00", end: "17:00" },
                  { day: "thu", active: true, begin: "09:00", end: "17:00" },
                  { day: "fri", active: true, begin: "09:00", end: "13:00" },
                  { day: "sat", active: false, begin: "09:00", end: "17:00" },
                  { day: "sun", active: false, begin: "09:00", end: "17:00" }
                ],
    lunchHours: [ { day: "mon", active: true, begin: "13:00", end: "14:00" },
                  { day: "tue", active: true, begin: "13:00", end: "14:00" },
                  { day: "wed", active: true, begin: "13:00", end: "14:00" },
                  { day: "thu", active: true, begin: "13:00", end: "14:00" },
                  { day: "fri", active: false, begin: "13:00", end: "13:00" },
                  { day: "sat", active: false, begin: "09:00", end: "17:00" },
                  { day: "sun", active: false, begin: "09:00", end: "17:00" }
                ]
  },
  openMenu : { 
    emailNotification: true,
    greeting : { recordingId: 1, times: 1 },
    menu : {  
        "1": [ { action: "notifyEmail", email: "valid@dom@ain.co.uk", label: "this-is_an invalid-label" },
                    { action: "forwardToNumberConfirm", number: "", ringTimer: 30 },
                    { action: "analytics", label: "my-label" }
                  ],
        "2": [  { action: "notifyEmail", email: "valid@domain.co.uk", label: "this-is_a_valid-label" },
                  { action: "playRecording", recordingId: 1 },
                  { action: "forwardToNumber", number: "0861217464", ringTimer: 30 }
                ],
        "none": [ { action: "notifyEmail", email: "valid@domain.co.uk", label: "this-is_a_valid-label" },
                { action: "forwardToNumber", number: "0861217464", ringTimer: 30 },
                { action: "analytics", label: "my-label" },
                { action: "backToMenu" }
               ]
           }
  },
  closedMenu : { 
    emailNotification: false,
    greeting : { recordingId: 2, times: 1 },
    menu : {
      "none": [ { action: "notifyEmail", email: "valid@domain.co.uk", label: "this-is_a_valid-label" },
                  { action: "forwardToNumber", number: "0861217464", ringTimer: 30 }
                ]
    }
  },
  recordings : [{ label: "Recording 1", src: "http://cdn.mos.musicradar.com/audio/samples/dubstep-demo-loops/DS_Fizzer140C-05.mp3"} , { label: "Recording 2", src: "http://cdn.mos.musicradar.com/audio/samples/dubstep-demo-loops/DS_BeatF145-01.mp3"},  {label: "Recording 3", src: "http://cdn.mos.musicradar.com/audio/samples/dubstep-demo-loops/DS_DubPad145G-01.mp3"}]
}



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
    console.log(digit)
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
console.log(digit,field,index,value)
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
      <div class="container">
      <AccountHeader swithboardNumber={this.state.number}/>
      <MainMenu tab="open" onClick={action('clicked')} />
      <MenuSectionCallRx menuSettings={this.state.openMenu} recordingOptions={this.state.recordings} onGreetingChange={this.handlerGreetingChange} onNotifyClick={this.handlerNotifyClick} onDigitClick={this.handlerDigitSelectionClick} />
      <MenuSectionDigitPressed digitMenu={this.state.openMenu.menu} recordingOptions={this.state.recordings} onChange={this.handlerDigitActionChange} onDeleteClick={this.handlerDigitActionDelete} onAddClick={this.handlerDigitActionAdd} />
      </div>
    )
  }
}

export default App;

