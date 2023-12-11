import {
  View, Text, TextInput,
  TouchableOpacity, StyleSheet
} from 'react-native'

import Header from '../../components/Header'
import Button from '../../components/Button'

const LogIn = (): JSX.Element => {
  return (
    <View style={styles.conatiner}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value='Email address' />
        <TextInput style={styles.input} value='PassWord' />
        <Button label='Submit' />
        <View style={styles.fotter}>
          <Text style={styles.fotterText}>Not registered?</Text>
          <TouchableOpacity>
              <Text style={styles.fotterLink}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#ffffff',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  fotter: {
    flexDirection: 'row'
  },
  fotterText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: 'F000000'
  },
  fotterLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }
})

export default LogIn
