import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const OnBoarding2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onBoarding2}>
      <View style={styles.onboarding}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={styles.onBoarding2Buttons}
          resizeMode="cover"
          source={require("../assets/on-boarding-2-buttons.png")}
        />
        <Pressable
          style={[styles.onBoarding2Skip, styles.boarding2Position]}
          onPress={() => navigation.navigate("Home8")}
        >
          <Text style={[styles.onBoarding21, styles.boardingTypo]}>Skip</Text>
        </Pressable>
        <Pressable
          style={[styles.onBoarding2Next, styles.boarding2Position]}
          onPress={() => navigation.navigate("Onboarding")}
        >
          <Text style={[styles.onBoarding22, styles.boardingTypo]}>Next</Text>
        </Pressable>
        <View style={styles.onBoardingMessage2}>
          <Text style={[styles.ourCommunityOf, styles.timeLayout]}>
            Our community of sellers is dedicated to providing safe,
            high-quality toys that your family will love
          </Text>
          <Text style={styles.sell}>Sell</Text>
        </View>
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
              <Text style={[styles.time, styles.timeClr]}>9:41</Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.navigationtopNavWrapper, styles.navigationtopLayout]}
        >
          <View style={[styles.navigationtopNav, styles.navigationtopLayout]}>
            <View
              style={[styles.navigationtopNavChild, styles.vectorIconPosition]}
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
        <Image
          style={styles.oonBoarding2Image}
          resizeMode="cover"
          source={require("../assets/oon-boarding-2-image.png")}
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
  boarding2Position: {
    height: 18,
    top: 751,
    position: "absolute",
  },
  boardingTypo: {
    fontFamily: FontFamily.textMRegular,
    letterSpacing: -0.1,
    textAlign: "center",
  },
  timeLayout: {
    lineHeight: 20,
    position: "absolute",
  },
  barPosition: {
    height: 44,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timeClr: {
    color: Color.colorGrey600,
    textAlign: "center",
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
    top: "47.54%",
    right: "-20.53%",
    bottom: "-6.9%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  onBoarding2Buttons: {
    top: 701,
    left: 170,
    width: 36,
    height: 8,
    position: "absolute",
  },
  onBoarding21: {
    color: Color.gray_300,
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.textSMedium_size,
    fontFamily: FontFamily.textMRegular,
    letterSpacing: -0.1,
    left: 0,
    top: 0,
    position: "absolute",
  },
  onBoarding2Skip: {
    left: 47,
    width: 24,
  },
  onBoarding22: {
    color: Color.chocolate,
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.textSMedium_size,
    fontFamily: FontFamily.textMRegular,
    letterSpacing: -0.1,
    left: 0,
    top: 0,
    position: "absolute",
  },
  onBoarding2Next: {
    left: 312,
    width: 26,
  },
  ourCommunityOf: {
    top: 41,
    left: 37,
    fontSize: FontSize.textMRegular_size,
    color: Color.neutral70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 270,
    textAlign: "center",
    fontFamily: FontFamily.textMRegular,
    letterSpacing: -0.1,
    lineHeight: 20,
  },
  sell: {
    left: 147,
    fontSize: FontSize.headingM_size,
    letterSpacing: -0.6,
    lineHeight: 36,
    fontFamily: FontFamily.textLMedium,
    color: Color.darkslategray_100,
    fontWeight: "500",
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  onBoardingMessage2: {
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
    lineHeight: 20,
    position: "absolute",
    left: 0,
    color: Color.colorGrey600,
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
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.neutral10,
    width: "100%",
    left: "0%",
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
    top: 0,
  },
  navigationtopNavWrapper: {
    top: 44,
  },
  oonBoarding2Image: {
    top: 236,
    left: 51,
    width: 273,
    height: 281,
    position: "absolute",
  },
  onboarding: {
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.neutral10,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  onBoarding2: {
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default OnBoarding2;
