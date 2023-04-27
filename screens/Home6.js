import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Home6 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home, styles.homeLayout]}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.homeChild, styles.homeChildPosition]}
        resizeMode="cover"
        source={require("../assets/frame-5922.png")}
      />
      <Image
        style={styles.homeItem}
        resizeMode="cover"
        source={require("../assets/ellipse-551.png")}
      />
      <View style={[styles.textareaInput, styles.textareaPosition1]}>
        <Text style={[styles.inputText, styles.inputPosition]}>{`Purple unicorn 
1.2 years old in great condition!`}</Text>
        <Image
          style={[styles.textareaInputChild, styles.textareaPosition]}
          resizeMode="cover"
          source={require("../assets/line-10.png")}
        />
        <Image
          style={[styles.textareaInputItem, styles.textareaPosition]}
          resizeMode="cover"
          source={require("../assets/line-11.png")}
        />
      </View>
      <Image
        style={[
          styles.outlinelocationMarkerIcon,
          styles.outlinelocationIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/outlinelocationmarker1.png")}
      />
      <View style={[styles.textareaInput1, styles.textareaPosition1]}>
        <Text style={[styles.inputText1, styles.inputPosition]}>
          <Text style={styles.text}>€4</Text>
          <Text style={styles.text1}>.00</Text>
        </Text>
        <Image
          style={[styles.textareaInputChild, styles.textareaPosition]}
          resizeMode="cover"
          source={require("../assets/line-10.png")}
        />
        <Image
          style={[styles.textareaInputItem, styles.textareaPosition]}
          resizeMode="cover"
          source={require("../assets/line-11.png")}
        />
      </View>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("Home5")}
      >
        <Image
          style={styles.solidcheckCircleIcon}
          resizeMode="cover"
          source={require("../assets/solidcheckcircle2.png")}
        />
        <Text style={styles.button1}>Publish</Text>
      </Pressable>
      <Text style={[styles.ulDromroe, styles.dromroeTypo]}>
        UL - Dromroe Student Village
      </Text>
      <Image
        style={styles.outlinearrowSmLeftIcon}
        resizeMode="cover"
        source={require("../assets/outlinearrowsmleft.png")}
      />
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
            style={styles.outlinelocationIconLayout}
            resizeMode="cover"
            source={require("../assets/outlinelocationmarker.png")}
          />
          <Text style={[styles.ulDromroe1, styles.dromroeTypo]}>
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
  homeChildPosition: {
    left: 42,
    position: "absolute",
  },
  textareaPosition1: {
    borderRadius: Border.br_5xs,
    left: 42,
    position: "absolute",
    backgroundColor: Color.neutral10,
  },
  inputPosition: {
    color: Color.neutral70,
    left: 10,
    top: 8,
    textAlign: "left",
    position: "absolute",
  },
  textareaPosition: {
    height: 0,
    bottom: 4,
    position: "absolute",
  },
  outlinelocationIconLayout: {
    height: 20,
    width: 20,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  dromroeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.textMRegular,
    lineHeight: 16,
    fontSize: FontSize.textSMedium_size,
  },
  navigationtopNavPosition: {
    width: 375,
    left: 0,
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
    top: "50.99%",
    right: "-20.53%",
    bottom: "-10.34%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  homeChild: {
    top: 772,
    height: 24,
    width: 291,
  },
  homeItem: {
    top: 128,
    left: 103,
    width: 168,
    height: 168,
    position: "absolute",
  },
  inputText: {
    lineHeight: 24,
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    textAlign: "left",
    fontSize: FontSize.textLMedium_size,
  },
  textareaInputChild: {
    width: 8,
    right: 2,
  },
  textareaInputItem: {
    right: 3,
    width: 4,
  },
  textareaInput: {
    top: 347,
    height: 100,
    width: 291,
  },
  outlinelocationMarkerIcon: {
    top: 451,
    left: 42,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.firaSansRegular,
  },
  text1: {
    fontFamily: FontFamily.textMedium600,
    fontWeight: "500",
  },
  inputText1: {
    fontSize: FontSize.headingS_size,
    letterSpacing: -0.2,
    lineHeight: 30,
    textAlign: "left",
  },
  textareaInput1: {
    top: 493,
    width: 162,
    height: 33,
  },
  solidcheckCircleIcon: {
    width: 16,
    height: 16,
    display: "none",
    overflow: "hidden",
  },
  button1: {
    letterSpacing: -0.3,
    fontFamily: FontFamily.textLMedium,
    color: Color.neutral10,
    marginLeft: 4,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.textLMedium_size,
  },
  button: {
    top: 592,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.chocolate,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 153,
    height: 41,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    justifyContent: "center",
    left: 42,
  },
  ulDromroe: {
    top: 455,
    left: 68,
    color: Color.gainsboro,
    display: "flex",
    width: 173,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  outlinearrowSmLeftIcon: {
    top: 104,
    left: 21,
    width: 24,
    height: 24,
    position: "absolute",
  },
  border: {
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#212121",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    right: 2,
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
  ulDromroe1: {
    color: Color.neutral90,
    marginLeft: 8,
  },
  outlinelocationMarkerParent: {
    left: 16,
    alignItems: "center",
    top: 14,
    flexDirection: "row",
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

export default Home6;
