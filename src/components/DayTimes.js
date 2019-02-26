import React from 'react'

export default class DayTimes extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
//      if (this.props.begin > this.props.end) //compare HH:MM 
    }
  
    handleChange(e) {
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
      this.props.onChange(e.target.name, value)
    }
    
    render() {
      return (
            <fieldset class="text-center">
            <div class="custom-control custom-checkbox form-group">
            <input
              name={this.props.id+"-active"}
              id={this.props.id+"-active"}
              class="custom-control-input"
              type="checkbox"
              checked={this.props.active}
              onChange={this.handleChange} />
              <label class="text-capitalize custom-control-label" for={this.props.id+"-active"}>{this.props.label}</label>
              </div>
              { this.props.active === true && 
                <>
                <div class="form-group"><input class="form-control" name={this.props.id+"-begin"}  type="time" value={this.props.begin} max={this.props.end}  onChange={this.handleChange} required /></div>
                <div class="form-group"><input class="form-control" name={this.props.id+"-end"}  type="time" value={this.props.end} min={this.props.begin} onChange={this.handleChange} required /></div>
                </>
              } 
          </fieldset>
      )
    }
  }