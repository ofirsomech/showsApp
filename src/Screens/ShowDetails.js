import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  View,
  Left,
  Body,
  Icon
} from 'native-base';
import { Rating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const styles = {
  imageSize: {
    width: 100,
    height: 100
  }
};

class ShowDetails extends Component {
  render() {
    const show = this.props.show;
    return (
      <ScrollView>
        <View>
          <Card style={{ elevation: 3 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: show.image.medium }} />
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
              <Rating
                type="star"
                readonly
                startingValue={show.rating.average}
                ratingCount={10}
                imageSize={35}
                showRating
                fractions={1}
                onFinishRating={this.ratingCompleted}
              />
            </CardItem>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
export default ShowDetails;
