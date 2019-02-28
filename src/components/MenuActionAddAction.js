import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'

const MenuActionAddAction = props => {
    return(
    <div class="form-row align-items-center">
    <div class="col col-auto">
    <button onClick={props.onClick} type="button" class="btn btn-light btn-sm"><span class="text-primary">
    <FontAwesomeIcon icon={faPlusSquare} size="lg"/> 
    </span></button> 
    </div>
    <div class="col col-auto">
    <button onClick={props.onClick} type="button" class="btn btn-light btn-sm"><span class="text-primary">
    Add more...
    </span></button> 
    </div>
    </div>
    )
}

export default MenuActionAddAction


