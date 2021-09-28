import { LOGIN, LOGOUT } from "../actions/authActions"

const initialState = {
    user: {},
    isLoggedIn: false
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) { 
        case LOGIN: {
            return {
                user: action.user,
                isLoggedIn: true
            }
        }
        case LOGOUT: {
            return initialState
        }
        default:
            return state
    }
}

export default AuthReducer;