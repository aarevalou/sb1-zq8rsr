import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/banco-estado-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Hola alejandro</Text>
      
      <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => navigation.navigate('Password')}
      >
        <Text style={styles.loginButtonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotText}>¿Olvidaste tu clave?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bePassButton}>
        <View style={styles.bePassContainer}>
          <Image
            source={require('../assets/lock-icon.png')}
            style={styles.lockIcon}
          />
          <Text style={styles.bePassText}>BE Pass: Autoriza tus operaciones</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.versionText}>Versión 7.8.3.50426 R 104</Text>

      <View style={styles.quickAccess}>
        <Text style={styles.quickAccessTitle}>Accesos rápidos</Text>
        <View style={styles.quickAccessGrid}>
          <QuickAccessButton
            icon={require('../assets/qr-icon.png')}
            text="Generar Pasaje QR"
          />
          <QuickAccessButton
            icon={require('../assets/pay-qr-icon.png')}
            text="Pagar o girar con QR"
          />
          <QuickAccessButton
            icon={require('../assets/location-icon.png')}
            text="Bus, tren y transfer"
          />
          <QuickAccessButton
            icon={require('../assets/emergency-icon.png')}
            text="Emergencias y ayuda"
          />
        </View>
      </View>
    </View>
  );
};

const QuickAccessButton = ({ icon, text }) => (
  <View style={styles.quickAccessButton}>
    <Image source={icon} style={styles.quickAccessIcon} />
    <Text style={styles.quickAccessText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6B00',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 50,
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    color: 'white',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FF6B00',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotButton: {
    marginBottom: 20,
  },
  forgotText: {
    color: 'white',
    fontSize: 16,
  },
  bePassButton: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  bePassContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lockIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  bePassText: {
    color: '#333',
    fontSize: 16,
  },
  versionText: {
    color: 'white',
    fontSize: 12,
    marginBottom: 30,
  },
  quickAccess: {
    width: '100%',
  },
  quickAccessTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 15,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickAccessButton: {
    backgroundColor: 'white',
    width: '48%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  quickAccessIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  quickAccessText: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },
});