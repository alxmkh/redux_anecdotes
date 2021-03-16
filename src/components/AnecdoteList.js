import React from "react";
import {voteForAC} from "../reducers/anecdoteReducer";
import {useDispatch, useSelector} from "react-redux";
import {showMessageAc} from "../reducers/notificationReducer";

const AnecdoteList = () => {

    const anecdotes = useSelector(state => state.anecdote)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (id) => {
        const anecdote = anecdotes.find(anecdote => anecdote.id === id)
        anecdote.votes = anecdote.votes + 1
        dispatch(voteForAC(anecdote, anecdote.id))
        dispatch(showMessageAc('you voted for ' + anecdote.content, 5))
    }
    const showAnecdotes = () => {
        if (filter === '') {
            return anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )
        } else {
            const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content ? anecdote.content.toLowerCase().includes(filter) : '')
            return filteredAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>)
        }
    }
    return (
        <div>
            {showAnecdotes()}
        </div>
    )
}

export default AnecdoteList