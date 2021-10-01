import React, { useState } from 'react';
import { Alert, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageGrid from '../components/ImageGrid';

const DetailsScreen = () => {
    const [images, setImages] = useState([]);

    const selectImageHandler = () => {
        ImagePicker.openPicker({
            multiple: true,
            mediaType: 'any'
        }).then(image => {
            // console.log(image)
            setImages(prevImgs => [ ...prevImgs, ...image ])
        }).catch(err => console.log(err.message))
    } 

    const deleteHandler = path => {
      setImages(prevImgs =>{
        return prevImgs.filter(img => img.path !== path)
      })
    }
    let imageGrid = [];
    for (const key in images) {
      if(images[key].mime === 'image/jpeg') {
        imageGrid.push(
          <ImageGrid 
            index={Math.random().toString()}
            path={images[key].path}
            onPress={() => deleteHandler(images[key].path)}
          />
        )
      } else {
        
      }
    }

    return (
      <View style={styles.screen}>
        <View style={styles.container}>
          {imageGrid}
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
      padding: 10,
      flexDirection: 'row',
      flexWrap: 'wrap'
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