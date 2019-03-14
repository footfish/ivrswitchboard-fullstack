import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


const AppStatus = (props) => {
    const theme = { ok: "alert-light", info: "alert-primary", error: "alert-danger"}

    let status
    switch(props.status){
        case "error": status="error"
        break
        case "info": status="info"
        break
        default: status="ok"
    }  

    return(<div className={"alert "+theme[status]} role="alert"><FontAwesomeIcon icon={faInfoCircle}/>&nbsp; {props.message}
    </div>)
}

export default AppStatus