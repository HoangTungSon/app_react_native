import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import styles from '../../style';
import * as constant from '../../constant';

export default function Detail({ route, navigation }) {
    const { itemId } = route.params;
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(constant.API_URL + '/items/' + itemId)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false)
            );
    }, [])

    return (
        <View>
            {isLoading ? <ActivityIndicator /> : (
                <Text>{data.name}, {data.hobby}</Text>
            )}
        </View>
    )
}