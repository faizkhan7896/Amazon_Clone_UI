

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
            'https://image.freepik.com/free-psd/horizontal-banner-facebook-cover-with-minimal-design-home-furniture-discount_237398-109.jpg',
            'https://i.ytimg.com/vi/hnGyEQNzpKw/maxresdefault.jpg',
            'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Events/FreedomSale/Teaser/PC/Rec/HK._CB440726831_._SL1280_FMjpg_.jpg',
            'https://img.freepik.com/free-psd/modern-furniture-horizontal-banner-template_23-2148679821.jpg?size=626&ext=jpg',
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

