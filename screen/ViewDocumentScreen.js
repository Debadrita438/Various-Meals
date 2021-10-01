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
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center'
    },
    pdf: {
        flex: 1,
        width: 400,
        height: 600
    }
})

export default ViewDocumentScreen;