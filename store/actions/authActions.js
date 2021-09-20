export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

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
                    country_code: callingCode,
                    password: password,
                    user_type: 'V',
                    login_type: 'I'
                })
            }
        )
        .then(response => response.json())
        .then(resData => 
            dispatch({
                type: LOGIN,
                user: resData.user
            })
        );

    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}