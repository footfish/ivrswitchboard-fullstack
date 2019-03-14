import React from 'react'

const MenuSubmit = (props) => {

    return(
        <div className="sticky-top">
        <div className="row mb-3 pt-1">
        <div className="col">
            <button type="button" className="btn btn-success btn-lg btn-block" onClick={props.onApply} >Apply Changes</button>
        </div>
        <div className="col">
            <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={props.onRevert}>Revert Changes</button>
        </div>        
        </div></div>
    )
}

export default MenuSubmit