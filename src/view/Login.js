/* import the system code */
import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    Button,
    Alert,
    Platform,
} from "react-native";
import { connect } from "dva/mobile";
import { Actions } from "react-native-router-flux";


const { width, height } = Dimensions.get("window");

/* main class here */
class Login extends React.Component {
    constructor(props) {
        super(props);
        /* default state setting */
        this.state = {

        };

    }

    /* default props setting */
    static defaultProps = {

    };



    /**
     * render here
     */
    render() {
        return (
            <View>
                <Text>11111</Text>
            </View>
        );
    }
}

/* css style setting */
const styles = StyleSheet.create({

});

const mapStateToProps = ({ Login }) => {
    const {

    } = Login;
    return {
    };
};

export default connect(mapStateToProps)(Login);
