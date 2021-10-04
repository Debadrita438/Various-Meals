import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserDetailScreen = props => {
    const userId = props.route.params.userId
    const users = useSelector(state => state.users.users);
    const selectedUser = users.find(user => user.id === userId);

    const makeCallHandler = () => {
        let phoneNumber = `tel:${selectedUser.phoneNo}`;
        Linking.openURL(phoneNumber)
    }

    const mapHandler = () => {
        const scheme = 'geo: 0,0?q=';
        // const location = `${selectedUser.lat},${selectedUser.lng}`
        // const label = 'A'
        // const url = `${scheme}${location}(${address})`
        const url = `${scheme}${selectedUser.streetAddress}, +${selectedUser.city}, +${selectedUser.state}`

        Linking.openURL(url)
    }

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
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.icon} onPress={makeCallHandler}>
                        <Ionicons 
                            name='md-call-outline'
                            size={23}
                            color='#2f7831'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} onPress={mapHandler}>
                        <Ionicons 
                            name='md-map-outline'
                            size={23}
                            color={Colors.primary}
                        />
                    </TouchableOpacity>
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
    buttonContainer: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    icon: {
        marginHorizontal: 20
    }
})

export default UserDetailScreen;