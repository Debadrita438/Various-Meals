export const ADD_USER = 'ADD_USER';

export const addUser = (name, image, age, profession) => {
    return {
        type: ADD_USER,
        userData: {
            name,
            image,
            age,
            profession
        }
    }
}