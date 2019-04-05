import React from 'react'
import SectionBorder from './SectionBorder'

const TimesSectionOpeningOptions = (props) => {
    
const handleChange = (e) => {
        props.onChange(e.target.value)
      }

const options = [ {value: "scheduled", label: "Scheduled" },
                  {value: "alwaysOpen", label: "Always Open"},
                  {value: "alwaysClosed", label: "Always Closed"}]

return( 
                <SectionBorder label="Routing of your phone number" borderBottom={props.selected !== options[0].value}>
                <div className="px-3 pb-2">
                { options.map( option => <RadioBox key={option.value} label={option.label} name="OpeningOptions" value={option.value} checked={props.selected === option.value}  onChange={handleChange}/> )}
                </div>
                </SectionBorder>

                )

}

const RadioBox = ({label, name, checked, value, onChange}) => (
    <div className="custom-control custom-radio custom-control-inline" >
    <input className="custom-control-input" type="radio" name={name} key={value} id={value} value={value} checked={checked} onChange={onChange} />
    <label className="custom-control-label"  style={{textSizeAdjust : '350%'}} htmlFor={value}>{label}</label>
    </div>

)


export default  TimesSectionOpeningOptions 