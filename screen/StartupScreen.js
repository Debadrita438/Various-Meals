import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as authActions from '../store/actions/authActions';
import * as userActions from '../store/actions/userActions';


const StartupScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            try {
                const userDetails = await AsyncStorage.getItem('userDetails')
                const users = await AsyncStorage.getItem('users')
                if(userDetails) {
                    const transformedData = JSON.parse(userDetails);
                    await dispatch(authActions.autoLogin(transformedData.user));
                    props.navigation.navigate('Tab')
                } 
                else if(!userDetails) {
                    props.navigation.navigate('Auth')
                }
                if(users) {
                    const transformedUserList = JSON.parse(users);
                    await dispatch(userActions.setUsers(transformedUserList));
                }
            } catch(err) {
                console.log(err.message);
            }
        }
        tryLogin();
    }, [])

    return (
        <View style={styles.screen}>
            <ActivityIndicator size='large' color={Colors.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default StartupScreen;