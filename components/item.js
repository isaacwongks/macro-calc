import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

const Item = ({name, cals, fats, pro, carbs, onMacroChange}) => {
  let [fontsLoaded] = useFonts({
    "PTSans-Regular": require("../assets/fonts/PTSans-Regular.ttf"),
    "PTSans-Bold": require("../assets/fonts/PTSans-Bold.ttf"),
    "Quincy-Bold": require("../assets/fonts/Quincy-Bold.otf"),
    "Quincy-Medium": require("../assets/fonts/Quincy-Medium.otf"),
    "Quincy-Regular": require("../assets/fonts/Quincy-Regular.otf"),
  });
  
  if(!fontsLoaded) {
    return <AppLoading/>;
  };
  
  const [quant, setQuant] = useState(0);

  const inc = () => {
    setQuant((prev) => {
      const curr = prev + 1;
      onMacroChange(cals, fats, pro, carbs); // Update parent with new macros
      return curr;
    });
  };

  const dec = () => {
    if (quant > 0) {
      setQuant((prev) => {
        const curr = prev - 1;
        onMacroChange(-cals, -fats, -pro, -carbs); // Subtract macros from parent
        return curr;
      });
    }
  };

  return(
    <View style = {[styles.row, styles.flex, styles.item, styles.alignCenter]}>
      <Pressable onPress = {inc} style = {({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(255, 241, 230, 0.6)' : 'rgba(255, 241, 230, 0)',
          },
          styles.quant, styles.alignCenter, styles.justifyCenter]}>
        <Text style = {[styles.p, styles.font]}>+</Text>
      </Pressable>
      <Text style = {[styles.p, styles.font, styles.counter]}>{ quant }</Text>
      <Pressable onPress = {dec} style = {({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(255, 241, 230, 0.6)' : 'rgba(255, 241, 230, 0)',
          },
          styles.quant, styles.alignCenter, styles.justifyCenter]}>
        <Text style = {[styles.p, styles.font]}>-</Text>
      </Pressable>
      <Text style = {[styles.p, styles.label, styles.font]}>{ name }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alignCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  col: {
    flexDirection: "column",
  },
  h1: {
    fontFamily: "Quincy-Medium",
    fontSize: 48,
  },
  h2: {
    fontFamily: "PTSans-Bold",
    fontSize: 24,
  },
  h3: {
    fontFamily: "PTSans-Regular",
    fontSize: 20,
  },
  p: {
    fontFamily: "PTSans-Regular",
    fontSize: 16,
  },
  font: {
    color: "#E1523D",
  },

  ///////////////////////////
  // Custom styles go here //
  ///////////////////////////
  item: {
    // backgroundColor: "#0f0",
  },
  quant: {
    width: 30,
    height: 30,
    margin: 12,
    borderWidth: 1,
    borderColor: "rgba(225, 82, 61, 0.8)",
    borderRadius: 8,

  },
  marginVert: {
    marginBottom: 8,
  },
  counter: {
    width: 60,
    height: 30,
    borderWidth: 1,
    borderColor: "rgba(225, 82, 61, 0.8)",
    borderRadius: 8,
    textAlign: "center",
    verticalAlign: "middle",
  },
  label: {
    marginLeft: 24,
  },
});

export default Item;