
// import React, { Component } from 'react'

// import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


// var radio_props = [
//     { label: 'param1', value: 0 },
//     { label: 'param2', value: 1 }
// ];

// var RadioButtonProject = React.createClass({
//     getInitialState: function () {
//         return {
//             value: 0,
//         }
//     },
//     render: function () {
//         return (
//             <View>
//                 <RadioForm
//                     radio_props={radio_props}
//                     initial={0}
//                     onPress={(value) => { this.setState({ value: value }) }}
//                 />
//             </View>
//         );
//     }
// });

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import RadioButton from 'react-native-radio-button'

export default class Radiobutton extends Component {
    render() {
        return (
            <View>

                <View
                    style={{ marginLeft: 20, marginTop: 180, flexDirection: "row" }}
                >

                    <RadioButton

                        animation={'bounceIn'}
                        isSelected={true}
                        labelHorizontal={true}
                        onPress={() => doSomething('hello')}
                    />



                    <Text style={{ color: "white", marginLeft: 20 }}>HelloWorldApp</Text>

                    <View style={{ flexDirection: "row", marginLeft: 20 }}>
                        <RadioButton

                            animation={'bounceIn'}
                            isSelected={true}
                            labelHorizontal={true}
                            onPress={() => doSomething('hello')}
                        />



                        <Text style={{ color: "white", marginLeft: 20 }}>HelloWorldApp</Text>
                    </View>

                </View>

            </View>
        )
    }
}
