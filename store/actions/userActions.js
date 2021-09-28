export const ADD_USER = 'ADD_USER';
export const SET_USERS = 'SET_USERS';

export const addUser = (name, image, age, profession) => {
    const userData = {
        name, 
        image,
        age,
        profession
    }

    return {
        type: ADD_USER,
        userData: userData
    }
}

export const setUsers = users => {
    return {
        type: SET_USERS,
        payload: users
    }
}