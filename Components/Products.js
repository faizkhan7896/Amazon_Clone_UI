import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image } from "react-native";
import Slider from './Slider2';


function products({ navigation }) {
    return (

        <View style={{ backgroundColor: "#fff", height: "26.2%", }}>



            <View style={{
                borderWidth: 0.3, marginLeft: '3%', marginRight: "3%", borderColor: "#787877", borderRadius: 5, marginBottom: 10
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Shose')}>

                    <Text style={{ color: '#000', fontSize: 15, marginTop: 65, marginLeft: '40%', }}>
                        Chser hand free wall mounted Plastic Dust Proff Automatic Thoothbrrush Holder</Text>
                    <Image style={{
                        height: 124, width: "36%", resizeMode: "contain",
                    }}
                        source={require("../Assets/shoes/nike6.png")} />

                    <Text style={{ color: '#ff6303', fontSize: 15, marginTop: -115, marginLeft: '40%', }}>
                        #1 Best Saller
                </Text>

                    <Text style={{ color: '#000', fontSize: 15, marginTop: 5, marginLeft: '40%', }}>
                        $600</Text>

                    <Text style={{ color: 'green', fontSize: 12, marginTop: 5, marginLeft: '40%', }}>
                        In Stock</Text>

                    <Text style={{ color: '#000', fontSize: 15, marginTop: 5, marginLeft: '40%', }}>
                        Sold By
                    <Text style={{ color: '#0863a3', }}> Scroll Street</Text>
                    </Text>
                    <Text style={{ color: '#000', fontSize: 15, marginTop: 5, marginLeft: '48%', }}>
                        Amazon Delivered
                </Text>
                </TouchableOpacity>
            </View>


            <View style={{
                borderWidth: 0.3, marginLeft: '3%', marginRight: "3%", borderColor: "#787877", borderRadius: 5, marginBottom: 10
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Index2')}>

                    <Text style={{ color: '#000', fontSize: 15, marginTop: 65, marginLeft: '40%', }}>
                        Chser hand free wall mounted Plastic Dust Proff Automatic Thoothbrrush Holder</Text>
                    <Image style={{
                        height: 124, width: "36%", resizeMode: "contain",
                    }}
                        source={require("../Assets/012.png")} />

                    <Text style={{ color: '#ff6303', fontSize: 15, marginTop: -115, marginLeft: '40%', }}>
                        #1 Best Saller
                </Text>

                    <Text style={{ color: '#000', fontSize: 15, marginTop: 5, marginLeft: '40%', }}>
                        $600</Text>

                    <Text style={{ color: 'green', fontSize: 12, marginTop: 5, marginLeft: '40%', }}>
                        In Stock</Text>

                    <Text style={{ color: '#000', fontSize: 15, marginTop: 5, marginLeft: '40%', }}>
                        Sold By
                    <Text style={{ color: '#0863a3', }}> Scroll Street</Text>
                    </Text>
                    <Text style={{ color: '#000', fontSize: 15, marginTop: 5, marginLeft: '48%', }}>
                        Amazon Delivered
                </Text>
                </TouchableOpacity>
            </View>

            <View style={{
                borderWidth: 0.3, marginLeft: '3%', marginRight: "3%", borderColor: "#787877", borderRadius: 5, marginBottom: 10
            }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Pantry')}>

                    <Text style={{ color: '#000', fontSize: 15, marginTop: 65, marginLeft: '40%', }}>
                        Chser hand free wall mounted Plastic Dust Proff Automatic Thoothbrrush Holder</Text>
                    <Image style={{
                        height: 124, width: "36%", resizeMode: "contain",
                    }}
                        source={require("../Assets/04.png")} />

                    <Text style={{ color: '#ff6303', fontSize: 15, marginTop: -115, marginLeft: '40%', }}>
                        #1 Best Saller
                </Text>

                    <Text style={{ color: '#000', fontSize: 15, marginTop: 5, marginLeft: '40%', }}>
                        $600</Text>

                    <Text style={{ color: 'green', fontSize: 12, marginTop: 5, marginLeft: '40%', }}>
                        In Stock</Text>

                    <Text style={{ color: '#000', fontSize: 15, marginTop: 5, marginLeft: '40%', }}>
                        Sold By
                    <Text style={{ color: '#0863a3', }}> Scroll Street</Text>
                    </Text>
                    <Text style={{ color: '#000', fontSize: 15, marginTop: 5, marginLeft: '48%', }}>
                        Amazon Delivered
                </Text>
                </TouchableOpacity>
            </View>


            <View style={{
                borderWidth: 0.3, marginLeft: '3%', marginRight: "3%", borderColor: "#787877", borderRadius: 5, marginBottom: 10
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Pantry')}>

                    <Text style={{ color: '#000', fontSize: 15, marginTop: 65, marginLeft: '40%', }}>
                        Chser hand free wall mounted Plastic Dust Proff Automatic Thoothbrrush Holder</Text>
                    <Image style={{
                        height: 124, width: "36%", resizeMode: "contain",
                    }}
                        source={require("../Assets/05.png")} />

                    <Text style={{ color: '#ff6303', fontSize: 15, marginTop: -115, marginLeft: '40%', }}>
                        #1 Best Saller
                </Text>

                    <Text style={{ color: '#000', fontSize: 15, marginTop: 5, marginLeft: '40%', }}>
                        $600</Text>

                    <Text style={{ color: 'green', fontSize: 12, marginTop: 5, marginLeft: '40%', }}>
                        In Stock</Text>

                    <Text style={{ color: '#000', fontSize: 15, marginTop: 5, marginLeft: '40%', }}>
                        Sold By
                    <Text style={{ color: '#0863a3', }}> Scroll Street</Text>
                    </Text>
                    <Text style={{ color: '#000', fontSize: 15, marginTop: 5, marginLeft: '48%', }}>
                        Amazon Delivered
                </Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}
export default products;
