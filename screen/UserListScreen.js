import React, { useEffect, useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UserItem from '../components/UserItem';
import CustomHeaderButton from '../components/CustomHeaderButton';

const UserListScreen = props => {
    const userList = useSelector(state => state.users.users);
    const { navigation } = props;

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

    return (
        <FlatList 
            data={userList}
            renderItem={itemData => (
                <UserItem 
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
    )
}



export default UserListScreen;