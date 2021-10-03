


import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";

function sli({ navigation }) {


    const listing = [

        {


            id: '   Send money',
            img: require("../Assets/amazonpayicon/upi.png"),
            link: "Sendmoney"


        },

        {

            id: '   Scan & Pay',
            img: require("../Assets/amazonpayicon/qr.png"),
            link: "Scanner"
        },
        {
            id: ' Get payment',
            img: require("../Assets/amazonpayicon/get.png"),
            link: "Sendmoney"

        },

        {
            id: '      spending',
            img: require("../Assets/amazonpayicon/pending.png"),
            link: "D2hpayment"

        },
        {
            id: '        Reward',
            img: require("../Assets/amazonpayicon/rew.png"),
            link: "Rewards"

        },
        {
            id: '         Offers',
            img: require("../Assets/amazonpayicon/all-categories.png"),
            link: "Index"

        },




    ];
    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                data={listing}
                renderItem={({ index, item }) =>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.link)}
                        style={{ marginTop: 10, marginBottom: 10, height: 70, width: 100, backgroundColor: '#fff' }}>

                        <Image style={{
                            height: 40, width: 80, resizeMode: "contain", borderRadius: 150,
                            alignSelf: "center",
                        }}
                            source={item.img} />
                        <Text>{item.id}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    )


}
export default sli;



//                     <Image style={{
//                         height: 100, width: 90, resizeMode: "contain", margin: 10, alignItem: "center",
//                         justifyContent: "center", borderRadius: 150

//                     }}
//                         source={require("../Assets/amazonpayicon/get.png")}
//                     />

//                     <Image style={{
//                         height: 60, width: 65, resizeMode: "contain", margin: 10, alignItem: "center", justifyContent: "center"

//                     }}
//                         source={require("../Assets/amazonpayicon/pending.png")} />

//                     <Image style={{
//                         height: 100, width: 100, resizeMode: "contain", margin: 10, alignItem: "center",
//                         justifyContent: "center", borderRadius: 150

//                     }}
//                         source={require("../Assets/amazonpayicon/rew.png")}
//                     />
//                     <Image style={{
//                         height: 120, width: 120, resizeMode: "contain", margin: 10, alignItem: "center",
//                         justifyContent: "center", borderRadius: 150
//                     }}
//                         source={require("../Assets/amazonpayicon/all-categories.png")}
//                     />



//                 </View>
//             </View>
//         </ScrollView>


//     )
// }

// export default paySlider2;