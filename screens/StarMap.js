import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMap extends Component {
    constructor(){
      super();
      this.state={
        latitude:"",
        longitude:"",
      }
    }
    render() {
    const {longitude,latitude} = this.state;
    const path = 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
        return (
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <View style={{backgroundColor:'#101055', justifyContent:'center',
    alignItems:'center',}}>
                <Text style={styles.titleText}>Star Map</Text>
                <TextInput
                  style={styles.routeCard}
                  placeholder="Enter your Latitude"
                  placeholderTextColor="#ffff#000000"
                  onChangeText={(text)=>{
                    this.setState({
                      latitude: text
                    })
                  }}
                />
                <TextInput
                  style={styles.routeCard}
                  placeholder="Enter your longitude"
                  placeholderTextColor="#ffff#000000"
                  onChangeText={(text)=>{
                    this.setState({
                      longitude: text
                    })
                  }}
                />
              </View>
              <WebView
                  scalesPageToFit={true}
                  source={{uri:path}}
                  style={styles.web}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  droidSafeArea:{
    marginTop:Platform.OS==="android"? StatusBar.currentHeight:0
  },
  backgroundImage:{
    resizeMode:'cover',
    flex:1,
  },
  webContainer: {
        flex: 0.7
    },
  web: {
        width: "100%",
        height: "100%",
        flex: 1,
    },
  titleBar:{
    flex:0.15,
    justifyContent:'center',
    alignItems:'center',
  },
  titleText:{
    color:'white',
    fontSize:40,
    fontWeight:'bold',
  },
  mainIcon:{
    height:170,
    width:170,
    resizeMode:'contain',
    marginTop:190,
  },
  routeCard:{
    backgroundColor:'#101055', 
    width:250,  
    height:40,
    marginTop:20, 
    borderRadius:40, 
    justifyContent:'center', 
    alignItems:'center',
    
    borderColor:'white', 
    borderWidth:1,
  },
  routeText:{
    fontSize:20,
    fontWeight:'bold',
    color:'hotpink',
    padding:20,
  },
  iconImage:{
    position:"absolute",
    height:70,
    width:70,
    resizeMode:'contain',
    right:-15,
    top:-10,
  },
  buttionView:{
    marginTop:200, 
    justifyContent:'center',
    alignItems:'center'
  }
})