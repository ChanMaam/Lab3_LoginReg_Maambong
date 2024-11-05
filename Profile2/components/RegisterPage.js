import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

const RegisterPage = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    alert('Register pressed');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>Create Your Account</Text>
      <Text variant="bodyMedium" style={styles.subtitle}>Sign up to get started</Text>

      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#007BFF', background: '#ffffff' } }}
      />
      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#007BFF', background: '#ffffff' } }}
      />
      <TextInput
        label="Date of Birth (DD/MM/YYYY)"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#007BFF', background: '#ffffff' } }}
      />
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#007BFF', background: '#ffffff' } }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
        theme={{ colors: { primary: '#007BFF', background: '#ffffff' } }}
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
        theme={{ colors: { primary: '#007BFF', background: '#ffffff' } }}
      />

      <Button 
        mode="contained" 
        onPress={handleRegister} 
        style={styles.button} 
        contentStyle={styles.buttonContent}
      >
        Register
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E6F0FA', 
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
    color: '#555',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#ffffff',
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

export default RegisterPage;
