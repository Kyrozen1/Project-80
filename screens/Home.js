import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require("../assets/stars.gif")} style={styles.backgroundImage}>
                <View style={styles.titleBar}>
                  <Image source={require("../assets/main-icon.png")} style={styles.mainIcon}/>
                  <Text style={styles.titleText}>Stellar App</Text>
                </View>
                <View style={styles.buttionView}>
                <TouchableOpacity style={styles.routeCard}
                  onPress={()=>
                    this.props.navigation.navigate("SpaceCraft")}
                >
                  <Text style={styles.routeText}>Space Craft</Text>
                  <Image source={require("../assets/space_crafts.png")}
                style={styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}
                  onPress={()=>
                    this.props.navigation.navigate("StarMap")}
                >
                  <Text style={styles.routeText}>Star Map</Text>
                  <Image source={require("../assets/star_map.png")}
                style={styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}
                onPress={()=>this.props.navigation.navigate("DailyPic")}
                >
                  <Text style={styles.routeText}>Daily Pictures</Text>
                  <Image source={require("../assets/daily_pictures.png")} 
                  style={styles.iconImage}></Image>
                </TouchableOpacity>
                </View>
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
    color:'white',
    fontSize:60,
    fontWeight:'bold',
  },
  mainIcon:{
    height:170,
    width:170,
    resizeMode:'contain',
    marginTop:190,
  },
  routeCard:{
    backgroundColor:'white', 
    width:250, 
    height:50, 
    marginTop:20, 
    borderRadius:50, 
    justifyContent:'center', 
    alignItems:'center'
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