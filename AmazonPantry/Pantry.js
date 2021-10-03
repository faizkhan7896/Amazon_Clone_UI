
import React, { Component } from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import Slider2 from '../Components/Slider2';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import PantrySlider from './PantrySlider'


function Amazonprime() {
    return (

        <View>
            <Header />
            <ScrollView>
                <Image style={{
                    height: 150, width: "100%", marginTop: 5
                }}
                    source={require("../Assets/amazonpayicon/pantrybanner/01.png")} />





                <Image style={{
                    height: 100, width: "100%", marginTop: 5
                }}
                    source={require("../Assets/dark.png")} />







                <PantrySlider />
                <View style={{
                    height: "35%", width: "100%",
                    backgroundColor: "#fff", marginTop: 20,
                }}>
                    <Text style={{
                        color: '#000', fontSize: 17, fontWeight: 'bold', marginLeft: 15,
                        marginTop: 13,
                    }}>
                        Steps to get 50% off                </Text>
                    <Text style={{
                        color: '#000', fontSize: 17, fontWeight: 'bold', marginLeft: 15,
                        marginTop: 37,
                    }}>
                        Choose a plan                </Text>


                    <View
                        style={{
                            height: "49%", width: "91%", borderRadius: 10, borderColor: "#cfcfcf",
                            backgroundColor: "#fff", marginTop: 20, borderWidth: 1, marginLeft: 20,
                        }}>
                        <Text style={{
                            color: '#000', fontSize: 15, fontWeight: 'bold', marginLeft: 55,
                            marginTop: 7,
                        }}> Try Prime Free

                    </Text>
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

                                fontSize: 16,
                                color: '#000',
                            }}> Start your 30-Days Free trial</Text>
                        </LinearGradient>

                        <Text style={{
                            color: 'gray', fontSize: 13, marginLeft: 55,
                            marginTop: 37,
                        }}> Get Rs.500 Cashback after Rs.999 charge at the
                            end of free trial, upon succesful age varification

                    </Text>

                        <Text style={{
                            color: 'gray', fontSize: 15, marginLeft: 25,
                            marginTop: 7,
                        }}> Start trial with any credit or select debit cards

                    </Text>
                        <View
                            style={{
                                height: "15.4%", width: "100%",
                                backgroundColor: "#e8e8e8", marginTop: 20, borderBottomEndRadius: 10, borderBottomStartRadius: 10,
                            }}>
                            <Text style={{
                                color: '#000', fontSize: 15, fontWeight: 'bold', marginLeft: 85,
                                marginTop: 10,
                            }}> join Prime at 50% off

                    </Text>
                        </View>

                    </View>
                </View>

                <Slider2 />
                <Slider2 />
                <Slider2 />
                <Slider2 />

            </ScrollView>
        </View>

    )
}

export default Amazonprime;