
import * as React from 'react';

import { View, Image, Text, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import Travelslider from './Travelslider'
import Slider2 from './Slider2';
import Payslider from './Payslider';
import TravelSlider from './Travelslider';
import Slider from '../Components/Slider';
import RewardsSlider from './Rewardsslider';
import DealsSlider from '../Components/DealsSlider';

function PayScreen({ navigation }) {
    return (

        <View>

            <LinearGradient colors={['#4fe7ea', '#a2e6d1']} >
                <View style={{ paddingVertical: 8, }}>
                    <View style={{
                        height: 40, width: "100%", flexDirection: "row", alignItems: "center", borderBottomColor: 'gray'
                    }}>
                        <Image source={require("../Assets/menu.png")}
                            style={{
                                height: 25, width: "5%", marginLeft: 10, alignSelf: "center"
                            }}
                        />

                        <Image source={require("../Assets/Amazon.png")}
                            style={{
                                height: 25, width: "30%", resizeMode: "contain",
                            }}
                        />

                        <Image style={{
                            height: 24, width: 60, resizeMode: "contain", marginLeft: 70
                        }}
                            source={require("../Assets/mic.png")}
                            onPress={() => navigation.navigate('cart')}

                        />
                        <Image style={{
                            height: 30, width: 130, flex: 1, resizeMode: "contain",
                        }}
                            source={require("../Assets/cart.png")}

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
                        source={require("../Assets/amazonpayicon/AmazonPay.png")} />
                </View>

            </LinearGradient>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: "#e0e0e0cf" }}>

                    <View
                        style={{
                            height: 70, width: "93%", marginTop: 30, marginLeft: 15,
                            backgroundColor: "#f7f5dc", borderWidth: 1, borderColor: '#f7c1a2', marginTop: 20, borderRadius: 5
                        }}>

                        <Text style={{ color: '#000', fontSize: 13, fontWeight: 'bold', marginLeft: 15, marginTop: 7 }}>
                            Total Cashback Earned
                </Text>
                        <Text style={{ color: '#000', fontSize: 11, marginLeft: 15, marginTop: 7 }}>
                            Last update on 16-Mar-2021
                </Text>
                        <Text style={{
                            color: '#000', fontSize: 17, marginLeft: '80%', fontWeight: 'bold', marginTop: -30
                        }}>
                            $600
                </Text>
                    </View>

                    {/* Boxes  */}
                    <View style={{ flexDirection: "row", width: "100%" }}>
                        <View
                            style={{
                                height: 70, width: "45%", marginTop: 30, marginLeft: 15,
                                backgroundColor: "#fff", borderWidth: 1, borderColor: '#f7c1a2', marginTop: 20, borderRadius: 5
                            }}>
                            <Text style={{ color: '#000', fontSize: 13, marginLeft: 15, marginTop: 7 }}> Amazon pay Balance</Text>
                            <Text style={{ color: '#000', color: "green", fontSize: 13, marginLeft: 15, marginTop: 7 }}>
                                $600.00</Text>
                            <Image style={{
                                height: 10, width: "180%", resizeMode: "contain", marginTop: -15
                            }}
                                source={require("../Assets/next.png")} />

                        </View>

                        <View
                            style={{
                                height: 70, width: "45%", marginTop: 30, marginLeft: 15,
                                backgroundColor: "#fff", borderWidth: 1, borderColor: '#f7c1a2', marginTop: 20, borderRadius: 5
                            }}>
                            <Text style={{ color: '#000', fontSize: 13, marginLeft: 15, marginTop: 7 }}>
                                Amazon pay UPI</Text>
                            <Text style={{ color: '#000', fontSize: 10, marginLeft: 15, marginTop: 7 }}>
                                6260786975@apl</Text>
                            <Image style={{
                                height: 10, width: "180%", resizeMode: "contain", marginTop: -15
                            }}
                                source={require("../Assets/next.png")} />


                        </View>
                    </View>

                    <Payslider navigation={navigation} />
                    <DealsSlider navigation={navigation} />
                    <Slider2 navigation={navigation} />
                    <TravelSlider navigation={navigation} />
                    <RewardsSlider navigation={navigation} />

                    <Image style={{
                        height: 225, width: "105%", resizeMode: "contain",
                    }}
                        source={require("../Assets/7.png")} />


                    <Image style={{
                        height: 225, width: "105%", resizeMode: "contain",
                    }}
                        source={require("../Assets/12.png")} />

                    <Image style={{
                        height: 225, width: "105%", resizeMode: "contain",
                    }}
                        source={require("../Assets/13.png")} />
                    {/* <Image style={{
                        height: 225, width: "105%", resizeMode: "contain",
                    }}
                        source={require("../Assets/ProductCard.png")} />


                    <Image style={{
                        height: 225, width: "105%", resizeMode: "contain",
                    }}
                        source={require("../Assets/8.png")} />

                    <Image style={{
                        height: 225, width: "108%", resizeMode: "contain",
                    }}
                        source={require("../Assets/6.png")} /> */}

                    <Image style={{
                        height: 225, width: "105%", resizeMode: "contain",
                    }}
                        source={require("../Assets/8.png")} />







                </View>

            </ScrollView>

        </View >


    );
}
export default PayScreen;