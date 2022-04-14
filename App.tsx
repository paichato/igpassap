import React from "react";
import { StatusBar } from "react-native";
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
import theme from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
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
