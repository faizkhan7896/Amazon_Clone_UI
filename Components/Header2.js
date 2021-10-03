import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'


function Header({ navigation }) {
    return (
        <View>
            <LinearGradient colors={['#4fe7ea', '#a2e6d1']} >
                <View style={{ paddingVertical: 8, }}>
                    <View style={{
                        height: 65, width: "100%", flexDirection: "row", alignItems: "center",
                    }}>
                        <Image source={require("../Assets/menu.png")}
                            style={{
                                height: 25, width: "5%", marginLeft: 10, alignSelf: "center"
                            }}
                        />

                        <Image source={require("../Assets/Amazon.png")}
                            style={{
                                height: 30, width: "35%", resizeMode: "contain",
                            }}
                        />


                        <Image style={{
                            height: 24, width: "16%", resizeMode: "contain", marginLeft: 70
                        }}
                            source={require("../Assets/mic.png")}
                            onPress={() => navigation.navigate('cart')}

                        />



                        <TouchableOpacity
                            onPress={() => { navigation.navigate('CartScreen') }}
                            style={{ height: 24, width: 25, }}>

                            <Image style={{
                                height: 40, width: "400%", flex: 1, resizeMode: "contain",
                            }}
                                source={require("../Assets/cart.png")} />

                        </TouchableOpacity>




                    </View>

                </View>

            </LinearGradient>
        </View>
    )
}
export default Header;
