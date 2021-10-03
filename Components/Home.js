
// import React, { Component, useState } from "react";
// import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";
// import LinearGradient from 'react-native-linear-gradient';
// import { SliderBox } from "react-native-image-slider-box";
// import Slider from "./Slider";
// import cart from './cart'
// import Slider2 from './Slider2'
// import Detail from './Detail'
// import HorizontalSlider2 from "./HorizontalSlider2";
// import Products from "./Products";
// import Boxproduct from "./Boxproduct";
// import RSlider from '../Components/RSlider'
// import BoxFour from './BoxFour'
// import ApplianceBox from '../AmazonAppliance/ApplianceBox'
// import FashionBox from '../AmazonFashion/FashionBox'
// import FurnitureBox from '../AmazonFurniture/FurnitureBox'
// import Drawer from './Mainscreen'

// function App({ navigation }) {


//     const listing = [

//         {


//             id: 'Prime',
//             img: require("../Assets/New_Prime.png"),
//             link: "Amazonprime"


//         },

//         {

//             id: 'Groceres',
//             img: require("../Assets/fresh.png"),
//             link: "Pantry"
//         },
//         {
//             id: 'Mobiles',
//             img: require("../Assets/mob.png"),
//             link: "Index2"

//         },

//         {
//             id: 'fasion',
//             img: require("../Assets/gentleman.png"),
//             link: "Main"

//         },
//         {
//             id: 'Furniture',
//             img: require("../Assets/fur.png"),
//             link: "FurnitureMain"

//         },
//         {
//             id: 'Appliances',
//             img: require("../Assets/home.png"),
//             link: "ApplianceMain"

//         },




//     ];

//     // const [imageList, setImageList] = useState([{ 'id': 1 }, { 'id': 2 }])

//     // useEffect(() => {
//     //     effect
//     //     return () => {
//     //         var
//     //             setImageList
//     //     }
//     // }, [])
//     return (
//         <View style={{ backgroundColor: "#e0e0e0cf" }}>

//             <LinearGradient colors={['#4fe7ea', '#a2e6d1']} >
//                 <View style={{ paddingVertical: 8, }}>
//                     <View style={{
//                         height: 65, width: "100%", flexDirection: "row",
//                     }}>


//                         <Image source={require("../Assets/Amazon.png")}
//                             style={{
//                                 height: 30, width: "35%", resizeMode: "contain",
//                             }}
//                         />


//                         <Image style={{
//                             height: 24, width: "16%", resizeMode: "contain", marginLeft: 70
//                         }}
//                             source={require("../Assets/mic.png")}
//                             onPress={() => navigation.navigate('cart')}

//                         />



//                         <TouchableOpacity
//                             onPress={() => { navigation.navigate('CartScreen') }}
//                             style={{ height: 24, width: 25, }}>

//                             <Image style={{
//                                 height: 40, width: "400%", flex: 1, resizeMode: "contain",
//                             }}
//                                 source={require("../Assets/cart.png")} />

//                         </TouchableOpacity>




//                     </View>
//                     <View style={{
//                         height: 40, width: "80%", borderWidth: 1, borderColor: "#a0a8a9", justifyContent: "center", alignItems: "center",
//                         alignSelf: 'center', borderRadius: 10, backgroundColor: "#ffffff", flexDirection: "row"
//                     }}>

//                         <Image style={{
//                             height: 20, width: "20%", resizeMode: "contain", marginLeft: 50
//                         }}
//                             source={require("../Assets/search.png.png")} />

//                         <TextInput style={{
//                             height: 50, width: "70%", fontWeight: "bold", color: "gray",
//                             fontSize: 18,
//                         }}
//                             placeholder="Search" placeholderTextColor="gray" />

//                         <TouchableOpacity
//                             onPress={() => { navigation.navigate('Camerasearch') }}
//                             style={{ height: 24, width: 100, marginLeft: 20 }}>

//                             <Image style={{
//                                 height: 20, width: "20%", resizeMode: "contain",
//                             }}
//                                 source={require("../Assets/canera.png")} />

//                         </TouchableOpacity>

//                     </View>
//                 </View>

//             </LinearGradient>
//             <ScrollView >
//                 <View style={{ flex: 1, }}>
//                     <View
//                         style={{
//                             height: 40, width: "100%", flexDirection: "row", alignItems: "center", backgroundColor: "#66ccce"
//                         }}>
//                         <Image style={{
//                             height: 27, width: "15%", resizeMode: "contain",
//                         }}
//                             source={require("../Assets/loc.png")} />
//                         <Text style={{ width: "85%" }}>Delivery to Alfaiz-Indore 452007</Text>


//                     </View>
//                     <View>
//                         <FlatList
//                             keyExtractor={(item) => item.id.toString()}
//                             horizontal={true}
//                             data={listing}
//                             renderItem={({ index, item }) =>
//                                 <TouchableOpacity
//                                     onPress={() => navigation.navigate(item.link)}
//                                     style={{
//                                         marginTop: 5, marginBottom: 10, height: 110, width: 100,
//                                         backgroundColor: '#fff', alignItems: "center", justifyContent: "center"
//                                     }}>

//                                     <Image style={{
//                                         height: 60, width: 115, resizeMode: "contain", borderRadius: 150,
//                                     }}
//                                         source={item.img} />
//                                     <Text>{item.id}</Text>
//                                 </TouchableOpacity>
//                             }
//                         />
//                     </View>

//                 </View>
//                 <View>
//                     < Slider navigation={navigation} />
//                     <HorizontalSlider2 navigation={navigation} />
//                     < Slider2 navigation={navigation} />

//                 </View>

//                 <View style={{ marginTop: 25, backgroundColor: '#fff' }}>
//                     <Text style={{
//                         color: '#6e6e6e', fontSize: 25, borderBottomWidth: 1, borderBottomColor: '#dbd9d9',
//                         marginLeft: 15, marginTop: 30,
//                     }}>
//                         Deals Of The Day</Text>
//                 </View>
//                 <Products navigation={navigation} />

//                 <View
//                     style={{
//                         height: "1.5%", width: "100%", backgroundColor: "#fff",
//                     }}>
//                     <Text
//                         style={{
//                             color: '#0863a3', fontSize: 15, marginLeft: 25, marginTop: 20
//                         }}>
//                         see all deals</Text>
//                 </View>

//                 <Image style={{
//                     height: 300, width: "100%", resizeMode: "contain", marginTop: -20,
//                 }}
//                     source={require("../Assets/vaccin.png")} />
//                 <Image style={{
//                     height: 400, width: "100%", resizeMode: "contain", marginTop: -20,
//                 }}
//                     source={require("../Assets/logi.png")} />

//                 <Boxproduct navigation={navigation} />

//                 {/* {/* <Boxproduct navigation={navigation} /> */}
//                 <BoxFour navigation={navigation} />
//                 <FashionBox navigation={navigation} />
//                 <BoxFour navigation={navigation} />
//             </ScrollView>
//         </View >

//     );
// }

// export default App;

