import React, { useState } from "react";
import { View, StyleSheet, TextInput, ImageBackground } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={require("../assets/splashScreen.jpg")}
      style={{ width: "100%", height: "99%", marginTop: 20 }}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.Textinput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.Textinput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
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
  },
});

export default Login;
