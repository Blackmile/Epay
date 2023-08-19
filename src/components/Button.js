import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ text, backcolor, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.Btn, {backgroundColor: backcolor}]}>
        <Text style={ styles.BtnText } > {text} </Text>
      </View>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    Btn: {
        // backgroundColor: 'rgba(168, 82, 55, 0.55)',
        width: 90,
        height: 32.5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    BtnText: {
      fontSize: 24,
    }
})

export default Button