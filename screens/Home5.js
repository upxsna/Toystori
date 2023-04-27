import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Home5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
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
      <Text style={styles.myUploads}>My uploads</Text>
      <Image
        style={styles.homeItem}
        resizeMode="cover"
        source={require("../assets/rectangle-335.png")}
      />
      <Image
        style={[styles.homeInner, styles.homeLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-336.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.homeLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-337.png")}
      />
      <Image
        style={[styles.homeChild1, styles.homeLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-333.png")}
      />
      <Pressable
        style={styles.outlinearrowSmLeft}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/outlinearrowsmleft.png")}
        />
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
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={[styles.navigationtopNav, styles.navigationtopNavPosition]}>
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
          <Text style={styles.ulDromroe}>UL - Dromroe Student Village</Text>
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
  vectorIconPosition: {
    left: "0%",
    position: "absolute",
  },
  homeLayout: {
    top: 217,
    height: 104,
    width: 104,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  navigationtopNavPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
  myUploads: {
    top: 136,
    left: 26,
    fontSize: FontSize.headingS_size,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.textLMedium,
    color: Color.dimgray_100,
    textAlign: "center",
    position: "absolute",
  },
  homeItem: {
    top: 353,
    left: 22,
    height: 104,
    width: 104,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  homeInner: {
    left: 136,
  },
  rectangleIcon: {
    left: 253,
  },
  homeChild1: {
    left: 23,
  },
  outlinearrowSmLeft: {
    left: 21,
    top: 104,
    width: 24,
    height: 24,
    position: "absolute",
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
    height: 44,
    top: 0,
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
    width: "100%",
    backgroundColor: Color.neutral10,
  },
});

export default Home5;
