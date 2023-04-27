import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Favourites = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.favourites}>
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Image
        style={styles.favouritesChild}
        resizeMode="cover"
        source={require("../assets/frame-5921.png")}
      />
      <Text style={styles.favourites1}>Favourites</Text>
      <Image
        style={[styles.favouritesItem, styles.favouritesLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-341.png")}
      />
      <Image
        style={[styles.favouritesInner, styles.favouritesLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-342.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.favouritesLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-343.png")}
      />
      <Image
        style={[styles.favouritesChild1, styles.favouritesChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-329.png")}
      />
      <Image
        style={[styles.favouritesChild2, styles.favouritesChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-330.png")}
      />
      <View style={styles.barPosition}>
        <View style={[styles.barsStatusBarIphoneL, styles.barPosition]}>
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
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.navigationtopNav}>
        <View style={[styles.navigationtopNavChild, styles.iconLayout]} />
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
          style={[styles.outlinelocationMarkerParent, styles.favoritePosition]}
        >
          <Image
            style={styles.outlinelocationMarkerIcon}
            resizeMode="cover"
            source={require("../assets/outlinelocationmarker.png")}
          />
          <Text style={styles.ulDromroe}>UL - Dromroe Student Village</Text>
        </View>
        <Pressable
          style={[styles.favorite, styles.favoritePosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/favorite1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorPosition: {
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  favouritesLayout: {
    height: 104,
    width: 104,
    borderRadius: Border.br_base,
    top: 186,
    position: "absolute",
  },
  favouritesChildLayout: {
    top: 311,
    height: 104,
    width: 104,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  barPosition: {
    height: 44,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  outlinebellIconPosition: {
    top: 12,
    width: 24,
    height: 24,
    position: "absolute",
  },
  favoritePosition: {
    top: 14,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    top: "46.43%",
    right: "-20.53%",
    bottom: "-5.79%",
    width: "120.53%",
    height: "59.36%",
  },
  favouritesChild: {
    top: 772,
    left: 42,
    width: 291,
    height: 24,
    position: "absolute",
  },
  favourites1: {
    top: 121,
    left: 26,
    fontSize: FontSize.headingS_size,
    letterSpacing: -0.4,
    lineHeight: 36,
    fontWeight: "500",
    fontFamily: FontFamily.textLMedium,
    color: Color.neutral70,
    textAlign: "center",
    position: "absolute",
  },
  favouritesItem: {
    left: 17,
  },
  favouritesInner: {
    left: 138,
  },
  rectangleIcon: {
    left: 255,
  },
  favouritesChild1: {
    left: 17,
  },
  favouritesChild2: {
    left: 138,
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
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.colorGrey600,
    width: 54,
    left: 0,
    textAlign: "center",
    position: "absolute",
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
    backgroundColor: Color.neutral10,
  },
  navigationtopNavChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
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
    fontFamily: FontFamily.textMRegular,
    color: Color.neutral90,
    marginLeft: 8,
    textAlign: "center",
  },
  outlinelocationMarkerParent: {
    left: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  favorite: {
    left: 323,
    width: 24,
    height: 24,
  },
  navigationtopNav: {
    top: 44,
    height: 48,
    width: 375,
    left: 0,
    position: "absolute",
  },
  favourites: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral10,
  },
});

export default Favourites;
