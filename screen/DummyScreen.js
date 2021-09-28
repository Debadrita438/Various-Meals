import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const DummyScreen = () => {
    return(
        <View style={styles.screen}>
            <Text>Some Dummy text! Contents maybe added soon!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DummyScreen;