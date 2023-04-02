import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your goals.. " />
        <Button title="ADD" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: { 
    flex: 1,
    paddingTop: 50, 
    paddingHorizontal: 16 
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    marginRight: 10,
    padding: 8,
  },
  goalsContainer:{
    flex: 6,
  }
});
