import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Onboarding3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding, styles.onboardingLayout]}>
      <Image
        style={styles.onboardingChild}
        resizeMode="cover"
        source={require("../assets/on-boarding-2-buttons.png")}
      />
      <Pressable
        style={[styles.skip, styles.skipPosition]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.skip1, styles.skip1Typo]}>Skip</Text>
      </Pressable>
      <Pressable
        style={[styles.next, styles.skipPosition]}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Text style={[styles.next1, styles.skip1Typo]}>Next</Text>
      </Pressable>
      <View style={styles.heading}>
        <Text style={styles.sellYourPre}>
          Sell your pre loved toys by uploading a picture, description and price
          of your choosing
        </Text>
        <Text style={styles.sell}>Sell</Text>
      </View>
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
        <View style={[styles.timeStyle, styles.timeStylePosition]}>
          <Text style={[styles.time, styles.timeClr]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.navigationtopNav, styles.navigationtopNavPosition]}>
        <View style={[styles.navigationtopNavChild, styles.onboardingLayout]} />
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
        <Text style={[styles.digiDonor, styles.digiDonorPosition]}>Login</Text>
        <Image
          style={[styles.iconwalletfilled, styles.digiDonorPosition]}
          resizeMode="cover"
          source={require("../assets/iconpersondefault.png")}
        />
      </View>
      <Image
        style={[styles.christmasToyDrivecuateIcon, styles.timeStylePosition]}
        resizeMode="cover"
        source={require("../assets/oon-boarding-2-image.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  onboardingLayout: {
    width: "100%",
    backgroundColor: Color.neutral10,
  },
  skipPosition: {
    top: 751,
    position: "absolute",
  },
  skip1Typo: {
    fontFamily: FontFamily.textMRegular,
    lineHeight: 18,
    letterSpacing: -0.1,
    fontSize: FontSize.textSMedium_size,
    textAlign: "center",
  },
  navigationtopNavPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  timeStylePosition: {
    bottom: "36.36%",
    position: "absolute",
  },
  timeClr: {
    color: Color.colorGrey600,
    textAlign: "center",
  },
  digiDonorPosition: {
    opacity: 0,
    position: "absolute",
  },
  onboardingChild: {
    top: 701,
    left: 170,
    width: 36,
    height: 8,
    position: "absolute",
  },
  skip1: {
    color: Color.gray_300,
    textAlign: "center",
  },
  skip: {
    left: 47,
  },
  next1: {
    color: Color.chocolate,
    textAlign: "center",
  },
  next: {
    left: 312,
  },
  sellYourPre: {
    top: 41,
    left: 37,
    fontSize: FontSize.textMRegular_size,
    color: Color.neutral701,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 270,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.textMRegular,
    letterSpacing: -0.1,
    position: "absolute",
  },
  sell: {
    left: 147,
    fontSize: FontSize.headingM_size,
    letterSpacing: -0.6,
    lineHeight: 36,
    fontFamily: FontFamily.textLMedium,
    color: Color.neutral70,
    fontWeight: "500",
    top: 0,
    textAlign: "center",
    position: "absolute",
  },
  heading: {
    top: 577,
    width: 343,
    height: 95,
    left: 16,
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
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    width: 54,
    left: 0,
    color: Color.colorGrey600,
    lineHeight: 20,
    position: "absolute",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    left: "5.6%",
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
    left: "0%",
    position: "absolute",
  },
  iconpersondefault: {
    right: 16,
    height: 24,
    top: 12,
    opacity: 0,
    width: 24,
    overflow: "hidden",
  },
  iconchevronleft: {
    right: 52,
    height: 24,
    top: 12,
    opacity: 0,
    width: 24,
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
    height: 24,
    top: 12,
    opacity: 0,
    width: 24,
    left: 16,
  },
  navigationtopNav: {
    top: 44,
    height: 48,
  },
  christmasToyDrivecuateIcon: {
    height: "34.58%",
    width: "72.8%",
    top: "29.06%",
    right: "13.6%",
    left: "13.6%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  onboarding: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Onboarding3;
