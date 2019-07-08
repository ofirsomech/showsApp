import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Test from '../Screens/Test';
import ShowDetails from '../Screens/ShowDetails';

const RouterComponnent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene initial key="test" component={Test} title="Test" hideNavBar />
        <Scene key="show_details" component={ShowDetails} title="Show Detail" />
      </Scene>
    </Router>
  );
};

export default RouterComponnent;
