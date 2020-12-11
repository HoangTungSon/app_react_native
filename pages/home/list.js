import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { SearchBar } from 'react-native-elements'

export default function HomeList({ navigation }) {

    const [search, setSearch] = useState();

    return (
        <View>
            <SearchBar lightTheme={true} round={true}
                placeholder="Type something here..."
                onChangeText={value => setSearch(value)}
                value={search}
            />
            <Button title='list detail' onPress={() => {
                navigation.navigate("Home")
            }} />
        </View>
    )
}