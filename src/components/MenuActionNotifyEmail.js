import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'

export default class MenuActionNotifyEmail extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.onClick(!this.props.notifyState)
      }

    render() {
        //note:  button+fontawsome because bootstap checkbox is messy for label positioning. 
        return(
            <div class="form-row align-items-center">
            <div class="col col-auto">Send call notification email:</div>
            <div class="col col-auto">
                        <button onClick={this.handleClick} type="button" class="btn btn-light btn-sm"><span class="text-info">
                        <FontAwesomeIcon icon={this.props.notifyState ? faCheckSquare : faSquare} size="lg"/>
                        </span></button> 
            </div>
            </div>
            )}
}

