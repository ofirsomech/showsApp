import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ShowDetails from '../Screens/ShowDetails';
import ShowsComponent from '../Screens/ShowsComponent';

const styles = {
  routerScene: {
    paddingTop: 55
  }
};

const RouterComponnent = () => {
  return (
    <Router sceneStyle={styles.routerScene}>
      <Scene key="root">
        <Scene
          initial
          key="shows"
          component={ShowsComponent}
          title="Shows App"
        />
        <Scene key="show_details" component={ShowDetails} title="Shows App" />
      </Scene>
    </Router>
  );
};

export default RouterComponnent;
