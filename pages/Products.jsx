import React, { useState } from 'react';
import {View, Text, FlatList, Image, TouchableOpacity, Modal, StyleSheet, SafeAreaView,} from 'react-native';

const PRODUCTS = [
  {
    id: '1',
    name: 'Red Hoodie',
    price: '$49.99',
    color: 'Red',
    season: 'Winter 2022',
    material: '65% Cotton 35% Polyester',
    image: require('./UserIcons/RedHoodie.png'),
  },
  {
    id: '2',
    name: 'Orange Hoodie',
    price: '$59.99',
    color: 'Orange',
    season: 'Fall 2023',
    material: '80% Cotton 20% Polyester',
    image: require('./UserIcons/orange.png'),
  },
];

export default function ProductScreen() {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => setSelectedItem(item)}
    >
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Products</Text>
      <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        key={'one-column'} 
        contentContainerStyle={styles.list}
      />

      <Modal visible={!!selectedItem} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalCard}>
            <Image source={selectedItem?.image} style={styles.modalImage} />
            <Text style={styles.modalName}>{selectedItem?.name}</Text>
            <Text style={styles.modalDetail}>{selectedItem?.price}</Text>
            <Text style={styles.modalDetail}>Color: {selectedItem?.color}</Text>
            <Text style={styles.modalDetail}>Season: {selectedItem?.season}</Text>
            <Text style={styles.modalDetail}>Material: {selectedItem?.material}</Text>
            <Text style={styles.modalDescription}>
              {selectedItem?.description}
            </Text>
            <TouchableOpacity onPress={() => setSelectedItem(null)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 70,
    color: 'red',
  },

  list: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },

  imageContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#eee',
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000088',
  },

  modalCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },

  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginBottom: 15,
  },

  modalName: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 4,
  },

  modalDetail: {
    fontSize: 16,
    marginBottom: 2,
    padding :2,
  },
  
  closeText: {
    fontSize: 16,
    color: 'red',
    fontWeight: '600',
    marginTop: 10,
  },

});
