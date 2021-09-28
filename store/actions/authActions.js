import AsyncStorage from '@react-native-async-storage/async-storage';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const saveDataToStorage = user => {
    AsyncStorage.setItem('userDetails', JSON.stringify({
        user: user
    }))
}

export const login = (phone, password, callingCode) => {
    return async dispatch => {
        await fetch('https://qaazii.com/dev/public/api/sign-in', 
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    phone: phone,
                    country_code: '+' + callingCode,
                    password: password,
                    user_type: 'V',
                    login_type: 'I'
                })
            }
        )
        .then(response => response.json())
        .then(resData => {
                dispatch({
                    type: LOGIN,
                    user: resData.user
                })
                saveDataToStorage(resData.user)
            }
        );

    }
}

export const autoLogin = user => {
    return async dispatch => {
        dispatch({
            type: LOGIN,
            user: user
        })
    }
}

const removeDataFromStorage = async () => {
    try {
        await AsyncStorage.removeItem('userDetails')
    } catch(err) {
        console.log(err.message);
    }
}

export const logout = () => {
    removeDataFromStorage();
    return {
        type: LOGOUT
    }
}