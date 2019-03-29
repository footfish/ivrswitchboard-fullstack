import React from 'react'

const DayTimes = (props) =>  {

 const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    props.onChange(props.groupId, props.day, e.target.name, value )
  }

      return (
            <div className="col" > 
            <fieldset className={"text-center"+(props.settings.hidden && " d-none")}>
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
              { props.settings.active === true && 
                <>
                <div className="form-group"><input className="form-control " name={"begin"}  type="time" value={props.settings.begin} max={props.settings.end}  onChange={handleChange} required /></div>
                <div className="form-group"><input className="form-control" name={"end"}  type="time" value={props.settings.end} min={props.settings.begin} onChange={handleChange} required /></div>
                </>
              } 
          </fieldset>
          </div>
      )
    }
  
export default DayTimes

