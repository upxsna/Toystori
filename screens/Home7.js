import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Home7 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home, styles.homeLayout]}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.homeChild}
        resizeMode="cover"
        source={require("../assets/frame-5922.png")}
      />
      <Text style={styles.letsSell}>Let’s sell!</Text>
      <Pressable
        style={[styles.ellipseParent, styles.frameChildLayout]}
        onPress={() => navigation.navigate("Home6")}
      >
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-552.png")}
        />
        <Image
          style={styles.addAPhotoIcon}
          resizeMode="cover"
          source={require("../assets/add-a-photo1.png")}
        />
        <Text style={[styles.takeAPicture, styles.ulDromroeTypo]}>
          Take a picture or upload from gallery
        </Text>
      </Pressable>
      <View
        style={[styles.barsStatusBarIphoneL, styles.navigationtopNavPosition]}
      >
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.navigationtopNav, styles.navigationtopNavPosition]}>
        <View
          style={[styles.navigationtopNavChild, styles.vectorIconPosition]}
        />
        <Image
          style={[styles.outlinebellIcon, styles.outlinebellIconPosition]}
          resizeMode="cover"
          source={require("../assets/outlinebell.png")}
        />
        <Image
          style={[styles.iconchevronleft, styles.outlinebellIconPosition]}
          resizeMode="cover"
          source={require("../assets/iconpersondefault.png")}
        />
        <View
          style={[
            styles.outlinelocationMarkerParent,
            styles.favoriteIconPosition,
          ]}
        >
          <Image
            style={styles.outlinelocationMarkerIcon}
            resizeMode="cover"
            source={require("../assets/outlinelocationmarker.png")}
          />
          <Text style={[styles.ulDromroe, styles.ulDromroeTypo]}>
            UL - Dromroe Student Village
          </Text>
        </View>
        <Image
          style={[styles.favoriteIcon, styles.favoriteIconPosition]}
          resizeMode="cover"
          source={require("../assets/favorite2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: "100%",
    backgroundColor: Color.neutral10,
  },
  vectorIconPosition: {
    left: "0%",
    position: "absolute",
  },
  frameChildLayout: {
    width: 260,
    position: "absolute",
  },
  ulDromroeTypo: {
    fontFamily: FontFamily.textMRegular,
    textAlign: "center",
  },
  navigationtopNavPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  timeLayout: {
    lineHeight: 20,
    position: "absolute",
  },
  outlinebellIconPosition: {
    top: 12,
    width: 24,
    height: 24,
    position: "absolute",
  },
  favoriteIconPosition: {
    top: 14,
    position: "absolute",
  },
  vectorIcon: {
    height: "59.36%",
    width: "120.53%",
    top: "48.15%",
    right: "-20.53%",
    bottom: "-7.51%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  homeChild: {
    top: 772,
    left: 42,
    width: 291,
    height: 24,
    position: "absolute",
  },
  letsSell: {
    top: 143,
    left: 26,
    fontSize: FontSize.headingS_size,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.textLMedium,
    textAlign: "center",
    color: Color.neutral70,
    position: "absolute",
  },
  frameChild: {
    height: 260,
    left: 0,
    top: 0,
  },
  addAPhotoIcon: {
    top: 90,
    left: 90,
    width: 80,
    height: 80,
    position: "absolute",
  },
  takeAPicture: {
    top: 285,
    left: 8,
    fontSize: FontSize.textMRegular_size,
    letterSpacing: -0.1,
    display: "flex",
    justifyContent: "center",
    width: 244,
    alignItems: "center",
    lineHeight: 20,
    position: "absolute",
    color: Color.neutral70,
  },
  ellipseParent: {
    top: 276,
    left: 57,
    height: 325,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#212121",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorGrey600,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 14,
    height: 11,
    width: 24,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    top: 6,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.colorGrey600,
    width: 54,
    left: 0,
    textAlign: "center",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
    left: "5.6%",
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    height: 44,
    top: 0,
    backgroundColor: Color.neutral10,
    width: 375,
  },
  navigationtopNavChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    width: "100%",
    backgroundColor: Color.neutral10,
  },
  outlinebellIcon: {
    right: 16,
  },
  iconchevronleft: {
    right: 52,
    opacity: 0,
  },
  outlinelocationMarkerIcon: {
    width: 20,
    height: 20,
  },
  ulDromroe: {
    fontSize: FontSize.textSMedium_size,
    lineHeight: 16,
    color: Color.neutral90,
    marginLeft: 8,
  },
  outlinelocationMarkerParent: {
    left: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  favoriteIcon: {
    left: 323,
    width: 24,
    height: 24,
  },
  navigationtopNav: {
    top: 44,
    height: 48,
  },
  home: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Home7;
