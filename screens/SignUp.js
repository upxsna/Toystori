import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <Pressable
        style={styles.loginLink}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.alreadyHaveAnContainer}>
          <Text style={styles.alreadyHaveAnContainer1}>
            <Text
              style={styles.alreadyHaveAn}
            >{`Already have an account? `}</Text>
            <Text style={[styles.loginHere, styles.button1Typo1]}>
              Login here
            </Text>
          </Text>
        </Text>
      </Pressable>
      <View style={styles.barsPosition}>
        <View style={[styles.barsStatusBarIphoneL, styles.barsPosition]}>
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
          <View style={[styles.navigationtopNavChild, styles.iconLayout]} />
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
      <View style={styles.signUpPasswordParent}>
        <View style={[styles.signUpPassword, styles.buttonShadowBox]} />
        <TextInput
          style={[styles.signUpPasswordButton, styles.buttonShadowBox]}
          placeholder="Confirm password"
          keyboardType="default"
          placeholderTextColor="#94a3b8"
        />
        <View style={[styles.signUpUsernameButton, styles.buttonShadowBox]} />
        <Text style={[styles.forgotPassword, styles.buttonFlexBox]}>
          Forgot password?
        </Text>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Home8")}
        >
          <Image
            style={styles.solidcheckCircleIcon}
            resizeMode="cover"
            source={require("../assets/solidcheckcircle.png")}
          />
          <Text style={[styles.button1, styles.button1Typo]}>Sign Up</Text>
        </Pressable>
        <View style={[styles.inputTextWrapper, styles.inputPosition]}>
          <Text style={[styles.inputText, styles.button1Typo]}>Password</Text>
        </View>
        <View style={[styles.inputTextContainer, styles.inputPosition]}>
          <Text style={[styles.inputText, styles.button1Typo]}>
            Confirm password
          </Text>
        </View>
        <View style={[styles.inputTextFrame, styles.inputPosition]}>
          <Text style={[styles.inputText, styles.button1Typo]}>Username</Text>
        </View>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Home8")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector8.png")}
          />
        </Pressable>
      </View>
      <View style={styles.createAccMessage}>
        <Text style={[styles.createNewAccount, styles.button1Typo1]}>
          Create new account
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button1Typo1: {
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  barsPosition: {
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
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  digiDonorPosition: {
    opacity: 0,
    position: "absolute",
  },
  buttonShadowBox: {
    width: 293,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xl,
    left: 66,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  button1Typo: {
    textAlign: "left",
    fontSize: FontSize.textLMedium_size,
  },
  inputPosition: {
    left: 84,
    height: 24,
    position: "absolute",
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.textMRegular,
    color: Color.neutral701,
  },
  loginHere: {
    color: Color.chocolate,
  },
  alreadyHaveAnContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  alreadyHaveAnContainer: {
    fontSize: FontSize.textMRegular_size,
    letterSpacing: -0.1,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 20,
    left: 0,
    top: 0,
    width: 270,
    position: "absolute",
  },
  loginLink: {
    top: 743,
    left: 61,
    height: 20,
    width: 270,
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
    color: Color.colorGrey600,
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
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.neutral10,
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
    opacity: 0,
    fontWeight: "500",
  },
  iconwalletfilled: {
    left: 16,
    height: 24,
    top: 12,
    opacity: 0,
    width: 24,
  },
  navigationtopNav: {
    top: 0,
  },
  navigationtopNavWrapper: {
    top: 44,
  },
  signUpPassword: {
    top: 57,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xl,
    left: 66,
    height: 44,
    position: "absolute",
    backgroundColor: Color.neutral10,
  },
  signUpPasswordButton: {
    top: 112,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xl,
    left: 66,
    height: 44,
    position: "absolute",
    backgroundColor: Color.neutral10,
  },
  signUpUsernameButton: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xl,
    left: 66,
    height: 44,
    position: "absolute",
    backgroundColor: Color.neutral10,
    top: 0,
  },
  forgotPassword: {
    top: 163,
    left: 249,
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.body,
    color: Color.gray_200,
    width: 110,
    letterSpacing: -0.3,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
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
    letterSpacing: -0.3,
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  button: {
    top: 240,
    backgroundColor: Color.chocolate,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 41,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    width: 293,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xl,
    left: 66,
    justifyContent: "center",
  },
  inputText: {
    lineHeight: 24,
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    color: Color.lightslategray_100,
    left: 0,
    textAlign: "left",
    fontSize: FontSize.textLMedium_size,
    top: 0,
    position: "absolute",
  },
  inputTextWrapper: {
    top: 67,
    width: 74,
  },
  inputTextContainer: {
    top: 122,
    width: 138,
    display: "none",
  },
  inputTextFrame: {
    top: 10,
    width: 78,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "4.87%",
    top: "40%",
    right: "-4.87%",
    bottom: "-18.25%",
    height: "78.25%",
    position: "absolute",
    width: "100%",
  },
  signUpPasswordParent: {
    top: 250,
    left: -22,
    width: 452,
    height: 335,
    position: "absolute",
  },
  createNewAccount: {
    fontSize: FontSize.headingM_size,
    letterSpacing: -0.6,
    lineHeight: 36,
    color: Color.neutral100,
    textAlign: "center",
    fontFamily: FontFamily.textLMedium,
    left: 0,
    top: 0,
    position: "absolute",
  },
  createAccMessage: {
    top: 145,
    left: 49,
    width: 277,
    height: 36,
    position: "absolute",
  },
  signUp: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral10,
  },
});

export default SignUp;
