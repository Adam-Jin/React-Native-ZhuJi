/* import the system code */
import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ImageBackground
} from "react-native";
import { connect } from "dva/mobile";
import Widget from '../widgets';

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
            <Widget.Background>
                <Text>QQQQ</Text>
            </Widget.Background>
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
