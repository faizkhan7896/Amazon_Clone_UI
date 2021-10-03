import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    Image
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { View } from 'react-native-animatable';

class ScanScreen extends Component {
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "black",
            }}>

                <Image style={{
                    height: 65, width: "42%", resizeMode: "contain", alignSelf: "center"
                }}
                    source={require("../Assets/whiteAmazon.png")} />

                <QRCodeScanner

                    onRead={this.onSuccess}
                    reactivate={true}
                    showMarker={true}
                    // cameraType={'front', 'back'}
                    // flashMode={RNCamera.Constants.FlashMode.torch}
                    topContent={
                        <Text style={styles.centerText}> Scan any UPI or QR</Text>
                    }
                    bottomContent={
                        <TouchableOpacity style={styles.buttonTouchable}>
                            <Text style={styles.buttonText}>Center the Code within the Box above</Text>
                            <Text style={styles.buttonText2}>Show Payment Code</Text>
                        </TouchableOpacity>

                    }

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        height: 60,
        width: "100%",
        fontSize: 28,
        color: '#fff',
        marginLeft: 30,
        backgroundColor: "#000"
    },
    textBold: {
        fontWeight: "bold",
        color: '#000'
    },
    buttonText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: "bold",

    },
    buttonText2: {
        fontSize: 16,
        color: '#fff',
        marginTop: 20,
        color: 'rgb(0,122,255)'


    },
    buttonTouchable: {
        padding: 16,
        marginBottom: 50,
        height: 250,
        width: "100%",
        backgroundColor: "#000",
        alignItems: "center",


    }
});
export default ScanScreen;