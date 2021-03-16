import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state=[], action) => {
    switch (action.type) {
        case 'VOTE':
            const currentAnecdote = state.find(anecdote => anecdote.id === action.data.id)
            return state.map(anecdote =>
                anecdote.id !== action.data.id ? anecdote : currentAnecdote
            )
        case 'INIT_ANECDOTE':
            return action.data
        case 'ADD_ANECDOTE':
            return sortAnecdote([...state, action.data])
        default:
            return state
    }
}

export const voteForAC = (object, id) => {
    return async dispatch => {
        const anecdote = await anecdoteService.voteForAnecdote(object, id)
        dispatch({
            type: 'VOTE',
            data: anecdote
        })
    }
}

export const initAnecdotesAC = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAllAnecdotes()
        dispatch({
            type: 'INIT_ANECDOTE',
            data: anecdotes
        })
    }
}

export  const addAnecdoteAC = (data) => {
    return async dispatch => {
        const anecdotes = await anecdoteService.createNewAnecdote(data)
        dispatch({
            type: 'ADD_ANECDOTE',
            data: anecdotes
        })
    }
}

function compare(a, b) {
    const bandA = a.votes;
    const bandB = b.votes;

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
}

const sortAnecdote = (anecdotes) => {
    return anecdotes.sort(compare).reverse()
}

export default anecdoteReducer