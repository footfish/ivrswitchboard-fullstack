import React from 'react'

const DayTimes = (props) =>  {

 const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    props.onChange(props.id, props.settings.day, e.target.name, value )
  }

      return (
            <fieldset class="text-center">
            <div class="custom-control custom-checkbox form-group">
            <input
              name="active"
              id={props.id+props.settings.day+"active"}
              class="custom-control-input"
              type="checkbox"
              checked={props.settings.active}
              onChange={handleChange} />
              <label class="text-capitalize custom-control-label" for={props.id+props.settings.day+"active"}>{props.settings.day}</label>
              </div>
              { props.settings.active === true && 
                <>
                <div class="form-group"><input class="form-control" name={"begin"}  type="time" value={props.settings.begin} max={props.settings.end}  onChange={handleChange} required /></div>
                <div class="form-group"><input class="form-control" name={"end"}  type="time" value={props.settings.end} min={props.settings.begin} onChange={handleChange} required /></div>
                </>
              } 
          </fieldset>
      )
    }
  
export default DayTimes

