import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { fetchRequests } from '../../store/actions/actionCreator';
import { format } from 'date-fns';
import { MaterialCommunityIcons,AntDesign,EvilIcons } from '@expo/vector-icons';

const Homescreen = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { requests } = useSelector(state => state.request);

  useEffect(() => {
    dispatch(fetchRequests())
      .then(() => setLoading(false))
      .catch(error => console.error('Error fetching requests:', error));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {!loading &&
          requests.map((request, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Text style={styles.cardText}>Name: {request.User.username}</Text>
              <Text style={styles.cardText}>No. Wa: {request.User.phoneNumber}</Text>
              <Text style={styles.cardText}>Timbangan: {request.scale} Kg</Text>
              <Text style={styles.cardText}>Harga: Rp. {request.price}</Text>
              <Text style={styles.cardText}>
                Waktu: {format(new Date(request.createdAt), 'dd/MM/yyyy HH:mm:ss')}
              </Text>
              <Text style={styles.cardText}>Status: {request.status}</Text>
              <TouchableOpacity style={styles.button}>
                 <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons name="details" size={24} color="black" />
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.button}>
                     <AntDesign name="edit" size={24} color="black" />
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.button}>
                    <EvilIcons name="trash" size={24} color="black" /> 
                 </TouchableOpacity>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        {loading && <Text>Loading...</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Distribute items evenly along the main axis
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: '100%', // Mengisi lebar layar
  },
  cardText: {
    fontSize: 16,
  },
});

export default Homescreen;
