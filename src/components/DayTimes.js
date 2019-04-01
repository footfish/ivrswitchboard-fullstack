import React from 'react'

const DayTimes = (props) =>  {

 const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    props.onChange(props.groupId, props.day, e.target.name, value )
  }

      return (
            <div className="col-2 col-md-1 col-lg-1" > 
            <fieldset className={"text-center "+(props.settings.hidden && " d-none")}>
            <div className="custom-control custom-checkbox form-group ">
            <input
              name="active"
              id={props.groupId+props.day+"active"}
              className="custom-control-input "
              type="checkbox"
              checked={props.settings.active}
              onChange={handleChange} />
              <label className="text-capitalize custom-control-label" htmlFor={props.groupId+props.day+"active"}>{props.day}</label>
              </div>
                <div className="form-group"><input className="form-control form-control-sm" name={"begin"}  type="time" value={props.settings.active ? props.settings.begin:""} max={props.settings.end}  onChange={handleChange} disabled={!props.settings.active} required /></div>
                <div className="form-group"><input className="form-control form-control-sm" name={"end"}  type="time" value={props.settings.active ? props.settings.end:""} min={props.settings.begin} onChange={handleChange} disabled={!props.settings.active} required /></div>
          </fieldset>
          </div>
      )
    }
  
export default DayTimes

