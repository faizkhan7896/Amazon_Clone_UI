

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

import ImageSlider from 'react-native-image-slider';

class slid extends Component {
    render() {
        const images = [
            'https://dog55574plkkx.cloudfront.net/images/amazon-pantry-offers.png',
            'https://i.gadgets360cdn.com/large/Amazon_Pantry_Sale_Offers_1510307629543.jpg?downsize=400:*&output-quality=80',
            'https://cdn.grabon.in/gograbon/images/web-images/uploads/1576131493071/amazon-pantry-coupons.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4h2c3bo87nqIPEqIvEaLbOAeXUkORKCgsrhSxMuAtUpraKj2glEgHK3kiH3-781ORxnHv7t-Ckc&usqp=CAU',
        ];

        return (
            <View style={styles.container}>

                <ImageSlider
                    autoPlayWithInterval={2000}
                    circleLoop
                    images={images}
                    customSlide={({ index, item, style, width }) => (
                        // It's important to put style here because it's got offset inside
                        <View
                            key={index}
                            style={[style, styles.customSlide,]}
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
    slider: {
        backgroundColor: '#000',
        height: 350,
    },
    customImage: {
        width: "100%",
        height: 200,
    },
});

export default slid;

