import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Icon, CheckBox } from "react-native-elements";

const Registration = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignUp = () => {
    // Perform your sign-up logic here
    // For now, let's just display an alert with the entered data
    const userData = {
      name,
      email,
      mobileNumber,
      dob,
    };

    if (agreeTerms) {
      // You can replace this with your actual sign-up logic
      Alert.alert("Sign Up Pressed", JSON.stringify(userData));
    } else {
      Alert.alert("Please agree to the Terms of Service and Privacy Policy.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register New User</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Mobile Number"
          autoCapitalize="none"
          autoCorrect={false}
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Date Of Birth"
          value={dob}
          onChangeText={(text) => setDob(text)}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            title={
              <Text style={styles.terms}>
                By signing up, you agree to the{" "}
                <Text style={styles.termsHighlight}>Terms of Service</Text> and{" "}
                <Text style={styles.termsHighlight}>Privacy Policy.</Text>
              </Text>
            }
            checked={agreeTerms}
            onPress={() => setAgreeTerms(!agreeTerms)}
          />
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupText}>Sign Up</Text>
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
        <Text style={styles.signInText}>
          Already have an account ?{" "}
          <Text
            style={styles.signInLink}
            onPress={() => navigation.navigate("Login")}
          >
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    // paddingTop: 50,
    backgroundColor: "#fff",
  },
  title: {
    color: "#EE272E",
    fontWeight: "600",
    fontSize: 24,
    // marginBottom: 10,
    paddingHorizontal: 10,
  },
  formContainer: {
    marginBottom: 20,
  },
  terms: {
    marginVertical: 12,
    color: "grey",
  },
  termsHighlight: {
    color: "#EE272E",
  },
  input: {
    height: 60,
    marginVertical: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderColor: "grey",
    color: "grey",
  },
  signupButton: {
    height: 60,
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: "#EE272E",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
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
  signInText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
    alignSelf: "center",
    textAlign: "center",
  },
  signInLink: {
    color: "#EE272E",
  },
  checkboxContainer: {
    marginVertical: 12,
  },
});

export default Registration;
