


import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";

function sli({ navigation }) {


    const listing = [

        {


            id: '   Recharge',
            img: require("../Assets/amazonpayicon/recharge.png"),
            link: "Mobile"


        },

        {

            id: ' D2H recharge',
            img: require("../Assets/amazonpayicon/DTH.png"),
            link: "D2hpayment"
        },
        {
            id: '      Pay bills',
            img: require("../Assets/amazonpayicon/bills.png"),
            link: "Bills"

        },

        {
            id: 'Book cylender',
            img: require("../Assets/amazonpayicon/LPG.png"),
            link: "LPG"

        },
        {
            id: '        CCBP',
            img: require("../Assets/amazonpayicon/ccbp.png"),
            link: "Ccbpayment"

        },
        {
            id: '         Offers',
            img: require("../Assets/amazonpayicon/all-categories.png"),
            link: "Index"

        },




    ];
    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                data={listing}
                renderItem={({ index, item }) =>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.link)}
                        style={{ marginTop: 10, marginBottom: 10, height: 80, width: 100, backgroundColor: '#fff' }}>

                        <Image style={{
                            height: 45, width: 85, resizeMode: "contain", borderRadius: 150, alignSelf: "center", marginTop: 5
                        }}
                            source={item.img} />
                        <Text>{item.id}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    )


}
export default sli;


