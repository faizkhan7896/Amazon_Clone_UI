import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

import ImageSlider from 'react-native-image-slider';

class slid extends Component {
    render() {
        const images = [
            'https://placeimg.com/640/640/nature',
            'https://placeimg.com/640/640/people',
            'https://placeimg.com/640/640/animals',
            'https://placeimg.com/640/640/beer',
        ];

        return (
            <View style={styles.container}>

                <ImageSlider
                    autoPlayWithInterval={3000}
                    images={images}
                    customSlide={({ index, item, style, width }) => (
                        // It's important to put style here because it's got offset inside
                        <View
                            key={index}
                            style={[
                                style,
                                styles.customSlide,
                                { backgroundColor: index % 2 === 0 ? 'yellow' : 'green' },
                            ]}
                        >
                            <Image source={{ uri: item }} style={styles.customImage} />
                        </View>
                    )} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: '#F5FCFF',
    },
    slider: { backgroundColor: '#000', height: 350 },


    contentText: { color: '#fff' },
    buttons: {
        zIndex: 1,
        height: 15,
        marginTop: -25,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        margin: 3,
        width: 15,
        height: 15,
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },

    customImage: {
        width: "100%",
        height: 200,
    },
});

export default slid;