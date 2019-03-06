import React from 'react'

export default class MenuActionWaitDTMF extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

handleClick(e) {
    this.props.onClick("WaitDTMF", e.target.name, e.target.value === "true" ? true : false)
  }

render(){
    const menuOptions = [ { value: "zero", label: "0"}, 
                        { value: "one", label :"1"},
                        { value: "two", label :"2"},
                        { value: "three", label : "3"},
                        { value: "four", label : "4"},
                        { value: "five", label : "5"},
                        { value: "six", label : "6"},
                        { value: "seven", label : "7"},
                        { value: "eight", label : "8"},
                        { value: "nine", label :"9"},
                        { value: "hash", label : "#"},
                        { value: "star", label : "*"}]
    return(
        <div class="form-row align-items-center pt-1">
        <div class="col col-auto">
        Wait for keys: 
        </div>
        <div class="col col-auto">
        {menuOptions.map( menuOption => { 
        const buttonActive = this.props.menu.find(i => i.digitPressed === menuOption.value) ? true : false
        return(
        <button value={!buttonActive} name={menuOption.value} type="button" class={buttonActive ? 'ml-1 btn btn-sm btn-primary' : 'ml-1 btn btn-sm btn-outline-secondary'    } onClick={this.handleClick} >{menuOption.label}</button>
        )})}
        </div></div>
    )
}



}