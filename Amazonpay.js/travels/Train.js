import React, { Component } from 'react'

import { View, Image, Text, TouchableOpacity, Picker } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../Components/Header'

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


function Train({ navigation }) {
    return (
        <View>
            <Header navigation={navigation} />
            <View style={{
                height: "20%", width: "100%", alignItems: "center", marginTop: 10,
                backgroundColor: "white", flexDirection: "row"
            }}>
                <Image style={{
                    height: 40, width: 100, resizeMode: "contain", marginTop: -30,
                    marginLeft: 125, marginRight: -20
                }}
                    source={require("../../Assets/train.png")}
                />
                <Text style={{
                    color: '#000',
                    fontWeight: "bold",
                    marginBottom: 30,
                    fontSize: 18,
                }}>Train</Text>


            </View>
            <View style={{ flexDirection: "row", height: 60, backgroundColor: "white" }}>
                <Image style={{
                    height: 12, width: 100, resizeMode: "contain", marginLeft: -25, marginTop: 15
                }}
                    source={require("../../Assets/circle.png")} />


                <Text style={{
                    width: "80%", height: 50, padding: 10,
                    color: '#737373',
                    fontSize: 18, marginLeft: -30,

                }}> Enter a Source City</Text>



            </View>
            <View style={{ height: 60, backgroundColor: "white", flexDirection: "row" }}>
                <Image style={{
                    height: 22, width: 100, resizeMode: "contain", marginLeft: -25, marginTop: 10
                }}
                    source={require("../../Assets/train.png")} />
                <Text style={{
                    width: "80%", height: 50, padding: 10,
                    fontSize: 18, marginLeft: -30, color: '#737373',

                }}>Enter Destination City</Text>
            </View>

            <View style={{
                backgroundColor: "white", height: 100,
            }}>
                <Text style={{
                    marginLeft: 15, color: '#737373', marginBottom: 10, fontSize: 15,
                }}>Departure</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{
                        marginLeft: 15, color: '#000', marginBottom: 10, fontSize: 23,
                    }}>29-Mar</Text>
                    <Text style={{
                        marginLeft: 10, color: '#737373', marginTop: 10, fontSize: 15,
                    }}>Tomorrow</Text>
                </View>
            </View>
            <LinearGradient
                colors={['#f6dd9f', '#f0c34e']}
                style={{
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
                }}> Find Train</Text>
            </LinearGradient>
            <View style={{
                flexDirection: "row", backgroundColor: "#fff",
                height: "40%", width: "100%",
            }}>
                <Text style={{ marginLeft: 160, marginTop: 20 }}>Powerd by</Text>

                <Image style={{
                    height: 22, width: 100, resizeMode: "contain", marginLeft: -25, marginTop: 20
                }}
                    source={require("../../Assets/redbus.png")} />


            </View>

        </View >
    )
}

export default Train;




