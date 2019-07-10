import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';
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
import { Rating, Divider } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const styles = {
  imageSize: {
    width: 100,
    height: 100
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20
  }
};

class ShowDetails extends Component {
  renderGenre = show => {
    show.genres.map(genre => <Text>{genre}</Text>);
  };
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
                  <Text note>{show.language}</Text>
                  <Text note>{show.network.name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                style={{ height: 500, flex: 1 }}
                source={{ uri: show.image.medium }}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.boldText}>{show.name}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.boldText}>Language: </Text>
                <Text>{show.language}</Text>
              </Body>
              <Body>
                <Text style={styles.boldText}>Network:</Text>
                <Text>{show.network.name}</Text>
              </Body>
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
            <CardItem>
              <Body>
                <HTML html={show.summary} />
              </Body>
            </CardItem>
            <Divider />
            <CardItem>
              <Body>
                <Text style={styles.boldText}>Genres: </Text>
                {show.genres.map(genre => (
                  <Text>*{genre}</Text>
                ))}
              </Body>
              <Body>
                <Text style={styles.boldText}>Schedule Time:</Text>
                <Text>{show.schedule.time}</Text>
              </Body>
              <Body>
                <Text style={styles.boldText}>Schedule days: </Text>
                {show.schedule.days.map(showDay => (
                  <Text>{showDay}</Text>
                ))}
              </Body>
            </CardItem>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
export default ShowDetails;
