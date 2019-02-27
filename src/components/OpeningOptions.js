import React from 'react'


export default class OpeningOptions extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        this.props.onChange(e.target.name, e.target.value)
      }

      //checked={this.props.active}

    render() {
            const options = ["scheduled", "alwaysOpen", "alwaysClosed"]
            return( 
                <div>
                <RadioBox label="Scheduled" name="OpeningOptions" value={options[0]} checked={this.props.selected === options[0]}  onChange={this.handleChange}/>
                <RadioBox label="Always Open" name="OpeningOptions" value={options[1]} checked={this.props.selected === options[1]}  onChange={this.handleChange}/>
                <RadioBox label="Always Closed" name="OpeningOptions" value={options[2]} checked={this.props.selected === options[2]}  onChange={this.handleChange}/>
                </div>
                )
            }
}

const RadioBox = ({label, name, checked, value, onChange}) => (
    <div class="custom-control custom-radio custom-control-inline" >
    <input class="custom-control-input" type="radio" name={name} id={value} value={value} checked={checked} onChange={onChange} />
    <label class="custom-control-label"  style={{textSizeAdjust : '350%'}} for={value}>{label}</label>
    </div>

)

