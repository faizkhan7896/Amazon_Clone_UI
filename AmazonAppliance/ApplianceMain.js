import React, { Component } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import ApplianceBox from './ApplianceBox'
import Applianceproduct from './Applianceproduct'
import Applianceslider from './Applianceslider'
import Header from '../Components/Header'


function ApplianceMain() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: "#fff", flex: 1, }}>
                <Header />
                <Applianceslider />
                <Image style={{
                    height: 200, width: "100%", resizeMode: "contain", alignSelf: "center", marginTop: 20,
                }}
                    source={require("../Assets/appliances/Slider/04.png")} />
                <ApplianceBox />


                <Applianceproduct />
                <ApplianceBox />




            </View>
        </ScrollView>
    )
}

export default ApplianceMain;