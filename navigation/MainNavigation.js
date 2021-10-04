import 'react-native-gesture-handler';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../constants/Colors';
import * as authActions from '../store/actions/authActions';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from '../screen/LoginScreen';
import RegistrationScreen from '../screen/RegistrationScreen';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';
import CategoryItemDetailScreen from '../screen/CategoryItemDetailScreen';
import UserListScreen from '../screen/UserListScreen';
import UserDetailScreen from '../screen/UserDetailScreen';
import AddUserScreen from '../screen/AddUserScreen';
import StartupScreen from '../screen/StartupScreen';
import TextEditorScreen from '../screen/TextEditorScreen';
import DocumentScreen from '../screen/DocumentScreen';
import ViewDocumentScreen from '../screen/ViewDocumentScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerWithLogoutButton = props => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.scroll}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: 
                    user.profile_picture 
                    ? user.profile_picture
                    : 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
                }} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{user.name}</Text>
                    <Text style={styles.address}>{user.address}</Text>
                    <Text style={styles.address}>{user.phone_no}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>
            </View>

            <DrawerItemList {...props} />

            <View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => {
                        dispatch(authActions.logout())
                        props.navigation.navigate('Auth')
                        }}>
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
}

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
                        drawerIcon: ({focused}) => (
                            <Ionicons
                                name='md-grid-outline'
                                size={23}
                                color={focused ? Colors.primary : 'black'}
                            />
                        ),
                        drawerActiveTintColor: Colors.primary
                    }}
                />
                <Drawer.Screen 
                    name='Select Image' 
                    component={DetailScreen}
                    options={{
                        drawerIcon: ({focused}) => (
                            <Ionicons 
                                name='md-images-outline'
                                size={23}
                                color={focused ? Colors.primary : 'black'}
                            />
                        )
                    }} 
                />
                <Drawer.Screen 
                    name='Users'
                    component={UserListScreen}
                    options={{
                        drawerIcon: ({focused}) => (
                            <Ionicons 
                                name='md-people-outline'
                                size={23}
                                color={focused ? Colors.primary : 'black'}
                            />
                        )
                    }}
                />
                <Drawer.Screen 
                    name='Document' 
                    component={DocumentScreen} 
                    options={{
                        headerShown: 'true',
                        headerTitle: 'Pick A Document',
                        headerStyle: {
                            backgroundColor: Colors.primary
                        },
                        headerTintColor: 'white',
                        drawerIcon: ({focused}) => (
                            <Ionicons 
                                name='md-document-attach-outline'
                                size={23}
                                color={focused ? Colors.primary : 'black'}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
    )
}

const TabNavigaton = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveBackgroundColor: Colors.primary,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
        }}>
            <Tab.Screen 
                name='Home' 
                component={MenuNavigation} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Ionicons 
                            name='md-grid-outline'
                            size={23}
                            color={focused ? 'white' : 'black'}                        
                        />
                    )
                }}
            />
            <Tab.Screen 
                name='Select Image' 
                component={DetailScreen} 
                options={{
                    headerShown: 'true',
                    headerStyle: {
                        backgroundColor: Colors.primary
                    },
                    headerTintColor: 'white',
                    tabBarIcon: ({focused}) => (
                        <Ionicons 
                            name='md-image-outline'
                            size={23}
                            color={focused ? 'white' : 'black'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Users'
                component={UserListScreen}
                options={{
                    headerShown: 'true',
                    headerStyle: {
                        backgroundColor: Colors.primary
                    },
                    headerTintColor: 'white',
                    tabBarIcon: ({focused}) => (
                        <Ionicons 
                            name='md-people-outline'
                            size={23}
                            color={focused ? 'white' : 'black'}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name='Document' 
                component={DocumentScreen} 
                options={{
                    headerShown: 'true',
                    headerTitle: 'Pick A Document',
                    headerStyle: {
                        backgroundColor: Colors.primary
                    },
                    headerTintColor: 'white',
                    tabBarIcon: ({focused}) => (
                        <Ionicons 
                            name='md-document-attach-outline'
                            size={23}
                            color={focused ? 'white' : 'black'}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Startup' screenOptions={{headerShown: false}}>
                <Stack.Screen name='Startup' component={StartupScreen} />
                <Stack.Screen name='Auth' component={AuthNavigation} />
                <Stack.Screen name='Tab' component={TabNavigaton} />
                <Stack.Screen
                    name='CategoryDetails' 
                    component={CategoryItemDetailScreen} 
                    options={CategoryItemDetailScreen.navigationOptions}
                />
                <Stack.Screen 
                    name='UserDetails' 
                    component={UserDetailScreen}
                    options={UserDetailScreen.navigationOptions} 
                />
                <Stack.Screen 
                    name='AddUser'
                    component={AddUserScreen}
                    options={AddUserScreen.navigationOptions}
                />
                <Stack.Screen 
                    name='TextEditor'
                    component={TextEditorScreen}
                    options={{
                        headerShown: true,
                        headerTitle: 'Text Editor',
                        headerStyle: {
                            backgroundColor: Colors.primary
                        },
                        headerTintColor: 'white'
                    }}
                />
                <Stack.Screen 
                    name='ViewDocument'
                    component={ViewDocumentScreen}
                    options={{
                        headerShown: true,
                        headerTitle: 'View',
                        headerStyle: {
                            backgroundColor: Colors.primary
                        },
                        headerTintColor: 'white'
                    }}
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
        height: 250,
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
        borderWidth: 1,
        marginBottom: 10
    },
    infoContainer: {
        padding: 5,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 18,
        marginBottom: 2,
    },
    email: {
        color: 'white',
        fontSize: 16,
        marginBottom: 2
    },
    address: {
        color: 'white',
        fontSize: 16,
        marginBottom: 2
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        margin: 10,
        paddingLeft: 20,
        width: 230,
        top: 150
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