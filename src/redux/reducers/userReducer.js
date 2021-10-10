const INITIAL_STATE = {
    profile: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "STORE_PROFILE_DETAILS": return {
            ...state,
            profile: action.payload
        }

        default: return state
    }
}

export default userReducer