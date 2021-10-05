import React, { useCallback, useReducer, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
                    profession: '',
                    phoneNo: '',
                    streetAddress: '',
                    city: '',
                    state: '',
                    country: ''
                }
            }
        default: 
            return state;
    }
}

const AddUserScreen = props => {
    const dispatch = useDispatch();
    const [modalVisibility, setModalVisibility] = useState(false);

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            name: '',
            image: '',
            age: '',
            profession: '',
            phoneNo: '',
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
            formState.inputValues.phoneNo,
            formState.inputValues.streetAddress,
            formState.inputValues.city,
            formState.inputValues.state,
            formState.inputValues.country
        );
        dispatch(action);
        dispatchFormState({type: CLEANUP});
        setModalVisibility(true);
    }

    const modalButtonHandler = () => {
        setModalVisibility(false);
        props.navigation.navigate('Users');
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
            <Modal isVisible={modalVisibility}>
                <View style={styles.modalView}>
                    <View style={styles.icon}>
                        <Ionicons 
                            name='md-person-add'
                            size={80}
                            color={Colors.primary}
                        />
                    </View>
                    <View style={styles.modalTextContainer}>
                        <Text style={styles.modalText}>
                            User have been added Successfully!
                        </Text>
                    </View>
                    <View style={styles.modalButton}>
                        <CustomButton label='Okay' onPress={modalButtonHandler} />
                    </View>
                </View>
            </Modal>
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
                    onChangeText={inputChangeHandler.bind(this, 'phoneNo')}
                    value={formState.inputValues.phoneNo}
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
    },
    modalView: {
        left: '10%',
        width: 300,
        height: 300,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    icon: {
        top: 40,
        alignItems: 'center'
    },
    modalTextContainer: {
        paddingTop: 60
    },
    modalText: {
        fontSize: 20, 
        textAlign: 'center', 
        fontWeight: '600', 
        fontStyle: 'italic'
    },
    modalButton: {
        width: '65%',
        left: '18%',
        paddingTop: 20
    }
})

export default AddUserScreen;