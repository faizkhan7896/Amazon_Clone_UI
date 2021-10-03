
import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Slider2 from '../../Components/Slider2';
import Index from './Index'
import Header2 from '../../Components/Header2'
import DealsSlider from '../../Components/DealsSlider';


function RewardScreen({ navigation }) {
    return (
        <View>

            <Header2 navigation={navigation} />
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
                <Index />
                <DealsSlider />

            </ScrollView>
        </View>
    );
}
export default RewardScreen;