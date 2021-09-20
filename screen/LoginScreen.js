import React, { useCallback, useState, useReducer, useEffect } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { useDispatch } from 'react-redux';
import CountryPicker from 'react-native-country-picker-modal';

import CustomButton from '../components/CustomButton';
import Input from '../components/Input';
import Colors from '../constants/Colors';
import * as authActions from '../store/actions/authActions';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    switch(action.type) {
        case FORM_INPUT_UPDATE:
            const updatedValues = {
                ...state.inputValues,
                [action.input]: action.payload
            }
            const updatedValidities = {
                ...state.inputValidities,
                [action.input]: action.isValid
            }
            let updatedFormIsValid = true;
            for(const key in updatedValidities) {
                updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
            }
            return {
                inputValues: updatedValues,
                inputValidities: updatedValidities,
                isFormValid: updatedFormIsValid
            }
        default: 
            return state;
    }
}

const LoginScreen = props => {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const [countryCode, setCountryCode] = useState('IN');
    const [callingCode, setCallingCode] = useState(['+91']);
    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            phone: '',
            password: ''

        },
        inputValidities: {
            phone: false,
            password: false
        },
        isFormValid: false
    });

    const loginHandler = async () => {
        const action = authActions.login(
            formState.inputValues.phone, 
            formState.inputValues.password,
            callingCode
        );

        setIsLoading(true);
        setError(null);
        try {
            await dispatch(action);
            props.navigation.navigate('Home');
            setIsLoading(false);
        } catch (err) {
            setError(err.message)
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if(error) {
            Alert.alert(
                'An Error Occured!',
                error,
                [
                    {text: 'Okay'}
                ]
            )
        }
    }, [error]);

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            payload: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        });
    }, [dispatchFormState]);

    const countryCodeChangeHandler = country => {
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode);
    }

    return (
        <View style={styles.loginForm}>
            <View style={styles.header}>
                <Text style={styles.headerText}>WELCOME BACK</Text>
            </View>
            <View style={styles.formControl}>
                <View style={styles.container}>
                    <CountryPicker
                        withFilter
                        withCallingCode
                        countryCode={countryCode}
                        onSelect={countryCodeChangeHandler}
                    />
                    <Input
                        id='phone'
                        label='Phone Number'
                        keyboardType='number-pad'
                        required
                        value={formState.inputValues.phone}
                        onInputChange={inputChangeHandler}
                        errorText='Phone is required and min 8 digit long'
                    />
                </View>
                <Input
                    id='password'
                    label='Password'
                    required
                    onInputChange={inputChangeHandler}
                    value={formState.inputValues.password}
                    secure={true}
                    errorText='Password is required and min 4 digit long'
                />
                <View style={styles.button}>
                {

                    isLoading 
                    ? <ActivityIndicator 
                        size='small'
                        color={Colors.primary}
                    />
                    : 
                        <CustomButton 
                            label='Login' 
                            onPress={loginHandler} 
                        />
                            
                    }
                </View>
                <Text>Don't have an account? <TouchableNativeFeedback onPress={() => props.navigation.navigate('Sign Up')}>
                        <Text style={styles.text}>Sign Up</Text>
                    </TouchableNativeFeedback>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginForm: {
        flex: 1
    },
    header: {
        borderRadius: 150,
        borderColor: 'black',
        width: 300,
        height: 300,
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300,
        left: 50,
        top: -150,
        backgroundColor: Colors.primary
    },
    headerText: {
        color: 'white',
        top: 200,
        fontSize: 29,
        left: 40,
        fontWeight: 'bold'
    },
    formControl: {
        flex: 1,
        top: -80,
        maxWidth: 300,
        maxHeight: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40
    },
    text: {
        color: Colors.primary
    },
    button: {
        width: '50%',
        marginLeft: 30
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: -20
    }
})
 
export default LoginScreen;