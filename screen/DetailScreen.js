import React, { useState } from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import CustomButton from '../components/CustomButton';

const DetailScreen = () => {
    const [imageUri, setImageUri] = useState();
  
    const selectFile = () => {
        const options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
    
        };
  
        launchImageLibrary(options, (res) => {
            console.log('Response = ', res);
            if (res.didCancel) {
              // console.log('User cancelled image picker');
            } else if (res.errorMessage) {
              // console.log('ImagePicker Error: ', res.errorMessage);
              Alert.alert(
                'Sorry!',
                'Something went wrong',
                [
                  {text: 'Okay'}
                ]
              )
            } else {
                // console.log('response', JSON.stringify(res.assets[0].uri));
                setImageUri(res.assets[0].uri);
            }
        }); 
    };

    return (
        <View style={styles.container}>
          <View style={styles.button}>
            <CustomButton label='Select Image' onPress={selectFile} />
          </View>
            <View style={styles.container}>
                <Image
                    source={{ uri: imageUri }}
                    style={styles.image}
                />
            </View>
          </View>
    );
}

  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
  
    button: {
      width: '50%',
    },
  
    buttonText: {
      textAlign: 'center',
      fontSize: 15,
      color: 'white'
    },
    image: {
      top: -20,
      width: 300, 
      height: 300,
      borderRadius: 10
    }
});

export default DetailScreen;