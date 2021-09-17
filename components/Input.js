import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{props.label}</Text>
            <TextInput 
                style={styles.textInput} 
                value={props.value} 
                onChangeText={props.onChange} 
                keyboardType={props.keyboardType}
                secureTextEntry={props.secure}
                placeholder={props.placeholder}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: 300,
        marginBottom: 20
    },
    title: {
        fontSize: 20
    },
    textInput: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc'
    }
})
 
export default Input;