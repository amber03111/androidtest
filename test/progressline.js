import React, {Component} from 'react';
import {ProgressBarAndroid,View } from 'react-native';
export default class ProgressBar extends Component{
    render (){
        return(
            <ProgressBarAndroid style={{top: 100}}
            color='blue'
            styleAttr={"Horizontal"}
            progress={0.8}
            indeterminate={false}/>
        );
        }
}
e