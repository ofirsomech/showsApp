import axios from 'axios';
import React, { Component } from 'react';
import {
  Image,
  TouchableWithoutFeedback,
  FlatList,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { Rating, SearchBar } from 'react-native-elements';
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
import { getShows } from '../components/services/showsApi';

const styles = {
  imageSize: {
    width: 100,
    height: 100
  }
};
let dataSearch = [];

class Test extends Component {
  //   state = { shows: [] };
  constructor() {
    super();
    this.state = { dataShows: [], shows: [], isLoading: false, search: '' };
    this.arrayHolder = [];
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    getShows().then(data => {
      this.setState({
        shows: data.filter(item => item.id < 20),
        isLoading: false,
        dataShows: data.filter(item => item.id < 20)
      });
    });
    this.arrayHolder = this.state.shows;
  }

  updateSearch = search => {
    dataSearch = [];
    this.setState({ search });
    console.log(search);

    this.state.shows.forEach(element => {
      if (element.name.toUpperCase().includes(search.toUpperCase()))
        dataSearch.push(element);
    });
    // if (this.state.shows)
    if (search === '') {
      this.setState({ shows: this.state.dataShows });
    } else {
      this.setState({ shows: dataSearch });
    }

    console.log(search);
  };

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
                fractions={1}
                showRating
                onFinishRating={this.ratingCompleted}
              />
            </CardItem>
          </Card>
        </View>
      );
    }
  };

  render() {
    const { search } = this.state;
    // debugger;
    return (
      <ScrollView>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={text => this.updateSearch(text)}
          onCancel={text => this.updateSearch(text)}
          value={search}
          lightTheme
        />
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
