<View style={styles.inputContainer}>
<TextInput
  style={styles.textInput}
  placeholder="Your goals.. "
  onChangeText={goalInputHandler}
/>
<Button title="ADD" onPress={addGoalHandler} />
</View>