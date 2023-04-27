import * as React from "react";
import { Image, StyleSheet, Text, StatusBar, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Onboarding1 = () => {
  return (
    <View style={styles.onboarding}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
      <Text style={[styles.toystori, styles.toystoriTypo]}>Toystori</Text>
      <Image
        style={styles.httpslottiefilescom19160Icon}
        resizeMode="cover"
        source={require("../assets/httpslottiefilescom19160mykickusbear.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIcon1Position]}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <View style={styles.navOnboardPosition}>
        <StatusBar style={styles.navOnboardPosition} barStyle="default" />
      </View>
      <View
        style={[styles.navigationtopNavWrapper, styles.navigationtopLayout]}
      >
        <View style={[styles.navigationtopNav, styles.navigationtopLayout]}>
          <View
            style={[styles.navigationtopNavChild, styles.vectorIcon1Position]}
          />
          <Image
            style={[styles.iconpersondefault, styles.digiDonorPosition]}
            resizeMode="cover"
            source={require("../assets/iconpersondefault.png")}
          />
          <Image
            style={[styles.iconchevronleft, styles.digiDonorPosition]}
            resizeMode="cover"
            source={require("../assets/iconpersondefault.png")}
          />
          <Text style={[styles.digiDonor, styles.digiDonorPosition]}>
            Login
          </Text>
          <Image
            style={[styles.iconwalletfilled, styles.digiDonorPosition]}
            resizeMode="cover"
            source={require("../assets/iconpersondefault.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  toystoriTypo: {
    textAlign: "center",
    fontWeight: "500",
  },
  vectorIcon1Position: {
    right: "0%",
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  navOnboardPosition: {
    height: 44,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  navigationtopLayout: {
    height: 48,
    width: 375,
    left: 0,
    position: "absolute",
  },
  digiDonorPosition: {
    opacity: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "59.36%",
    width: "120.53%",
    top: "45.26%",
    right: "-20.53%",
    bottom: "-4.62%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  toystori: {
    top: 528,
    left: 118,
    fontSize: FontSize.headingL_size,
    letterSpacing: -0.8,
    lineHeight: 44,
    fontFamily: FontFamily.textLMedium,
    color: Color.chocolate,
    position: "absolute",
  },
  httpslottiefilescom19160Icon: {
    top: 250,
    left: 63,
    width: 248,
    height: 248,
    position: "absolute",
  },
  vectorIcon1: {
    height: "45.88%",
    bottom: "54.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  navigationtopNavChild: {
    height: "100%",
    bottom: "0%",
    backgroundColor: Color.neutral10,
  },
  iconpersondefault: {
    right: 16,
    height: 24,
    width: 24,
    top: 12,
    opacity: 0,
    overflow: "hidden",
  },
  iconchevronleft: {
    right: 52,
    height: 24,
    width: 24,
    top: 12,
    opacity: 0,
  },
  digiDonor: {
    marginLeft: -24.5,
    top: "18.75%",
    left: "50%",
    fontSize: FontSize.headingS_size,
    letterSpacing: -0.2,
    lineHeight: 30,
    fontFamily: FontFamily.textMedium600,
    color: Color.colorGrey600,
    textAlign: "center",
    fontWeight: "500",
  },
  iconwalletfilled: {
    left: 16,
    height: 24,
    width: 24,
    top: 12,
    opacity: 0,
  },
  navigationtopNav: {
    top: 0,
    height: 48,
  },
  navigationtopNavWrapper: {
    top: 44,
  },
  onboarding: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral10,
  },
});

export default Onboarding1;
