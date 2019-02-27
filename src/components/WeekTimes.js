import DayTimes from './DayTimes'

import React from 'react'

export default class WeekTimes extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(name, value) {
        this.props.onChange(name, value)
      }

     
    render() {
            return( 
                <div class="card">
                <div class="card-header">{this.props.label}</div>
                <div class="card-body">
                <div class="row">
                <div class="col">  <div class="form-group">&nbsp;</div>
                <div class="form-group"><input class="border-top-0 border-right-0 border-left-0 bg-transparent form-control" type="text" placeholder="Begins" disabled/></div>
                <div class="form-group"><input class="border-top-0 border-right-0 border-left-0 bg-transparent form-control" type="text" placeholder="Ends" disabled/></div></div> 
                    {this.props.schedule.map( daySchedule => { return (
                                <div class="col"> 
                                <DayTimes id={`${this.props.id}-${daySchedule.day}`} label={daySchedule.day} active={daySchedule.active} begin={daySchedule.begin} end={daySchedule.end} onChange={this.handleChange}/>
                                </div>
                    )})}
                </div></div></div>
                )
    }
}

