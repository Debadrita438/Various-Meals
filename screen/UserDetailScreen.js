import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';

const UserDetailScreen = props => {
    const userId = props.route.params.userId
    const users = useSelector(state => state.users.users);
    const selectedUser = users.find(user => user.id === userId);

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <Image style={styles.image} source={{uri: selectedUser.imageUrl}} />
            <View style={styles.infoContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.age}>Age: {selectedUser.age}</Text>
                    <Text style={styles.age}>Profession: {selectedUser.profession}</Text>
                    <Text style={styles.age}>Phone Number: {selectedUser.phoneNo}</Text>
                    <Text style={styles.age}>Street Address: {selectedUser.streetAddress}</Text>
                    <Text style={styles.age}>City: {selectedUser.city}</Text>
                    <Text style={styles.age}>State: {selectedUser.state}</Text>
                    <Text style={styles.age}>Country: {selectedUser.country}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

UserDetailScreen.navigationOptions = navData => {
    const userName = navData.route.params.userName;

    return {
        headerShown: true,
        headerTitle: userName,
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white'
    }
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center'
    },
    image: {
        minHeight: 300,
        backgroundColor: '#ccc',
        borderRadius: 150,
        borderWidth: 3,
        borderColor: '#888',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 20
    },
    infoContainer: {
        marginVertical: 20,
        width: '90%',
        maxWidth: 350,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10
    },
    addressContainer: {
        padding: 20
    },
    age: {
        color: Colors.primary,
        textAlign: 'center'
    },
})

export default UserDetailScreen;