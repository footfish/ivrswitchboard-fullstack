import React from 'react'

export default class DayTimes extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
//      if (this.props.settings.begin > this.props.settings.end) //compare HH:MM 
    }
  
    handleChange(e) {
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
      this.props.onChange(this.props.id, this.props.settings.day, e.target.name, value )
    }
    
    render() {
      return (
            <fieldset class="text-center">
            <div class="custom-control custom-checkbox form-group">
            <input
              name="active"
              id={this.props.id+this.props.settings.day+"active"}
              class="custom-control-input"
              type="checkbox"
              checked={this.props.settings.active}
              onChange={this.handleChange} />
              <label class="text-capitalize custom-control-label" for={this.props.id+this.props.settings.day+"active"}>{this.props.settings.day}</label>
              </div>
              { this.props.settings.active === true && 
                <>
                <div class="form-group"><input class="form-control" name={"begin"}  type="time" value={this.props.settings.begin} max={this.props.settings.end}  onChange={this.handleChange} required /></div>
                <div class="form-group"><input class="form-control" name={"end"}  type="time" value={this.props.settings.end} min={this.props.settings.begin} onChange={this.handleChange} required /></div>
                </>
              } 
          </fieldset>
      )
    }
  }