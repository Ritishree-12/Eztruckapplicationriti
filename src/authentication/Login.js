import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    // Add your logic for handling login here
    // For now, let's just log the phone number to the console
    console.log("Phone Number:", phoneNumber);

    // Navigate to the OTP screen
    navigation.navigate("Otp");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login With OTP</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Phone Number"
          autoCapitalize="none"
          autoCorrect={false}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.horizontalLine} />
          <Text style={styles.or}>or</Text>
          <View style={styles.horizontalLine} />
        </View>
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require("../../assets/google-icon.png")}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Don't have an account?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate("Registration")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    // paddingTop: 60,
    backgroundColor: "#fff",
  },
  title: {
    color: "#EE272E",
    fontWeight: "600",
    fontSize: 24,
    marginBottom: 20,
    paddingHorizontal: 14,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 60,
    marginVertical: 8,
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 30,
    borderColor: "grey",
    color: "grey",
  },
  loginButton: {
    height: 55,
    marginVertical: 8,
    borderRadius: 30,
    backgroundColor: "#EE272E",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
  },
  googleButton: {
    height: 60,
    width: 140,
    margin: 10,
    borderWidth: 1,
    borderRadius: 40,
    color: "black",
    fontWeight: "800",
    alignSelf: "center",
    borderColor: "grey",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center", // Align the image and text vertically
  },
  googleImage: {
    width: 30, // Adjust the width as needed
    height: 30, // Adjust the height as needed
    marginRight: -10,
  },
  googleText: {
    color: "black",
    fontWeight: "600",
    alignSelf: "center",
    fontSize: 18,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  or: {
    fontSize: 18,
    color: "grey",
    paddingHorizontal: 10,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: "grey",
  },
  signupText: {
    fontSize: 15,
    margin: 18,
    fontWeight: "bold",
    color: "grey",
    alignSelf: "center",
    textAlign: "center",
  },
  signupLink: {
    color: "#EE272E",
  },
});

export default Login;
