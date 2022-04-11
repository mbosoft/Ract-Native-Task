import React, { Component } from "react";
import { View, Image, StyleSheet, SafeAreaView, TextInput } from 'react-native'



const Search = () => {

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.searchSection}>
                <Image
                    source={require('../icon/search.png')}
                    style={styles.searchIcon} name="ios-search"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Search "
                    placeholderTextColor="#fff"
                />
            </View>
        </SafeAreaView>
    );
}

export default Search;


const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        padding: 2,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ffffff',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ffffff',
        padding: 5,
        margin: 5
    },
    searchIcon: {
        height: 12,
        width: 12
    },
    input: {
        flex: 1,
        color: 'gray',
        marginLeft: 2,
        color: '#fff',
        fontSize: 18,
        paddingLeft: 5

    },
})

