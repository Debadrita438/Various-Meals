import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = props => {
    const location = props.route.params.initialLocation;

    return (
        <View style={styles.container}>
            <MapView 
            style={styles.map}
            region={{
                latitude: location.lat,
                longitude: location.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            >
                <Marker 
                    coordinate={{ 
                        latitude: location.lat, 
                        longitude: location.lng
                    }}
                    title='A'
                />
            </MapView>
            {/* <Text>{location.lat}</Text> */}
        </View>
);}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 400,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapScreen;