import { View, Text, StyleSheet, type TextStyle } from 'react-native'

interface Props {
  children: string
  bang?: boolean
  style?: TextStyle
}

const Hello = (props: Props): JSX.Element => {
  const { children, bang, style } = props
  return (
        <View>
            <Text style={[Styles.text, style]}>
                Hello {children}{bang === true ? '!' : ''}
            </Text>
        </View>
  )
}

const Styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    puddig: 16
  }
})

export default Hello
