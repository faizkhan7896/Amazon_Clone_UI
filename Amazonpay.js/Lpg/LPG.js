
import * as React from 'react';

import { View, Image, Text, TouchableOpacity, Button, TextInput } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

function Mobile({ navigation }) {
    return (

        <View >

            <LinearGradient colors={['#4fe7ea', '#a2e6d1']} >
                <View style={{ paddingVertical: 8, }}>
                    <View style={{
                        height: 40, width: "100%", flexDirection: "row", alignItems: "center", borderBottomColor: 'gray'
                    }}>
                        <Image source={require("../../Assets/menu.png")}
                            style={{
                                height: 25, width: "5%", marginLeft: 10, alignSelf: "center"
                            }}
                        />

                        <Image source={require("../../Assets/Amazon.png")}
                            style={{
                                height: 25, width: "30%", resizeMode: "contain",
                            }}
                        />

                        <Image style={{
                            height: 24, width: 60, resizeMode: "contain", marginLeft: 70
                        }}
                            source={require("../../Assets/mic.png")}
                            onPress={() => navigation.navigate('cart')}

                        />
                        <Image style={{
                            height: 30, width: 130, flex: 1, resizeMode: "contain",
                        }}
                            source={require("../../Assets/cart.png")}

                        />

                    </View>
                </View>
                <View
                    style={{
                        height: 50, width: "100%", flexDirection: "row", alignItems: "center",
                        backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: '#bdbdbd'
                    }}>
                    <Image style={{
                        height: 25, width: "45%", resizeMode: "contain",
                    }}
                        source={require("../../Assets/amazonpayicon/AmazonPay.png")} />
                </View>

            </LinearGradient>
            <View style={{ backgroundColor: "white" }}>
                <Text style={{
                    marginTop: 30,
                    marginLeft: 15,
                    color: '#000',
                    marginBottom: 10,
                    fontSize: 20,
                    alignSelf: 'center',
                    fontWeight: 'bold'
                }}>LPG CYLENDER PAYMENT</Text>

                <View
                    style={{
                        height: 100, width: "95%", marginLeft: 10,
                        backgroundColor: "#e2f4f8", marginTop: 20, borderRadius: 5,
                    }}>

                    <Text style={{ color: '#000', fontSize: 13, fontWeight: 'bold', marginLeft: 15, marginTop: 7 }}>
                        Win Redmi9 and more                </Text>
                    <Text style={{ color: '#000', fontSize: 11, marginLeft: 15, }}>
                        Do recharge/bill payment of </Text>

                    <Text style={{ color: '#000', fontSize: 11, marginLeft: 15, }}>
                        between 23-26 March, chance to               </Text>

                    <Text style={{ color: '#000', fontSize: 11, marginLeft: 15, }}>
                        Win Redmi9 and unlock reward     </Text>

                    <Text style={{ color: '#000', fontSize: 11, marginLeft: 15, }}>
                        T&C apply</Text>
                    <View>

                        <Image style={{
                            height: 84, width: "176%", resizeMode: "contain", marginTop: -100, flexDirection: "row"
                        }}
                            source={require("../../Assets/amazonpayicon/LPG.png")} />

                    </View>


                </View>
                <View style={{
                    height: 40, width: "95%", borderWidth: 1, borderColor: "#a0a8a9", justifyContent: "center",
                    alignItems: "center", alignSelf: 'center', borderRadius: 5, marginTop: 10, backgroundColor: "#ffffff",
                }}>

                    <TextInput style={{ height: 80, width: "100%", fontWeight: 'bold', fontSize: 15, color: "gray" }}
                        placeholder="Select Operater to proced " placeholderTextColor="gray" />
                </View>



                <LinearGradient
                    colors={['#f6dd9f', '#f0c34e']}
                    style={{
                        marginTop: 20,
                        marginLeft: 10,
                        width: '95%',
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10
                    }}>

                    <Text style={{

                        fontSize: 18,
                        color: '#000',
                    }}> Pay</Text>
                </LinearGradient>




                <Image style={{
                    height: 110, width: "80%", marginLeft: 40, marginTop: 30, borderRadius: 20
                }}
                    source={require("../../Assets/sendmoneyicon/banner/vi.png")} />

            </View>


        </View >


    );
}
export default Mobile;