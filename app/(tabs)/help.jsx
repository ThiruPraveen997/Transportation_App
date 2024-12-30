import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const Help = () => {

  const handleCall = () => {
    Linking.openURL('tel:+1234567890'); // Replace with your support phone number
  };

  const handleEmail = () => {
    Linking.openURL('mailto:support@taxiapp.com'); // Replace with your support email
  };

  const handleWebsite = () => {
    Linking.openURL('https://www.taxiapp.com'); // Replace with your website URL
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background2.jpg')} // Second background image
        style={styles.secondaryBackground} // Apply it to a view
        resizeMode="cover"
      >
        {/* Main content container */}
        <View style={styles.overlayContainer}>
          <Text style={styles.title}>Need Help?</Text>
          <Text style={styles.subtitle}>We are here to assist you!</Text>

          {/* Contact options */}
          <TouchableOpacity onPress={handleCall} style={styles.contactItem}>
            <Ionicons name="call" size={24} color="#34b7f1" style={styles.icon} />
            <Text style={styles.contactText}>+94 077-963-7693</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleEmail} style={styles.contactItem}>
            <Ionicons name="mail" size={24} color="#34b7f1" style={styles.icon} />
            <Text style={styles.contactText}>poochitravels@gmail.com</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleWebsite} style={styles.contactItem}>
            <Ionicons name="earth" size={24} color="#34b7f1" style={styles.icon} />
            <Text style={styles.contactText}>WWW.POOCHITRAVELS.COM</Text>
          </TouchableOpacity>
        </View>

        {/* Address section */}
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Our Office:</Text>
          <Text style={styles.addressText}>123 PVN Lane, Moratuwa</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.PRIMARY,
  },
  secondaryBackground: {
    flex: 1,
    padding: 20, // Adjust padding for your content
    justifyContent: 'center', // Center the content
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light white overlay for content readability
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  contactText: {
    fontSize: 18,
    color: Colors.PRIMARY,
    marginLeft: 10,
  },
  icon: {
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 50,
  },
  addressContainer: {
    marginTop: 40,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  addressTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  addressText: {
    fontSize: 16,
    color: Colors.PRIMARY,
    textAlign: 'center',
  },
});

export default Help;
