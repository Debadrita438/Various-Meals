import { LOGIN, LOGOUT } from "../actions/authActions"

const initialState = {
    user: {}
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) { 
        case LOGIN: {
            return {
                user: action.user
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