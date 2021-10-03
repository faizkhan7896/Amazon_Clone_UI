




import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";

function sli({ navigation }) {


    const listing = [

        {


            id: '        Offers',
            img: require("../Assets/rewardIcons/rewards.png"),
            link: "Index"


        },

        {

            id: '         Shoping',
            img: require("../Assets/rewardIcons/shoppingrewards.png"),
            link: "Index"
        },
        {
            id: '         Store',
            img: require("../Assets/rewardIcons/Store.png"),
            link: "Index"

        },

        {
            id: '       travels',
            img: require("../Assets/rewardIcons/travel-offers.png"),
            link: "Index"

        },
        {
            id: 'Entertainment',
            img: require("../Assets/rewardIcons/movie-offers.png"),
            link: "Index"

        },
        {
            id: '        Health',
            img: require("../Assets/rewardIcons/health-offers.png"),
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
                        style={{ height: 80, width: 100, backgroundColor: '#fff' }}>

                        <Image style={{
                            height: 40, width: 115, resizeMode: "contain", borderRadius: 150, marginTop: 10
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


