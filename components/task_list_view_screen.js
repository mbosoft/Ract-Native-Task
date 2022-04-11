import React, { Component, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Linking, Button, Platform, TouchableHighlight } from 'react-native';
import StyleSheet from 'react-native-media-query';

import { useNavigation } from '@react-navigation/native';



const TaskListView = ({ item, tasks_detail, task_component, task_customer }) => {
    const navigation = useNavigation();


    // let a=item.tasks_detail;
    // let task_component=item.task_component;
    // for (const key in a) {
    //        console.log(a[key].appointment);
    // }

    console.log('---------------------------------')

    const address = (`${task_customer[0].street + ' ' + task_customer[0].street_nr} ${task_customer[0].Postal_code}, ${task_customer[0].city}`);
    const destination = encodeURIComponent(`${task_customer[0].street + ' ' + task_customer[0].street_nr} ${task_customer[0].Postal_code}, ${task_customer[0].city}`);
    const provider = Platform.OS === 'ios' ? 'apple' : 'google'
    const link = `http://maps.${provider}.com/?daddr=${destination}`;


    return (
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <Text style={styles.cl_Text_Date}>{item.id}</Text>
                <View>
                    <Text style={styles.cl_Text_Day}>Sammstag</Text>
                    <Text style={styles.cl_Text_Time}>18:30</Text>
                </View>
            </View>





            <View style={styles.containerRight}>
                <View style={styles.row_container}>

                    <View style={styles.touch_btn}>
                        <TouchableHighlight onPress={() => Linking.openURL(link)} >
                            <Image
                                source={require('../icon/barcode.png')}
                                style={styles.icon} name="ios-search" />
                        </TouchableHighlight  >
                        <Text style={styles.touch_btn_txt} >763455</Text>
                    </View>

                    <View style={styles.touch_btn}>
                        <TouchableHighlight onPress={() => Linking.openURL(link)} >
                            <Image
                                source={require('../icon/building.png')}
                                style={styles.icon} name="ios-search" />
                        </TouchableHighlight  >
                        <Text style={styles.touch_btn_txt} >FMA GmbH</Text>
                    </View>

                    <View style={styles.touch_btn}>
                        <TouchableHighlight onPress={() => Linking.openURL(link)} >
                            <Image
                                source={require('../icon/termin.png')}
                                style={styles.icon} name="ios-search" />
                        </TouchableHighlight  >
                        <Text style={styles.touch_btn_txt} >26.10.2022 10:35</Text>
                    </View>
                    <View style={styles.touch_btn}>
                        <TouchableHighlight onPress={() => Linking.openURL(link)} >
                            <Image
                                source={require('../icon/call.png')}
                                style={styles.icon}  name="ios-search" />
                        </TouchableHighlight  >
                        <Text style={styles.touch_btn_txt} >Herr Mühller</Text>
                    </View>

                    <View style={styles.touch_btn}>
                        <TouchableHighlight onPress={() => Linking.openURL(link)} >
                            <Image
                                source={require('../icon/location.png')}
                                style={styles.icon} dataSet={{ media: ids.icon }} name="ios-search" />
                        </TouchableHighlight  >
                        <Text style={styles.touch_btn_txt} >Addres</Text>
                    </View>
                </View>



                <TouchableOpacity style={styles.row2_3_4_box} onPress={() => Linking.openURL(link)} >
                    <Text style={styles.main_txt} dataSet={{ media: ids.main_txt }}>{address}</Text>
                </TouchableOpacity >



                <View style={[styles.row4]}>
                    <TouchableOpacity style={styles.row2_3_4_box} onPress={() => { }} >
                        <Text style={[styles.row2_3_4_txt]}>{item.hotline_number}</Text>
                    </TouchableOpacity >


                    <TouchableOpacity style={styles.btn}
                        onPress={() => {
                            /* 1. Navigate to the Details route with params */
                            navigation.navigate('TaskDetailView', {
                                itemId: item.id,
                            });
                        }} >
                        <Text style={[styles.row2_3_4_txt, styles.btn_txt]}>open task</Text>

                    </TouchableOpacity >
                </View>




            </View>

        </View >


    );
}




export default TaskListView;


const {styles,ids} = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        margin: 5,
        borderRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: '#1E1F00',
        maxWidth: "100%",


    },
    // ---------------------------------------
    containerLeft: {
        backgroundColor: "#614c9c",
        borderTopStartRadius: 5,
        borderBottomLeftRadius: 5,


        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center'
    },
    cl_Text_Date: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    cl_Text_Day: {
        color: '#d4c7f3',
        fontSize: 10,
        fontWeight: 'bold',

    },
    cl_Text_Time: {
        color: '#d4ffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'

    },

    // ---------------------------------------
    containerRight: {
        width: '80%',
        backgroundColor: "#B26E8E",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        padding: 5


    },
    row_container: {
        flex: 1,
        alignItems: "center", // ignore this - we'll come back to it
        justifyContent: "flex-end", // ignore this - we'll come back to it
        alignSelf: 'flex-start',
        alignContent: 'flex-start',
        flexDirection: "row",
        marginBottom: 5,

    },

    touch_btn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
    },
    
    icon: {
        height: 50,
        width: 50,
        marginRight: 2,
        marginBottom:2,

        '@media (max-width: 400px)': {
            height: 35,
            width: 35,
            marginRight: 2,
        },
    },

    touch_btn_txt: {
        flex: 1,
        alignItems: "center",
        color: '#ffffff',
        alignItems: "center",
        alignContent:'center',
        alignSelf:'center',
        textAlign:'center',
        fontSize:12,
        '@media (max-width: 428px)': {
            fontSize:8
        },
    },

    main_txt: {
        fontSize: 14,
        color:'#000000',
        '@media (max-width: 428px)': {
            fontSize:12
        },
    },




    row1_item1: {
        backgroundColor: '#f0efff',
        borderBottomColor: '#6e5fff',
    },
    row1_item2: {
        backgroundColor: '#fff5e6',
        borderBottomColor: '#ffcf84',
    },
    row1_item3: {
        backgroundColor: '#dbedfb',
        borderBottomColor: '#2fa7ff',
    },
    row1_item4: {
        backgroundColor: '#ffefef',
        borderBottomColor: '#ff5f5f',
    },

    row2_3_4_txt: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 5

    },
    row2_3_4_box: {
        padding: 3,
        borderRadius: 3,
        marginBottom: 5,
        backgroundColor: '#ffefef',
        flexGrow: 1,

    },
    // -------------------------------------------- row 2
    row2: {
        backgroundColor: '#ffefef',
        borderRadius: 3,
        marginBottom: 5,

        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    // -------------------------------------------- row 3
    row3: {

    },
    // -------------------------------------------- row 4
    row4: {
        flex: 1,
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%'
    },

    // -------------------------------------------- 
    btn: {
        marginLeft: 2,
        padding: 3,
        borderRadius: 3,
        marginBottom: 5,
        backgroundColor: '#614c9c',
        color: '#ffffff',
        paddingHorizontal: 15,
    },
    btn_txt: {
        color: '#ffffff',
        fontWeight: 'bold'
    },


    input: {
        color: 'gray',
        color: '#000000',
        fontSize: 20,
    },

    touch: {
        flex: 1,
        width: '100%'
    }

})
