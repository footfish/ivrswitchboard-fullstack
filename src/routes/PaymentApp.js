import React, { Component } from 'react'


import AccountHeader from '../components/AccountHeader'
import MainMenu from '../components/MainMenu'
import AppStatus from '../components/AppStatus'
import { Redirect } from "react-router-dom";
import api from '../lib/SwitchboardAPI'



export default class PaymentApp extends Component{
    constructor(props) {
        super(props)
        this.state = {status: "payment"}
}
    
    render()
    {
        return(<div>
            {!api.loggedIn() && <Redirect to="/login"/> }      
            <AccountHeader switchboardNumber={this.state.number}/>
            <MainMenu/>
            <AppStatus status={this.state.status} message={this.state.statusMessage}/>
        </div>)
    }
}




