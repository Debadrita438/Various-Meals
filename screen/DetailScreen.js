import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video  from 'react-native-video';

const DetailsScreen = () => {
    const [images, setImages] = useState([]);
    const [player, setPlayer] = useState();
    const [currentTime, setCurrentTime] = useState();

    const selectImageHandler = () => {
        ImagePicker.openPicker({
            multiple: true,
            mediaType: 'any'
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
      <ScrollView contentContainerStyle={styles.screen}>
        <View style={styles.container}>
          {
            images.map((img, index) => (
              img.mime === 'image/jpeg'
              ? (
                <TouchableOpacity key={index} style={styles.imageContainer}>
                  <ImageBackground 
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
              </TouchableOpacity>
              ) : (
                <View key={index} style={styles.videoContainer}>
                  <Video 
                    source={{ uri: img.path }}
                    ref={ref => setPlayer(ref)}
                    paused={false}
                    resizeMode='cover'
                    controls={true}
                    paused={true}
                    style={styles.video}
                    onProgress={time => setCurrentTime(time)}
                    onPlaybackResume={() => currentTime}
                  />
                  <View style={styles.overlay}>
                    <Ionicons 
                      name='md-close'
                      size={23}
                      color='black'
                      onPress={() => deleteHandler(img.path)}
                    />
                  </View>
                </View>
              )
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
      </ScrollView>
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
    videoContainer: {
      paddingTop: 10,
      height: 150,
      width: 200,
      borderRadius: 10,
      borderWidth: 1,
      overflow: 'hidden',
      borderColor: '#ccc',
      margin: 5
    },
    video: {
      height: '100%',
      width: '100%',
    },
    image: {
      flexBasis: '30%',
      width: 100, 
      height: 100,
      alignItems: 'flex-end'
    },
    imageContainer: {
      height: 100,
      width: 100,
      borderWidth: 1,
      borderRadius: 10,
      overflow: 'hidden',
      borderColor: '#ccc',
      marginLeft: 5,
      marginBottom: 5
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      height: 25,
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
      alignItems: 'flex-end' 
    }
})

export default DetailsScreen;