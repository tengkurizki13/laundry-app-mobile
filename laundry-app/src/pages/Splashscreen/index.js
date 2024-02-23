import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useRef } from 'react'
import LottieView from 'lottie-react-native';



const Splashscreen = ({navigation}) => {
    const animation = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            // navigation.navigate("MainApp")
            navigation.navigate("Qrcodescreen")
        },2000)
    },[])

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 100,
          height: 100,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../assets/images/laundry.json')}
      />
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#FFFFFF",
        justifyContent:"center",
        alignItems: 'center',
    }
})