class StubAPI {
    
    constructor() {
        this.apiURL = "http://www.mocky.io/v2/5c8921982f0000d906ec96a5?mocky-delay=1750ms"
    }


    getTimes(handlerAPI) {
        fetch(this.apiURL)
        .then(resp => resp.json())
        .then(data => {
            let apiResp = {number: data.number, schedule: data.schedule, routeOption: data.routeOption}
            handlerAPI(apiResp)
        })
        .catch (() => {
            let apiResp = {status: "error", statusMessage: "Error retrieving data. Make sure your Internet is working and try again."}
            handlerAPI(apiResp)
        })
    }


    getOpenMenu(handlerAPI){
        fetch(this.apiURL)
        .then(resp => resp.json())
        .then(data => {
            let apiResp = data.openMenu
            apiResp.recordings = data.recordings
            apiResp.number = data.number
            handlerAPI(apiResp)
        })
        .catch (() => {
            let apiResp = {status: "error", statusMessage: "Error retrieving data. Make sure your Internet is working and try again."}
            handlerAPI(apiResp)
        })
    }

    getClosedMenu(handlerAPI){
        fetch(this.apiURL)
        .then(resp => resp.json())
        .then(data => {
            let apiResp = data.closedMenu
            apiResp.recordings = data.recordings
            apiResp.number = data.number
            handlerAPI(apiResp)
        })
        .catch (() => {
            let apiResp = {status: "error", statusMessage: "Error retrieving data. Make sure your Internet is working and try again."}
            handlerAPI(apiResp)
        })
    }
    
}

export default (new StubAPI() )


