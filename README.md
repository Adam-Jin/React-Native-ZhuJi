# React-Native-ZhuJi 
TMS Business Project For React-Native-ZhuJi  Creating

# install
npm install && react-native link 

# package update
node_modules/dva/package.json : 将peerDependencies 配置修改成如下
"peerDependencies": {
    "react": "16.x",
    "react-dom": "16.x"
},

node_modules/react-router/package.json : 将peerDependencies 配置修改成如下
 "peerDependencies": {
    "react": "^0.14.0 || ^15.0.0 || ^16.0.0"
},

rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json