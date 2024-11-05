import React, { useState } from 'react';
import { StyleSheet, Image, View, Switch } from 'react-native';
import { Text, Button, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [bio, setBio] = useState('This is my bio.');
  const [userName, setUserName] = useState('Christian');
  const [profileImage, setProfileImage] = useState(require('../assets/profpic.jpg'));

  const navigation = useNavigation();

  const handleSignOut = () => {
    alert('Signed out');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.profileSection}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text variant="headlineLarge" style={styles.userName}>{userName}</Text>
        <Text variant="bodySmall" style={styles.joined}>Name</Text>
        <Text variant="bodyMedium" style={styles.bio}>{bio}</Text>
      </View>

      <View style={styles.section}>
        <Text variant="titleLarge" style={styles.sectionTitle}>Profile</Text>
        <TouchableRipple 
          onPress={() => navigation.navigate('ManageProfile', { userName, setUserName, setProfileImage, profileImage, bio, setBio })}
          style={styles.menuItem}
        >
          <Text variant="bodyLarge" style={styles.menuText}>Manage Profile</Text>
        </TouchableRipple>
      </View>

      <View style={styles.section}>
        <Text variant="titleLarge" style={styles.sectionTitle}>Settings</Text>
        <View style={styles.menuItem}>
          <Text variant="bodyLarge" style={styles.menuText}>Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ true: '#007BFF', false: '#ccc' }}
          />
        </View>
        <View style={styles.menuItem}>
          <Text variant="bodyLarge" style={styles.menuText}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ true: '#007BFF', false: '#ccc' }}
          />
        </View>
      </View>

      <Button
        mode="contained"
        onPress={handleSignOut}
        style={styles.signOutButton}
        contentStyle={styles.signOutButtonContent}
      >
        Sign Out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#E6F0FA', // Light blue background
  },
  lightContainer: {
    backgroundColor: '#E6F0FA',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 2,
  },
  userName: {
    color: '#007BFF',
    marginVertical: 5,
  },
  joined: {
    color: '#777',
    marginBottom: 10,
  },
  bio: {
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    color: '#007BFF',
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    color: '#333',
  },
  signOutButton: {
    marginTop: 30,
    backgroundColor: '#FF4C4C',
    borderRadius: 8,
  },
  signOutButtonContent: {
    paddingVertical: 10,
  },
});

export default ProfilePage;
