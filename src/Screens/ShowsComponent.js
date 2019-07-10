import axios from 'axios';
import React, { Component } from 'react';
import {
  Image,
  TouchableWithoutFeedback,
  FlatList,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { Rating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
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
import { getShows } from '../components/services/showsApi';

const styles = {
  imageSize: {
    width: 100,
    height: 100
  }
};

class Test extends Component {
  //   state = { shows: [] };
  constructor() {
    super();
    this.state = { shows: [], isLoading: true };
  }
  componentDidMount() {
    getShows().then(data => {
      this.setState({
        shows: data.filter(item => item.id < 20),
        isLoading: false
      });
    });
  }

  renderSeparator = () => {
    return (
      <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />
    );
  };

  renderShows = ({ item }) => {
    // return this.state.shows.map(show => (
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color="#330066" animating />
        </View>
      );
    } else {
      return (
        <View>
          <Card style={{ elevation: 3 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: item.image.medium }} />
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.premiered}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <TouchableWithoutFeedback
                onPress={() => {
                  Actions.show_details({ show: item, title: item.name });
                }}
              >
                <Image
                  style={{ height: 300, flex: 1 }}
                  source={{ uri: item.image.original }}
                />
              </TouchableWithoutFeedback>
            </CardItem>
            <CardItem>
              <Rating
                type="star"
                readonly
                startingValue={item.rating.average}
                ratingCount={10}
                imageSize={35}
                showRating
                onFinishRating={this.ratingCompleted}
              />
              {/* <Icon name="star" style={{ color: '#ED4A6A' }} />
            <Text>{item.rating.average}/10 </Text> */}
              {/* {this.renerStars(item)} */}
            </CardItem>
          </Card>
        </View>
      );
    }
  };

  render() {
    // debugger;
    return (
      <ScrollView>
        {/* <View>{this.renderShows()}</View> */}
        <FlatList
          data={this.state.shows}
          renderItem={this.renderShows}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    );
  }
}
export default Test;
