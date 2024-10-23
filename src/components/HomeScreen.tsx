import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const HomeScreen = ({ navigation }) => {
  const [isTransferMenuVisible, setTransferMenuVisible] = useState(false);
  const overlayOpacity = new Animated.Value(0);

  const toggleTransferMenu = () => {
    if (isTransferMenuVisible) {
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(overlayOpacity, {
        toValue: 0.5,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
    setTransferMenuVisible(!isTransferMenuVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/banco-estado-logo.png')}
          style={styles.logo}
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image
              source={require('../assets/notification-icon.png')}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/profile-icon.png')}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.accountCard}>
        <View style={styles.accountHeader}>
          <Text style={styles.accountType}>CuentaRUT</Text>
          <Text style={styles.accountNumber}>0002066958</Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/share-icon.png')}
              style={styles.shareIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.balance}>$37.379</Text>
        <Text style={styles.balanceLabel}>Saldo disponible</Text>
      </View>

      <TouchableOpacity style={styles.movementsButton}>
        <Text style={styles.movementsText}>Últimos movimientos</Text>
        <Image
          source={require('../assets/chevron-down.png')}
          style={styles.chevronIcon}
        />
      </TouchableOpacity>

      {/* Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../assets/home-icon.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={toggleTransferMenu}
        >
          <Image
            source={require('../assets/transfer-icon.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Transferir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../assets/security-icon.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Seguridad</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../assets/more-icon.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Más</Text>
        </TouchableOpacity>
      </View>

      {/* Transfer Menu */}
      {isTransferMenuVisible && (
        <Animatable.View 
          style={styles.transferMenu}
          animation="slideInUp"
          duration={300}
        >
          <View style={styles.transferHeader}>
            <Text style={styles.transferTitle}>Transferir</Text>
            <TouchableOpacity onPress={toggleTransferMenu}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.transferOption}
            onPress={() => {
              toggleTransferMenu();
              navigation.navigate('TransferList');
            }}
          >
            <Image
              source={require('../assets/contacts-icon.png')}
              style={styles.transferOptionIcon}
            />
            <Text style={styles.transferOptionText}>A terceros</Text>
            <Image
              source={require('../assets/chevron-right.png')}
              style={styles.chevronRight}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.transferOption}>
            <Image
              source={require('../assets/accounts-icon.png')}
              style={styles.transferOptionIcon}
            />
            <Text style={styles.transferOptionText}>Entre mis cuentas</Text>
            <Image
              source={require('../assets/chevron-right.png')}
              style={styles.chevronRight}
            />
          </TouchableOpacity>
        </Animatable.View>
      )}

      {/* Overlay */}
      {isTransferMenuVisible && (
        <Animated.View 
          style={[
            styles.overlay,
            { opacity: overlayOpacity }
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FF6B00',
  },
  logo: {
    width: 150,
    height: 40,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  accountCard: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  accountHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  accountType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountNumber: {
    fontSize: 16,
    marginLeft: 5,
    color: '#666',
  },
  shareIcon: {
    width: 20,
    height: 20,
    marginLeft: 'auto',
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  balanceLabel: {
    color: '#666',
  },
  movementsButton: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  movementsText: {
    fontSize: 16,
    color: '#FF6B00',
  },
  chevronIcon: {
    width: 20,
    height: 20,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
  },
  transferMenu: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    zIndex: 1000,
  },
  transferHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  transferTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 24,
    color: '#333',
  },
  transferOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  transferOptionIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  transferOptionText: {
    fontSize: 16,
    flex: 1,
  },
  chevronRight: {
    width: 20,
    height: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    zIndex: 999,
  },
});