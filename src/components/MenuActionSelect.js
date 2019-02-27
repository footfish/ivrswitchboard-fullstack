import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare } from '@fortawesome/free-regular-svg-icons'


export default class MenuActionSelect extends React.Component {
constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)    
}

handleChange(e){
    this.props.onChange(e.target.name, e.target.value)
}

handleDelete(){
    this.props.onDelete()
}


render(){
    const selectOptions=["Play Recording","Forward to number","Forward to number(whisper)","Forward to number(confirm)", "Voicemail then email to", "Send Notification", "Analytics", "Go back to Greeting"]
    const forwardToNumberData = { phoneNumber: "1234343", timer: "20s"}
    return (
        <div class="form-row align-items-center">
        <div class="col col-auto">
                    <button onClick={this.handleDelete} type="button" class="btn btn-light btn-sm"><span class="text-info">
                    <FontAwesomeIcon icon={faMinusSquare} size="lg"/>
                    </span></button> 
        </div>
        <div class="col col-auto">
                <select name="MenuActionSelect" class="form-control" onChange={this.handleChange}>
                {selectOptions.map( (option, idx) => <option  selected={this.props.settings.action===(idx+1) && true} value={idx+1}>{option}</option>)}
                </select>
        </div>
        { this.props.settings.action === 1 && <PlayRecording/>}
        { this.props.settings.action === 2 && <ForwardToNumber settings={forwardToNumberData} onChange={this.handleChange}/>}
        </div>
    )
}
}

const PlayRecording = () => (
        <div class="col col-auto">
  Play 
        </div>
)

const ForwardToNumber = ({settings, onChange}) => {
    const secondsOptions = ["20s", "30s", "45s"]
    return (
    
    <><div class="col col-auto">
    Forward to number
    </div>
    <div class="col col-auto">
        <select name="ForwardToNumberTimer" class="form-control" onChange={onChange}>
        {secondsOptions.map( (option, idx) => <option  selected={false} value={idx+1}>{option}</option>)}
        </select>
    </div></>
    
)}

