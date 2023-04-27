import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.loginScreenWelcomeMessage}>
        <Text style={styles.welcome}>Welcome!</Text>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Home8")}
        >
          <Image
            style={styles.solidcheckCircleIcon}
            resizeMode="cover"
            source={require("../assets/solidcheckcircle.png")}
          />
          <Text style={styles.button1}>Login</Text>
        </Pressable>
        <View style={[styles.forgotPasswordLink, styles.forgotLayout]}>
          <Text style={[styles.forgotPassword, styles.forgotPasswordFlexBox]}>
            Forgot password?
          </Text>
        </View>
        <View style={[styles.basicInput, styles.basicLayout]}>
          <Text style={styles.inputPosition1}>Password</Text>
          <Image
            style={[styles.iconoutlineeyeOff, styles.signUpHereLinkLayout]}
            resizeMode="cover"
            source={require("../assets/iconoutlineeyeoff.png")}
          />
        </View>
        <View style={[styles.inputTextWrapper, styles.inputPosition]}>
          <Text style={styles.inputText1}>Password</Text>
        </View>
        <View style={[styles.basicInputWrapper, styles.basicLayout]}>
          <View style={[styles.basicInput1, styles.basicLayout]}>
            <Text style={[styles.inputText2, styles.inputPosition1]}>
              Username
            </Text>
            <Image
              style={[styles.iconoutlineeyeOff, styles.signUpHereLinkLayout]}
              resizeMode="cover"
              source={require("../assets/iconoutlineeyeoff.png")}
            />
          </View>
        </View>
        <View style={[styles.inputTextContainer, styles.inputPosition]}>
          <Text style={styles.inputText1}>Username</Text>
        </View>
      </View>
      <Pressable
        style={[styles.signUpHereLink, styles.signUpHereLinkLayout]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={[styles.dontHaveAnContainer, styles.timePosition]}>
          <Text style={styles.dontHaveAnContainer1}>
            <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
            <Text style={styles.signUpHere}>Sign up here</Text>
          </Text>
        </Text>
      </Pressable>
      <View style={styles.barsPosition}>
        <View style={[styles.barsStatusBarIphoneL, styles.barsPosition]}>
          <View style={styles.battery}>
            <View style={[styles.border, styles.basicBorder]} />
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
          <View style={styles.navigationtopNavChild} />
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
    height: "82.39%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  forgotLayout: {
    width: 110,
    position: "absolute",
  },
  forgotPasswordFlexBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    top: 0,
  },
  basicLayout: {
    height: 44,
    width: 293,
    position: "absolute",
  },
  signUpHereLinkLayout: {
    height: 20,
    position: "absolute",
  },
  inputPosition: {
    height: 24,
    left: 91,
    position: "absolute",
  },
  inputPosition1: {
    color: Color.lightslategray_200,
    left: 12,
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    lineHeight: 24,
    top: 10,
    textAlign: "left",
    fontSize: FontSize.textLMedium_size,
    position: "absolute",
  },
  timePosition: {
    lineHeight: 20,
    left: 0,
    position: "absolute",
  },
  barsPosition: {
    width: 375,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  basicBorder: {
    borderWidth: 1,
    borderStyle: "solid",
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
  welcome: {
    fontSize: FontSize.headingM_size,
    letterSpacing: -0.6,
    lineHeight: 36,
    color: Color.neutral100,
    textAlign: "center",
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  loginScreenWelcomeMessage: {
    top: 137,
    left: 118,
    width: 139,
    height: 36,
    position: "absolute",
  },
  vectorIcon: {
    top: "62.23%",
    right: "-177.77%",
    bottom: "-44.62%",
    left: "177.77%",
  },
  vectorIcon1: {
    top: "21.03%",
    right: "-6.64%",
    bottom: "-3.42%",
    left: "6.64%",
  },
  solidcheckCircleIcon: {
    width: 16,
    height: 16,
    display: "none",
    overflow: "hidden",
  },
  button1: {
    color: Color.neutral10,
    marginLeft: 4,
    textAlign: "left",
    fontSize: FontSize.textLMedium_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  button: {
    top: 163,
    backgroundColor: Color.chocolate,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 41,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    width: 293,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xl,
    left: 79,
    position: "absolute",
  },
  forgotPassword: {
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.body,
    color: Color.gray_200,
    width: 110,
    position: "absolute",
    letterSpacing: -0.3,
    display: "flex",
    justifyContent: "center",
    left: 0,
  },
  forgotPasswordLink: {
    top: 123,
    left: 262,
    height: 15,
  },
  iconoutlineeyeOff: {
    marginTop: -10,
    top: "50%",
    right: 8,
    width: 20,
    display: "none",
    overflow: "hidden",
  },
  basicInput: {
    top: 69,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(148, 163, 184, 0)",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 44,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xl,
    backgroundColor: Color.neutral10,
    left: 79,
  },
  inputText1: {
    color: Color.lightslategray_100,
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.textLMedium_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  inputTextWrapper: {
    top: 79,
    width: 74,
  },
  inputText2: {
    display: "none",
  },
  basicInput1: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(148, 163, 184, 0)",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 44,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xl,
    backgroundColor: Color.neutral10,
    left: 0,
    top: 0,
  },
  basicInputWrapper: {
    left: 79,
    top: 0,
  },
  inputTextContainer: {
    width: 78,
    top: 10,
    height: 24,
    left: 91,
  },
  vectorParent: {
    top: 247,
    left: -30,
    width: 452,
    height: 585,
    position: "absolute",
  },
  dontHaveAn: {
    fontFamily: FontFamily.textMRegular,
    color: Color.neutral701,
  },
  signUpHere: {
    color: Color.chocolate,
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  dontHaveAnContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  dontHaveAnContainer: {
    fontSize: FontSize.textMRegular_size,
    letterSpacing: -0.1,
    width: 270,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    top: 0,
  },
  signUpHereLink: {
    top: 743,
    left: 61,
    width: 270,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#212121",
    width: 22,
    opacity: 0.35,
    height: 11,
    borderWidth: 1,
    borderStyle: "solid",
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
    left: 0,
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
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.neutral10,
  },
  iconpersondefault: {
    right: 16,
    top: 12,
    opacity: 0,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconchevronleft: {
    right: 52,
    top: 12,
    opacity: 0,
    width: 24,
    height: 24,
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
    opacity: 0,
    fontWeight: "500",
  },
  iconwalletfilled: {
    left: 16,
    top: 12,
    opacity: 0,
    width: 24,
    height: 24,
  },
  navigationtopNav: {
    top: 0,
  },
  navigationtopNavWrapper: {
    top: 44,
  },
  login: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral10,
  },
});

export default Login;
