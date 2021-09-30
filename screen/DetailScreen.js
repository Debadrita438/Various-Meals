import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../components/CustomButton';

const DetailsScreen = () => {
    const [images, setImages] = useState([]);

    const selectImageHandler = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 200,
            multiple: true
        }).then(image => {
            setImages(prevImgs => [ ...prevImgs, ...image ])
        }).catch(err => console.log(err.message))
    } 

    const deleteHandler = path => {
      setImages(prevImgs =>{
        return prevImgs.filter(img => img.path !== path)
      })
    }

    return (
        <View style={styles.screen}>
                    <View style={styles.container}>
                        {
                            images.map((img, index) => (
                                <ImageBackground 
                                    key={index}
                                    style={styles.image}
                                    source={{ uri: img.path }}
                                    numColumns={4}
                                >
                                  <Ionicons 
                                    name='md-close'
                                    size={23}
                                    color='#8a8a8a'
                                    onPress={() => deleteHandler(img.path)}
                                  />
                                </ImageBackground>
                            ))
                        }
                        <View style={styles.imageView}>
                          <TouchableOpacity onPress={selectImageHandler} style={styles.button}>
                            <Ionicons 
                              name='md-add'
                              size={50}
                              style={styles.icon}
                            />
                          </TouchableOpacity>
                        </View>
                    </View>

          {/* <View style={styles.button}>
            <CustomButton label='Select Images' onPress={selectImageHandler} />
          </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      padding: 30,
      alignItems: 'center'
    },
    image: {
        flexBasis: '30%',
        width: 100, 
        height: 100,
        borderRadius: 10,
        margin: 5,
        alignItems: 'flex-end'
    },
    icon: {
      top: 20,
      marginLeft: 25
    },
    imageView: {
      width: 100,
      height: 100,
      borderRadius: 10,
      borderStyle: 'dashed',
      borderWidth: 2,
      borderColor: '#ccc'
    },
  })

export default DetailsScreen;