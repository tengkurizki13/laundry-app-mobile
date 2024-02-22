import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTracks } from '../../store/actions/actionCreator';
import tw from 'twrnc';

const Trackscreen = ({ route }) => {
  // Simulasi data track
  const { id } = route.params;
  const dispatch = useDispatch()
  const {tracks} = useSelector(((state) => state.track))
  const[loading,setLoading] = useState(true)


  useEffect(() => {
    // contional to cek id form params
    if(id) {
        dispatch(fetchTracks(id))
        .then(() => {
          setLoading(false)
        })
      }
    },[])

  if (loading) {
    return (
      <View>
          <Text style={tw`font-semibold`}>Memuat ____ ...............</Text>
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={tw`bg-gray-100 p-4 flex-grow`}>
      <View style={tw`bg-white p-4 rounded-md`}>
        <View style={tw`flex-row justify-between mb-4`}>
          <View style={tw`flex-1 mr-2`}>
            <Text style={tw`text-sm text-gray-500`}>Date</Text>
            <Text>{format(new Date(tracks[0].Request.createdAt), 'dd MMM yyyy HH:mm:ss')}</Text>
          </View>
          <View style={tw`flex-1 ml-2`}>
            <Text style={tw`text-sm text-gray-500`}>Order No.</Text>
            <Text>{tracks[0].Request.id}</Text>
          </View>
        </View>

        <Text style={tw`text-sm text-gray-500 mb-2`}>Tracking Order</Text>

        <View style={tw`flex flex-col`}>
          {tracks.map((track, index) => (
            <View key={index} style={tw`items-center mb-2`}>
              <Text style={tw`bg-orange-500 text-white px-3 py-1 rounded-md mb-1`}>{track.status}</Text>
              <Text>{format(new Date(track.createdAt), 'dd MMM HH:mm')}</Text>
            </View>
          ))}
        </View>
        
        <Text style={tw`mt-4`}>Want any help? <Text style={tw`text-orange-500`}>Please contact us</Text></Text>
      </View>
    </ScrollView>
  );
};

export default Trackscreen;
