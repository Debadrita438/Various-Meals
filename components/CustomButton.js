import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';

const CustomButton = props => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={props.onPress}>
                <Text style={styles.buttonText}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 20,
        width: '100%'
    },
        buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    }
})
 
export default CustomButton;