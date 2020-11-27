import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {

  redirect=()=> {
      this.props.navigation.navigate('Page');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{width: '100%', background: 'blue', padding: 20}}>
          <Text style={{fontSize:20, fontWeight: 'bolder', color: '#fff', marginLeft: 75}}>Dictionary App</Text>
        </Text>

         <Text style={{marginLeft: 50, fontSize: 16, marginTop: 20}}>Welcome To The Dictionary App</Text>

        <TouchableOpacity style={{marginTop:20, borderWidth:3, borderRadius:20, width: 240,  height: 37.5,marginLeft: 45, alignContent: 'center', justifyContent: 'center'}}
        onPress={()=>this.redirect()}>
            <Text style={{fontSize: 20, marginLeft:20, fontWeight:"bold"}}>
              Search for meanings
            </Text>
        </TouchableOpacity>
      </View>
    );
    
  }
}
