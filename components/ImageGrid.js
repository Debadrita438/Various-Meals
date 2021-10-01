import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ImageGrid = props => {
    return(
        <View style={styles.imagePreview} key={props.index}>
            <ImageBackground 
                style={styles.image}
                source={{ uri: props.path }}
                numColumns={4}
            >
                <Ionicons 
                name='md-close'
                size={20}
                color='#8a8a8a'
                onPress={props.onPress}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    imagePreview: {
        height: 100,
        width: 100,
        borderRadius: 20,
        margin: 5
    },
    image: {
        flexBasis: '30%',
        width: 100, 
        height: 100,
        paddingTop: 10,
        paddingRight: 10,
        alignItems: 'flex-end'
    }
})

export default ImageGrid;