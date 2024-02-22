import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome,Ionicons,Entypo,Feather,AntDesign } from '@expo/vector-icons';


const Icon = ({label,focus}) => {
    switch (label) {
        case "Homescreen":
            return focus ? <FontAwesome name="home" size={24} color="black" /> : <Ionicons name="home-outline" size={24} color="black" />
            break;
        case "Userscreen":
            return focus ? <Entypo name="users" size={24} color="black" /> : <Feather name="users" size={24} color="black" />
              break;
        case "Statisticscreen":
          return focus ? <AntDesign name="barschart" size={24} color="black" /> : <AntDesign name="barchart" size={24} color="black" />
            break;
        default:
            break;
    }

    return <FontAwesome name="home" size={24} color="black" />
}

const ButtomTabs = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row',justifyContent: 'space-between',paddingVertical:10,paddingHorizontal:50 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
          key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default ButtomTabs

const styles = StyleSheet.create({})