import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const FrameComponent = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homeParent, style]}>
      <Image
        style={[styles.homeIcon, styles.smsLayout]}
        resizeMode="cover"
        source={require("../assets/home1.png")}
      />
      <Pressable
        style={[styles.sms, styles.smsLayout]}
        onPress={() => navigation.navigate("Home3")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/sms2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.addAPhoto, styles.smsLayout]}
        onPress={() => navigation.navigate("Home7")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/add-a-photo.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.accountCircle, styles.smsLayout]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/account-circle.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  smsLayout: {
    width: 24,
    top: 0,
    position: "absolute",
    height: 24,
  },
  homeIcon: {
    left: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  sms: {
    left: 89,
  },
  addAPhoto: {
    left: 178,
  },
  accountCircle: {
    left: 267,
  },
  homeParent: {
    backgroundColor: Color.neutral10,
    width: 291,
    height: 24,
  },
});

export default FrameComponent;
