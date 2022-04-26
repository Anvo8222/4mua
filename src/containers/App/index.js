import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import React from 'react';
import 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import Fall from './Fall';
import reducer from './reducer';
import { makeSelectTurn } from './selectors';
import Spring from './Spring';
import Summer from './Summer';
import Winter from './Winter';

const key = 'App';

function App(props) {
  useInjectReducer({ key, reducer });

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Fall" component={Fall} />
        <Stack.Screen name="Summer" component={Summer} />
        <Stack.Screen name="Spring" component={Spring} />
        <Stack.Screen name="Winter" component={Winter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

App.propTypes = {};

export default App;
