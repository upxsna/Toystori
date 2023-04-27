import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ProductPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.productPage, styles.productPageLayout]}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.productPageChild, styles.productPageChildPosition]}
        resizeMode="cover"
        source={require("../assets/frame-5923.png")}
      />
      <Image
        style={styles.productPageItem}
        resizeMode="cover"
        source={require("../assets/ellipse-55.png")}
      />
      <View style={[styles.toyDescription, styles.priceButtonPosition]}>
        <Text
          style={[styles.inputText, styles.inputPosition]}
        >{`Woody from Toystory. 
1.5 years old, pristine condition.`}</Text>
        <Image
          style={[styles.toyDescriptionChild, styles.toyPosition]}
          resizeMode="cover"
          source={require("../assets/line-10.png")}
        />
        <Image
          style={[styles.toyDescriptionItem, styles.toyPosition]}
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
      <View style={[styles.priceButton, styles.priceButtonPosition]}>
        <Text style={[styles.inputText1, styles.inputPosition]}>
          <Text style={styles.text}>€12</Text>
          <Text style={styles.text1}>.00</Text>
        </Text>
        <Image
          style={[styles.toyDescriptionChild, styles.toyPosition]}
          resizeMode="cover"
          source={require("../assets/line-10.png")}
        />
        <Image
          style={[styles.toyDescriptionItem, styles.toyPosition]}
          resizeMode="cover"
          source={require("../assets/line-11.png")}
        />
      </View>
      <Pressable
        style={[styles.buyButton, styles.buttonLayout1]}
        onPress={() => navigation.navigate("TermsCondition2")}
      >
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Image
            style={styles.solidcheckCircleIcon}
            resizeMode="cover"
            source={require("../assets/solidcheckcircle.png")}
          />
          <Text style={styles.button1}>Buy</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.swapButton, styles.buttonLayout1]}
        onPress={() => navigation.navigate("Swap")}
      >
        <View style={[styles.swapButton1, styles.buttonFlexBox]}>
          <Image
            style={styles.solidcheckCircleIcon}
            resizeMode="cover"
            source={require("../assets/solidcheckcircle1.png")}
          />
          <Text style={styles.button1}>swap</Text>
        </View>
      </Pressable>
      <View style={[styles.location, styles.locationLayout]}>
        <Text style={[styles.ulDromroe, styles.dromroeTypo]}>
          UL - Dromroe Student Village
        </Text>
      </View>
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
            <Text style={styles.time}>9:41</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  productPageLayout: {
    width: "100%",
    backgroundColor: Color.neutral10,
  },
  vectorIconPosition: {
    left: "0%",
    position: "absolute",
  },
  productPageChildPosition: {
    left: 42,
    position: "absolute",
  },
  priceButtonPosition: {
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
  toyPosition: {
    height: 0,
    bottom: 4,
    position: "absolute",
  },
  outlinelocationIconLayout: {
    height: 20,
    width: 20,
  },
  buttonLayout1: {
    height: 41,
    width: 153,
    top: 597,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
  },
  locationLayout: {
    width: 173,
    position: "absolute",
  },
  dromroeTypo: {
    fontFamily: FontFamily.textMRegular,
    lineHeight: 16,
    fontSize: FontSize.textSMedium_size,
    textAlign: "center",
  },
  barsPosition: {
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
    top: "49.75%",
    right: "-20.53%",
    bottom: "-9.11%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  productPageChild: {
    top: 772,
    height: 24,
    width: 291,
  },
  productPageItem: {
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
  toyDescriptionChild: {
    width: 8,
    right: 2,
  },
  toyDescriptionItem: {
    right: 3,
    width: 4,
  },
  toyDescription: {
    top: 355,
    height: 100,
    width: 291,
  },
  outlinelocationMarkerIcon: {
    top: 460,
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
  priceButton: {
    top: 497,
    width: 162,
    height: 33,
  },
  solidcheckCircleIcon: {
    width: 16,
    display: "none",
    height: 16,
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
    backgroundColor: Color.neutral70,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 2,
    elevation: 2,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_5xl,
    justifyContent: "center",
    height: 41,
    width: 153,
    position: "absolute",
  },
  buyButton: {
    left: 33,
  },
  swapButton1: {
    backgroundColor: Color.chocolate,
    shadowColor: "#ebebeb",
    shadowRadius: 4,
    elevation: 4,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_5xl,
    justifyContent: "center",
    height: 41,
    width: 153,
    position: "absolute",
  },
  swapButton: {
    left: 198,
  },
  ulDromroe: {
    color: Color.gainsboro,
    display: "flex",
    textAlign: "center",
    width: 173,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
  },
  location: {
    top: 464,
    left: 68,
    height: 16,
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
    textAlign: "center",
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
    textAlign: "center",
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
    top: 0,
  },
  navigationtopNavWrapper: {
    top: 44,
  },
  productPage: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default ProductPage;
