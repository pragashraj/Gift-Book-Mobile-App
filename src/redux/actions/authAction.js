export const storeLoginResponse = (data) => {
    return {
        type: "USER_LOGIN",
        payload: data
    }
}

export const logout = () => {
    return {
        type: "USER_LOGOUT"
    }
}