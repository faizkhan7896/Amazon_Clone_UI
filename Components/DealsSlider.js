

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
            'https://cdn.grabon.in/gograbon/images/web-images/uploads/1598005549370/amazon-pay-offers.jpg',
            'https://www.dealsshutter.com/uploads/social_images/stores/amazon-pay-offers-1529067917.png',
            'https://i.imgur.com/bDLTvWv.png',
            'https://s3.ap-south-1.amazonaws.com/affiliatecubber/images/offer_banners/amazon-swiggy-deals-for-all-foodies-1552024311.png',
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

