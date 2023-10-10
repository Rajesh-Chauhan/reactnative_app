// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        'https://assignment.8848digitalerp.com/api/method/assignment.API.access_token.get_access_token',
        {
          params: {
            usr: email,
            pwd: password,
          },
        }
      );

      // Handle successful login here, store access token, etc.
      // You may want to use AsyncStorage or some state management library for this.
      // Then navigate to the Listing screen:
      navigation.navigate('Listing');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View>
      <Text>User Email ID</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter email"
      />
      <Text>User Password</Text>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter password"
        secureTextEntry
      />
      <Button title="Submit" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
