const initialState = ''

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FIND':
            return action.filter
        default:
            return state
    }
}

export const filterAC = (filter) => {
    return {
        type: 'FIND',
        filter
    }
}

export default filterReducer
