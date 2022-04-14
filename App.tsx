import React from "react";
import { Appearance, StatusBar, useColorScheme } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./src/routes/app.routes";
import { ThemeProvider } from "styled-components/native";
import darkTheme from "./src/styles/darkTheme";
import lightTheme from "./src/styles/lightTheme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
  });

  const colorScheme = useColorScheme();
  console.log(colorScheme);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AppRoutes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
