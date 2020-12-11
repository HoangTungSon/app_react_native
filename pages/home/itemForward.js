import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function item(item, index) {
    const navigation = useNavigation();
    return (
        <View >
            <Text
                onPress={() => {
                    navigation.navigate('Detail');
                    itemId: item.ID;
                }
                }>{item.name}</Text>
        </View>
    )
}