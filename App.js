const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import OnboardingScreen1 from "./screens/OnboardingScreen1";
import Swap from "./screens/Swap";
import Support from "./screens/Support";
import Support1 from "./screens/Support1";
import TermsCondition from "./screens/TermsCondition";
import TermsCondition1 from "./screens/TermsCondition1";
import Profile from "./screens/Profile";
import TermsCondition2 from "./screens/TermsCondition2";
import Home from "./screens/Home";
import Home1 from "./screens/Home1";
import Home2 from "./screens/Home2";
import Home3 from "./screens/Home3";
import Home4 from "./screens/Home4";
import Favourites from "./screens/Favourites";
import Home5 from "./screens/Home5";
import ProductPage from "./screens/ProductPage";
import Home6 from "./screens/Home6";
import Home7 from "./screens/Home7";
import Home8 from "./screens/Home8";
import Onboarding from "./screens/Onboarding";
import OnBoarding2 from "./screens/OnBoarding2";
import FrameScreen from "./screens/FrameScreen";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Onboarding1 from "./screens/Onboarding1";
import FrameScreen1 from "./screens/FrameScreen1";
import Onboarding3 from "./screens/Onboarding3";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    "Fira Sans_regular": require("./assets/fonts/Fira_Sans_regular.ttf"),
    "Fira Sans_medium": require("./assets/fonts/Fira_Sans_medium.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    "Work Sans_regular": require("./assets/fonts/Work_Sans_regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="OnboardingScreen1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="OnboardingScreen1"
              component={OnboardingScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Swap"
              component={Swap}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Support"
              component={Support}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Support1"
              component={Support1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermsCondition"
              component={TermsCondition}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermsCondition1"
              component={TermsCondition1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermsCondition2"
              component={TermsCondition2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home1"
              component={Home1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home2"
              component={Home2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home3"
              component={Home3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home4"
              component={Home4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Favourites"
              component={Favourites}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home5"
              component={Home5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductPage"
              component={ProductPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home6"
              component={Home6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home7"
              component={Home7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home8"
              component={Home8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnBoarding2"
              component={OnBoarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame48095865"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame614"
              component={FrameScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Onboarding1 />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
