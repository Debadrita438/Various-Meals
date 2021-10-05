import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Image, Dimensions, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

// import Colors from '../constants/Colors';
import * as authActions from '../store/actions/authActions';
import * as userActions from '../store/actions/userActions';


const StartupScreen = props => {
    const [visibleFirst, setVisibleFirst] = useState(true);
    const [visibleSecond, setVisibleSecond] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = () => {
            setTimeout(() => {
                setVisibleFirst(false);
                setVisibleSecond(true)
            }, 3000);
            setTimeout(async() => {
                setVisibleSecond(false);
                try {
                    const userDetails = await AsyncStorage.getItem('userDetails')
                    const users = await AsyncStorage.getItem('users')
                    if(userDetails) {
                        const transformedData = JSON.parse(userDetails);
                        dispatch(authActions.autoLogin(transformedData.user));
                        props.navigation.replace('Tab')
                    } 
                    else if(!userDetails) {
                        props.navigation.navigate('Auth')
                    }
                    if(users) {
                        const transformedUserList = JSON.parse(users);
                        dispatch(userActions.setUsers(transformedUserList));
                    }
                } catch(err) {
                    console.log(err.message);
                }
            }, 6000)
        }
        tryLogin();
    }, [])

    return (
        <View style={styles.screen}>
            {/* <ActivityIndicator size='large' color={Colors.primary} /> */}
           <Image 
                fadeDuration={1000}
                style={styles.image}
                source={
                    (
                        visibleFirst ? require('../assets/icons/icon_splash1.png')
                        :  require('../assets/icons/icon_splash2.jpg')
                    )
                }
           />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})

export default StartupScreen;