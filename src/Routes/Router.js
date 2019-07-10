import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Test from '../Screens/Test';
import ShowDetails from '../Screens/ShowDetails';
import ShowsComponent from '../Screens/ShowsComponent';

const styles = {
  routerScene: {
    paddingTop: 40
  }
};

const RouterComponnent = () => {
  return (
    <Router sceneStyle={styles.routerScene}>
      <Scene key="root">
        <Scene initial key="shows" component={ShowsComponent} title="Shows" />
        <Scene key="show_details" component={ShowDetails} title="Show Detail" />
      </Scene>
    </Router>
  );
};

export default RouterComponnent;
