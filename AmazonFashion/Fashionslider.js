
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class DealsSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../Assets/fashion/slider/02.png'),
                require('../Assets/fashion/slider/01.png.jpg'),

                require('../Assets/fashion/slider/03.png'),
                require('../Assets/fashion/slider/04.png'),
                require('../Assets/fashion/slider/05.png'),
            ]
        };
    }

    render() {
        return (
            <View>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={260}

                    dotColor="#fff"
                    inactiveDotColor="#6b6965"
                    autoplay
                    circleLoop
                />
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: "150%",
    }
});
