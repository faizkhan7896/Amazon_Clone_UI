
import * as React from 'react';

import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Slider2 from './Slider2';
import Products from './Products';

function CartScreen({ navigation }) {
    return (

        <View>
            <ScrollView>
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
                                height: 24, width: 60, resizeMode: "contain", marginLeft: 70
                            }}
                                source={require("../Assets/mic.png")}
                                onPress={() => navigation.navigate('cart')}

                            />
                            <TouchableOpacity onPress={() => { navigation.navigate('CartScreen') }} style={{ height: 24, width: 25, }}>
                                <Image style={{
                                    height: 30, width: 130, flex: 1, resizeMode: "contain",
                                }}
                                    source={require("../Assets/cart.png")}

                                />

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            height: 30, width: "100%", flexDirection: "row", alignItems: "center", backgroundColor: "#66ccce"
                        }}>
                        <Image style={{
                            height: 20, width: "15%", resizeMode: "contain",
                        }}
                            source={require("../Assets/loc.png")} />
                        <Text style={{ width: "85%" }}>Delivery to Alfaiz-Indore 452007</Text>


                    </View>
                </LinearGradient>


                <View
                    style={{
                        height: '8%', width: "100%", backgroundColor: "white", borderBottomWidth: 0.3, borderColor: 'gray'
                    }}>

                    <Text style={{ color: '#000', fontSize: 18, marginLeft: 150, marginTop: 20 }}>
                        Your Amazon Basket is empty</Text>
                    <Text style={{ color: '#0863a3', marginBottom: - 80, marginLeft: 150, }}>
                        see recomendations</Text>

                    <Image style={{
                        height: 80, width: 130, resizeMode: "contain", marginTop: 10
                    }}
                        source={require("../Assets/cart.png")}

                    />


                </View>
                <View
                    style={{
                        height: '13%', width: "100%", backgroundColor: "white", borderColor: 'gray'
                    }}>

                    <Text style={{
                        color: '#000', fontWeight: 'bold', marginLeft: 10
                        , fontSize: 18, marginTop: 15
                    }}>
                        Return are easy</Text>

                    <Text style={{ color: '#000', marginBottom: 10, marginLeft: 10 }}>
                        7-30 Days returns on most items as per the Amazon.in return policy</Text>

                    <Text style={{
                        color: '#000', fontWeight: 'bold', marginLeft: 10
                        , fontSize: 16, marginTop: 15
                    }} >Pay with Amazon Pay UPI</Text>

                    <Text style={{ color: '#c20009', marginBottom: 10, marginLeft: 10, }}>
                        Secured payment | Instant refund</Text>

                    <Text style={{ color: '#0863a3', marginBottom: 10, marginLeft: 10, marginTop: 5, fontSize: 10 }}>

                        Learn more</Text>
                </View>
                <Products />

            </ScrollView>
        </View>


    );
}
export default CartScreen;