import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        padding: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        borderColor: 'black',
        borderRadius: 5,
    }
});

export default styles;