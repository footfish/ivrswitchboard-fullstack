import React, { Component } from 'react'


import AccountHeader from '../components/AccountHeader'
import MainMenu from '../components/MainMenu'
import AppStatus from '../components/AppStatus'


export default class AccountApp extends Component{
    constructor(props) {
        super(props)
        this.state = {status: "account"}
}
    
    render()
    {
        return(<div>
            <AccountHeader switchboardNumber={this.state.number}/>
            <MainMenu/>
            <AppStatus status={this.state.status}/>
        </div>)
    }
}




