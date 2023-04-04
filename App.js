import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [enterdGoalText, setEnteredGoalText] = useState("");
  const [myGoals, setMyGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setMyGoals((currentGoals) => [...currentGoals, enterdGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goals.. "
          onChangeText={goalInputHandler}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={myGoals}
          renderItem={(itemData) => {
            return <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item}</Text>
            </View>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    //borderBottomColor: "red",
    //borderBottomWidth: 1,
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    marginRight: 10,
    padding: 8,
  },
  goalsContainer: {
    flex: 6,
  },
  goalItem: {
    margin: 5,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#46277D",
  },
  goalText: {
    color: "white",
  },
});
