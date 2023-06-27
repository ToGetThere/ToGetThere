import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Yandex from 'expo-yandex-maps';
import {useEffect, useState} from "react";

export default function App() {
  const [state, setState] = useState();

  useEffect(() => {
      fetch('http://localhost:8080/api/v1/user', {method: 'GET'})
          .then(res => res.json())
          .then(setState)
  }, []);

  return (
    <View style={styles.container}>
      <Yandex.ExpoYandexMapsView name={'ok'} />
      <Text>Yandex module constant: {Yandex.PI}</Text>
      <Text>Yandex module function call: {Yandex.hello()}</Text>
      <Text style={{textAlign: 'center'}}>API Gateway response from Docker: {JSON.stringify(state)}</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
{
  "name": "mobile-app",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "apps/mobile-app/src",
  "projectType": "application",
  "targets": {
    "start": {
      "executor": "@nx/expo:start",
      "options": {
        "port": 8081,
        "dev": true,
        "devClient": true,
        "ios": true
      }
    }
  },
  "tags": []
}

 */
