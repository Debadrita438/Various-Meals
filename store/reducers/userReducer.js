import { USERS } from '../../data/dummy-data';
import { ADD_USER } from '../actions/userActions';

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
                profession: action.userData.profession
            }
            return {
                users: state.users.concat(newUser)
            }
        default:
            return state;
    }
}