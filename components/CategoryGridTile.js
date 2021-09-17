import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

const CategoryGridTile = props => {
    return (
        <View style={styles.gridItems}>
            <TouchableNativeFeedback style={{ flex: 1 }} onPress={props.onSelect}>
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <Text style={styles.text} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItems: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden', 
        elevation: 10
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
})
 
export default CategoryGridTile;