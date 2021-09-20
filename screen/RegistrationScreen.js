import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import CustomButton from '../components/CustomButton';
import Input from '../components/Input';
import Colors from '../constants/Colors';

const RegistrationScreen = props => {
    const [user, setUser] = useState([{}]);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [countryCode, setCountryCode] = useState('IN');
    const [callingCode, setCallingCode] = useState(['+91']);

    const emailHandler = text => {
        setEmail(text);
    }

    const passwordHandler = text => {
        setPassword(text);
    }

    const nameHandler = text => {
        setName(text);
    }

    const phoneHandler = text => {
        setPhone(+text);
    }

    const countryCodeChangeHandler = country => {
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode);
    }

    const userHandler = () => {
        setUser([{email, password, phone, countryCode, callingCode}]);
        if(user.length) {
            props.navigation.navigate('Home');
        }
        setEmail('');
        setPassword('');
        setName('');
        setPhone('');
    }
    
    return (
        <View style={styles.loginForm}>
            <View style={styles.header}>
                <Text style={styles.headerText}>WELCOME</Text>
            </View>
            <KeyboardAvoidingView style={{ top: -120}}>
                <View style={styles.card}>
                    <ScrollView>
                        <View style={styles.formControl}>
                            <Input
                                label='Full Name'
                                required
                                onInputChange={nameHandler}
                                value={name}
                                errorText='Name is required'
                                initialValue=''
                            />
                        <View style={styles.phoneContainer}>
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
                                    value={phone}
                                    onInputChange={phoneHandler}
                                    errorText='Phone is required and min 8 digit long'
                                    initialValue=''
                                />
                            </View>
                            <Input
                                label='E-mail'
                                keyboardType='email-address'
                                onInputChange={emailHandler}
                                autoCapitalization='none'
                                value={email}
                                initialValue=''
                            />
                            <Input
                                label='Password'
                                required
                                onInputChange={passwordHandler}
                                secure={true}
                                value={password}
                                errorText='Password is required and min 4 digit long'
                                initialValue=''
                            />
                            <View style={styles.button}>
                                <CustomButton label='Sign Up' onPress={userHandler} />
                            </View>
                            <Text>Have an account? <TouchableNativeFeedback onPress={() => props.navigation.navigate('Login')}>
                                    <Text style={styles.text}>Login</Text>
                                </TouchableNativeFeedback>
                            </Text>
                            
                        </View> 
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
            </View>
    );
}

const styles = StyleSheet.create({
    loginForm: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: '100%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20,
    },
    header: {
        borderRadius: 150,
        borderColor: 'black',
        width: 300,
        height: 300,
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300,
        left: 10,
        top: -170,
        backgroundColor: Colors.primary
    },
    headerText: {
        color: 'white',
        top: 200,
        fontSize: 29,
        left: 80,
        fontWeight: 'bold'
    },
    formControl: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.primary
    },
    button: {
        width: '50%'
    },
    phoneContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginLeft: -20
    }
})
 
export default RegistrationScreen;