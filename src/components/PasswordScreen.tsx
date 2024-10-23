import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const PasswordScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');

  const handlePinInput = (digit) => {
    if (pin.length < 4) {
      const newPin = pin + digit;
      setPin(newPin);
      if (newPin.length === 4) {
        setTimeout(() => navigation.navigate('Home'), 500);
      }
    }
  };

  return (
    <Animatable.View 
      style={styles.container}
      animation="fadeIn"
      duration={500}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Animatable.Image
          source={require('../assets/lock-icon.png')}
          style={styles.lockIcon}
          animation="bounce"
        />
        <Text style={styles.title}>Ingresa tu clave</Text>
        
        <View style={styles.pinContainer}>
          {[...Array(4)].map((_, i) => (
            <View 
              key={i} 
              style={[
                styles.pinBox,
                pin.length > i && styles.pinBoxFilled
              ]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>¿Problemas con tu clave?</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 20,
    alignItems: 'flex-end',
  },
  closeButton: {
    fontSize: 24,
    color: '#333',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  lockIcon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginBottom: 30,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  pinBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#DDD',
    margin: 5,
    borderRadius: 5,
  },
  pinBoxFilled: {
    backgroundColor: '#FF6B00',
    borderColor: '#FF6B00',
  },
  forgotButton: {
    marginTop: 20,
  },
  forgotText: {
    color: '#4A90E2',
    fontSize: 16,
  },
});