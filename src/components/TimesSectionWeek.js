import DayTimes from './DayTimes'
import SectionBorder from './SectionBorder'
import React from 'react'

const TimesSectionWeek = (props) => {
    const label = { openHours: "Opening Hours", lunchHours: "Lunch Times"}
     
    return( 
        <>
        <SectionBorder label={label.openHours} borderBottom={false}>
        <Week id="OpenHours" hoursArray={props.schedule.openHours} onChange={props.onChange}/>
        </SectionBorder>
        <SectionBorder label={label.lunchHours} borderBottom={true}>
        <Week id="LunchHours" hoursArray={props.schedule.lunchHours} onChange={props.onChange}/>
        </SectionBorder>
        </>
        )
 }

const Week = ({id, hoursArray, onChange}) => {
    return(
        <div className="row">
        <div className="col">
        <div className="form-group">&nbsp;</div>
        <div className="form-group"><input className="border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent form-control" type="text" placeholder="Begins" disabled/></div>
        <div className="form-group"><input className="border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent form-control" type="text" placeholder="Ends" disabled/></div></div> 
            {hoursArray.map( 
                daySchedule => { return (
                    <div className="col"> 
                    <DayTimes id={id} settings={daySchedule} onChange={onChange}/>
                    </div>
                    )})}
        </div>
    )
}

export default TimesSectionWeek

