import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={false} />
      <Routes/>
    </>
  );
}