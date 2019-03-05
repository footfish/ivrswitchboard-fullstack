import DayTimes from './DayTimes'
import React from 'react'

const TimesSectionWeek = (props) => {
    const label = { openHours: "Opening Hours", lunchHours: "Lunch Times"}
     
    return( 
        <>
        <div class="card  border-primary rounded-0 border-bottom-0">
        <div class="card-header p-0 border-0 bg-white"><button type="button" class="btn btn-primary rounded-0">{label.openHours}</button></div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">
        <Week id="OpenHours" hoursArray={props.schedule.openHours} onChange={props.onChange}/>
        </li></ul>
        </div>
        <div class="card  border-primary rounded-0 ">
        <div class="card-header p-0 border-0 bg-white"><button type="button" class="btn btn-primary rounded-0">{label.lunchHours}</button></div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">
        <Week id="LunchHours" hoursArray={props.schedule.lunchHours} onChange={props.onChange}/>
        </li></ul>
        </div>
        </>
        )
 }


const Week = ({ id, hoursArray, onChange}) => {
    return(
        <div class="row">
        <div class="col">
        <div class="form-group">&nbsp;</div>
        <div class="form-group"><input class="border-top-0 border-right-0 border-left-0 bg-transparent form-control" type="text" placeholder="Begins" disabled/></div>
        <div class="form-group"><input class="border-top-0 border-right-0 border-left-0 bg-transparent form-control" type="text" placeholder="Ends" disabled/></div></div> 
            {hoursArray.map( 
                daySchedule => { return (
                    <div class="col"> 
                    <DayTimes id={id} settings={daySchedule} onChange={onChange}/>
                    </div>
                    )})}
        </div>
    )
}

export default TimesSectionWeek
