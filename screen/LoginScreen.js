import React, { useCallback, useState, useReducer, useEffect } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, StyleSheet, ScrollView, Text, TextInput, TouchableNativeFeedback, View } from 'react-native';
import { useDispatch } from 'react-redux';
import CountryPicker from 'react-native-country-picker-modal';

import CustomButton from '../components/CustomButton';
import Colors from '../constants/Colors';
import * as authActions from '../store/actions/authActions';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
const CLEANUP = 'CLEANUP';

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
        case CLEANUP:
            return {
                inputValues: {
                    phone: '',
                    password: ''
        
                },
                inputValidities: {
                    email: false,
                    password: false
                },
                isFormValid: false
            }
        default: 
            return state;
    }
}

const LoginScreen = props => {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const [countryCode, setCountryCode] = useState('IN');
    const [callingCode, setCallingCode] = useState(['91']);
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
        if(!formState.inputValues.phone || !formState.inputValues.password) {
            Alert.alert(
                'Error!',
                'Phone Number and Password both are required',
                [
                    {text: 'Okay'}
                ]
            );
            props.navigate.navigate('Auth');
        }
        let action = authActions.login(
            formState.inputValues.phone, 
            formState.inputValues.password,
            callingCode
        );

        setIsLoading(true);
        setError(null);
        try {
            await dispatch(action);
            props.navigation.replace('Home');
            dispatchFormState({type: CLEANUP})
            setIsLoading(false);
        } catch (err) {
            setError(err.message)
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if(error) {
            Alert.alert(
                'Invalid Input',
                'Please check your input',
                [
                    {text: 'Okay'}
                ]
            )
        }
        // console.log(error);
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
        setCallingCode(country.callingCode[0]);
    }

    return (
        <View style={styles.loginForm}>
            <View style={styles.header}>
                <Text style={styles.headerText}>WELCOME BACK</Text>
            </View>
            <KeyboardAvoidingView behavior='height' style={{ top: -120}}>
                <View style={styles.card}>
                    <ScrollView contentContainerStyle={{flexGrow: 1}}> 
                    <View style={styles.container}>
                        <View style={styles.countryPickerContainer}>
                            <Text style={styles.label}>Select Country Code</Text>
                            <View style={styles.countryPicker}>
                                <CountryPicker
                                    withFilter
                                    withCallingCode
                                    countryCode={countryCode}
                                    onSelect={countryCodeChangeHandler}
                                />
                                <Text>+{callingCode}</Text>
                            </View>
                        </View>
                        <View style={styles.screen}>
                            <View style={styles.formControl}>
                                <Text style={styles.label}>Phone Number</Text>
                                <TextInput
                                    style={styles.input} 
                                    keyboardType="number-pad"
                                    required
                                    autoCapitalize="none"
                                    onChangeText={inputChangeHandler.bind(this, 'phone')}
                                    value={formState.inputValues.phone}
                                />
                            </View>
                            <View style={styles.formControl}>
                                <Text style={styles.label}>Password</Text>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="default"
                                    secureTextEntry
                                    required
                                    autoCapitalize="none"
                                    onChangeText={inputChangeHandler.bind(this, 'password')}
                                    value={formState.inputValues.password}
                                />
                                </View>
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
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}



const styles = StyleSheet.create({
    loginForm: {
        flex: 1
    },
    card: {
        width: '100%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 10
    },
    container: {
        top: 90, 
        height: 450
    },
    screen: { 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 5
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
    label: {
        fontSize: 20
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 250,
        marginBottom: 10
    },
    headerText: {
        color: 'white',
        top: 200,
        fontSize: 29,
        left: 40,
        fontWeight: 'bold'
    },
    formControl: {
        top: -40,
        left: -10,
        maxWidth: 300,
        maxHeight: 300,
        marginLeft: 40
    },
    text: {
        color: Colors.primary
    },
    button: {
        width: '50%',
        top: -10
    },
    countryPickerContainer: {
        flex: 0.2,
        top: -70,
        maxWidth: 300,
        maxHeight: 300,
        marginLeft: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    countryPicker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 50,
        width: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    }
})
 
export default LoginScreen;