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

  storiesOf('MenuActionSelect',module)
  .add("Select 1st", () => { 
    const menuActionSelectData = { action: 1}
    return(<Container><MenuActionSelect settings={menuActionSelectData} onChange={action('changed')} onDelete={action('deleted')} /></Container>)
})

  .add("Select 2nd", () => { 
    const menuActionSelectData = { action: 2}
    return(<Container><MenuActionSelect settings={menuActionSelectData} onChange={action('changed')} onDelete={action('deleted')} /></Container>)
})

