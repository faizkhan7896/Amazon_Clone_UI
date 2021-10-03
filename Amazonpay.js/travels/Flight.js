import React, { Component } from 'react'

import { View, Image, Text, TouchableOpacity, Picker } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import RadioButton from 'react-native-radio-button'
import Header from '../../Components/Header'

function Flight({ navigation }) {
    return (
        <View>
            < Header navigation={navigation} />
            <View
                style={{
                    height: 400, width: "100%", flexDirection: "row", alignItems: "center",
                    backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: '#bdbdbd'
                }}>
                <Image style={{
                    height: 40, width: 100, resizeMode: "contain", marginBottom: 350,

                    marginLeft: 125, marginRight: -20
                }}
                    source={require("../../Assets/travelicons/flights.png")}
                />
                <Text style={{
                    color: '#000',
                    fontWeight: "bold",
                    marginBottom: 350,
                    fontSize: 18,
                }}>Flight</Text>


                <View
                    style={{ marginLeft: -230, marginTop: -150, flexDirection: "row" }}>
                    <RadioButton
                        animation={'bounceIn'}
                        isSelected={true}
                        onPress={() => doSomething('hello')}
                    />
                    <Text style={{ color: "black", marginLeft: 20 }}>One Way</Text>
                </View>

                <View
                    style={{ marginLeft: 50, marginTop: -150, flexDirection: "row" }}>
                    <RadioButton
                        animation={'bounceIn'}
                        isSelected={true}
                        buttonInnerColor={'#e74c3c'}


                        onPress={() => doSomething('hello')}
                    />
                    <Text style={{ color: "black", marginLeft: 20 }}>Round Trip</Text>
                </View>
                <Image style={{
                    height: 12, width: 100, resizeMode: "contain",

                    marginLeft: -325,
                }}
                    source={require("../../Assets/circle.png")}
                />
                <Text style={{
                    marginLeft: -30, borderWidth: 1, borderColor: "#cfcfcf", padding: 3,
                    fontSize: 10, height: 25, width: 30, padding: 4
                }}>
                    DEL</Text>

                <Text style={{
                    width: "80%", height: 50, padding: 10,
                    fontSize: 18, marginLeft: 10,

                }}> New Delhi</Text>


                <Image style={{
                    height: 30, width: 100, resizeMode: "contain",

                    marginLeft: -450, marginTop: 140
                }}
                    source={require("../../Assets/plane.png")}
                />
                <Text style={{
                    marginTop: 140, marginLeft: -23, borderWidth: 1, borderColor: "#cfcfcf",
                    fontSize: 10, height: 25, width: 35, padding: 4
                }}>BOM</Text>

                <Text style={{
                    width: "80%", marginTop: 140, height: 50, padding: 10, marginLeft: -30,
                    alignItems: "center", justifyContent: "center", marginLeft: 10,
                    fontSize: 18, borderTopWidth: 1, borderColor: "#cfcfcf",
                }}> Mumbai</Text>
            </View>
            <View style={{
                marginTop: -90, backgroundColor: "white", height: 100,
                borderTopWidth: 1, borderColor: "#cfcfcf"
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

                    <Text style={{
                        marginLeft: 40, color: '#737373', marginTop: -30, fontSize: 15,
                    }}>Add</Text>
                    <Text style={{
                        marginLeft: -30, color: '#737373', marginBottom: 10, fontSize: 20, marginTop: 10,
                    }}>Return</Text>
                    <Image style={{
                        height: 23, width: 50, resizeMode: "contain", marginTop: -15

                    }}
                        source={require("../../Assets/plus.png")}
                    />

                </View>
            </View>


            <View style={{ backgroundColor: "white", height: 100, borderTopWidth: 1, borderColor: "#cfcfcf" }}>
                <Text style={{
                    marginLeft: 15, color: '#737373', marginBottom: 10, fontSize: 15,
                }}>Traveler</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{
                        marginLeft: 15, color: '#000', marginBottom: 10, fontSize: 23,
                    }}>01</Text>


                    <Text style={{
                        marginLeft: 175, color: '#737373', marginTop: -30, fontSize: 15,
                    }}>Class</Text>
                    <Text style={{
                        marginLeft: -30, color: '#000', marginBottom: 10, fontSize: 20, marginTop: 10,
                    }}>Economy</Text>


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
                    }}> Find flights</Text>
                </LinearGradient>






            </View>
        </View >
    )
}

export default Flight;

