import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
// import { Feather, Entypo, Ionicons } from "@expo/vector-icons";
import AddRecipe from "../../screens/Cart";
import Profile from "../../screens/Home";
import { TouchableOpacity, StyleSheet ,Text} from 'react-native';
import { colors } from "../../theme";
import Home from '../../screens/Home';


const MainStack = createStackNavigator();


const  HomeStack = ({ navigation }) => {
    return (
      <MainStack.Navigator>
        <MainStack.Screen
          name="Dumpling"
          component={Home}
          
          options={{
            headerStyle: {
              // borderBottomColor: colors.lightGray,
              // borderBottomWidth: 0,
              backgroundColor: colors.primary,
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("MyModal")}
                style={styles.rightIcon}
              >
                {/* <Entypo name="plus" size={26} color="#24cc94" /> */}
                {/* <MaterialIcons name="chat" size={24} color="black" /> */}
                <Text>Cart</Text>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                // onPress={() => navigation.navigate("EditRecipe")}
                style={styles.leftIcon}
              >
                {/* <Feather name="menu" size={26} color="#24cc94" /> */}
                <Text>menu</Text>
              </TouchableOpacity>
            ),
          }}
        />
        {/* <MainStack.Screen name="Details" component={DetailsScreen} /> */}
        <MainStack.Screen name="EditRecipe" component={AddRecipe} />
        <MainStack.Screen name="Add" component={AddRecipe} />
        {/* <MainStack.Screen name="ViewRecipe" component={Show} /> */}
        {/* <MainStack.Screen name="History" component={History} /> */}
      </MainStack.Navigator>
    );
  }

  export default HomeStack

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    topBar: {
      flexDirection: "row",
      backgroundColor: "white",
    },
    leftIcon: {
      marginLeft: 15,
    },
    rightIcon: {
      marginRight: 15,
    },
  });
  