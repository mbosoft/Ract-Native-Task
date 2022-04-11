import React from 'react';
import { StyleSheet } from "react-native"
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GetTask from './components/get_task_screen';
import TaskDetailView from "./components/task_detail_view_screen"
import TaskListView from "./components/task_list_view_screen"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="GetTask" component={GetTask} />
        <Stack.Screen name="TaskDetailView" component={TaskDetailView} />
        <Stack.Screen name="TaskListView" component={TaskListView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fca',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    color: "navy",
    fontSize: 30,
    fontStyle: "italic",
  },
  pizzaImage: {
    width: 500,
    height: 200,
  },
});
