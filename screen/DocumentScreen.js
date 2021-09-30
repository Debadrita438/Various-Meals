import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Pdf from 'react-native-pdf';
import HTMLView from 'react-native-htmlview';
import { useSelector } from "react-redux";

const DocumentScreen = props => {
    const [document, setDocument] = useState();
    const [documentPath, setDocumentPath] = useState();

    const article = useSelector(state => state.text.text)

    const pickDocumentHandler = async () => {
        try {
            const res = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.pdf],
                copyTo: 'documentDirectory'
            })
            setDocument(res.name);
            setDocumentPath(res.fileCopyUri);
        } catch (err) {
            console.log(err.message)
        }
    }

    return(
        <View style={styles.screen}>
            {
                document 
                ? (  
                    <View style={styles.textContainer}>
                        <Text>{document}</Text>
                        <View style={styles.button}>
                            <Button  
                                title='Open' 
                                onPress={() => {
                                    props.navigation.navigate('ViewDocument', {
                                        document: documentPath
                                    })
                                }} 
                            />
                        </View>
                        <View style={styles.button}>
                        {
                            !article 
                            && (
                                <View style={styles.button}>
                                    <Button 
                                        title='Go to Text Editor'
                                        onPress={() => {
                                            props.navigation.navigate('TextEditor')
                                        }}
                                    />
                                </View>
                            ) 
                        }
                        </View>
                    </View>
                )
                : (
                    <View style={styles.buttonContainer}> 
                        <View style={styles.button}>
                            <Button 
                                title='Pick a Document'
                                onPress={pickDocumentHandler}
                            /> 
                        </View>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20
    },
    buttonContainer: {
        top: 300
    },
    button: {
        margin: 10
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

export default DocumentScreen;