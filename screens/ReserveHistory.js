import React, {Component} from 'react';  
import {View,Text} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
export default class ReserveHistoryScreen extends Component{  
    render(){  
        return(  
            <View>  
                <Text>Reserve History</Text>  
            </View>  
        )  
    }  
}  
ReserveHistoryScreen.navigationOptions={  
    tabBarIcon:({tintColor, focused})=>(  
        <Icon  
            name={focused ? 'ios-person' : 'md-person'}  
            color={tintColor}  
            size={25}  
        />  
    )  
}  