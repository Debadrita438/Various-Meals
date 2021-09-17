import React, { useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

import CustomButton from '../components/CustomButton';
import Input from '../components/Input';
import Colors from '../constants/Colors';

const LoginScreen = props => {
    const [isLoading, setIsLoading] = useState();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const phoneHandler = text => {
        setPhone(text);
    }

    const passwordHandler = text => {
        setPassword(text);
    }

    const loginHandler = () => {
        setIsLoading(true);
        fetch('https://qaazii.com/dev/public/api/sign-in', 
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    phone: phone,
                    country_code: '+91',
                    password: password,
                    user_type: 'V',
                    login_type: 'I'
                })
            }
        )
        .then(response => response.json())
        .then(data => {
            if(data.user.phone.trim().length && data.user.phone.length >= 8) {
                props.navigation.navigate('Home');
                setIsLoading(false);
                // console.log(isLoading)
            }
            else {
                Alert.alert(
                    'Invalid Input',
                    'Phone number or password is invalid',
                    [
                        {text: 'Try Again'}
                    ]
                )
            }
            setPhone('');
            setPassword('');
            // console.log(data);
        })
        .catch(err => {
            console.log(err);
            Alert.alert(
                'Sorry',
                'Something went wrong!',
                [
                    {text: 'Okay'}
                ]
            )
        });
        
    }

    return (
        <View style={styles.loginForm}>
            <View style={styles.header}>
                <Text style={styles.headerText}>WELCOME BACK</Text>
            </View>
            <View style={styles.formControl}>
                <Input
                    label='Phone Number'
                    keyboardType='number-pad'
                    value={phone}
                    onChange={phoneHandler}
                />
                <Input
                    label='Password'
                    onChange={passwordHandler}
                    value={password}
                    secure={true}
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
        top: -70,
        maxWidth: 400,
        maxHeight: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.primary
    },
    button: {
        width: '50%'
    }
})
 
export default LoginScreen;