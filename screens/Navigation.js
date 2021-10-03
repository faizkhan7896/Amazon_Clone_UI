import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen'
import Setting from '../Components/Setting';
// import ProfileScreen from '../Components/Profile';
// import Bottomtab from './Bottomtab'
import SplashScreen from '../Components/SplashScreen';
import SignUpScreen from './SignUpScreen'
import HomeScreen from '../Components/Home';
import cart from '../Components/cart';
import PayScreen from '../Amazonpay.js/PayScreen';
import Mobile from '../Amazonpay.js/Reacharge/Mobile'
import Bills from '../Amazonpay.js/billspayment/Bills'
import Flight from '../Amazonpay.js/travels/Flight'
import Bus from '../Amazonpay.js/travels/Bus'
import Car from '../Amazonpay.js/travels/Car'
import Train from '../Amazonpay.js/travels/Train'
import Sendmoney from '../Sendmoney/Sendmoney'
import Ccbpayment from '../Amazonpay.js/CCBP/Ccbpayment'
import D2hpayment from '../Amazonpay.js/dth/D2hpayment'
import HorizontalSlider2 from '../Components/HorizontalSlider2';
import Index from '../Amazonpay.js/offers/Index'
import LPG from '../Amazonpay.js/Lpg/LPG'
import Rewards from '../Amazonpay.js/Rewards/Rewards';
import Amazonprime from './Amazonprime'
import Pantry from '../AmazonPantry/Pantry'
import Index2 from '../Phones/Index2'
import Main from '../AmazonFashion/Main';
import FurnitureMain from '../AmazonFurniture/FurnitureMain'
import ApplianceMain from '../AmazonAppliance/ApplianceMain'
import Scanner from '../Components/Scanner'
import Camerasearch from '../Components/Camerasearch'
import Shose from '../ProductPages/Shose'
import Laptops from '../ProductPages/Laptops'
import Headphones from '../ProductPages/Headphones'
import Digital from '../ProductPages/Digital'
import Load from '../Components/Load'
import Mainscreen from '../Components/Mainscreen'
import Categories from '../ProductPages/Categories'
import Products from '../Components/Products'



const Stack = createStackNavigator();




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">

        <Stack.Screen name="Load" component={Load}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="splash" component={SplashScreen}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen name="SignInScreen" component={SignInScreen}
          options={{
            headerStyle: {
              backgroundColor: '#009387',
            },
            headerShown: false,
            headerTintColor: '#fff',
          }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}
          options={{
            headerStyle: {
              backgroundColor: '#009387',
            },
            headerShown: false,
            headerTintColor: '#fff',
          }} />






        <Stack.Screen name="Mainscreen" component={Mainscreen}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Products" component={Products}
          options={{
            headerShown: false,
          }} />


        <Stack.Screen name="Pantry" component={Pantry}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Laptops" component={Laptops}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Digital" component={Digital}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Headphones" component={Headphones}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Shose" component={Shose}
          options={{
            headerShown: false,
          }} />


        <Stack.Screen name="Camerasearch" component={Camerasearch}
          options={{
            headerShown: false,
          }} />


        <Stack.Screen name="Categories" component={Categories}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen name="Scanner" component={Scanner}
          options={{
            headerShown: false,
          }} />



        <Stack.Screen name="ApplianceMain" component={ApplianceMain}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="FurnitureMain" component={FurnitureMain}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Main" component={Main}
          options={{
            headerShown: false,
          }} />


        <Stack.Screen name="Amazonprime" component={Amazonprime}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Index" component={Index}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen name="Index2" component={Index2}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen name="Car" component={Car}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Rewards" component={Rewards}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Sendmoney" component={Sendmoney}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Mobile" component={Mobile}
          options={{

            headerStyle: {
              backgroundColor: '#009387',
            },
            headerShown: false,
            headerTintColor: '#fff',
          }} />


        <Stack.Screen name="CartScreen" component={cart}
          options={{
            headerStyle: {
              backgroundColor: '#009387',
            },
            headerShown: false,
            headerTintColor: '#fff',
          }} />

        <Stack.Screen name="PayScreen" component={PayScreen}
          options={{
            headerStyle: {
              backgroundColor: '#009387',
            },
            headerShown: false,
            headerTintColor: '#fff',
          }} />

        <Stack.Screen name="Bills" component={Bills}
          options={{
            headerStyle: {
              backgroundColor: '#009387',
            },
            headerShown: false,
            headerTintColor: '#fff',
          }} />




        {/* <Stack.Screen name="Bottomtab" component={Bottomtab}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
          }} /> */}


        <Stack.Screen name="Setting" component={Setting}
          options={{
            headerTintColor: '#fff',
          }} />

        <Stack.Screen name="Flight" component={Flight}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen name="Bus" component={Bus}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen name="D2hpayment" component={D2hpayment}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen name="Ccbpayment" component={Ccbpayment}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen name="Train" component={Train}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen name="LPG" component={LPG}
          options={{
            headerShown: false,
          }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;