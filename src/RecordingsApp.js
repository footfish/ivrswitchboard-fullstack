import React, { Component } from 'react'


import AccountHeader from './components/AccountHeader'
import MainMenu from './components/MainMenu'

import {newSwitchboard} from './config'

export default class RecordingsApp extends Component{
    constructor(props) {
        super(props)
        this.state = newSwitchboard
    }
    
    render()
    {
        return(<div>
            <AccountHeader switchboardNumber={newSwitchboard.number}/>
            <MainMenu tab={this.props.location.pathname.replace(/\//g, '')} />


        </div>)
    }

}




