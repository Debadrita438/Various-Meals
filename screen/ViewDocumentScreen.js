import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pdf from 'react-native-pdf';
import HTMLView from 'react-native-htmlview';
import { useSelector } from 'react-redux';

const ViewDocumentScreen = props => {
    const document = props.route.params.document;

    const article = useSelector(state => state.text.text)

    return (
        <View style={styles.screen}>
            {
                article
                ? (
                    <View style={styles.textContainer}>
                        <Text>Entered Text: </Text>
                        <HTMLView value={article} />
                    </View>
                ) : null
            }
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
    },
    textContainer: {
        paddingLeft: 10
    }
})

export default ViewDocumentScreen;