import 'react-native-gesture-handler';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screen/LoginScreen';
import RegistrationScreen from '../screen/RegistrationScreen';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';
import CategoryItemDetailScreen from '../screen/CategoryItemDetailScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerWithLogoutButton = props => (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'}} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Debadrita Bandyopadhyay</Text>
            </View>
        </View>

        <DrawerItemList {...props} />

        <View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => props.navigation.navigate('Auth')}>
                    <Ionicons 
                        name='md-log-out-outline'
                        size={23}
                        color='white'
                        style={{ paddingRight: 20 }}
                    />
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    </DrawerContentScrollView>
);


const AuthNavigation = () => {
    return(
        <Stack.Navigator initialRouteName='Login' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Sign Up' component={RegistrationScreen} />
        </Stack.Navigator>
    );
}

const MenuNavigation = () => {
    return(
        
            <Drawer.Navigator 
                initialRouteName='Dashboard' 
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.primary
                    },
                    headerTintColor: 'white'
                }}
                drawerContent={props =>{
                    return (
                        <DrawerWithLogoutButton { ...props } />
                    )
                }}
                activeTintcolor={Colors.primary}
            >
                <Drawer.Screen 
                    name='Dashboard' 
                    component={HomeScreen} 
                    options={{
                        drawerIcon: () => (
                            <Ionicons
                                name='md-grid-outline'
                                size={23}
                                color={Colors.primary}
                            />
                        ),
                        drawerActiveTintColor: Colors.primary
                    }}
                />
                <Drawer.Screen 
                    name='Select Image' 
                    component={DetailScreen}
                    options={{
                        drawerIcon: () => (
                            <Ionicons 
                                name='md-images-outline'
                                size={23}
                                color={Colors.primary}
                            />
                        )
                    }} 
                />
            </Drawer.Navigator>
    )
}

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Auth' screenOptions={{headerShown: false}}>
                <Stack.Screen name='Auth' component={AuthNavigation} />
                <Stack.Screen name='Home' component={MenuNavigation} />
                <Stack.Screen
                    name='CategoryDetails' 
                    component={CategoryItemDetailScreen} 
                    options={CategoryItemDetailScreen.navigationOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1
    },
    icon: {
        flexDirection: 'row'
    },
    container: {
        height: 200,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        top: -20
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ccc',
        borderColor: Colors.primary,
        borderWidth: 1
    },
    infoContainer: {
        padding: 10,
        marginLeft: 25,
        width: 250
    },
    title: {
        color: 'white',
        fontSize: 18,
        marginBottom: 5
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        margin: 10,
        paddingLeft: 20,
        width: 230,
        top: 300
    },
    button: {
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    }
  });

export default MainNavigation;