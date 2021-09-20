import React, { useEffect, useReducer } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const INPUT_CHANGE = 'INPUT_CHANGE';

const inputReducer = (state, action) => {
    switch(action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: action.payload,
                isValid: action.isValid
            }
        default:
            return state;
    }
}

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false
    });

    const { onInputChange, id } = props;

    useEffect(() => {
        onInputChange(id, inputState.value, inputState.isValid);
    }, [inputState, onInputChange, id])

    const textChangeHandler = text => {
        let isValid = true;
        if (+text.trim().length === 0 && +text.length < 8) {
            isValid = false;
        }
        if(text.trim().length === 0 && text.length < 4) {
            isValid = false;
        }

        dispatch({
            type: INPUT_CHANGE,
            payload: text,
            isValid: isValid
        })
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{props.label}</Text>
            <TextInput 
                { ...props }
                style={styles.textInput} 
                value={inputState.value} 
                onChangeText={textChangeHandler}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secure}
            />
            {!inputState.value && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{props.errorText}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: '80%',
        marginBottom: 5
    },
    title: {
        fontSize: 20
    },
    textInput: {
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 250,
    },
    errorContainer: {
        marginVertical: 2
    },
    errorText: {
        fontFamily: 'open-sans',
        color: 'red',
        fontSize: 13
    }
})
 
export default Input;