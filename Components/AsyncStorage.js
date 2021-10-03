import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { AsyncStorage } from '@react-native-community/async-storage';


export default class Storage extends Component {
    state = {
        item: 'mustufa',
    }
    storeData = async () => {
        const vars = '';
        try {
            await AsyncStorage.setItem('mykey', 'faiz');
            vars = await AsyncStorage.getItem('mykey');
            this.setState({
                item: vars
            })
            console.log(vars)
        } catch (error) {
            console.log(error)
        }
        console.log(this.state)

    };
    deleteData = async () => {
        try {
            AsyncStorage.removeItem('mykey', async () => {
                console.log('deleted')
                this.setState({
                    item: await AsyncStorage.getItem('mykey')
                })
            })
        } catch (error) {
            console.log(error)
        }
        console.log(this.state)

    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fff", alignItems: 'center', justifyContent: "center" }}>
                <Text style={{ fontSize: 29 }}>Async Storage</Text>
                <Button
                    title="store it"
                    onPress={() => this.storeData()}
                />

                <Text>{this.state.item}</Text>
            </View>
        )
    }
}
