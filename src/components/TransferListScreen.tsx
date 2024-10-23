import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const TransferListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/back-icon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Transferencia a terceros</Text>
        <TouchableOpacity>
          <Image
            source={require('../assets/more-vertical-icon.png')}
            style={styles.moreIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Image
          source={require('../assets/search-icon.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.syncSection}>
        <View style={styles.syncHeader}>
          <Text style={styles.syncTitle}>Mantén tu agenda al día</Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/sync-icon.png')}
              style={styles.syncIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.syncSubtitle}>
          Sincroniza tus contantos y transfiere más rápido
        </Text>
      </View>

      <Text style={styles.contactsTitle}>Mis contactos</Text>

      <View style={styles.contactSection}>
        <Text style={styles.letterHeader}>A</Text>
        <TouchableOpacity style={styles.contactItem}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>AB</Text>
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>Abraham Bernabe Munoz</Text>
            <Text style={styles.contactSubtext}>Abraham</Text>
            <Text style={styles.bankName}>BancoEstado</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Image
          source={require('../assets/add-icon.png')}
          style={styles.addIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FF6B00',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  moreIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#999',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  syncSection: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    margin: 15,
    borderRadius: 10,
  },
  syncHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  syncTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  syncIcon: {
    width: 24,
    height: 24,
    tintColor: '#4A90E2',
  },
  syncSubtitle: {
    color: '#666',
  },
  contactsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 15,
  },
  contactSection: {
    paddingHorizontal: 15,
  },
  letterHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E1E1F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 18,
    color: '#333',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactSubtext: {
    color: '#666',
  },
  bankName: {
    color: '#666',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  addIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
});