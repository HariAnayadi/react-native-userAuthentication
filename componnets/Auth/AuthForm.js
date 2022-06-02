import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import InputComponent from "../Ui/InputComponent";
import Button from "../Ui/Button";
import FlatButton from "../Ui/FlatButton";

const AuthForm = ({ isLogin }) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <InputComponent placeholder={"Email"} />
        {!isLogin && <InputComponent placeholder={"Confirm your email"} />}
        <InputComponent placeholder={"password"} secureTextEntry={true} />
        {!isLogin && (
          <InputComponent
            placeholder={"confirm your password"}
            secureTextEntry={true}
          />
        )}
        {!isLogin ? <Button label="signup" /> : <Button label={"Login"} />}
        {isLogin ? (
          <FlatButton
            buttonText={"dont have account? create a new one"}
            onPress={() => {
              navigation.replace("Signup");
            }}
          />
        ) : (
          <FlatButton
            buttonText={"you have account? Login here"}
            onPress={() => {
              navigation.replace("Login");
            }}
          />
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AuthForm;

const styles = StyleSheet.create({});
