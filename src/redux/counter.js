const defaultState = {
    counter: 0
}

export const counterStore = (state = defaultState, actions) => {
    switch (actions.type) {
        case "ADD":
            return {...state, counter:state.counter + actions.payload}
        case "REMOVE":
            return {...state, counter:state.counter - actions.payload}
        
        default:
            return state
    }
}