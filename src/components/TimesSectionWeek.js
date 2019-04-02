import DayTimes from './DayTimes'
import SectionBorder from './SectionBorder'
import React from 'react'

const TimesSectionWeek = (props) => {
    const label = { openHours: "Opening Hours", lunchHours: "Lunch Times"}
    
    const weekScheduleDisplay=props.schedule     
    Object.keys(weekScheduleDisplay["lunchHours"]).forEach( key => { //adapt week schedule to include a hide flag for lunch hours openHours not active
        weekScheduleDisplay["lunchHours"][key].hidden=!weekScheduleDisplay["openHours"][key].active })

    return( 
        <>
        {
            Object.keys(props.schedule).map ((key,idx) => {
                
                return (
                    <SectionBorder key={key} label={label[key]} borderBottom={idx===(Object.keys(props.schedule).length-1)}>            
                       <Week groupId={key} weekSchedule={weekScheduleDisplay[key]} onChange={props.onChange}/>
                    </SectionBorder>
                )
            }
                )
        }
        </>
        )
 }

const Week = ({groupId, weekSchedule, onChange}) => {
    return(
        <div className="row" >
        <div className="col d-none d-lg-block" >
        <div className="form-group" >&nbsp;</div>
        <div className="form-group my-1" ><input className="border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent form-control text-nowrap" type="text" placeholder="Begins" disabled/></div>
        <div className="form-group my-1" ><input className="border-top-0 rounded-0 border-right-0 border-left-0 bg-transparent form-control text-nowrap" type="text" placeholder="Ends" disabled/></div></div> 
            {Object.keys(weekSchedule).map( key => {
                var daySchedule = weekSchedule[key]
                return (
                    <DayTimes key={groupId+key} groupId={groupId} day={key} settings={daySchedule} onChange={onChange} />
                    )})}
        </div>
    )
}

export default TimesSectionWeek

