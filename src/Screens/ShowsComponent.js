import React, { Component } from 'react';
import {
  Image,
  TouchableWithoutFeedback,
  FlatList,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  WebView
} from 'react-native';
import { Rating, SearchBar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Thumbnail, Text, View, Left, Body } from 'native-base';
import { getShows } from '../components/services/showsApi';

const styles = {
  imageSize: {
    width: 100,
    height: 100
  }
};
// let dataSearch = [];

class ShowsComponent extends Component {
  //   state = { shows: [] };
  constructor() {
    super();
    this.page = 1;
    this.state = {
      filterdShows: [],
      shows: [],
      isLoading: false,
      search: '',
      loading: false, // user list loading
      isRefreshing: false //for pull to refresh
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    getShows().then(data => {
      this.setState({
        shows: data.filter(item => item.id < 25),
        isLoading: false,
        filterdShows: data.filter(item => item.id < 25)
      });
    });
  }
  renderFooter = () => {
    console.log('footer');
    if (!this.state.isLoading) return null;
    return <ActivityIndicator style={{ color: '#000' }} />;
  };

  //   onRefresh = () => {
  //     this.setState({ isRefreshing: true }); // true isRefreshing flag for enable pull to refresh indicator
  //   };

  updateSearch = search => {
    const filterdShows = this.state.shows.filter(show =>
      show.name.toUpperCase().includes(search.toUpperCase())
    );

    this.setState({ filterdShows, search });
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
                  <Text note>Premiered: {item.premiered}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <TouchableWithoutFeedback
                onPress={() => {
                  Actions.show_details({ show: item });
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
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={text => this.updateSearch(text)}
          value={search}
          lightTheme
        />
        <ScrollView>
          <View>
            <FlatList
              style={{ paddingBottom: 65 }}
              data={this.state.filterdShows}
              renderItem={this.renderShows}
              horizontal={false}
              keyExtractor={show => show.id.toString()}
              //   onScrollEndDrag={this.renderMoreShows}
              onScrollBeginDrag={() => console.log('onScrollBeginDrag')}
              onScrollEndDrag={() => console.log('onScrollEndDrag')}
              onResponderEnd={() => console.log('response end')}
              scrollEnabled={true}
              refreshControl={
                <RefreshControl
                  enable
                  refreshing={this.state.isRefreshing}
                  onRefresh={this.onRefresh}
                  onResponderEnd={this.onRefresh}
                />
              }
              ListFooterComponent={this.renderFooter}
              pagingEnabled
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default ShowsComponent;
