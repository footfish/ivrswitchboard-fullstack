import React from 'react'

const TimesSectionOpeningOptions = (props) => {
    
const handleChange = (e) => {
        props.onChange(e.target.name, e.target.value)
      }

const options = [ {value: "scheduled", label: "Scheduled" },
                  {value: "alwaysOpen", label: "Always Open"},
                  {value: "alwaysClosed", label: "Always Closed"}]

return( 
            <div class={"card  border-primary rounded-0 "+(props.selected === options[0].value && "border-bottom-0")}>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">
                { options.map( option => <RadioBox label={option.label} name="OpeningOptions" value={option.value} checked={props.selected === option.value}  onChange={handleChange}/> )}
                </li></ul>
                </div>
                )

}

const RadioBox = ({label, name, checked, value, onChange}) => (
    <div class="custom-control custom-radio custom-control-inline" >
    <input class="custom-control-input" type="radio" name={name} id={value} value={value} checked={checked} onChange={onChange} />
    <label class="custom-control-label"  style={{textSizeAdjust : '350%'}} for={value}>{label}</label>
    </div>

)


export default  TimesSectionOpeningOptions 