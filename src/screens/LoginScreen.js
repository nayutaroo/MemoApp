import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight, TextInput, Button} from 'react-native' 

class LoginScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput style={styles.input} value="Email Address"/>
        <TextInput style={styles.input} value="Password"/>
        <TouchableHighlight style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flex: 1,
    padding: 24,
    width: '100%',
  },
  input:{
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center', //左右真ん中
    marginBottom: 24,
  },
  button:{
    backgroundColor: '#e31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle:{
    color: "#fff",
    fontSize: 18,
  },


});

export default LoginScreen;