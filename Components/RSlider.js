import Boxproduct from "./Boxproduct";

import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";

function sli({ navigation }) {


    const listing = [

        {


            id: '          Prime',
            img: require("../Assets/New_Prime.png"),
            link: "D2hpayment"


        },

        {

            id: '        Groceres',
            img: require("../Assets/fresh.png"),
            link: "D2hpayment"
        },
        {
            id: '        Mobiles',
            img: require("../Assets/mob.png"),
            link: "D2hpayment"

        },

        {
            id: '          fasion',
            img: require("../Assets/gentleman.png"),
            link: "D2hpayment"

        },
        {
            id: '        Furniture',
            img: require("../Assets/fur.png"),
            link: "D2hpayment"

        },
        {
            id: '              Appliances',
            img: require("../Assets/home.png"),
            link: "D2hpayment"

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
                        style={{ marginTop: 10, marginBottom: 10, height: 90, width: 100, backgroundColor: '#fff' }}>

                        <Image style={{
                            height: 60, width: 115, resizeMode: "contain", borderRadius: 150,
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
