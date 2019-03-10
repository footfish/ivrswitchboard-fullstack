import React, { Component } from 'react'


import TimesSectionOpeningOptions from './components/TimesSectionOpeningOptions'
import TimesSectionWeek from './components/TimesSectionWeek';
import AccountHeader from './components/AccountHeader'
import MainMenu from './components/MainMenu'

import { switchboard } from './config'

const action = (e) => {
  console.log(e)
}

export default class TimesApp extends Component
{
    constructor (props){
    super(props)
    this.state = switchboard
    }

    render() {
        return(
            <div>
            <AccountHeader switchboardNumber={switchboard.number}/>
            <MainMenu tab={this.props.location.pathname.replace(/\//g, '')} />
            <TimesSectionOpeningOptions selected={this.state.routeOption} onChange={action('changed')} />
            <TimesSectionWeek schedule={this.state.schedule} onChange={action('changed')} />
            </div>
        )
    }
    
}