import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DayTimes from '../components/DayTimes';
import WeekTimes from '../components/WeekTimes';
import OpeningOptions from '../components/OpeningOptions';
import MainMenu from '../components/MainMenu';
import MenuActionWaitDTMF from '../components/MenuActionWaitDTMF'
import MenuActionPlayback from '../components/MenuActionPlayback'
import MenuActionNotifyEmail from '../components/MenuActionNotifyEmail'
import MenuActionSelect from '../components/MenuActionSelect';
import MenuActionAddAction from '../components/MenuActionAddAction';
import MenuActionSequence from '../components/MenuActionSequence'

const WrapCol = ({ children }) => (
  <div class="container pt-5"><div class="row"><div class="col-sm-2 border">
    { children }
  </div></div></div>
);

const Container = ({ children }) => (
  <div class="container pt-5">
    { children }
  </div>
);


storiesOf('MainMenu', module)
.add("Times", () => <Container><MainMenu tab="times" onClick={action('clicked')}/></Container>)
.add("Open", () => <Container><MainMenu tab="open" onClick={action('clicked')}/></Container>)
.add("Closed", () => <Container><MainMenu tab="closed" onClick={action('clicked')}/></Container>)
.add("Recordings", () => <Container><MainMenu tab="recordings" onClick={action('clicked')}/></Container>)

storiesOf('DayTime', module)
  .add("Monday Active", () => <WrapCol><DayTimes id="work-mon" label="Mon" active={true} begin="17:00" end="17:00" onChange={action('clicked')}/></WrapCol>)
  .add("Monday Inactive", () => <WrapCol><DayTimes id="work-mon" label="Mon" active={false} begin="09:00" end="17:00" onChange={action('clicked')}/></WrapCol>)
  
  storiesOf('WeekTime', module)
