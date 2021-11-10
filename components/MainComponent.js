import React, { Component } from 'react';
import Home from "./HomeComponent"
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import  Constants  from 'expo-constants';
import {View, Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: {screen: Directory}, //Navigation available/listed in the stack
        CampsiteInfo: {screen: CampsiteInfo}
    },
    {
        initialRouteName: "Directory", //Initial Route Name & header
        defaultNavigationOptions: {
           headerStyle: {
               backgroundColor: '#563700'
           },
           headerTintColor: "#fff",
           headerTitleStyle: {
               color: "#fff"

           }
        }
    }
)

const HomeNavigator = createStackNavigator(
    {
        Home: {screen: Home}, //Navigation available/listed in the stack
    },
    {
        defaultNavigationOptions: {
           headerStyle: {
               backgroundColor: '#563700'
           },
           headerTintColor: "#fff",
           headerTitleStyle: {
               color: "#fff"

           }
        }
    }
)

const MainNavigator = createDrawerNavigator(
    {
        Home: {screen: HomeNavigator},
        Directory: {screen: DirectoryNavigator}
    },
    {
        drawerBackgroundColor: "#CEC8FF"
    }
)

//Connects top level navigator to application environment
const AppNavigator = createAppContainer(MainNavigator)


//Goal: render the CampsiteInfoComponent to the view when one of the campsites in the directory is clicked. 
class Main extends Component{

        render() {
            return(
                <View 
                 style={{
                     flex: 1,
                     paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight //conditional code for ios phones
                    }}
                >
                     <AppNavigator />
                 </View>
            )
        }
    }

    export default Main