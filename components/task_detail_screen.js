import { View, Text } from 'react-native';
import StyleSheet from 'react-native-media-query';




const TaskDetail = ({ tasks_detail }) => {
    return (
        <View style={styles.container}>
        <Text>{tasks_detail.appointment}</Text>
        </View >
    );
}




export default TaskDetail;


const { styles, ids } = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        margin: 5,
        borderRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: '#1E1F00',
        maxWidth: "100%",
    },
    
})
