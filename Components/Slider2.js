

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
            'https://futureworldindia.in/wp-content/uploads/2020/12/apple-watch-banner-homepage.jpg',
            'https://futureworldindia.in/wp-content/uploads/2020/12/MacBook-Air_Web-Banner_Available-Now_2.jpg',
            'https://futureworldindia.in/wp-content/uploads/2020/12/Mac-Mini_Web-Banner_Available-Now_2.jpg',
            'https://i.pinimg.com/564x/2b/02/9a/2b029af5b328c2e585b7804c2817659f.jpg',

            'https://cdn.shopify.com/s/files/1/0019/9534/1870/files/truewirelessmusic_lexuma_true_wireless_stereo_earbuds_theme_banner_580x.png?v=1553498735',
            'https://placeimg.com/640/640/beer',
        ];

        return (
            <View style={styles.container}>

                <ImageSlider
                    autoPlayWithInterval={3000}
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
        height: 230,
        backgroundColor: '#F5FCFF',
    },
    slider: { backgroundColor: '#000', height: 350 },


    contentText: { color: '#fff' },


    customImage: {
        width: "100%",
        height: 230,
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
//                 require('../Assets/09.png'),

//                 require('../Assets/secondSider/mob1.png'),
//                 require('../Assets/secondSider/mob2.png'),
//                 require('../Assets/secondSider/mob4.png'),
//                 require('../Assets/secondSider/mob5.png'),
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
//                         width: 15,
//                         borderRadius: 15,
//                     }}
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
