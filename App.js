import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import Item from "./components/item.js";

export default function App() {
  let [fontsLoaded] = useFonts({
    "PTSans-Regular": require("./assets/fonts/PTSans-Regular.ttf"),
    "PTSans-Bold": require("./assets/fonts/PTSans-Bold.ttf"),
    "Quincy-Bold": require("./assets/fonts/Quincy-Bold.otf"),
    "Quincy-Medium": require("./assets/fonts/Quincy-Medium.otf"),
    "Quincy-Regular": require("./assets/fonts/Quincy-Regular.otf"),
  });

  const [totalStats, setTotalStats] = useState({
    cals: 0,
    fats: 0,
    pro: 0,
    carbs: 0,
  });

  const updateTotal = (cals, fats, pro, carbs) => {
    setTotalStats((prev) => ({
      cals: Number((prev.cals + cals).toFixed(1)),
      fats: Number((prev.fats + fats).toFixed(1)),
      pro: Number((prev.pro + pro).toFixed(1)),
      carbs: Number((prev.carbs + carbs).toFixed(1)),
    }));
  };
  
  if(!fontsLoaded) {
    return <AppLoading/>;
  };

  return (
    <SafeAreaView style = {[styles.margin, styles.flex]}>
      <StatusBar style = "auto"/>

      {/* Food sections */}
      <ScrollView style = {[styles.col, styles.scroll]}>
        <View style = {[styles.col, styles.flex, styles.mains]}>
          <Text style = {[styles.h1, styles.labels, styles.font]}>mains</Text>
          <Item name = "chicken rice" cals = {620} fats = {22.5} pro = {29.8} carbs = {71.5} onMacroChange = {updateTotal}/>
          <Item name = "duck rice" cals = {706} fats = {30} pro = {24} carbs = {86} onMacroChange = {updateTotal}/>
          <Item name = "stuff'd chicken kebab" cals = {450} fats = {18} pro = {22} carbs = {41} onMacroChange = {updateTotal}/>
          <Item name = 'subway 6" roast beef' cals = {270} fats = {4.5} pro = {18} carbs = {38} onMacroChange = {updateTotal}/>
          <Item name = 'yakiniku (200g)' cals = {838} fats = {73.48} pro = {37.98} carbs = {3.34} onMacroChange = {updateTotal}/>
        </View>
        <LinearGradient style = {[styles.row, styles.flex, styles.divider]} colors = {["transparent", "rgba(225, 82, 61, 1)", "transparent"]} start = {{x: 0, y: 0}} end = {{x: 1, y: 0}}/>
        <View style = {[styles.col, styles.flex, styles.mains]}>
          <Text style = {[styles.h1, styles.labels, styles.font]}>prepped</Text>
          <Item name = "1 bowl white rice" cals = {135} fats = {0.29} pro = {2.79} carbs = {29.3} onMacroChange = {updateTotal}/>
          <Item name = "1 chicken breast fillet" cals = {72} fats = {1.1} pro = {15.3} carbs = {0.5} onMacroChange = {updateTotal}/>
          <Item name = "1 fried egg" cals = {92} fats = {7.04} pro = {6.27} carbs = {0.4} onMacroChange = {updateTotal}/>
          <Item name = "1 hard-boiled egg" cals = {78} fats = {5.3} pro = {6.29} carbs = {0.56} onMacroChange = {updateTotal}/>
          <Item name = "1 cup oats" cals = {607} fats = {10.76} pro = {26.35} carbs = {103.38} onMacroChange = {updateTotal}/>
        </View>
        <LinearGradient style = {[styles.row, styles.flex, styles.divider]} colors = {["transparent", "rgba(225, 82, 61, 1)", "transparent"]} start = {{x: 0, y: 0}} end = {{x: 1, y: 0}}/>
        <View style = {[styles.col, styles.flex, styles.mains]}>
          <Text style = {[styles.h1, styles.labels, styles.font]}>snacks</Text>
          <Item name = "1 slice white bread" cals = {66} fats = {0.82} pro = {1.91} carbs = {12.65} onMacroChange = {updateTotal}/>
          <Item name = "1 slice raisin bread" cals = {118} fats = {1.6} pro = {4.2} carbs = {22.4} onMacroChange = {updateTotal}/>
          <Item name = "1 cup yogurt" cals = {109.8} fats = {8.46} pro = {4.05} carbs = {4.68} onMacroChange = {updateTotal}/>
          <Item name = "1 cup yogurt (honey)" cals = {86} fats = {2.6} pro = {4.3} carbs = {11.5} onMacroChange = {updateTotal}/>
          <Item name = "1 cup yogurt (vanilla)" cals = {121.68} fats = {7.56} pro = {3.6} carbs = {9.936} onMacroChange = {updateTotal}/>
          <Item name = "1 tbsp peanut butter" cals = {94} fats = {8.6} pro = {4} carbs = {3.1} onMacroChange = {updateTotal}/>
          <Item name = "1 tbsp honey" cals = {64} fats = {0} pro = {0.06} carbs = {17.3} onMacroChange = {updateTotal}/>
          <Item name = "1 punnet blueberries" cals = {57} fats = {0.33} pro = {0.74} carbs = {14.49} onMacroChange = {updateTotal}/>
          <Item name = "tuna mayo" cals = {72} fats = {5} pro = {5.6} carbs = {1} onMacroChange = {updateTotal}/>
          <Item name = "betagro chicken (garlic)" cals = {96} fats = {0.6} pro = {20.8} carbs = {1.8} onMacroChange = {updateTotal}/>
          <Item name = "betagro chicken (spicy)" cals = {103} fats = {1.8} pro = {19} carbs = {2.6} onMacroChange = {updateTotal}/>
          <Item name = "betagro chicken (herb)" cals = {98} fats = {1.6} pro = {20.8} carbs = {0.1} onMacroChange = {updateTotal}/>
        </View>
        <LinearGradient style = {[styles.row, styles.flex, styles.divider]} colors = {["transparent", "rgba(225, 82, 61, 1)", "transparent"]} start = {{x: 0, y: 0}} end = {{x: 1, y: 0}}/>
        <View style = {[styles.col, styles.flex, styles.mains]}>
          <Text style = {[styles.h1, styles.labels, styles.font]}>drinks</Text>
          <Item name = "1 cup of soy milk" cals = {165} fats = {3.8} pro = {10} carbs = {17} onMacroChange = {updateTotal}/>
        </View>
        <LinearGradient style = {[styles.row, styles.flex, styles.divider]} colors = {["transparent", "rgba(225, 82, 61, 1)", "transparent"]} start = {{x: 0, y: 0}} end = {{x: 1, y: 0}}/>
        <View style = {[styles.col, styles.flex, styles.mains]}>
          <Text style = {[styles.h1, styles.labels, styles.font]}>supps</Text>
          <Item name = "1 scoop of clear whey" cals = {82} fats = {0} pro = {20} carbs = {0} onMacroChange = {updateTotal}/>
          <Item name = "1 scoop of whey" cals = {481} fats = {1.8} pro = {22} carbs = {2.7} onMacroChange = {updateTotal}/>
          <Item name = "1 scoop of mass gainer" cals = {387} fats = {6.2} pro = {31} carbs = {50} onMacroChange = {updateTotal}/>
        </View>
      </ScrollView>

      {/* Stat tracker */}
      <View style = {[styles.display, styles.row, styles.alignCenter]}>
        <View style = {[styles.col, styles.flex, styles.alignCenter]}>
          <Text style = {[styles.h3, styles.stat, styles.font]}>calories</Text>
          <Text style = {[styles.h2, styles.font]}>{totalStats.cals}</Text>
          <Text style = {[styles.p, styles.font]}>kcal</Text>
        </View>
        <View style = {[styles.col, styles.flex, styles.alignCenter]}>
          <Text style = {[styles.h3, styles.stat, styles.font]}>fats</Text>
          <Text style = {[styles.h2, styles.font]}>{totalStats.fats}</Text>
          <Text style = {[styles.p, styles.font]}>g</Text>
        </View>
        <View style = {[styles.col, styles.flex, styles.alignCenter]}>
          <Text style = {[styles.h3, styles.stat, styles.font]}>protein</Text>
          <Text style = {[styles.h2, styles.font]}>{totalStats.pro}</Text>
          <Text style = {[styles.p, styles.font]}>g</Text>
        </View>
        <View style = {[styles.col, styles.flex, styles.alignCenter]}>
          <Text style = {[styles.h3, styles.stat, styles.font]}>carbs</Text>
          <Text style = {[styles.h2, styles.font]}>{totalStats.carbs}</Text>
          <Text style = {[styles.p, styles.font]}>g</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({  
  margin: {
    marginHorizontal: 24,
    marginTop: 48,
  },
  wrapper: {
    backgroundColor: "#f2f8fc",
  },
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

  scroll: {
    flex: 1,
  },
  display: {
    flex: 0.2,
  },
  stat: {
    marginBottom: 8,
  },
  labels: {
    marginBottom: 16,
  },
  divider: {
    height: 1,
    marginVertical: 32,
  },
});
