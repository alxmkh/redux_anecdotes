import React from "react";
import {addAnecdoteAC} from "../reducers/anecdoteReducer";
import {connect} from "react-redux";
import {showMessageAc} from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.addAnecdoteAC(anecdote)
        props.showMessageAc('you created ' + anecdote, 5)
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

const mapDispatchToProps = {
    addAnecdoteAC,
    showMessageAc
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)

/*  HOOKS   */

// import React from "react";
// import {addAnecdoteAC} from "../reducers/anecdoteReducer";
// import {useDispatch} from "react-redux";
// import {showMessageAc} from "../reducers/notificationReducer";
//
// const AnecdoteForm = () => {
//
//     const dispatch = useDispatch()
//
//     const addAnecdote = async (event) => {
//         event.preventDefault()
//         const anecdote = event.target.anecdote.value
//         event.target.anecdote.value = ''
//         dispatch(addAnecdoteAC(anecdote))
//         dispatch(showMessageAc('you created ' + anecdote, 5))
//     }
//
//     return (
//         <>
//             <h2>create new</h2>
//             <form onSubmit={addAnecdote}>
//                 <div><input name='anecdote'/></div>
//                 <button type='submit'>create</button>
//             </form>
//         </>
//     )
// }
//
// export default AnecdoteForm