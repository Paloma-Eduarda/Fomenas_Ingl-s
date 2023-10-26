import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from './localdb';
import BotaoDeSom from './components/BotaoDeSom';

console.log(db['the'].chunks)
export default class App extends React.Component {
  constructor(){
    super();
    this.state ={
      text: "",
      displayText: "",
      pedacos: [],
      somFonema: [],
    }
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
          backgroundColor={'blue'}
          centerComponent={{ text:'Macaquinho fofo',
          style: {color:'white', fontSize:20},
          }}/>
        <TextInput style={styles.inputBox}
          onChangeText={(text) =>{ //ADICIONAR
            this.setState({text:text});
          }}
        value={this.state.text} //ADICIONAR
        />
        <TouchableOpacity style={styles.botao} onPress={() =>{
          
          var palavra = this.state.text.toLowerCase().trim();

          db[palavra] ?(
          this.setState({ pedacos: db[palavra].chunks}),
          this.setState({somFonema: db[palavra].phones})
          ):
          Alert.alert("a palavra não existe no nosso banco de dados")
        }}>
          <Text style={styles.textBotao}>Ir</Text>
        </TouchableOpacity>
       
        <View>
        </View>
          {this.state.pedacos.map((item, index) =>{
            return(      
               <BotaoDeSom
                  wordChunk = {this.state.pedacos[index]}
                  soundChunk = {this.state.somFonema[index]}
               />
            );
          }
          )}
        </View>
      </SafeAreaProvider>
      
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox:{
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,

  },
  botao:{
    marginTop: 10,
    marginLeft: 150,
  },
  textBotao:{
    fontSize: 30,
    fontWeight: 'bold'
  }
});
