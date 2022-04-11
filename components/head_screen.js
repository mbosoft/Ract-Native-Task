import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import Search from "./search_screen"



const Head = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Search />
            <View style={{ alignSelf: 'center', padding: 5, cursor: 'pointer', }} >
                <Text style={{ color: '#ffffff' }}>My Task </Text>
            </View>

            <TouchableOpacity onPress={() => { alert('ok') }} style={{ alignSelf: 'center', padding: 5, cursor: 'pointer' }} >
                <Image
                    source={require('../icon/hamburger.png')}
                    style={styles.ImageIconStyle}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Head;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1d",
        flexDirection: "row",
        justifyContent: 'space-between',
        maxHeight: 100,
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: "center",
        padding: 5,
        color: '#ffffff'
    },
    ImageIconStyle: {
        height: 35,
        width: 35,
    }
})

