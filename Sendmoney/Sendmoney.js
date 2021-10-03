
import * as React from 'react';

import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Sendmoneyoption from './Sendmoneyoption'
import DealsSlider from '../Components/DealsSlider';
import Slider from '../Components/Slider';
import Secondslider from './Secondslider';
function Sendmoney({ navigation }) {
    return (

        <View>

            <LinearGradient colors={['#4fe7ea', '#a2e6d1']} >
                <View style={{ paddingVertical: 8, }}>
                    <View style={{
                        height: 35, width: "100%", flexDirection: "row", alignItems: "center", borderBottomColor: 'gray'
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
                        height: 22, width: "45%", resizeMode: "contain", marginLeft: -25
                    }}
                        source={require("../Assets/amazonpayicon/AmazonPay.png")} />
                </View>

            </LinearGradient>
            <ScrollView>
                <View style={{
                    flex: 1, backgroundColor: "#fff", marginTop: 35,
                }}>
                    <Text style={{
                        marginLeft: 15,
                        color: '#000',
                        marginBottom: 10,
                        fontSize: 20,
                    }}>Send Money</Text>

                    <View style={{
                        height: 40, width: "90%", borderWidth: 1, borderColor: "#a0a8a9", justifyContent: "center", alignItems: "center",
                        alignSelf: 'center', marginTop: 9, backgroundColor: "#ffffff", flexDirection: "row"
                    }}>

                        <TextInput style={{ height: 60, width: "100%", fontSize: 15, color: "gray" }}
                            placeholder="Enter name,Phone or UPI ID" placeholderTextColor="gray" />
                    </View>

                    <Sendmoneyoption navigation={navigation} />
                    <DealsSlider navigation={navigation} />
                    <Secondslider navigation={navigation} />
                    <Image style={{
                        height: 225, width: "105%", resizeMode: "contain",
                    }}
                        source={require("../Assets/7.png")} />



                    <Image style={{
                        height: 225, width: "105%", resizeMode: "contain",
                    }}
                        source={require("../Assets/8.png")} />







                </View>

            </ScrollView>

        </View >


    );
}
export default Sendmoney;