import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View style={styles.Btn}>
      <Text> send </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Btn: {
        backgroundColor: 'rgba(168, 82, 55, 0.55)',
        width: 50,
        height: 20,
        borderRadius: 2,
        alignItems: 'center',
        margin: 10,
    }
})

export default Button