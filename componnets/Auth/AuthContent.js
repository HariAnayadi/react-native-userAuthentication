import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AuthForm from './AuthForm'

const AuthContent = ({isLogin}) => {
  return (
    <View style={styles.container}>
        <AuthForm isLogin={isLogin} />
    </View>
  )
}

export default AuthContent

const styles = StyleSheet.create({
    container:{
        padding:15,
        flex:1
    }
})