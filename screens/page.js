import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Mark extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      word:"",
      discription:"",
      lexicalCategory: ""
    };
  }
  redirect = () => {
    this.props.navigation.navigate('Home');
  };

  Search=()=>{
    var searchKeyword = this.state.text.toLowerCase();
    var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json";
    return fetch(url).then((data)=>{
      if(data.status===200){
        return data.json();
      }else{
        return null;
      }
    }).then(response=>{
      var responseObject = response;
      if(responseObject){
        var wordData = responseObject.definitions[0];
        var description = wordData.description
        var lexicalCategory= wordData.wordtype
        this.setState({
          word:"Searched Word :- "+this.state.text,
          discription:"Description :- "+description,
          lexicalCategory: "Word Type :- "+lexicalCategory
        })
      }else{
        this.setState({
          word: "Searched Word :- "+this.state.text,
          discription: "This word was not found please try some other word",
          lexicalCategory: ""
        })
      } 
    })
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>
          <Text style={styles.text}>Search For A Meaning</Text>
        </Text>
        <Text style={styles.text2}>Search For A Meaning Bellow</Text>
        <TextInput style={styles.inputBox} onChangeText={(text) => {
          this.setState({ text: text });
        }} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.Search();
          }}>
          <Text style={styles.buttonT}>GO</Text>
        </TouchableOpacity>
        <View>
        <Text style={styles.mText}>{this.state.word}</Text>
        <Text style={styles.mText}>{this.state.discription}</Text>
        <Text style={styles.mText}>{this.state.lexicalCategory}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: { width: '100%', backgroundColor: 'blue', padding: 20, },
  text: { fontSize: 20, fontWeight: 'bolder', color: '#fff', marginLeft: '28%', },
  inputBox: {
    marginTop: 25,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    outline: 'none',
    borderRadius: 50,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#eeeeee',
  },
  text2: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: '22.5%',
  },
  button:{
    backgroundColor: "#ff7300",
    borderRadius: 50,
    padding: 10,
    width: 50, 
    marginTop: 10,
    marginLeft: "44.5%",
  },
  buttonT:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  mText:{
    color:"#000",
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  }
});
