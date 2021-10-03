import React, { Component } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import FashionBox from './FashionBox'
import Header from '../Components/Header'
import Fasionproduct from './Fasionproduct'
import Fashionslider from './Fashionslider'
export default class Main extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: "#fff", flex: 1, }}>
                    <Header />
                    <Fashionslider />
                    <Image style={{
                        height: 184, width: "100%", resizeMode: "contain", alignSelf: "center", marginTop: 20,
                    }}
                        source={require("../Assets/fashion//slider/70.png")} />
                    <FashionBox />


                    <Fasionproduct />
                    <FashionBox />




                </View>
            </ScrollView>
        )
    }
}
