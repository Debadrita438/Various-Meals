export const ADD_USER = 'ADD_USER';
export const SET_USERS = 'SET_USERS';

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