/* system import */
import React, { Component } from 'react';
import {
  AppRegistry
}                           from 'react-native';
import dva, { connect }     from 'dva/mobile';

/* business import */
import Login      from './src/module/Login';

/* router import */
import Router from './src/router/index';

const app = dva();

/* model setting */
app.model(Login);

/* router setting */
app.router(() => <Router />);



AppRegistry.registerComponent('ZhuJi', () => app.start());
