import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Linking, Button, FlatList, } from 'react-native';
import StyleSheet from 'react-native-media-query';
import client from "../api/client_screen"
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import TaskDetail from '../components/task_detail_screen'


function TaskDetailView({ route, navigation }) {

    const { itemId } = route.params;
    const [data, setData] = useState([]);
    const getList = async () => {
        const resposne = await client.get("http://mbosoft.org/task/select/" + itemId);
        setData(resposne.data);
    }

    useEffect(() => {
        getList();
    }, []);

    console.log(data);

    return (
        <View style={styles.container}>



            <View style={styles.box}>

                <View style={styles.box_header} dataSet={{ media: ids.box_header }}>
                    <Text>Descrition </Text>
                    <Text> {data.id}</Text>
                </View>

                <View style={styles.box_line}>
           
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <Text>
                            {item}
                        </Text>}
                    />
                </View>
            </View>

        </View>
    );
}


export default TaskDetailView;

const { styles, ids } = StyleSheet.create({
    container: {

    },
    box: {
        margin: 5,
        backgroundColor: '#B26E8E',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.44,
        // shadowRadius: 10.32,
        // elevation: 16,

        margin: 5,
        borderRadius: 5,
        maxWidth: "100%",


    },
    box_header: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5,
        backgroundColor: "#5b3ac9",
        '@media (max-width: 428px)': {
            fontSize: 5,
            color: '#ffffff'
        },



    },
    box_line: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5,
        color: '#fff'
        // borderBottomColor: 'gray',
        // borderBottomWidth: 1,
    }

})
