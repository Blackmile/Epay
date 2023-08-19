import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Button from '../components/Button'
// import { Ionicons } from '@expo/vector-icons';

<StatusBar style='light' />

const HomeScreen = () => {
  return (
    <View style={ styles.container } >
      <View style={ styles.header } >
        <Text style={ styles.headerText } > Display Username </Text>
      </View>
      <View style={ styles.Bal }>
        <Text style={ styles.BalText } > #90,548.80 </Text>
        <View style={ styles.Btns } >
          <Button text='Send' backcolor='rgba(168, 82, 55, 0.55)' onPress={() => console.log('sending')}/>
          <Button text='Deposit' backcolor='rgba(173, 202, 220, 0.67)' onPress={() => console.log('depositing')} />
        </View>
      </View>
      <View style={ styles.BankOpt } >
        <Text style={ styles.optText } > Transaction History </Text>
        <Text style={ styles.optText } > Pay Utility Bills </Text>
        <Text style={ styles.optText } > Recharge Airtime / Buy Data bundle </Text>
        <Text style={ styles.optText } > Generate Statement of account </Text>
        <Text style={ styles.optText } > Invest in company stocks </Text>
        <Text style={ styles.optText } > Apply for Loan </Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(148, 74, 63, 0.31)',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
  headerText: {
    fontSize: 21,
    backgroundColor: '#D9D9D9',
    width: 'auto',
  },
  Bal: {
    // position: 'absolute',
    padding: 20,
    marginBottom: 100,
    marginTop: -100,
  },
  BalText: {
    fontSize: 42,
    width: 'auto',
  },
  BankOpt: {
    backgroundColor: 'rgba(161, 189, 206,1)',
    padding: 10,
  },
  optText: {
    fontSize: 24,
    padding: 5,
  },
  Btns: {
    flex: 1,
    position: 'absolute',
    // backgroundColor: 'rgba(148, 74, 63, 0.31)',
    padding: 10,
    flexDirection: 'row',
    marginTop: 95,
    marginLeft: -60,
    justifyContent: 'space-between',
    width: '100%',
  }
})

export default HomeScreen