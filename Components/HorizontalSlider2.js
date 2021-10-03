import Boxproduct from "./Boxproduct";

import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";

function sli({ navigation }) {


    const listing = [

        {


            id: 'Amazon Pay',
            img: require("../Assets/amazonpayicon/pay.png.png"),
            link: "PayScreen"


        },


        {
            id: 'send money',
            img: require("../Assets/amazonpayicon/upi.png"),
            link: "Sendmoney"

        },

        {
            id: 'Scan &Pay',
            img: require("../Assets/amazonpayicon/scan.png"),
            link: "Scanner"

        },
        {
            id: 'Reward',
            img: require("../Assets/amazonpayicon/rew.png"),
            link: "Rewards"

        },
        {
            id: 'Offers',
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
                        style={{
                            marginTop: 10, marginBottom: 10, height: 130, width: 100,
                            backgroundColor: '#fff', alignItems: "center",
                            justifyContent: "center", alignSelf: "center"
                        }}>

                        <Image style={{
                            height: 70, width: 115, resizeMode: "contain", borderRadius: 150,
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
