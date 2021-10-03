
// import * as React from 'react';
// import { View, Text, Image } from 'react-native';

// function DetailScreen({ navigation }) {
//     return (

//         <View style={{ flex: 1 }}>
//             <View style={{ height: 65, width: "100%", backgroundColor: "#009387", flexDirection: "row", alignItems: "center" }}>
//                 <Image source={require("../Assets/menu.png")} style={{ height: 30, width: "25%", resizeMode: "contain", tintColor: "white" }} />
//                 <Text style={{ color: "white", marginLeft: 10, width: "50%", fontSize: 20, fontWeight: "bold" }}> Detail</Text>
//                 <Image source={require("../Assets/setting.png")} style={{ height: 20, width: "25%", resizeMode: "contain", tintColor: "white" }} />
//             </View>

//         </View>

//     );
// }
// export default DetailScreen;

import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

function Cart() {
    return (


        <ScrollView horizontal={false}>
            <Text style={{ height: 200, width: 200, backgroundColor: "green", }}></Text>
            <Text style={{ height: 200, width: 200, backgroundColor: "blue" }}></Text>
            <Text style={{ height: 200, width: 200, backgroundColor: "black" }}></Text>
            <Text style={{ height: 200, width: 200, backgroundColor: "white" }}></Text>
            <Text style={{ height: 200, width: 200, backgroundColor: "skyblue" }}></Text>
            <Text style={{ height: 200, width: 200, backgroundColor: "pink" }}></Text>
            <Text style={{ height: 200, width: 200, backgroundColor: "yellow" }}></Text>
        </ScrollView>
    )
}
export default Cart;

// import React, { Component } from 'react'
// import { Text, View, StyleSheet, ScrollView } from 'react-native'

// function Cart() {
//     return (
//         <View style={styles.container}>
//             <View style={styles.box}>
//                 <View style={styles.inner}>
//                     <Text>box 1</Text>
//                 </View>
//             </View>
//         </View>
// export default Cart;

// const styles = StyleSheet.create({
//     container: {
//         width: "100%",
//         height: "85%",
//         padding: "5",
//         flexDirection: "row",
//     },
//     box: {
//         width: "50%",
//         height: "50%",
//     },
//     inner: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });
