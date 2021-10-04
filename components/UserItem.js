import React from 'react';
import { Button, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../constants/Colors';

const UserItem = props => {
    const makeCallHandler = () => {
        let phone = props.phoneNo;
        let phoneNumber = `tel:${props.phoneNo}`;
        console.log(phoneNumber);
        Linking.openURL(phoneNumber)
    }

    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.userItem}>
        <Image style={styles.image} source={{ uri: props.image }} />
        <View style={styles.infoContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.profession}>{props.age}</Text>
            <Text style={styles.profession}>{props.profession}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button 
                title='Call'
                onPress={makeCallHandler}
            />
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    userItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderColor: Colors.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    name: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    profession: {
        color: '#666',
        fontSize: 16
    },
    buttonContainer: {
        left: -50
    }
})

export default UserItem;