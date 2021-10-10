const INITIAL_STATE = {
    user: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "USER_LOGIN": return {
            ...state,
            user: action.payload
        }

        case "USER_LOGOUT" : return {
            ...state,
            user: null
        }

        default: return state
    }
}

export default authReducer