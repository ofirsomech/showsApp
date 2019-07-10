import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';
import Router from './Routes/Router';

console.disableYellowBox = true;

const styles = {
  imageSize: {
    width: 100,
    height: 100
  },
  container: {
    paddingTop: 200
  }
};

class App extends Component {
  render() {
    return (
      <Container>
        <Router />

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Powered By - Ofir Somech</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
export default App;
