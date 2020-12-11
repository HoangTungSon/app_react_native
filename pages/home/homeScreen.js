import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../../style';
import * as constant from '../../constant';

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
    <View styles={styles.container}>
      {data.map((item, index) => {
        return (
          <View key={index} >
            <Text style={styles.item}
              onPress={() =>
                navigation.navigate('Detail', {
                  itemId: item.ID.toString()
                })
              }>{item.name}</Text>
          </View>
        )
      })}

    </View>
  );
}

