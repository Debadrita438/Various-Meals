import React, { useState } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

import CustomButton from '../components/CustomButton';
import Input from '../components/Input';
import Colors from '../constants/Colors';

const RegistrationScreen = props => {
    const [user, setUser] = useState([{}]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const emailHandler = text => {
        setEmail(text);
    }

    const passwordHandler = text => {
        setPassword(text);
    }

    const usernameHandler = text => {
        setUsername(text);
    }

    const userHandler = () => {
        setUser([{email, password}]);
        if(user.length) {
            props.navigation.navigate('Home');
        }
        setEmail('');
        setPassword('');
        setUsername('');
    }
    return (
        <View style={styles.loginForm}>
            <View style={styles.header}>
                <Text style={styles.headerText}>WELCOME</Text>
            </View>
            <View style={styles.formControl}>
                <Input
                    label='Username'
                    onChange={usernameHandler}
                    value={username}
                />
                <Input
                    label='E-mail'
                    keyboardType='email-address'
                    onChange={emailHandler}
                    value={email}
                />
                <Input
                    label='Password'
                    onChange={passwordHandler}
                    secure={true}
                    value={password}
                />
                <View style={styles.button}>
                    <CustomButton label='Sign Up' onPress={userHandler} />
                </View>
                <Text>Have an account? <TouchableNativeFeedback onPress={() => props.navigation.navigate('Login')}>
                        <Text style={styles.text}>Login</Text>
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
        left: 80,
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
 
export default RegistrationScreen;