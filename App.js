/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {  StatusBar} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import Router from './src/navigation/router';
import { withAuthenticator } from 'aws-amplify-react-native'

const App: () => Node = () => {


  return (
    < >
    <PaperProvider>
    <StatusBar barStyle="dark-content"/>
      <Router/>  
      </PaperProvider>    
    </>
  );
};

export default App
