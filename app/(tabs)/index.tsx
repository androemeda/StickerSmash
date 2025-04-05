import { Link } from "expo-router";
import { Text, View , StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#25292e',
    alignItems : 'center',
    justifyContent : 'center'
  },
  text : {
    color : '#fff'
  },
  button : {
    fontSize : 20,
    color : '#fff',
    textDecorationLine : 'underline',
    borderWidth : 1,
    borderColor : '#fff'
  }
});