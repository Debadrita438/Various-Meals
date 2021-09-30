// import React, { useState } from 'react';
// import { Image, StyleSheet, Text, View } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import DocumentPicker from 'react-native-document-picker';

// import CustomButton from './CustomButton';

// const ChooseImage = () => {
//     const [images, setImages] = useState([]);

//     const selectImageHandler = () => {
//         let imageList = [];

//         ImagePicker.openPicker({
//             width: 300,
//             height: 400,
//             multiple: true
//         }).then(image => {
//             // console.log(image)
//             // image.map(img => {
//             //     imageList.push({
//             //         uri: img.path
//             //     })
//             // })
//             const imagePath = image.map(img => {
//                 {uri: img.path}
//             })
//             setImages(prevImgs => [
//                 ...prevImgs,
//                 imagePath
//             ])
//             // console.log(images)
//             // console.log(imageList);
//             // setImageUri(imageList)
//             // console.log(imageUri)
//         }).catch(err => console.log(err.message))
//     } 

//     return (
//         <>
//             {
//                 images.length === 0 
//                 ?  <CustomButton label='Select Images' onPress={selectImageHandler} />
//                 : (
//                     <View style={styles.container}>
//                         {
//                             images.map(img => (
//                                 <Image 
//                                     key={img.uri}
//                                     style={styles.image}
//                                     source={{ uri: img.uri }}
//                                 />
//                             ))
//                         }
//                     </View>
//                 )
//             }
//         </>
//     )
// }

// const styles = StyleSheet.create({
//     image: {
//         width: 200, 
//         height: 200,
//         borderRadius: 10
//     },
//     container: {
//         flex: 1,
//         padding: 30,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#fff'
//     },
// })

// export default ChooseImage;