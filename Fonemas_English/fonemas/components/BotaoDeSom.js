import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class BotaoDeSom extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        indexBotaoPress: '',
    };
  }
  playSound = async(soundChunk) =>{
    var linkSom = 'https://s3-whitehatjrcontent.whjr.online/phones/'+ soundChunk + '.mp3';
    await Audio.Sound.createAsync(
      {uri: linkSom, }
      ,
      {shouldPlay: true}
    );
    
  }
render(){  
  return(
    <TouchableOpacity style={
        this.props.buttonIndex === this.state.indexBotaoPress
        ?[styles.botao, {backgroundColor:"white"}]
        :[styles.botao, {backgroundColor:"red"}]
      
    } onPress ={()=>{
      
      this.playSound(this.props.soundChunk);
      this.setState({indexBotaoPress: this.props.buttonIndex});
    }}>
      <Text style={
        this.props.buttonIndex === this.state.indexBotaoPress ?
        [styles.textBotao, {color: 'red'}]
        :[styles.textBotao, {color: 'white'}]
      }>{this.props.wordChunk}</Text>
    </TouchableOpacity>
  );
}
}


const styles = StyleSheet.create({
  botao:{
    marginTop: 10,
    marginLeft: 100,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    width: 150,

  },
  textBotao:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  }
});

