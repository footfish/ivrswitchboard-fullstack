import React from 'react'

const DayTimes = (props) =>  {

 const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    props.onChange(props.id, props.settings.day, e.target.name, value )
  }

      return (
            <fieldset className="text-center">
            <div className="custom-control custom-checkbox form-group">
            <input
              name="active"
              id={props.id+props.settings.day+"active"}
              className="custom-control-input"
              type="checkbox"
              checked={props.settings.active}
              onChange={handleChange} />
              <label className="text-capitalize custom-control-label" for={props.id+props.settings.day+"active"}>{props.settings.day}</label>
              </div>
              { props.settings.active === true && 
                <>
                <div className="form-group"><input className="form-control" name={"begin"}  type="time" value={props.settings.begin} max={props.settings.end}  onChange={handleChange} required /></div>
                <div className="form-group"><input className="form-control" name={"end"}  type="time" value={props.settings.end} min={props.settings.begin} onChange={handleChange} required /></div>
                </>
              } 
          </fieldset>
      )
    }
  
export default DayTimes

