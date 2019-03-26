import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'

const MenuActionAddAction = props => {
    return(
            <div className="form-row align-items-center">
            <div className="col col-2 px-0">
            <button onClick={props.onAddClick} type="button" className="btn btn-light btn-sm"><span className="text-primary">
            <FontAwesomeIcon icon={faPlusSquare} size="lg"/> 
            </span></button> 
            </div>
            <div className="col col-10">
            <button onClick={props.onAddClick} type="button" className="btn btn-light btn-sm"><span className="text-primary">
            Add more...
            </span></button> 
            </div>
            </div>
    )
}

export default MenuActionAddAction


