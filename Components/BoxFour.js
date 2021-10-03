
import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from "react-native";


function Boxproduct({ navigation }) {
    return (
        <View style={{
            marginBottom: 10, marginTop: 10,
            backgroundColor: "#fff", height: "13.5%"
        }}>

            <Text style={{
                color: '#000', fontSize: 23, fontWeight: 'bold', marginLeft: 15,
                marginTop: 15,
            }}>
                Up to 40% off | Fab Phones Fest                                  </Text>

            <View style={{ flexDirection: "row", width: "100%" }}>
                <View
                    style={{
                        height: 180, width: "40%", marginTop: 18, marginLeft: 20, marginTop: 40,
                        backgroundColor: "#fff", borderWidth: 1, borderColor: '#cfcfcf',
                    }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Index2')}>


                        <Image style={{
                            height: 154, width: "96%", resizeMode: "contain", alignSelf: "center", marginTop: 5
                        }}
                            source={require("../Assets/012.png")} />
                        <Text style={{
                            color: '#000', fontSize: 16, marginLeft: 15,
                            marginTop: 45,
                        }}>
                            Up to 40% off | Fab Phones Fest                                  </Text>
                    </TouchableOpacity>


                </View>


                <View
                    style={{
                        height: 180, width: "40%", marginTop: 18, marginLeft: 40, marginTop: 40,
                        backgroundColor: "#fff", borderWidth: 1, borderColor: '#f7c1a2',
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Laptops')}>


                        <Image style={{
                            height: 124, width: "100%", resizeMode: "contain", alignSelf: "center", marginTop: 25
                        }}
                            source={require("../Assets/mac.png")} />

                        <Text style={{
                            color: '#000', fontSize: 16, marginLeft: 15,
                            marginTop: 45,
                        }}>
                            MacBook 13"Touch Bar Skins                                  </Text>

                    </TouchableOpacity>
                </View>

            </View>


            <View style={{ flexDirection: "row", width: "100%" }}>
                <View
                    style={{
                        height: 180, width: "40%", marginTop: 18, marginLeft: 20, marginTop: 80,
                        backgroundColor: "#fff", borderWidth: 1, borderColor: '#f7c1a2',
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Digital')}>

                        <Image style={{
                            height: 124, width: "76%", resizeMode: "contain", alignSelf: "center", marginTop: 10,
                        }}
                            source={require("../Assets/digital/watch.png")} />
                        <Text style={{
                            color: '#000', fontSize: 16, marginLeft: 15,
                            marginTop: 45,
                        }}>

                            Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage)                                 </Text>
                    </TouchableOpacity>

                </View>

                <View
                    style={{
                        height: 180, width: "40%", marginTop: 18, marginLeft: 40, marginTop: 80,
                        backgroundColor: "#fff", borderWidth: 1, borderColor: '#f7c1a2',
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Headphones')}>

                        <Image style={{
                            height: 124, width: "76%", resizeMode: "contain", alignSelf: "center", marginTop: 25
                        }}
                            source={require("../Assets/digital/earpods.png")} />
                        <Text style={{
                            color: '#000', fontSize: 16, marginLeft: 15,
                            marginTop: 45,
                        }}>
                            boAt Bassheads  Wired Earphones                       </Text>

                        <Text
                            style={{
                                color: '#0863a3', fontSize: 15, marginLeft: -200, marginTop: 25
                            }}>
                            see all deals</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>


    )
}
export default Boxproduct;
