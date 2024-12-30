import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Modal, Alert } from 'react-native';
import { Colors } from '../../constants/Colors';
import { ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Home = () => {
  // State variables
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [category, setCategory] = useState('');
  const [selectedTaxi, setSelectedTaxi] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [showArrivalPicker, setShowArrivalPicker] = useState(false);

  const handleCategorySelect = (category) => {
    setCategory(category);
  };

  const handleSearchTaxi = () => {
    if (category && departure && arrival && phoneNumber) {
      setSelectedTaxi(`Taxi for ${category} from ${departure} to ${arrival}`);
      setShowPayment(true);
    } else {
      Alert.alert('Error', 'Please fill all details');
    }
  };

  const handlePayment = () => {
    Alert.alert('Success', 'Payment Successful! Booking confirmed.');
    // Reset after payment
    setDeparture('');
    setArrival('');
    setCategory('');
    setSelectedTaxi('');
    setPhoneNumber('');
    setShowPayment(false);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')} // Background image
      style={styles.container}
      resizeMode="cover" // Make sure the image covers the screen
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Departure and Arrival */}
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowLocationPicker(true)}
          >
            <Text style={{ color: '#333' }}>Departure Location: {departure || 'Select Location'}</Text>
          </TouchableOpacity>
          <Modal
            visible={showLocationPicker}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setShowLocationPicker(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Departure Location</Text>
                <Picker
        selectedValue={departure}
        onValueChange={(itemValue) => setDeparture(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Colombo 1 - Fort" value="Colombo 1 - Fort" />
        <Picker.Item label="Colombo 2 - Pettah" value="Colombo 2 - Pettah" />
        <Picker.Item label="Colombo 3 - Kollupitiya" value="Colombo 3 - Kollupitiya" />
        <Picker.Item label="Colombo 4 - Havelock Town" value="Colombo 4 - Havelock Town" />
        <Picker.Item label="Colombo 5 - Wellawatte" value="Colombo 5 - Wellawatte" />
        <Picker.Item label="Colombo 6 - Kotte" value="Colombo 6 - Kotte" />
        <Picker.Item label="Colombo 7 - Cinnamon Gardens" value="Colombo 7 - Cinnamon Gardens" />
        <Picker.Item label="Colombo 8 - Borella" value="Colombo 8 - Borella" />
        <Picker.Item label="Colombo 9 - Dematagoda" value="Colombo 9 - Dematagoda" />
        <Picker.Item label="Colombo 10 - Grandpass" value="Colombo 10 - Grandpass" />
        <Picker.Item label="Colombo 11 - Kelaniya" value="Colombo 11 - Kelaniya" />
        <Picker.Item label="Colombo 12 - Rajagiriya" value="Colombo 12 - Rajagiriya" />
        <Picker.Item label="Colombo 13 - Maligawatta" value="Colombo 13 - Maligawatta" />
        <Picker.Item label="Colombo 14 - Mount Lavinia" value="Colombo 14 - Mount Lavinia" />
        <Picker.Item label="Colombo 15 - Moratuwa" value="Colombo 15 - Moratuwa" />
        <Picker.Item label="Colombo 16 - Piliyandala" value="Colombo 16 - Piliyandala" />
        <Picker.Item label="Colombo 17 - Boralesgamuwa" value="Colombo 17 - Boralesgamuwa" />
        <Picker.Item label="Colombo 18 - Maharagama" value="Colombo 18 - Maharagama" />
        <Picker.Item label="Colombo 19 - Homagama" value="Colombo 19 - Homagama" />
        <Picker.Item label="Colombo 20 - Dehiwala" value="Colombo 20 - Dehiwala" />
      </Picker>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => setShowLocationPicker(false)}
                >
                  <Text style={styles.modalCloseButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowArrivalPicker(true)}
          >
            <Text style={{ color: '#333' }}>Arrival Location: {arrival || 'Select Location'}</Text>
          </TouchableOpacity>
          <Modal
            visible={showArrivalPicker}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setShowArrivalPicker(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Arrival Location</Text>
                <Picker
                  selectedValue={arrival}
                  onValueChange={(itemValue) => setArrival(itemValue)}
                >
                   <Picker.Item label="Colombo 1 - Fort" value="Colombo 1 - Fort" />
        <Picker.Item label="Colombo 2 - Pettah" value="Colombo 2 - Pettah" />
        <Picker.Item label="Colombo 3 - Kollupitiya" value="Colombo 3 - Kollupitiya" />
        <Picker.Item label="Colombo 4 - Havelock Town" value="Colombo 4 - Havelock Town" />
        <Picker.Item label="Colombo 5 - Wellawatte" value="Colombo 5 - Wellawatte" />
        <Picker.Item label="Colombo 6 - Kotte" value="Colombo 6 - Kotte" />
        <Picker.Item label="Colombo 7 - Cinnamon Gardens" value="Colombo 7 - Cinnamon Gardens" />
        <Picker.Item label="Colombo 8 - Borella" value="Colombo 8 - Borella" />
        <Picker.Item label="Colombo 9 - Dematagoda" value="Colombo 9 - Dematagoda" />
        <Picker.Item label="Colombo 10 - Grandpass" value="Colombo 10 - Grandpass" />
        <Picker.Item label="Colombo 11 - Kelaniya" value="Colombo 11 - Kelaniya" />
        <Picker.Item label="Colombo 12 - Rajagiriya" value="Colombo 12 - Rajagiriya" />
        <Picker.Item label="Colombo 13 - Maligawatta" value="Colombo 13 - Maligawatta" />
        <Picker.Item label="Colombo 14 - Mount Lavinia" value="Colombo 14 - Mount Lavinia" />
        <Picker.Item label="Colombo 15 - Moratuwa" value="Colombo 15 - Moratuwa" />
        <Picker.Item label="Colombo 16 - Piliyandala" value="Colombo 16 - Piliyandala" />
        <Picker.Item label="Colombo 17 - Boralesgamuwa" value="Colombo 17 - Boralesgamuwa" />
        <Picker.Item label="Colombo 18 - Maharagama" value="Colombo 18 - Maharagama" />
        <Picker.Item label="Colombo 19 - Homagama" value="Colombo 19 - Homagama" />
        <Picker.Item label="Colombo 20 - Dehiwala" value="Colombo 20 - Dehiwala" />
      </Picker>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => setShowArrivalPicker(false)}
                >
                  <Text style={styles.modalCloseButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        {/* Taxi Categories */}
        <View style={styles.categoriesContainer}>
          {/* Box for "Select a Taxi Category" text */}
          <View style={styles.categoryTitleBox}>
            <Text style={styles.categoryTitleText}>Select a Taxi Category</Text>
          </View>
          <View style={styles.categories}>
            <TouchableOpacity
              style={[styles.categoryItem, category === 'Car' && styles.selectedCategory]}
              onPress={() => handleCategorySelect('Car')}
            >
              <Image source={require('../../assets/images/car.png')} style={styles.categoryIcon} />
              <Text style={styles.categoryText}>Car</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.categoryItem, category === 'Tuk Tuk' && styles.selectedCategory]}
              onPress={() => handleCategorySelect('Tuk Tuk')}
            >
              <Image source={require('../../assets/images/Tuk Tuk.png')} style={styles.categoryIcon} />
              <Text style={styles.categoryText}>Tuk Tuk</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.categoryItem, category === 'Van' && styles.selectedCategory]}
              onPress={() => handleCategorySelect('Van')}
            >
              <Image source={require('../../assets/images/van.png')} style={styles.categoryIcon} />
              <Text style={styles.categoryText}>Van</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Phone Number */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>

        {/* Search Button */}
        <TouchableOpacity style={styles.searchButton} onPress={handleSearchTaxi}>
          <Text style={styles.searchButtonText}>Search & Select Taxi</Text>
        </TouchableOpacity>

        {/* Show Selected Taxi */}
        {selectedTaxi ? (
          <View style={styles.selectedTaxiContainer}>
            <Text style={styles.selectedTaxiText}>{selectedTaxi}</Text>
          </View>
        ) : null}

        {/* Payment Button */}
        {showPayment && (
          <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
            <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoriesContainer: {
    marginVertical: 20,
  },
  categoryTitleBox: {
    backgroundColor: '#6C63FF', // Box color
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  categoryTitleText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  selectedCategory: {
    backgroundColor: '#6C63FF',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  searchButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedTaxiContainer: {
    marginVertical: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedTaxiText: {
    fontSize: 16,
    color: '#333',
  },
  paymentButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalCloseButton: {
    marginTop: 10,
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;
