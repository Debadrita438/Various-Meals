import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';

const UserDetailScreen = props => {
    const userId = props.route.params.userId
    const users = useSelector(state => state.users.users);
    const selectedUser = users.find(user => user.id === userId);
    const selectedLocation = {lat: selectedUser.lat, lng: selectedUser.lng};

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
                    <CustomButton 
                        label='See on Map'
                        onPress={() => {
                            props.navigation.navigate('MapView', {
                                initialLocation: selectedLocation
                            })
                        }}
                    />
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
    mapPreview: {
        width: '100%',
        maxWidth: 350,
        height: 300,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    buttonContainer: {
        width: '50%'
    }
})

export default UserDetailScreen;