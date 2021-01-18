import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.Textinput}
        placeholder="Email."
        placeholderTextColor="white"
        onChangeText={(email) => setEmail(email)}
      />

      <TextInput
        secureTextEntry={true}
        style={styles.Textinput}
        placeholder="Password"
        placeholderTextColor="white"
        onChangeText={(password) => setPassword(password)}
      />

      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          backgroundColor: "blue",
          borderRadius: 10,
          justifyContent: "center",
          alignContent: "center",
        }}
        onPress={props.onBack}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 20,
            fontFamily: "Lora-Medium",
          }}
        >
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 600,
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  Textinput: {
    width: "70%",
    height: 50,
    padding: 10,
    marginLeft: 20,
    borderBottomWidth: 2,
    backgroundColor: "blue",
    borderRadius: 5,
    color: "white",
  },
});

export default Login;
