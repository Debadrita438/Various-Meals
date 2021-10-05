import { USERS } from '../../data/dummy-data';
import { ADD_USER, DELETE_USER, SET_USERS, SHOW_USER } from '../actions/userActions';

const initialState = {
    users: USERS,
    user: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            const newUser = {
                id: state.users.length + 1,
                name: action.userData.name,
                age: action.userData.age,
                imageUrl: action.userData.image,
                profession: action.userData.profession,
                phoneNo: action.userData.phoneNo,
                streetAddress: action.userData.streetAddress,
                city: action.userData.city,
                state: action.userData.state,
                country: action.userData.country
            }
            return {
                ...state,
                users: state.users.concat(newUser)
            }
        case SET_USERS: 
            return {
                ...state,
                users: action.payload
            }
        case SHOW_USER: {
            return {
                ...state,
                user: state.user.concat(action.payload)
            }
        }
        case DELETE_USER: {
            const updatedUserList = state.user.filter(user => user.id !== action.payload)
            return {
                ...state,
                user: updatedUserList
            }
        }
        default:
            return state;
    }
}