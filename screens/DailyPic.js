import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, SafeAreaView, ImageBackground, TouchableOpacity, Image, Platform, StatusBar, Linking  } from 'react-native';
import axios from 'axios';

export default class DailyPic extends Component {
    constructor(props){
      super(props);
      this.state={
        apod:{},
      }
    }

    componentDidMount() {
        this.getAPOD()
    }

    getAPOD=()=>{
      axios
          .get("https://api.nasa.gov/planetary/apod?api_key=WhKcu6LDWhi8vSR3ndcm8pZTbsq0deolS2MnRyU0")
          .then(response =>{
            this.setState({
              apod:response.data
            })
          })
          .catch(error =>{
            Alert.alert(error.message)
          })
    }
    render() {
      
        return (
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea}/>
              <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
              <View style={styles.titleBar}>
                <Text style={styles.routeText}>Astronomy picture of the day</Text>
              </View>
                <Text style={styles.titleText}>{this.state.apod.title}:</Text>
                
                <TouchableOpacity style={styles.listContainer}
                  onPress={()=> Linking.openURL(this.state.apod.url).catch(err => console.error("couldn't load page", err))}>
                  <View style={styles.iconContainer}>
                    <Image source={require("../assets/play-video.png")} style={{ width:50, height:50}}/>
                  </View>
                </TouchableOpacity>
                  <Text style={styles.explainationText}>{this.state.apod.explanation}</Text>
              </ImageBackground>
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
  titleBar:{
    flex:0.15,
    justifyContent:'center',
    alignItems:'center',
  },
  titleText:{
    padding:10,
    color:'#CC00CC',
    fontSize:35,
    fontWeight:'bold',
    marginTop:80,
  },
  routeText:{
    padding:10,
    fontSize:40,
    fontWeight:'bold',
    color:'white',
    marginTop:80,
  },
  listContainer:{
    marginTop:-56,
    marginLeft:275,
  },
  explainationText:{
    padding:10,
    color:'white',
    fontsize:0,
  }
})