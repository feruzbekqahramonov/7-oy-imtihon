const defaultState = {
    cards: []
}

export function cardReducer(state = defaultState, action) {
    if(action.type == 'CARD_ADD') {
        let copied = JSON.parse(JSON.stringify(state.cards))
        copied.push(action.payload)
        return {...state, cards: copied}
    } else if (action.type == 'CARD_DELETE') {
        let copied = JSON.parse(JSON.stringify(state.cards))
        copied = [];
        return {...state, cards: copied}
    } else {
        return state
    }
}