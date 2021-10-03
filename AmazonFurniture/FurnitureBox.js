
import React, { Component } from 'react'
import { View, Image, Text } from 'react-native-animatable'

export default class Boxproduct extends Component {
    render() {
        return (
            <View style={{
                marginBottom: 10, marginTop: 10,
                backgroundColor: "#fff", height: "7%"
            }}>
                <Text style={{
                    color: '#000', fontSize: 23, fontWeight: 'bold', marginLeft: 15,
                    marginTop: 15,
                }}>
                    Wardrobe basics | Up to 70% off                         </Text>

                <View style={{ flexDirection: "row", width: "100%", }}>
                    <View
                        style={{
                            height: 220, width: "40%", marginTop: 18, marginLeft: 20, marginTop: 40,
                            backgroundColor: "#fff",
                        }}>

                        <Image style={{
                            height: 200, width: "100%", resizeMode: "contain", alignSelf: "center", marginBottom: 20
                        }}
                            source={require("../Assets/Furniture/01.png")} />
                        <Text style={{
                            color: 'black', fontSize: 19, marginLeft: 15,
                            marginTop: -10,
                        }}>
                            Royal Arm'Chair                                </Text>



                    </View>


                    <View
                        style={{
                            height: 220, width: "40%", marginTop: 18, marginLeft: 40, marginTop: 20,
                            backgroundColor: "#fff",
                        }}>

                        <Image style={{
                            height: 200, width: "100%", alignSelf: "center", marginTop: 20
                        }}
                            source={require("../Assets/Furniture/02.png")} />

                        <Text style={{
                            color: 'black', fontSize: 19, marginLeft: 15,
                            marginTop: 15,
                        }}>
                            Royal Sofa's                            </Text>


                    </View>

                </View>


                <View style={{ flexDirection: "row", width: "100%" }}>
                    <View
                        style={{
                            height: 200, width: "40%", marginTop: 18, marginLeft: 20, marginTop: 50,
                            backgroundColor: "#fff",
                        }}>

                        <Image style={{
                            height: 200, width: "100%", alignSelf: "center",
                        }}
                            source={require("../Assets/Furniture/03.png")} />
                        <Text style={{
                            color: 'black', fontSize: 19, marginLeft: 15,
                            marginTop: 10,
                        }}>
                            Royal Bed's                       </Text>


                    </View>

                    <View
                        style={{
                            height: 200, width: "40%", marginTop: 18, marginLeft: 40, marginTop: 50,
                            backgroundColor: "#fff",
                        }}>

                        <Image style={{
                            height: 200, width: "100%", alignSelf: "center",
                        }}
                            source={require("../Assets/Furniture/04.png")} />
                        <Text style={{
                            color: 'black', fontSize: 17, marginLeft: 15,
                            marginTop: 10,
                        }}>
                            Royal Dianing Set's                         </Text>



                    </View>

                </View>


            </View>

        )
    }
}
