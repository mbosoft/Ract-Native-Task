import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, SafeAreaView, TouchableOpacity } from "react-native";

import TaskListView from "./task_list_view_screen"
import Head from "./head_screen"
import client from "../api/client_screen"

const GetTask = () => {
    const [data, setData] = useState([]);

    const getList = async () => {
        const resposne = await client.get("http://mbosoft.org/task/select");
        setData(resposne.data);
        //console.log(resposne.data[0].tasks_detail[0].appointment)
    }

    useEffect(() => {
        getList();
    }, []);


    

    return (
        <View style={styles.center}>
            <Head />
    
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <TaskListView 
                item={item} 
                tasks_detail={item.tasks_detail} 
                task_component={item.task_component}
                task_customer={item.task_customer[0].related_customer_address}
                />}
            />
        </View>
    )
}

export default GetTask

const styles = StyleSheet.create({
    center: {
        flex: 1,
        marginBottom:20
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    },

});