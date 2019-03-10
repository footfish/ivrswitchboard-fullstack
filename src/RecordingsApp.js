import React, { Component } from 'react'


import AccountHeader from './components/AccountHeader'
import MainMenu from './components/MainMenu'

import { switchboard } from './config'

export default class RecordingsApp extends Component{
    constructor(props) {
        super(props)
        this.state = switchboard
    }
    
    render()
    {
        return(<div>
            <AccountHeader switchboardNumber={switchboard.number}/>
            <MainMenu tab={this.props.location.pathname.replace(/\//g, '')} />


        </div>)
    }

}




