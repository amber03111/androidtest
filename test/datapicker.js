import React, {Component} from 'react';
import {DrawerLayoutAndroid, View,Text} from 'react-native';
export default class DrawerLayoutAndroidDemo extends Component{
render(){
    return(
        <DrawerLayoutAndroid drawerwidth={150}
        
        renderNavigationView={()=>{
        return(
            <View style={{flex: 1,backgroundcolor: '#fff'}}>
            <Text style={{margin: 10,fontSize:15,textAlign:
            'left'}}>抽屉</Text>
            </View>
        )
        }}>
        <View style={{ flex: 1,alignItems: 'center'}}>
            <Text style={{margin: 10, fontsize: 15,textAlign: 'right' }}>
            Hello</Text>
            <Text style={{margin: 10, fontsize: 15,textAlign: 'right'}}>
                world!
            </Text>
            <Text style={{margin: 10, fontsize: 15,textAlign: 'right'}}>
                嘎嘎嘎
            </Text>
            <Text style={{margin: 10, fontsize: 15,textAlign: 'right'}}>
                抽屉
            </Text>
        </View>
        </DrawerLayoutAndroid>
            );
        }
}
