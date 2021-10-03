


import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";

function sli({ navigation }) {


    const listing = [

        {


            id: '        Flight',
            img: require("../Assets/travelicons/flights.png"),
            link: "Flight"


        },

        {

            id: '          Bus',
            img: require("../Assets/travelicons/Bus.png"),
            link: "Bus"
        },
        {
            id: '           Car',
            img: require("../Assets/travelicons/car.png"),
            link: "Car"

        },

        {
            id: '          Train',
            img: require("../Assets/train.png"),
            link: "Train"

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
                        style={{ marginBottom: 10, height: 70, width: 100, backgroundColor: '#fff' }}>

                        <Image style={{
                            height: 40, width: 115, resizeMode: "contain", borderRadius: 150, marginTop: 5
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


