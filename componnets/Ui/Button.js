import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({label}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
    button:{
        backgroundColor:"blue",
        padding:15,
        borderRadius:30,
        marginVertical:25,
        marginHorizontal:25

    },
    label:{
      fontSize:20,
      fontWeight:"bold",
      textAlign:"center",
      color:"white"
    }
});
