/* system import */
import React from 'react';
import { AppRegistry } from 'react-native';
import dva from 'dva/mobile';

/* business import */
import Login from './src/models/Login';

/* router import */
import Router from './src/route/index';

const app = dva();

/* model setting */
app.model(Login);

/* router setting */
app.router(() => <Router />);



AppRegistry.registerComponent('ZhuJi', () => app.start());
