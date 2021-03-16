import React from 'react'
import {connect} from "react-redux";

const Notification = (props) => {
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }

    return (
        <>
            {props.notification
                ? <div style={style}> {props.notification} </div>
                : ''}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
}

export default connect(
    mapStateToProps,
    null
)(Notification)

                        /*  HOOKS   */

// import React from 'react'
// import {useSelector} from "react-redux";
//
// const Notification = () => {
//     const notification = useSelector(state => state.notification)
//     const style = {
//         border: 'solid',
//         padding: 10,
//         borderWidth: 1
//     }
//
//     return (
//         <>
//             {notification
//                 ? <div style={style}> {notification} </div>
//                 : ''}
//         </>
//     )
// }
//
// export default Notification