.add("Week Mon-Fri", () => {
  let schedule=[{day: "mon", active: true, begin: "09:00", end: "17:00"},
                {day: "tue", active: true, begin: "09:00", end: "17:00"},
                {day: "wed", active: true, begin: "09:00", end: "17:00"},
                {day: "thu", active: true, begin: "09:00", end: "17:00"},
                {day: "fri", active: true, begin: "09:00", end: "13:00"},
                {day: "sat", active: false, begin: "09:00", end: "17:00"},
                {day: "sun", active: false, begin: "09:00", end: "17:00"}]
  return(<WeekTimes label="Opening Times" id="work" schedule={schedule} onChange={action('changed')}/>)
  })
  .add("Week Inactive", () => {
    let schedule=[{day: "mon", active: false, begin: "09:00", end: "17:00"},
                  {day: "tue", active: false, begin: "09:00", end: "17:00"},
                  {day: "wed", active: false, begin: "09:00", end: "17:00"},
                  {day: "thu", active: false, begin: "09:00", end: "17:00"},
                  {day: "fri", active: false, begin: "09:00", end: "13:00"},
                  {day: "sat", active: false, begin: "09:00", end: "17:00"},
                  {day: "sun", active: false, begin: "09:00", end: "17:00"}]
    return(<WeekTimes label="Lunch Times" id="work" schedule={schedule} onChange={action('changed')}/>)
  })

  storiesOf('OpeningOptions', module)
  .add("Scheduled Option", () =>  <Container><OpeningOptions selected="scheduled" onChange={action('changed')}/></Container>)
  .add("AlwaysOpen Option", () => <Container><OpeningOptions selected="alwaysOpen" onChange={action('changed')}/></Container>)
  .add("AlwaysClosed Option", () =>  <Container><OpeningOptions selected="alwaysClosed" onChange={action('changed')}/></Container>)

  storiesOf('MenuActionWaitDTMF', module)
  .add("DTMF odd", () =>  <Container><MenuActionWaitDTMF  activeDigits={["1", "3", "5", "7", "9", "*"]} onClick={action('clicked')}/></Container>)
  .add("DTMF even", () =>  <Container><MenuActionWaitDTMF  activeDigits={["0", "2", "4", "6", "8", "#"]} onClick={action('clicked')}/></Container>)

  storiesOf('MenuActionPlayback', module)
  .add("1st recording 1 time", () => {
    const recordings=["recording1.wav","recording2.wav","recording3.wav"]
    const playbackData = { recording: recordings[0], times: 1 }
    return(<Container>
      <MenuActionPlayback settings={playbackData} recordings={recordings} onChange={action('changed')}/>
      </Container>)
    })
  .add("2nd recording 3 times", () => {
  const recordings=["recording1.wav","recording2.wav","recording3.wav"]
  const playbackData = { recording: recordings[1], times: 3 }
  return(<Container>
    <MenuActionPlayback settings={playbackData} recordings={recordings} onChange={action('changed')}/>
    </Container>)
  })

  storiesOf('MenuActionNotifyEmail', module)
  .add("email ON", () => <Container><MenuActionNotifyEmail notifyState={true} onClick={action('clicked')} /></Container>)
  .add("email OFF", () => <Container><MenuActionNotifyEmail notifyState={false} onClick={action('clicked')} /></Container>)

  storiesOf('MenuActionAddAction',module)
  .add("Add Action", () => <Container><MenuActionAddAction onClick={action('add')} /></Container>)

  storiesOf('MenuActionSelect',module)
  .add("PlayRecording", () => { 
    const recordings=["recording1.wav","recording2.wav","recording3.wav"]
    const menuActionSelectData = { action: "playRecording", recording:  recordings[1], recordingOptions:  recordings}
    return(<Container><MenuActionSelect  index={0}  settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})
.add("ForwardToNumber-empty", () => { 
  const menuActionSelectData = { action: "forwardToNumber", number: "", ringTimer: 30}
  return(<Container><MenuActionSelect index={1} settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})
  .add("ForwardToNumber-valid", () => { 
    const menuActionSelectData = { action: "forwardToNumber", number: "0861217464", ringTimer: 30}
    return(<Container><MenuActionSelect index={1} settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})
.add("ForwardToNumber-invalid", () => { 
  const menuActionSelectData = { action: "forwardToNumber", number: "086124", ringTimer: 30}
  return(<Container><MenuActionSelect  index={1} settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})
.add("ForwardToNumberWhisper-invalid", () => { 
  const menuActionSelectData = { action: "forwardToNumberWhisper", number: "086124", ringTimer: 50}
  return(<Container><MenuActionSelect  index={1} settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})
.add("ForwardToNumberConfirm-valid", () => { 
  const menuActionSelectData = { action: "forwardToNumberConfirm", number: "0861217464", ringTimer: 10}
  return(<Container><MenuActionSelect index={1} settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})
.add("VoicemailToEmail-empty", () => { 
  const menuActionSelectData = { action: "voicemailToEmail", email: ""}
  return(<Container><MenuActionSelect index={1} settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})
.add("VoicemailToEmail-valid", () => { 
  const menuActionSelectData = { action: "voicemailToEmail", email: "here@where.com"}
  return(<Container><MenuActionSelect index={1} settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})
.add("VoicemailToEmail-invalid", () => { 
  const menuActionSelectData = { action: "voicemailToEmail", email: "here-where.com"}
  return(<Container><MenuActionSelect index={1} settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})
.add("NotifyEmail-empty", () => { 
  const menuActionSelectData = { action: "notifyEmail", email: "", label: ""}
  return(<Container><MenuActionSelect index={1} settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})
.add("NotifyEmail-valid", () => { 
  const menuActionSelectData = { action: "notifyEmail", email: "valid@domain.co.uk", label: "this-is_a_valid-label"}
  return(<Container><MenuActionSelect index={1} settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})
.add("NotifyEmail-invalid", () => { 
  const menuActionSelectData = { action: "notifyEmail", email: "invalid@domain@.co.uk", label: "this-is_not a_valid-label"}
  return(<Container><MenuActionSelect index={1} settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})
.add("Analytics-invalid", () => { 
  const menuActionSelectData = { action: "analytics", label: "this-is_not a_valid-label"}
  return(<Container><MenuActionSelect index={1} settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})
.add("backToMenu", () => { 
  const menuActionSelectData = { action: "backToMenu" }
  return(<Container><MenuActionSelect index={1} settings={menuActionSelectData} onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})

storiesOf('MenuActionSequence', module)
.add("1st", () => { 
  const pressed1 = [
    { action: "notifyEmail", email: "valid@domain.co.uk", label: "this-is_a_valid-label"},
    { action: "forwardToNumber", number: "0861217464", ringTimer: 30},
    {action: "analytics", label: "my-label"},
    {action: "backToMenu" }
  ]
  return(<Container><MenuActionSequence actionSettingsArray={pressed1}  onChange={action('changed')} onDeleteClick={action('delete')} /></Container>)
})


