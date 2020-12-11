import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from '../../style';
import * as constant from '../../constant';
import { Card } from 'react-native-elements';
import CardSlider from 'react-native-cards-slider';

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(constant.API_URL + '/items')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false)
      );
  }, [])

  return (
    <View>
      <CardSlider>
        <Card>
          <Card.Title>Card Title</Card.Title>
          <Card.Divider style={{alignContent: "center", alignItems: "center"}}>
            aaaaaaaaaaaaaaaaa
        </Card.Divider>
        </Card>
        <Card>
          <Card.Title>Card Title</Card.Title>
          <Card.Divider style={{alignContent: "center", alignItems: "center"}}>
            aaaaaaaaaaaaaaaaa
        </Card.Divider>
        </Card>
      </CardSlider>
      <View style={styles.viewItem}>
        {data.map((item, index) => {
          return (
            <View key={index} >
              <TouchableWithoutFeedback onPress={() =>
                navigation.navigate('Detail', {
                  itemId: item.ID.toString()
                })
              } >
                <Image style={styles.item} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }} />
              </TouchableWithoutFeedback>
              <Text>{item.name}</Text>
            </View>
          )
        })}
      </View>
    </View>
  );
}

