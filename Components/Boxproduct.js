

import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from "react-native";

function Components({ navigation }) {

    return (
        <View>
            <View style={{ flexDirection: "row", width: "100%" }}>
                <View
                    style={{
                        height: 250, width: "45%", marginTop: 30, marginLeft: 15,
                        backgroundColor: "#fff", borderWidth: 1, borderColor: '#f7c1a2', borderRadius: 5
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Pantry')}>

                        <Image style={{
                            height: 124, width: "56%", resizeMode: "contain", alignSelf: "center"
                        }}
                            source={require("../Assets/01.png")} />
                        <Text style={{ color: '#000', fontSize: 13, padding: 20 }}>
                            Chser hand free wall mounted Plastic Holder</Text>

                        <Text style={{ color: 'green', fontSize: 17, marginLeft: 15, marginTop: -10 }}>
                            $600</Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        height: 250, width: "45%", marginTop: 30, marginLeft: 15,
                        backgroundColor: "#fff", borderWidth: 1, borderColor: '#f7c1a2', borderRadius: 5
                    }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Pantry')}>
                        <Image style={{
                            height: 124, width: "56%", resizeMode: "contain", alignSelf: "center"
                        }}
                            source={require("../Assets/02.png")} />
                        <Text style={{ color: '#000', fontSize: 13, padding: 20 }}>
                            Chser hand free wall mounted Plastic Holder</Text>

                        <Text style={{ color: 'green', fontSize: 17, marginLeft: 15, marginTop: -10 }}>
                            $600</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}
export default Components;