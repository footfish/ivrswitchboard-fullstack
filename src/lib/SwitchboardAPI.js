import {API_URI, API_HEADERS} from "../config"

class SwitchboardAPI {
    
    constructor() {
//        this.apiURL = "http://www.mocky.io/v2/5c8921982f0000d906ec96a5?mocky-delay=1750ms"
//        this.apiURL = "http://www.mocky.io/v2/5c8921982f0000d906ec96a5"
        this.apiURL = API_URI 
    }


    readTimes(id, handlerAPI) {
        fetch(this.apiURL + id)
        .then(resp => resp.json())
        .then(data => {
            let apiResp = {status: "times", localChanges: false, number: data.number, schedule: data.schedule, routeOption: data.routeOption}
            handlerAPI(apiResp)
        })
        .catch (() => {
            let apiResp = {status: "loadError"}
            handlerAPI(apiResp)
        })
    }

    updateTimes(id, payload, handlerAPI) {
        let fetchData = { 
            method: 'PATCH', 
            body: JSON.stringify(payload),
            headers:  API_HEADERS
        }
        fetch(this.apiURL + id, fetchData)
        .then(resp => resp.json())
        .then(data => {
            let apiResp = {status: "times", localChanges: false, number: data.number, schedule: data.schedule, routeOption: data.routeOption}
            handlerAPI(apiResp)
        })
        .catch (() => {
            let apiResp = {status: "uploadError", localChanges: true}
            handlerAPI(apiResp)
        })
    }


    readOpenMenu(id, handlerAPI){
        fetch(this.apiURL + id)
        .then(resp => resp.json())
        .then(data => {
            let apiResp = data.openMenu
            apiResp.status = "open"
            apiResp.localChanges = false
            apiResp.recordings = data.recordings
            apiResp.number = data.number
            handlerAPI(apiResp)
        })
        .catch (() => {
            let apiResp = {status: "loadError"}
            handlerAPI(apiResp)
        })
    }

    updateOpenMenu(id, payload, handlerAPI){
        let fetchData = { 
            method: 'PATCH', 
            body: JSON.stringify(payload),
            headers:  API_HEADERS
        }
        fetch(this.apiURL + id, fetchData)
        .then(resp => resp.json())
        .then(data => {
            let apiResp = data.openMenu
            apiResp.status = "open"            
            apiResp.localChanges = false
            apiResp.recordings = data.recordings
            apiResp.number = data.number
            handlerAPI(apiResp)
        })
        .catch (() => {
            let apiResp = {status: "uploadError", localChanges: true}
            handlerAPI(apiResp)
        })
    }


    readClosedMenu(id, handlerAPI){
        fetch(this.apiURL + id)
        .then(resp => resp.json())
        .then(data => {
            let apiResp = data.closedMenu
            apiResp.status = "closed"            
            apiResp.localChanges = false
            apiResp.recordings = data.recordings
            apiResp.number = data.number
            handlerAPI(apiResp)
        })
        .catch (() => {
            let apiResp = {status: "loadError"}
            handlerAPI(apiResp)
        })
    }

    updateClosedMenu(id, payload, handlerAPI){
        let fetchData = { 
            method: 'PATCH', 
            body: JSON.stringify(payload),
            headers:  API_HEADERS
        }
        fetch(this.apiURL + id, fetchData)
        .then(resp => resp.json())
        .then(data => {
            let apiResp = data.closedMenu
            apiResp.status = "closed"            
            apiResp.localChanges = false
            apiResp.recordings = data.recordings
            apiResp.number = data.number
            handlerAPI(apiResp)
        })
        .catch (() => {
            let apiResp = {status: "uploadError", localChanges: true}
            handlerAPI(apiResp)
        })
    }

  
}

export default (new SwitchboardAPI() )