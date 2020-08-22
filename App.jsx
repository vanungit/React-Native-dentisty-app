import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen, PatientScreen} from './components'


const App = createStackNavigator({
        Home: {
            screen: HomeScreen,
        },
        Patient: {
            screen: PatientScreen,
        }
    },
    {

        initialRouterName: 'Home'
    }
);


export default createAppContainer(App);

