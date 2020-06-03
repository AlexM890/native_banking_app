import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../screens/Home'

const screens = {
    Home:{
        screen: Home
    }
}

const HomeStack = createStackNavigator(screens)

export default HomeStack