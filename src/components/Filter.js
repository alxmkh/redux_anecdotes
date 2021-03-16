import React from 'react'
import {connect} from "react-redux";
import {filterAC} from '../reducers/filterReducer'

const Filter = (props) => {

    const handleChange = (event) => {
        props.filterAC(event.target.value.toLowerCase())
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange}/>
        </div>
    )
}

const mapDispatchToProps = {
    filterAC
}

export default connect(
    null,
    mapDispatchToProps
)(Filter)

                        /*  HOOKS   */

// import React from 'react'
// import {useDispatch} from "react-redux";
// import {filterAC} from '../reducers/filterReducer'
//
// const Filter = () => {
//     const dispatch = useDispatch()
//
//     const handleChange = (event) => {
//         dispatch(filterAC(event.target.value.toLowerCase()))
//     }
//     const style = {
//         marginBottom: 10
//     }
//
//     return (
//         <div style={style}>
//             filter <input onChange={handleChange}/>
//         </div>
//     )
// }
//
// export default Filter