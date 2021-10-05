export const ADD_USER = 'ADD_USER';
export const SET_USERS = 'SET_USERS';
export const SHOW_USER = 'SHOW_USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = (name, image, age, profession, phoneNo, streetAddress, city, state, country) => {
    const userData = {
        name, 
        image,
        age,
        profession,
        phoneNo,
        streetAddress,
        city,
        state,
        country
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

export const showUser = (id, name, imageUrl) => {
    return {
        type: SHOW_USER,
        payload: {
            id,
            name, 
            imageUrl
        }
    }
}

export const deleteUser = id => {
    return {
        type: DELETE_USER,
        payload: id
    }
}