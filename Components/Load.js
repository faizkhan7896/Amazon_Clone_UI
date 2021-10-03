import { ActivityIndicator, View, Image } from "react-native"
import { useEffect } from 'react';

import * as React from 'react';
import SplashScreen from "./SplashScreen";


const Load = ({ navigation }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);

        }, 500);
    }, [])

    if (isLoading) {

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
                <ActivityIndicator size="large" />
                <Image style={{
                    height: 225, width: "85%", resizeMode: "contain",
                }}
                    source={require("../Assets/splash.png")} />


            </View>
        )
    }
    return (
        <View style={{ flex: 1, }}>
            <SplashScreen navigation={navigation} />

        </View>
    )

}
export default Load;