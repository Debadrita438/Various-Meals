import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar, BottomSheet, ListItem } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UserItem from '../components/UserItem';
import CustomHeaderButton from '../components/CustomHeaderButton';
import CustomButton from '../components/CustomButton';
import * as userActions from '../store/actions/userActions';

const UserListScreen = props => {
    const userList = useSelector(state => state.users.users);
    const actionUserList = useSelector(state => state.users.user);

    const { navigation } = props;
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        AsyncStorage.setItem('users', JSON.stringify(userList)); 
        
    }, [userList])
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title='Add User'
                        iconName='md-add'
                        iconSize={23}
                        onPress={() => {
                            navigation.navigate('AddUser')
                        }}
                    />
                </HeaderButtons>
            )
        })
    })

    const list=[
        { 
            title: 'Cancel',
            onPress: () => setIsVisible(false) 
        }
    ]

    const actionSheetHandler = () => {
        setIsVisible(true);
    }

    const deleteHandler = id => {
        dispatch(userActions.deleteUser(id))
    }

    return (
        <>
            <View style={styles.itemContainer}>
                <FlatList 
                    data={userList}
                    renderItem={itemData => (
                        <UserItem 
                            id={itemData.item.id}
                            name={itemData.item.name}
                            age={itemData.item.age}
                            image={itemData.item.imageUrl}
                            profession={itemData.item.profession}
                            phoneNo={itemData.item.phoneNo}
                            streetAddress={itemData.item.streetAddress}
                            city={itemData.item.city}
                            state={itemData.item.state}
                            country={itemData.item.country}
                            lat={itemData.item.lat}
                            lng={itemData.item.lng}
                            onSelect={() => {
                                navigation.navigate('UserDetails', {
                                    userId: itemData.item.id,
                                    userName: itemData.item.name
                                })
                            }}
                        />
                    )}
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton 
                    label='Save'
                    onPress={actionSheetHandler}
                />
            </View>
            <BottomSheet isVisible={isVisible}>
                <ScrollView style={{ maxHeight: 300 }}>
                {actionUserList.map((user, i) => (
                    <ListItem key={i} style={styles.userItem}>
                        <Avatar source={{uri: user.imageUrl}} />
                        <ListItem.Content style={styles.infoContainer}>
                            <ListItem.Title>{user.name}</ListItem.Title>
                            <Ionicons 
                                name='md-close-circle-outline'
                                size={25}
                                color='red'
                                onPress={deleteHandler.bind(this, user.id)}
                            />
                        </ListItem.Content>
                    </ListItem>
                ))}
                </ScrollView>
                {list.map((l, i) => (
                    <ListItem key={i} onPress={l.onPress}>
                        <ListItem.Content>
                            <ListItem.Title style={styles.cancelButton}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
                
            </BottomSheet>
        </>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        maxHeight: '92%'
    },
    buttonContainer: {
        top: 6
    },
    bottomListView: {
        maxWidth: 400,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10
    },
    userItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    cancelButton: {
        color: 'red',
        left: '45%'
    },
    infoContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }
})



export default UserListScreen;