import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Signin = () => {
  return (
    <View>
      <Text>Sign in</Text>
      <Link href="/(auth)/signup">Create Account</Link>
    </View>
  );
};
export default Signin;
