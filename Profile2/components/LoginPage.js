import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert('Login pressed');
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>Welcome Back!</Text>
      <Text variant="bodyMedium" style={styles.subtitle}>Please log in to continue</Text>

      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#007BFF', background: '#fff' } }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
        theme={{ colors: { primary: '#007BFF', background: '#fff' } }}
      />

      <Button 
        mode="contained" 
        onPress={handleLogin} 
        style={styles.button} 
        contentStyle={styles.buttonContent}
      >
        Log In
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Don't have an account? Register here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E6F0FA',  // Updated light blue background color
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    marginBottom: 30,
    textAlign: 'center',
    color: '#777',
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    elevation: 3, 
  },
  buttonContent: {
    paddingVertical: 10,
  },
  linkText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#007BFF',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});

export default LoginPage;
