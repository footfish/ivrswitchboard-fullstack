import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'


export default class MenuActionPlayback extends React.Component {
constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
}

handleChange(e) {
    this.props.onChange(e.target.name, e.target.value)
  }


render() {
    const timesOptions = ["1 time", "2 times", "3 times"]
    return(<div class="form-row align-items-center pt-1">
    <div class="col col-auto">Playback</div>
    <div class="col col-auto" >
        <select name="PlaybackRecording" class="form-control" onChange={this.handleChange}>
         {this.props.recordings.map( (recording, idx) => <option selected={this.props.settings.recordingId===idx && true}>{recording}</option>)}
        </select>
    </div>
    <div class="col col-auto">
                <audio id = "PlaybackPlayer" src={this.props.recordings[this.props.settings.recordingId]} type="audio/mpeg"></audio>
                <div>
                <button  type="button" class="btn btn-light btn-sm rounded-circle" onclick="document.getElementById('PlaybackPlayer').play()">
                <span class="text-primary"><FontAwesomeIcon icon={faVolumeUp} size="lg"/> </span>
                </button>
                </div>
    </div>
    <div class="col col-auto">
                <select name="PlaybackTimes" class="form-control" onChange={this.handleChange}>
                {timesOptions.map( (option, idx) => <option  selected={this.props.settings.times===(idx+1) && true} value={idx+1}>{option}</option>)}
                </select>
    </div>
        </div>)
}


}