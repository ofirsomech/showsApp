// const RenderShowComponents = () => {
//   renderShows = () => {
//     return this.state.shows.map(show => (
//       <View>
//         <Card style={{ elevation: 3 }}>
//           <CardItem>
//             <Left>
//               <Thumbnail source={show.image} />
//               <Body>
//                 <Text>{show.name}</Text>
//                 <Text note>{show.premiered}</Text>
//               </Body>
//             </Left>
//           </CardItem>
//           <CardItem cardBody>
//             <TouchableWithoutFeedback
//               onPress={() => {
//                 // debugger;
//                 Actions.show_details({ show: show });
//               }}
//             >
//               <Image
//                 style={{ height: 300, flex: 1 }}
//                 source={{ uri: show.image.medium }}
//               />
//             </TouchableWithoutFeedback>
//           </CardItem>
//           <CardItem>
//             <Icon name="heart" style={{ color: '#ED4A6A' }} />
//             <Text>{show.name}</Text>
//           </CardItem>
//         </Card>
//       </View>
//     ));
//   };
// };
// export default RenderShowComponents;
