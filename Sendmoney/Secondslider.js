import React, { Component } from 'react'
import { View, ScrollView, Image, TouchableOpacity, Text } from 'react-native'


const SECONDSlider = ({ navigation }) => {

    return (

        <ScrollView horizontal={true}>
            <View>
                <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', marginLeft: 15, marginTop: 10 }}>
                    Rewards</Text>
                <View style={{
                    height: 65, width: "100%", flexDirection: "row", alignItems: "center",
                    backgroundColor: "#fff", borderWidth: 5, borderColor: '#fff',
                    marginTop: 10, borderWidth: 1, borderColor: '#bdbdbd'
                }}>




                    <Image style={{
                        height: 60, width: 100, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center", borderRadius: 150

                    }}
                        source={require("../Assets/rewardIcons/rewards.png")}
                    />
                    <Image style={{
                        height: 60, width: 95, resizeMode: "contain", margin: 10,
                        borderRadius: 250,
                    }}
                        source={require("../Assets/rewardIcons/food.png")}
                    />

                    <Image style={{
                        height: 60, width: 85, resizeMode: "contain", margin: 10,
                        alignItem: "center", justifyContent: "center"

                    }}
                        source={require("../Assets/rewardIcons/Store.png")}
                    />

                    <Image style={{
                        height: 60, width: 90, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center", borderRadius: 150

                    }}
                        source={require("../Assets/rewardIcons/shoppingrewards.png")}
                    />
                    <Image style={{
                        height: 60, width: 90, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center", borderRadius: 150

                    }}
                        source={require("../Assets/rewardIcons/travel-offers.png")}
                    />
                    <Image style={{
                        height: 60, width: 90, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center", borderRadius: 150

                    }}
                        source={require("../Assets/rewardIcons/movie-offers.png")}
                    />
                    <Image style={{
                        height: 60, width: 90, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center", borderRadius: 150

                    }}
                        source={require("../Assets/rewardIcons/health-offers.png")}
                    />
                </View>
            </View>

        </ScrollView>


    )
}

export default SECONDSlider;