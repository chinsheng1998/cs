import React, {Component} from 'react';  
import {StyleSheet, Text, View,StatusBar} from 'react-native';  
import {createAppContainer} from 'react-navigation';   
import Icon from 'react-native-vector-icons/Ionicons';  
  
import AppNavigator from '../pages/Reserve';  
const AppIndex = createAppContainer(AppNavigator)  
  
export default class App extends Component{  
    render(){  
        return(  
            <View style={{flex:1}} >  
                <StatusBar  
                    backgroundColor='black'  
                    barStyle='light-content'  
                />  
                <View style={styles.header}>  
                    <Icon name='ios-camera' size={20} color='white'/>  
                    <Icon name='ios-menu' size={20} color='white'/>  
                </View>  
                <AppIndex/>  
            </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    wrapper: {  
        flex: 1,  
    },  
    header:{  
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'space-between',  
        backgroundColor: 'red',  
        paddingHorizontal: 18,  
        paddingTop: 5,  
    }  
});  