import React, { Component } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Header from '../Components/Header'
import FurnitureBox from './FurnitureBox'
import Furnitureproduct from './Furnitureproduct'
import Furnitureslider from './Furnitureslider'
function FurnitureMain() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: "#fff", flex: 1, }}>
                <Header />
                <Furnitureslider />
                <Image style={{
                    height: 384, width: "100%", resizeMode: "contain", alignSelf: "center", marginTop: 20,
                }}
                    source={require("../Assets/Furniture/slider/banner.png")} />
                <FurnitureBox />


                <Furnitureproduct />
                <FurnitureBox />




            </View>
        </ScrollView>
    )
}

export default FurnitureMain;
