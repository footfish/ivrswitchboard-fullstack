import DayTimes from './DayTimes'
import React from 'react'

const WeekTimes = (props) => {
     
    return( 
        <div class="card">
        <div class="card-header">{props.label}</div>
        <div class="card-body">
        <div class="row">
        <div class="col">  <div class="form-group">&nbsp;</div>
        <div class="form-group"><input class="border-top-0 border-right-0 border-left-0 bg-transparent form-control" type="text" placeholder="Begins" disabled/></div>
        <div class="form-group"><input class="border-top-0 border-right-0 border-left-0 bg-transparent form-control" type="text" placeholder="Ends" disabled/></div></div> 
            {props.schedule.map( 
                daySchedule => { return (
                    <div class="col"> 
                    <DayTimes id={props.id} settings={daySchedule} onChange={props.onChange}/>
                    </div>
                    )})}
        </div></div></div>
        )
 }


export default WeekTimes
