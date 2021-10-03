
import React, { Component } from 'react'
import { Touchable, TouchableOpacity } from 'react-native'
import { View, Image, Text } from 'react-native-animatable'

function FashionBox({ navigation }) {
    return (
        <View style={{
            marginBottom: 10, marginTop: 10,
            backgroundColor: "#fff", height: "7%"
        }}>
            <Text style={{
                color: '#000', fontSize: 23, fontWeight: 'bold', marginLeft: 15,
                marginTop: 15,
            }}>
                Wardrobe basics | Up to 70% off                         </Text>

            <View style={{ flexDirection: "row", width: "100%", }}>
                <View
                    style={{
                        height: 220, width: "40%", marginTop: 18, marginLeft: 20, marginTop: 40,
                        backgroundColor: "#fff",
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Main')}
                    >

                        <Image style={{
                            height: 200, width: "100%", resizeMode: "contain", alignSelf: "center", marginBottom: 20
                        }}
                            source={require("../Assets/fashion/men.png")} />
                    </TouchableOpacity>


                    <Text style={{
                        color: 'gray', fontSize: 16, marginLeft: 15,
                        marginTop: -25,
                    }}>
                        Up to 40% off                                </Text>



                </View>


                <View
                    style={{
                        height: 220, width: "40%", marginTop: 18, marginLeft: 40, marginTop: 40,
                        backgroundColor: "#fff",
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Main')}
                    >

                        <Image style={{
                            height: 154, width: "100%", alignSelf: "center", marginTop: 20
                        }}
                            source={require("../Assets/fashion/girl.png")} />
                    </TouchableOpacity>
                    <Text style={{
                        color: 'gray', fontSize: 16, marginLeft: 15,
                        marginTop: 15,
                    }}>
                        Up to 50% off                                </Text>


                </View>

            </View>


            <View style={{ flexDirection: "row", width: "100%" }}>
                <View
                    style={{
                        height: 200, width: "40%", marginTop: 18, marginLeft: 20, marginTop: 50,
                        backgroundColor: "#fff",
                    }}>

                    <Image style={{
                        height: 154, width: "100%", alignSelf: "center",
                    }}
                        source={require("../Assets/fashion/boy,png.jpg")} />
                    <Text style={{
                        color: 'gray', fontSize: 16, marginLeft: 15,
                        marginTop: 5,
                    }}>
                        Up to 60% off                             </Text>


                </View>

                <View
                    style={{
                        height: 200, width: "40%", marginTop: 18, marginLeft: 40, marginTop: 50,
                        backgroundColor: "#fff",
                    }}>

                    <Image style={{
                        height: 154, width: "100%", alignSelf: "center",
                    }}
                        source={require("../Assets/fashion/kidgirl.png")} />
                    <Text style={{
                        color: 'gray', fontSize: 16, marginLeft: 15,
                        marginTop: 5,
                    }}>
                        Up to 75% off                           </Text>



                </View>

            </View>


        </View>

    )
}

export default FashionBox;