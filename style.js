import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
    },
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewItem: {
        height: '30%',
        justifyContent: 'space-between',
        flexDirection: "row",
        flexWrap: 'wrap',
        padding: 10,
    },
    item: {
        margin: 5,
        padding: 10,
        width: 50,
        height: 50,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    }
});

export default styles;