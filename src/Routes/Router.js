import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Test from '../Screens/Test';

const RouterComponnent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene initial key="test" component={Test} title="Test" hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComponnent;
