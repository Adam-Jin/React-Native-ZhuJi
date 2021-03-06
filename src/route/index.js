import React from 'react';
import {
    Scene,
    Router,
    Actions,
} from 'react-native-router-flux';
import {
    Dimensions,
    StyleSheet,
    View,
    TouchableOpacity,
    StatusBar
} from 'react-native'
/* current img loading */
import Ionicons from 'react-native-vector-icons/Ionicons';

/* page global value */
const { width, height } = Dimensions.get("window");

/* page init here */

import Login from '../views/Login';


import SplashScreen from 'react-native-splash-screen';


const RouterComponent = ({ dispatch }) => {

    /* order function */
    var backLoginButton = function (nav) {
        if (Actions.state.index == 0 || nav.noNeedBack) {
            return (
                <View style={styles.backStyle}></View>
            );
        }
        else {
            return (
                <TouchableOpacity style={styles.backStyle} onPress={Actions.pop}>
                    <Ionicons name="ios-arrow-back" size={30} color="#999" />
                </TouchableOpacity>
            )
        }
    }

    const onBackPress = () => {

        if (Actions.state.index !== 0) {
            if (Actions.currentParams.backNeedRefresh) {
                Actions.pop({ refresh: { refreshRandom: Math.random() } });
            }
            else Actions.pop();
            return true;
        }
        return false;
    }

    const onEnterScreen = () => {
        SplashScreen.hide();
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" />
            <Router backAndroidHandler={onBackPress}>
                <Scene key="main" navigationBarStyle={{ backgroundColor: '#2E4050' }} >
                    <Scene
                        initial
                        key="login"
                        title="登录"
                        hideNavBar={true}
                        component={Login}
                        onEnter={onEnterScreen}
                    />
                </Scene>
            </Router>
        </View>
    );
};

let styles = StyleSheet.create({
    headerWithTitle: {
        fontSize: 18,
        fontWeight: '300',
        alignSelf: 'center',
        color: '#fff',
        justifyContent: 'center'
    },
    headerRightTitle: {
        color: '#02B05E',
        fontSize: 14,
        width: 64
    },
    backStyle: {
        width: 41,
        height: 44,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 15
    }
})

export default RouterComponent;
