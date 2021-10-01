import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pdf from 'react-native-pdf';

const ViewDocumentScreen = props => {
    const document = props.route.params.document;

    return (
        <View style={styles.screen}>
            <Pdf 
                style={styles.pdf}
                source={{ uri: document }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        top: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pdf: {
        width: 500,
        height: 500
    }
})

export default ViewDocumentScreen;