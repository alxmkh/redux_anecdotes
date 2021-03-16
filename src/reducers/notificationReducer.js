const initialNotification = ''

const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
        case 'SHOW':
            return action.data
        case 'HIDE':
            return ''
        default:
            return state
    }
}

export const hideMessageAC = () => {
        return {
            type: 'HIDE'
        }
}

export const showMessageAc = (message, time) => {

    return async dispatch => {
        dispatch({
            type: 'SHOW',
            data: message
        })

        const id = setTimeout(() => {
            dispatch(hideMessageAC())
        }, time * 1000)
        window.clearTimeout(id)
    }
}

export default notificationReducer