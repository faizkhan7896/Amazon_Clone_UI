

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
            'https://i.pinimg.com/564x/4b/06/7e/4b067e4c234e32f2ac4e1744c1378842.jpg',
            'https://handcmediastorage.blob.core.windows.net/etc/landingpages/au/men/accessories/herobanner_960x425.jpg',
            'https://futureworldindia.in/wp-content/uploads/2021/01/iPhone-12mini-with-case-offer-web.jpg',
            'https://image.freepik.com/free-vector/season-sale_62951-24.jpg',
            'https://image.freepik.com/free-vector/happy-holi-background_1302-16704.jpg',
            'https://image.freepik.com/free-psd/new-season-fashion-sale-web-banner-social-media-post-template_220443-261.jpg',
            'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30046441.jpg',
            'https://futureworldindia.in/wp-content/uploads/2020/12/apple-watch-banner-homepage.jpg',
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



// import React, { Component } from "react";
// import { StyleSheet, Text, View, Image } from "react-native";

// import { SliderBox } from "react-native-image-slider-box";

// export default class Slider extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             images: [
//                 require('../Assets/ProductCard.png'),
//                 require('../Assets/5.png'),
//                 require('../Assets/b7f5ce68ff3166b351a6e3c6ee934020.png'),
//                 require('../Assets/prime2.png'),
//                 require('../Assets/8.png'),
//             ]
//         };
//     }

//     render() {
//         return (
//             <View>
//                 <SliderBox
//                     images={this.state.images}
//                     dotColor="#fff"
//                     inactiveDotColor="#6b6965"
//                     onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
//                     autoplay
//                     circleLoop

//                     dotStyle={{
//                         width: 10,
//                         height: 10,
//                         borderRadius: 5,
//                         backgroundColor: 'rgba(255, 255, 255, 0.92)'
//                     }}
//                     inactiveDotOpacity={0.20}
//                     inactiveDotScale={0.5}
//                 />
//             </View>);
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginBottom: "150%"
//     }
// });
