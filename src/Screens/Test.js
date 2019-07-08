import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import axios from 'axios';

class Test extends Component {
  state = { shows: [] };

  componentWillMount() {
    axios
      .get('http://api.tvmaze.com/shows')
      .then(response => this.setState({ shows: response.data }));
  }

  renderShows() {
    return this.state.shows.map(show => <Text>{show.name}</Text>);
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
