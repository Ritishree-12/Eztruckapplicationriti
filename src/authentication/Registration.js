import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Icon, CheckBox } from "react-native-elements";
import { COLORS, FONTS, SPACING } from "../authentication/style";

const commonInputStyle = {
  height: 60,
  marginVertical: SPACING.MARGIN_VERTICAL,
  borderWidth: 1,
  paddingHorizontal: SPACING.PADDING_HORIZONTAL,
  borderRadius: 30,
  borderColor: COLORS.BORDER,
  color: COLORS.TEXT,
};

const Registration = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [name, email, mobileNumber]);

  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = "Name is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!mobileNumber) {
      errors.mobileNumber = "Mobile number is required.";
    } else if (
      !/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/.test(
        mobileNumber
      )
    ) {
      errors.mobileNumber = "Mobile number should only contain numbers.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSignUp = () => {
    const userData = {
      name,
      email,
      mobileNumber,
      dob,
    };

    if (isFormValid) {
      Alert.alert("Sign Up Pressed", JSON.stringify(userData));
    } else {
      const errorMessages = Object.values(errors).join("\n");
      Alert.alert("Form Validation Error", errorMessages);
    }

    if (!agreeTerms) {
      Alert.alert(
        "Please agree to the Terms of Service and Privacy Policy."
      );
    }
  };

  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setDob(selectedDate);
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
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Mobile Number"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
        />
        <TouchableOpacity style={styles.input} onPress={handleDatePicker}>
          <Text style={{ color: COLORS.TEXT }}>
            {dob.toDateString()}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={dob}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
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
    paddingHorizontal: SPACING.PADDING_HORIZONTAL,
    backgroundColor: COLORS.BACKGROUND,
  },
  title: FONTS.TITLE,
  terms: FONTS.TERMS,
  termsHighlight: FONTS.TERMS_HIGHLIGHT,
  input: commonInputStyle,
  signupButton: {
    ...commonInputStyle,
    height: 60,
    backgroundColor: COLORS.PRIMARY,
    borderColor:'red',
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    marginBottom: 20,
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
    alignItems: "center",
  },
  googleImage: {
    width: 30,
    height: 30,
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
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
  // checkboxContainer: {
  //   marginVertical: 12,
  // },
});

export default Registration;
