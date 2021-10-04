import React, { useState } from "react";
import { Alert, Button, PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import HTMLView from 'react-native-htmlview';
import { useSelector } from "react-redux";
import RNFetchBlob from 'rn-fetch-blob';

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

    const downloadHandler = async () => {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
            if(granted === PermissionsAndroid.RESULTS.GRANTED) {
                actualDownload();
            } else {
                Alert.alert(
                    'Permission Denied!',
                    'You have to give permissions first to download anything.'
                )
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    const actualDownload = () => {
        const { dirs } = RNFetchBlob.fs;
        RNFetchBlob.config({
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                title: 'test.pdf',
                path: `${dirs.DownloadDir}/test.pdf`
            }
        }).fetch('GET', 'https://jyotirjagat.files.wordpress.com/2016/01/satyajit-ray-feluda-bombaier-bombete.pdf')
        .then(res => console.log(res.path))
        .catch(err => console.log(err.message));
    }

    const htmlContent = `<p>${article}</p>`

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
                            ? (
                                <View style={styles.button}>
                                    <Button 
                                        title='Go to Text Editor'
                                        onPress={() => {
                                            props.navigation.navigate('TextEditor')
                                        }}
                                    />
                                </View>
                            ) : (
                                <View style={styles.htmlViewContainer}>
                                    <Text style={{ fontSize: 15 }}>Entered Text: </Text>
                                    <HTMLView value={htmlContent} stylesheet={style} />
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
                        <View style={styles.button}>
                            <Button title='Download Now' onPress={downloadHandler} />
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
        marginTop: 20,
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
    },
    htmlViewContainer: {
        // flex: 1,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 100,
        // width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        // top: 200,
        // left: 100,
        overflow: 'hidden'
    }
});

const style = StyleSheet.create({
    p: {
      fontSize: 15,
      fontWeight: '300'
    },
  });

export default DocumentScreen;