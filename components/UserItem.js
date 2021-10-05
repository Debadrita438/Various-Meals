import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as userActions from '../store/actions/userActions';

const UserItem = props => {
    const [checked, setChecked] = useState(true);
    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.userItem}>
        <Image style={styles.image} source={{ uri: props.image }} />
        <View style={styles.infoContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.profession}>{props.age}</Text>
            <Text style={styles.profession}>{props.profession}</Text>
        </View>
        <View style={styles.checkBox}>
            <BouncyCheckbox 
                size={25}
                fillColor={Colors.primary}
                iconStyle={{ borderRadius: 7 }}
                onPress={() => {
                    setChecked(!checked);
                    if(checked) {
                        dispatch(userActions.showUser(props.id, props.name, props.image))
                    } else {
                        dispatch(userActions.deleteUser(props.id))
                    }
                }}
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
    checkBox: {
        left: -30
    }
})

export default UserItem;