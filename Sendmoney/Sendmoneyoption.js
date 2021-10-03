import React, { Component } from 'react'
import { View, ScrollView, Image, TouchableOpacity, Text } from 'react-native'


const TravelSlider = ({ navigation }) => {

    return (

        <ScrollView horizontal={true}>
            <View>

                <View style={{
                    height: 65, width: "100%", flexDirection: "row", alignItems: "center",
                    backgroundColor: "#fff", borderWidth: 5, borderColor: '#fff',
                    marginTop: 25, borderWidth: 1, borderColor: '#bdbdbd'
                }}>
                    <Image style={{
                        height: 50, width: 100, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center", borderRadius: 150

                    }}
                        source={require("../Assets/sendmoneyicon/upi.png")}
                    />
                    <Image style={{
                        height: 70, width: 95, resizeMode: "contain", margin: 10,
                        borderRadius: 350,
                    }}
                        source={require("../Assets/sendmoneyicon/SCAN.png")}
                    />

                    <Image style={{
                        height: 50, width: 85, resizeMode: "contain", margin: 10,
                        alignItem: "center", justifyContent: "center"

                    }}
                        source={require("../Assets/sendmoneyicon/nearshops.png")}
                    />

                    <Image style={{
                        height: 50, width: 90, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center", borderRadius: 150

                    }}
                        source={require("../Assets/sendmoneyicon/phone.png")}
                    />
                    <Image style={{
                        height: 100, width: 90, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center", borderRadius: 150

                    }}
                        source={require("../Assets/sendmoneyicon/BANCK.png")}
                    />
                </View>
            </View>

        </ScrollView>


    )
}

export default TravelSlider;