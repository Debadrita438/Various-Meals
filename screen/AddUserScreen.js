import React, { useCallback, useReducer } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';
import * as userActions from '../store/actions/userActions';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
const CLEANUP = 'CLEANUP';

const formReducer = (state, action) => {
    switch(action.type) {
        case FORM_INPUT_UPDATE:
            const updatedValues = {
                ...state.inputValues,
                [action.input]: action.payload
            }
            return {
                inputValues: updatedValues
            }
        case CLEANUP:
            return {
                inputValues: {
                    name: '',
                    image: '',
                    age: '',
                    profession: ''
                }
            }
        default: 
            return state;
    }
}

const AddUserScreen = props => {
    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            name: '',
            image: '',
            age: '',
            profession: '',
            phoneNumber: '',
            streetAddress: '',
            city: '',
            state: '',
            country: ''
        }
    });

    const submitHandler = async () => {
        if(!formState.inputValues) {
            Alert.alert(
                'Error!',
                'Phone Number and Password both are required',
                [
                    {text: 'Okay'}
                ]
            );
        }
        let action = userActions.addUser(
            formState.inputValues.name, 
            formState.inputValues.image,
            formState.inputValues.age,
            formState.inputValues.profession,
            formState.inputValues.phoneNumber,
            formState.inputValues.streetAddress,
            formState.inputValues.city,
            formState.inputValues.state,
            formState.inputValues.country
        );
        dispatch(action);
        props.navigation.navigate('Users');
        dispatchFormState({type: CLEANUP});
    }

    const inputChangeHandler = useCallback((inputIdentifier, inputValue) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            payload: inputValue,
            input: inputIdentifier
        });
    }, [dispatchFormState]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formControl}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input} 
                    required
                    onChangeText={inputChangeHandler.bind(this, 'name')}
                    value={formState.inputValues.name}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Image</Text>
                <TextInput
                    style={styles.input}
                    required
                    onChangeText={inputChangeHandler.bind(this, 'image')}
                    value={formState.inputValues.image}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Age</Text>
                <TextInput
                    style={styles.input}
                    required
                    keyboardType="number-pad"
                    onChangeText={inputChangeHandler.bind(this, 'age')}
                    value={formState.inputValues.age}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Profession</Text>
                <TextInput
                    style={styles.input}
                    required
                    onChangeText={inputChangeHandler.bind(this, 'profession')}
                    value={formState.inputValues.profession}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    required
                    keyboardType='number-pad'
                    onChangeText={inputChangeHandler.bind(this, 'phoneNumber')}
                    value={formState.inputValues.phoneNumber}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Street Address</Text>
                <TextInput
                    style={styles.input}
                    required
                    onChangeText={inputChangeHandler.bind(this, 'streetAddress')}
                    value={formState.inputValues.streetAddress}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>City</Text>
                <TextInput
                    style={styles.input}
                    required
                    onChangeText={inputChangeHandler.bind(this, 'city')}
                    value={formState.inputValues.city}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>State</Text>
                <TextInput
                    style={styles.input}
                    required
                    onChangeText={inputChangeHandler.bind(this, 'state')}
                    value={formState.inputValues.state}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Country</Text>
                <TextInput
                    style={styles.input}
                    required
                    onChangeText={inputChangeHandler.bind(this, 'country')}
                    value={formState.inputValues.country}
                />
            </View>
            <View style={styles.button}>
                <CustomButton 
                    label='Submit' 
                    onPress={submitHandler} 
                />    
            </View>
        </ScrollView>
    )
}

AddUserScreen.navigationOptions = {
    headerShown: true,
    headerTitle: 'Add A New User',
    headerStyle: {
        backgroundColor: Colors.primary
    },
    headerTintColor: 'white'
}

const styles = StyleSheet.create({
    loginForm: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: { 
        // top: 100,
        // height: 450,
        justifyContent: 'center',
        alignItems: 'center',
        // width: '100%',
        // marginBottom: 5,
        flexGrow: 1
    },
    label: {
        fontSize: 20
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 250,
        marginBottom: 10
    },
    formControl: {
        // top: -40,
        left: -10,
        maxWidth: 400,
        maxHeight: 400,
        marginLeft: 40
    },
    text: {
        color: Colors.primary
    },
    button: {
        width: '50%',
        top: 10,
        paddingBottom: 10
    }
})

export default AddUserScreen;