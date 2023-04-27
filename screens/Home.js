import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <LinearGradient
        style={[styles.homeChild, styles.homePosition]}
        locations={[0, 1]}
        colors={["#39d364", "#43d8be"]}
      />
      <Image
        style={[styles.homeItem, styles.homePosition]}
        resizeMode="cover"
        source={require("../assets/frame-48095860.png")}
      />
      <Image
        style={styles.iconbackground}
        resizeMode="cover"
        source={require("../assets/iconbackground.png")}
      />
      <View style={[styles.rectangleParent, styles.frameChildShadowBox]}>
        <View style={[styles.frameChild, styles.frameChildShadowBox]} />
        <View style={styles.lineParent}>
          <View style={styles.frameItem} />
          <Text style={[styles.text, styles.textClr]}>
            <Text style={styles.text1}>€12</Text>
            <Text style={styles.text2}>.00</Text>
          </Text>
          <View style={[styles.tagactivedefault, styles.productFlexBox]}>
            <Text style={[styles.redeemed, styles.button1Clr]}>Confirmed</Text>
          </View>
          <View style={[styles.frameParent, styles.productFlexBox]}>
            <View style={styles.rectangleGroup}>
              <View style={[styles.frameInner, styles.framePosition]} />
              <Text style={[styles.product, styles.productLayout]}>
                Product
              </Text>
              <Text style={[styles.woodyToystory, styles.awesomeTypo]}>
                Woody, Toystory
              </Text>
            </View>
            <View style={styles.rectangleGroup}>
              <View style={[styles.frameInner, styles.framePosition]} />
              <Text style={[styles.product, styles.productLayout]}>Time</Text>
              <Text style={[styles.woodyToystory, styles.awesomeTypo]}>
                13.40 pm, Jan 18
              </Text>
            </View>
            <View style={styles.rectangleGroup}>
              <View style={[styles.frameInner, styles.framePosition]} />
              <Text style={[styles.product, styles.productLayout]}>
                Delivery on
              </Text>
              <Text
                style={[styles.woodyToystory, styles.awesomeTypo]}
              >{`Jan 17 | 18:45 `}</Text>
            </View>
            <View style={styles.rectangleGroup}>
              <View style={[styles.frameInner, styles.framePosition]} />
              <Text style={[styles.product, styles.productLayout]}>
                Location
              </Text>
              <Text style={[styles.woodyToystory, styles.awesomeTypo]}>
                UL - Dromroe Village
              </Text>
            </View>
          </View>
          <View style={[styles.header30014m, styles.buttonSpaceBlock]}>
            <Text style={[styles.voucherDetails, styles.button1Typo]}>
              Booking Details
            </Text>
          </View>
        </View>
        <View style={styles.pair50016sb30012r}>
          <Text style={[styles.awesome, styles.awesomePosition]}>Awesome!</Text>
          <Text style={[styles.yourPurchaseIs, styles.buttonFlexBox]}>
            Your purchase is successful!
          </Text>
        </View>
      </View>
      <View style={[styles.barsStatusBarIphoneTWrapper, styles.homePosition]}>
        <View style={[styles.barsStatusBarIphoneTWrapper, styles.homePosition]}>
          <View style={styles.battery}>
            <View style={[styles.border, styles.borderBorder]} />
            <Image
              style={[styles.capIcon, styles.awesomePosition]}
              resizeMode="cover"
              source={require("../assets/cap2.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi2.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            resizeMode="cover"
            source={require("../assets/cellular-connection2.png")}
          />
          <View style={styles.timeStyle}>
            <Text style={styles.time1}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Home8")}
        >
          <Text style={[styles.button1, styles.button1Typo]}>Back To Home</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  homePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  frameChildShadowBox: {
    height: 407,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 343,
    position: "absolute",
  },
  textClr: {
    color: Color.colorGrey600,
    textAlign: "left",
  },
  productFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  button1Clr: {
    color: Color.chocolate,
    textAlign: "left",
  },
  framePosition: {
    backgroundColor: Color.neutral10,
    left: 0,
    top: 0,
  },
  productLayout: {
    lineHeight: 16,
    fontSize: FontSize.textSMedium_size,
  },
  awesomeTypo: {
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    width: 343,
    left: 0,
  },
  button1Typo: {
    letterSpacing: -0.1,
    fontSize: FontSize.textMRegular_size,
    lineHeight: 20,
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  awesomePosition: {
    top: 4,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  vectorIcon: {
    height: "46.9%",
    width: "99.95%",
    top: "0%",
    right: "0.05%",
    bottom: "53.1%",
  },
  vectorIcon1: {
    height: "59.36%",
    width: "120.53%",
    top: "48.15%",
    right: "-20.53%",
    bottom: "-7.51%",
  },
  homeChild: {
    height: 325,
    display: "none",
    backgroundColor: Color.gradientComboTwo,
    top: 0,
  },
  homeItem: {
    top: 44,
    height: 604,
  },
  iconbackground: {
    top: 108,
    left: 147,
    borderRadius: 40,
    width: 80,
    height: 80,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: 0,
    top: 0,
    backgroundColor: Color.neutral10,
  },
  frameItem: {
    top: 76,
    borderStyle: "dashed",
    borderColor: "#e8e8e8",
    borderRadius: 0.001,
    borderTopWidth: 1,
    height: 1,
    right: 0,
    left: 0,
    position: "absolute",
  },
  text1: {
    fontFamily: FontFamily.firaSansRegular,
  },
  text2: {
    fontFamily: FontFamily.textMedium600,
    fontWeight: "500",
  },
  text: {
    fontSize: 40,
    letterSpacing: -0.4,
    lineHeight: 60,
    textAlign: "left",
    left: 16,
    top: 0,
    position: "absolute",
  },
  redeemed: {
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.textSMedium_size,
  },
  tagactivedefault: {
    left: 246,
    borderRadius: 4,
    borderColor: "#fd7326",
    width: 81,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 4,
    borderWidth: 1,
    borderStyle: "solid",
    top: 17,
    backgroundColor: Color.navajowhite,
  },
  frameInner: {
    height: 34,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  product: {
    top: 8,
    fontFamily: FontFamily.textMRegular,
    color: Color.colorGrey300,
    width: 140,
    display: "flex",
    alignItems: "center",
    position: "absolute",
    textAlign: "left",
    left: 16,
  },
  woodyToystory: {
    top: 9,
    left: 172,
    color: Color.neutral100,
    width: 155,
    display: "flex",
    lineHeight: 16,
    fontSize: FontSize.textSMedium_size,
    alignItems: "center",
    position: "absolute",
    textAlign: "left",
  },
  rectangleGroup: {
    height: 34,
    width: 343,
  },
  frameParent: {
    top: 126,
    left: 0,
  },
  voucherDetails: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorGrey600,
  },
  header30014m: {
    top: 84,
    position: "absolute",
  },
  lineParent: {
    top: 118,
    height: 262,
    width: 343,
    left: 0,
    position: "absolute",
  },
  awesome: {
    left: 99,
    fontSize: FontSize.headingM_size,
    letterSpacing: -0.6,
    lineHeight: 36,
    color: Color.neutral90,
    textAlign: "center",
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  yourPurchaseIs: {
    top: 54,
    left: 44,
    color: Color.neutral70,
    width: 253,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: -0.1,
    fontSize: FontSize.textMRegular_size,
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
    display: "flex",
  },
  pair50016sb30012r: {
    top: 16,
    left: 1,
    width: 342,
    height: 88,
    position: "absolute",
  },
  rectangleParent: {
    top: 220,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.navajowhite,
    left: 16,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#000",
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.black,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    right: 14,
    width: 24,
    height: 11,
    top: 17,
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
  time1: {
    top: 6,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.black,
    width: 54,
    textAlign: "center",
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
  barsStatusBarIphoneTWrapper: {
    height: 44,
    top: 0,
  },
  button1: {
    lineHeight: 20,
    color: Color.chocolate,
    textAlign: "left",
  },
  button: {
    borderRadius: 6,
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    width: 343,
    left: 0,
    top: 0,
  },
  buttonWrapper: {
    top: 752,
    height: 36,
    width: 343,
    left: 16,
    position: "absolute",
  },
  home: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.neutral10,
  },
});

export default Home;
