import React from 'react'

const MenuActionWaitDTMF = (props) => {

const handleClick = (e) =>  props.onClick("WaitDTMF", e.target.name, e.target.value === "true" ? true : false)
  

const menuOptions = [ { value: "0", label: "0"}, 
                        { value: "1", label :"1"},
                        { value: "2", label :"2"},
                        { value: "3", label : "3"},
                        { value: "4", label : "4"},
                        { value: "5", label : "5"},
                        { value: "6", label : "6"},
                        { value: "7", label : "7"},
                        { value: "8", label : "8"},
                        { value: "9", label :"9"},
                        { value: "10", label : "#"},
                        { value: "11", label : "*"}]
    return(
        <div class="form-row align-items-center pt-1">
        <div class="col col-auto">
        Wait for keys: 
        </div>
        <div class="col col-auto">
        {menuOptions.map( menuOption => { 
        const buttonActive = menuOption.value in props.digitMenu
        return(
        <button value={!buttonActive} name={menuOption.value} type="button" class={buttonActive ? 'ml-1 btn btn-sm btn-primary' : 'ml-1 btn btn-sm btn-outline-secondary'    } onClick={handleClick} >{menuOption.label}</button>
        )})}
        </div></div>
    )
}

export default MenuActionWaitDTMF