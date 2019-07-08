import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  View,
  Left,
  Body,
  Icon
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import axios from 'axios';

const styles = {
  imageSize: {
    width: 100,
    height: 100
  }
};

class Test extends Component {
  state = { shows: [] };

  componentWillMount() {
    axios
      .get('http://api.tvmaze.com/shows')
      .then(response => this.setState({ shows: response.data }));
  }

  renderShows() {
    return this.state.shows.map(show => (
      <View>
        <Card style={{ elevation: 3 }}>
          <CardItem>
            <Left>
              <Thumbnail source={show.image} />
              <Body>
                <Text>{show.name}</Text>
                <Text note>{show.premiered}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              style={{ height: 300, flex: 1 }}
              source={{ uri: show.image.medium }}
            />
          </CardItem>
          <CardItem>
            <Icon name="heart" style={{ color: '#ED4A6A' }} />
            <Text>{show.name}</Text>
          </CardItem>
        </Card>
      </View>
    ));
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View>{this.renderShows()}</View>
      </KeyboardAwareScrollView>
    );
  }
}
export default Test;
