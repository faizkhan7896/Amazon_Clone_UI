
import * as React from 'react';

import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';


import Payslider from '../Payslider';
import Header from '../../Components/Header'

function PayScreen({ navigation }) {
    return (

        <View>

            <Header navigation={navigation} />
            <View
                style={{
                    height: 60, width: "100%", flexDirection: "row", alignItems: "center",
                    backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: '#d9d9d9'
                }}>
                <Image style={{
                    height: 25, width: "45%", resizeMode: "contain",
                }}
                    source={require("../../Assets/amazonpayicon/AmazonPay.png")} />
            </View>

            <ScrollView>
                <View style={{
                    height: 80, width: "100%", flexDirection: "row", alignItems: "center",
                    backgroundColor: "white", marginTop: 80
                }}>

                    <Image style={{
                        height: 70, width: 95, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center",

                    }}
                        source={require("../../Assets/amazonpayicon/upi.png")}
                    />
                    <Image style={{
                        height: 150, width: 100, resizeMode: "contain", margin: 10,

                    }}
                        source={require("../../Assets/amazonpayicon/recharge.png")}
                    />

                    <Image style={{
                        height: 60, width: 65, resizeMode: "contain", margin: 10,
                        alignItem: "center", justifyContent: "center"

                    }}
                        source={require("../../Assets/amazonpayicon/DTH.png")}
                    />

                    <Image style={{
                        height: 100, width: 90, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center",

                    }}
                        source={require("../../Assets/amazonpayicon/LPG.png")}
                    />
                </View>
                <View style={{
                    height: 80, width: "100%", flexDirection: "row", alignItems: "center",
                    backgroundColor: "white", marginTop: 80
                }}>

                    <Image style={{
                        height: 70, width: 95, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center",

                    }}
                        source={require("../../Assets/amazonpayicon/upi.png")}
                    />
                    <Image style={{
                        height: 150, width: 100, resizeMode: "contain", margin: 10,

                    }}
                        source={require("../../Assets/amazonpayicon/recharge.png")}
                    />

                    <Image style={{
                        height: 60, width: 65, resizeMode: "contain", margin: 10,
                        alignItem: "center", justifyContent: "center"

                    }}
                        source={require("../../Assets/amazonpayicon/DTH.png")}
                    />

                    <Image style={{
                        height: 100, width: 90, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center",

                    }}
                        source={require("../../Assets/amazonpayicon/LPG.png")}
                    />
                </View>
                <View style={{
                    height: 80, width: "100%", flexDirection: "row", alignItems: "center",
                    backgroundColor: "white", marginTop: 80
                }}>

                    <Image style={{
                        height: 70, width: 95, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center",

                    }}
                        source={require("../../Assets/amazonpayicon/upi.png")}
                    />
                    <Image style={{
                        height: 150, width: 100, resizeMode: "contain", margin: 10,

                    }}
                        source={require("../../Assets/amazonpayicon/recharge.png")}
                    />

                    <Image style={{
                        height: 60, width: 65, resizeMode: "contain", margin: 10,
                        alignItem: "center", justifyContent: "center"

                    }}
                        source={require("../../Assets/amazonpayicon/DTH.png")}
                    />

                    <Image style={{
                        height: 100, width: 90, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center",

                    }}
                        source={require("../../Assets/amazonpayicon/LPG.png")}
                    />
                </View>
                <View style={{
                    height: 80, width: "100%", flexDirection: "row", alignItems: "center",
                    backgroundColor: "white", marginTop: 80
                }}>

                    <Image style={{
                        height: 70, width: 95, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center",

                    }}
                        source={require("../../Assets/amazonpayicon/upi.png")}
                    />
                    <Image style={{
                        height: 150, width: 100, resizeMode: "contain", margin: 10,

                    }}
                        source={require("../../Assets/amazonpayicon/recharge.png")}
                    />

                    <Image style={{
                        height: 60, width: 65, resizeMode: "contain", margin: 10,
                        alignItem: "center", justifyContent: "center"

                    }}
                        source={require("../../Assets/amazonpayicon/DTH.png")}
                    />

                    <Image style={{
                        height: 100, width: 90, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center",

                    }}
                        source={require("../../Assets/amazonpayicon/LPG.png")}
                    />
                </View>
                <View style={{
                    height: 80, width: "100%", flexDirection: "row", alignItems: "center",
                    backgroundColor: "white", marginTop: 80
                }}>

                    <Image style={{
                        height: 70, width: 95, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center",

                    }}
                        source={require("../../Assets/amazonpayicon/upi.png")}
                    />
                    <Image style={{
                        height: 150, width: 100, resizeMode: "contain", margin: 10,

                    }}
                        source={require("../../Assets/amazonpayicon/recharge.png")}
                    />

                    <Image style={{
                        height: 60, width: 65, resizeMode: "contain", margin: 10,
                        alignItem: "center", justifyContent: "center"

                    }}
                        source={require("../../Assets/amazonpayicon/DTH.png")}
                    />

                    <Image style={{
                        height: 100, width: 90, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center",

                    }}
                        source={require("../../Assets/amazonpayicon/LPG.png")}
                    />
                </View>
                <View style={{
                    height: 80, width: "100%", flexDirection: "row", alignItems: "center",
                    backgroundColor: "white", marginTop: 50
                }}>
                    <Image style={{
                        height: 60, width: 65, resizeMode: "contain", margin: 10, alignItem: "center", justifyContent: "center"

                    }}
                        source={require("../../Assets/amazonpayicon/qr.png")} />

                    <Image style={{
                        height: 80, width: 80, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center",

                    }}
                        source={require("../../Assets/amazonpayicon/electricity.png")}
                    />
                    <Image style={{
                        height: 80, width: 120, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center",
                    }}
                        source={require("../../Assets/amazonpayicon/ccbp.png")}
                    />
                    <Image style={{
                        height: 120, width: 120, resizeMode: "contain", margin: 10, alignItem: "center",
                        justifyContent: "center",
                    }}
                        source={require("../../Assets/amazonpayicon/all-categories.png")}
                    />
                </View>

            </ScrollView>

        </View >


    );
}
export default PayScreen;