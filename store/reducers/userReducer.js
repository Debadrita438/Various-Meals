import { USERS } from '../../data/dummy-data';
import { ADD_USER, SET_USERS } from '../actions/userActions';

const initialState = {
    users: USERS
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
                users: state.users.concat(newUser)
            }
        case SET_USERS: 
            return {
                users: action.payload
            }
        default:
            return state;
    }
}