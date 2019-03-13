class StubAPI {
    
    constructor() {
        this.apiURL = "http://www.mocky.io/v2/5c8921982f0000d906ec96a5?mocky-delay=1750ms"
    }


    getTimes(reactComponent) {
        fetch(this.apiURL)
        .then(resp => resp.json())
        .then(data => reactComponent.setState((state) => {
            state.number = data.number
            state.schedule=data.schedule
            state.routeOption=data.routeOption
            return state
        }))
    }

    getOpenMenu(reactComponent){
        fetch(this.apiURL)
        .then(resp => resp.json())
        .then(data => reactComponent.setState((state) => {
            state = data.openMenu
            state.recordings = data.recordings
            state.number = data.number
            return state
        }))
    }

    getClosedMenu(reactComponent){
        fetch(this.apiURL)
        .then(resp => resp.json())
        .then(data => reactComponent.setState((state) => {
            state = data.closedMenu
            state.recordings = data.recordings
            state.number = data.number
            return state
        }))
    }

    
}

export default (new StubAPI() )


