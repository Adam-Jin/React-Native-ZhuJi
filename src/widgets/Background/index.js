import React, { Component } from 'react';
import { View,ImageBackground,Dimensions} from 'react-native';

const { width, height } = Dimensions.get("window");

export default class Background extends Component {
    render() {
        const { children } = this.props;
        return (
            <View>
                <ImageBackground
                    source={require('../../assets/images/public/bg.png')}
                    style={{ width: width, height: height }}>
                    {children}
                </ImageBackground>
            </View>
        );
    }
}
