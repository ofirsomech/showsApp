import React, { Component } from 'react';
import { Container, Footer, FooterTab, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Router from './Routes/Router';

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <Container>
        <Router />
        <Footer>
          <FooterTab>
            <Button full>
              <Text>
                Powered By - Ofir Somech <Icon name="rocket" />
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
export default App;
