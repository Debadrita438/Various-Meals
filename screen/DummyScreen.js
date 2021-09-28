import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const DummyScreen = () => {
    const [document, setDocument] = useState();

    const pickDocumentHandler = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf]
            })
            console.log(res)
            setDocument(res[0].name);
        } catch (err) {
            console.log(err.message)
        }
    }

    return(
        <View style={styles.screen}>
            {
                document 
                ? (
                    <Text>FileName: {document}</Text>
                )
                : <Button 
                    title='Pick a Document'
                    onPress={pickDocumentHandler}
                /> 
            }
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