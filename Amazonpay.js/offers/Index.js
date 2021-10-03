
import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Offer from './Offer'
import LinearGradient from 'react-native-linear-gradient';
import Slider2 from '../../Components/Slider2';
import DealsSlider from '../../Components/DealsSlider';


function OfferScreen({ navigation }) {
    return (
        <View>

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
            <Text style={{
                marginTop: 30,
                marginLeft: 15,
                color: '#000',
                marginBottom: 10,
                fontSize: 20,
                alignSelf: 'center',
                fontWeight: 'bold'
            }}>ALL CATEGORIES</Text>


            <ScrollView>
                <Slider2 />
                <Offer />
                <DealsSlider />

            </ScrollView>
        </View>
    );
}
export default OfferScreen;