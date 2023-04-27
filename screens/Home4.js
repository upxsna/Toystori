import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Home4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.addAPhotoIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/add-a-photo.png")}
      />
      <Image
        style={[styles.accountCircleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/account-circle.png")}
      />
      <Image
        style={[styles.homeIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/home.png")}
      />
      <Image
        style={[styles.smsIcon, styles.navPosition]}
        resizeMode="cover"
        source={require("../assets/sms1.png")}
      />
      <View style={[styles.nav, styles.navPosition]} />
      <View style={[styles.popover, styles.popoverFlexBox]}>
        <View style={styles.body}>
          <Text style={styles.text}>
            Hi! Sure, which toy would you like to swap for?
          </Text>
        </View>
        <View style={styles.arrowPositionScrubber}>
          <Image
            style={styles.arrowIcon}
            resizeMode="cover"
            source={require("../assets/arrow.png")}
          />
        </View>
      </View>
      <View
        style={[styles.keyboardlightalphabetic, styles.navigationtopNavLayout]}
      >
        <View style={styles.homeIndicatorLight}>
          <View style={[styles.homeIndicator, styles.capacityBg]} />
        </View>
        <View style={styles.keys}>
          <Image
            style={styles.dictationIcon}
            resizeMode="cover"
            source={require("../assets/dictation.png")}
          />
          <Image
            style={styles.emojiIcon}
            resizeMode="cover"
            source={require("../assets/emoji.png")}
          />
          <View style={[styles.return, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle.png")}
            />
            <Text style={[styles.label, styles.labelPosition]}>Go</Text>
          </View>
          <View style={[styles.space, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle1.png")}
            />
            <Text style={[styles.label1, styles.labelPosition]}>space</Text>
          </View>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle2.png")}
            />
            <Text style={[styles.label2, styles.labelPosition]}>123</Text>
          </View>
          <View style={[styles.delete, styles.shiftPosition]}>
            <View style={styles.keyLightPosition}>
              <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={require("../assets/rectangle3.png")}
              />
              <Text style={[styles.label3, styles.labelPosition]}>{` `}</Text>
            </View>
            <Image
              style={styles.deleteButtonIcon}
              resizeMode="cover"
              source={require("../assets/delete-button.png")}
            />
          </View>
          <View style={[styles.shift, styles.shiftPosition]}>
            <View style={styles.keyLightPosition}>
              <View style={styles.rectangleShadowBox} />
              <Text style={[styles.symbol, styles.symbolTypo]}>{` `}</Text>
            </View>
            <Image
              style={[styles.shiftIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/shift.png")}
            />
          </View>
          <View style={[styles.m, styles.mPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol1, styles.symbolTypo]}>M</Text>
          </View>
          <View style={[styles.n, styles.nPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>N</Text>
          </View>
          <View style={[styles.b, styles.bPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>B</Text>
          </View>
          <View style={[styles.v, styles.vPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>V</Text>
          </View>
          <View style={[styles.c, styles.cPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>C</Text>
          </View>
          <View style={[styles.x, styles.xPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>X</Text>
          </View>
          <View style={[styles.z, styles.zPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Z</Text>
          </View>
          <View style={[styles.l, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>L</Text>
          </View>
          <View style={[styles.k, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>K</Text>
          </View>
          <View style={[styles.j, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>J</Text>
          </View>
          <View style={[styles.h, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>H</Text>
          </View>
          <View style={[styles.g, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>G</Text>
          </View>
          <View style={[styles.f, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>F</Text>
          </View>
          <View style={[styles.d, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>D</Text>
          </View>
          <View style={[styles.s, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>S</Text>
          </View>
          <View style={[styles.a, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>A</Text>
          </View>
          <View style={[styles.p, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>P</Text>
          </View>
          <View style={[styles.o, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>O</Text>
          </View>
          <View style={[styles.i, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol19, styles.symbolTypo]}>I</Text>
          </View>
          <View style={[styles.u, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>U</Text>
          </View>
          <View style={[styles.y, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Y</Text>
          </View>
          <View style={[styles.t, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>T</Text>
          </View>
          <View style={[styles.r, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>R</Text>
          </View>
          <View style={[styles.e, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>E</Text>
          </View>
          <View style={[styles.w, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol25, styles.symbolTypo]}>W</Text>
          </View>
          <View style={[styles.q, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>Q</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.chatScreenBackArrow, styles.iconLayout]}
        onPress={() => navigation.navigate("Home3")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/chat-screen-back-arrow.png")}
        />
      </Pressable>
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <View style={[styles.popover1, styles.popoverFlexBox]}>
        <View style={styles.arrowPositionScrubber}>
          <Image
            style={styles.arrowIcon}
            resizeMode="cover"
            source={require("../assets/arrow1.png")}
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>
            Hi! Would you be interested in a swap?
          </Text>
        </View>
      </View>
      <View style={[styles.barsStatusBarIphoneL, styles.borderPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
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
          <Text style={[styles.time, styles.labelPosition]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.navigationtopNav, styles.navigationtopNavLayout]}>
        <View style={[styles.navigationtopNavChild, styles.keyLightPosition]} />
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
          <Text style={[styles.ulDromroe, styles.textTypo]}>
            UL - Dromroe Student Village
          </Text>
        </View>
        <Image
          style={[styles.favoriteIcon, styles.favoriteIconPosition]}
          resizeMode="cover"
          source={require("../assets/favorite.png")}
        />
      </View>
      <Text style={[styles.text2, styles.textTypo]}>8:20</Text>
      <Text style={[styles.text3, styles.textTypo]}>8:20</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  navPosition: {
    top: 775,
    position: "absolute",
  },
  popoverFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  navigationtopNavLayout: {
    width: 375,
    left: 0,
  },
  capacityBg: {
    backgroundColor: Color.colorGrey600,
    position: "absolute",
  },
  viewPosition: {
    bottom: "21.24%",
    top: "62.55%",
    height: "16.22%",
    position: "absolute",
  },
  labelPosition: {
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  shiftPosition: {
    bottom: "42.08%",
    top: "41.7%",
    width: "11.38%",
    height: "16.22%",
    position: "absolute",
  },
  symbolTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    marginTop: -13,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.sFProTextRegular,
    position: "absolute",
  },
  mPosition: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  nPosition: {
    left: "66.12%",
    right: "25.2%",
  },
  bPosition: {
    left: "55.83%",
    right: "35.5%",
  },
  vPosition: {
    left: "45.8%",
    right: "45.53%",
  },
  cPosition: {
    left: "35.5%",
    right: "55.83%",
  },
  xPosition: {
    left: "25.47%",
    right: "65.85%",
  },
  zPosition: {
    left: "15.18%",
    right: "76.15%",
  },
  lPosition: {
    bottom: "62.93%",
    top: "20.85%",
    width: "8.67%",
    height: "16.22%",
    position: "absolute",
  },
  pPosition: {
    bottom: "83.78%",
    width: "8.67%",
    top: "0%",
    height: "16.22%",
    position: "absolute",
  },
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  keyLightPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  outlinebellIconPosition: {
    top: 12,
    height: 24,
    width: 24,
    position: "absolute",
  },
  favoriteIconPosition: {
    top: 14,
    position: "absolute",
  },
  textTypo: {
    color: Color.neutral90,
    lineHeight: 16,
    textAlign: "center",
    fontFamily: FontFamily.textMRegular,
    fontSize: FontSize.textSMedium_size,
  },
  vectorIcon: {
    height: "59.36%",
    width: "120.53%",
    top: "48.15%",
    right: "-20.53%",
    bottom: "-7.51%",
    left: "0%",
  },
  addAPhotoIcon: {
    top: 772,
    left: 220,
    position: "absolute",
  },
  accountCircleIcon: {
    top: 773,
    left: 309,
    position: "absolute",
  },
  homeIcon: {
    top: 774,
    left: 42,
    position: "absolute",
  },
  smsIcon: {
    left: 131,
    height: 24,
    width: 24,
  },
  nav: {
    left: 40,
    width: 304,
    height: 23,
    overflow: "hidden",
  },
  text: {
    color: Color.neutral900,
    textAlign: "left",
    fontFamily: FontFamily.textMRegular,
    lineHeight: 20,
    fontSize: FontSize.textSMedium_size,
    alignSelf: "stretch",
  },
  body: {
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutral10,
  },
  arrowIcon: {
    width: 7,
    height: 14,
  },
  arrowPositionScrubber: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xl,
    alignItems: "flex-end",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  popover: {
    top: 396,
    left: 140,
    width: 207,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
  },
  homeIndicatorLight: {
    right: -1,
    left: 1,
    height: 34,
    bottom: 0,
    position: "absolute",
  },
  dictationIcon: {
    height: 25,
    width: 15,
  },
  emojiIcon: {
    width: 27,
    height: 27,
  },
  rectangleIcon: {
    bottom: -1,
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    left: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  label: {
    width: 88,
    color: Color.black,
    fontFamily: FontFamily.sFProTextRegular,
    lineHeight: 21,
    fontSize: FontSize.textLMedium_size,
    top: "26.19%",
    textAlign: "center",
    letterSpacing: 0,
  },
  return: {
    width: "23.85%",
    left: "76.15%",
    right: "0%",
  },
  label1: {
    width: 182,
    color: Color.black,
    fontFamily: FontFamily.sFProTextRegular,
    lineHeight: 21,
    fontSize: FontSize.textLMedium_size,
    top: "26.19%",
    textAlign: "center",
    letterSpacing: 0,
  },
  space: {
    width: "49.32%",
    right: "25.47%",
    left: "25.2%",
  },
  label2: {
    width: 87,
    color: Color.black,
    fontFamily: FontFamily.sFProTextRegular,
    lineHeight: 21,
    fontSize: FontSize.textLMedium_size,
    top: "26.19%",
    textAlign: "center",
    letterSpacing: 0,
  },
  view: {
    width: "23.58%",
    right: "76.42%",
    left: "0%",
  },
  label3: {
    width: 42,
    color: Color.black,
    fontFamily: FontFamily.sFProTextRegular,
    lineHeight: 21,
    fontSize: FontSize.textLMedium_size,
    top: "26.19%",
    textAlign: "center",
    letterSpacing: 0,
  },
  deleteButtonIcon: {
    width: 23,
    height: 17,
  },
  delete: {
    left: "88.62%",
    right: "0%",
  },
  rectangleShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  symbol: {
    left: "48.07%",
  },
  shiftIcon: {
    height: "39.18%",
    width: "44.95%",
    top: "29.05%",
    right: "27.29%",
    bottom: "31.77%",
    left: "27.76%",
  },
  shift: {
    right: "88.62%",
    left: "0%",
  },
  symbol1: {
    left: "18.75%",
  },
  m: {
    right: "14.91%",
    left: "76.42%",
  },
  symbol2: {
    left: "25%",
  },
  n: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol3: {
    left: "28.13%",
  },
  b: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  v: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  c: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  x: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  z: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol8: {
    left: "31.25%",
  },
  l: {
    right: "4.88%",
    left: "86.45%",
  },
  k: {
    right: "15.18%",
    left: "76.15%",
  },
  j: {
    left: "66.12%",
    right: "25.2%",
  },
  h: {
    left: "55.83%",
    right: "35.5%",
  },
  g: {
    left: "45.8%",
    right: "45.53%",
  },
  f: {
    left: "35.5%",
    right: "55.83%",
  },
  d: {
    left: "25.47%",
    right: "65.85%",
  },
  s: {
    left: "15.18%",
    right: "76.15%",
  },
  a: {
    right: "86.18%",
    left: "5.15%",
  },
  p: {
    left: "91.33%",
    right: "0%",
  },
  symbol18: {
    left: "21.88%",
  },
  o: {
    right: "10.03%",
    left: "81.3%",
  },
  symbol19: {
    left: "40.63%",
  },
  i: {
    right: "20.33%",
    left: "71%",
  },
  u: {
    right: "30.35%",
    left: "60.98%",
  },
  y: {
    right: "40.65%",
    left: "50.68%",
  },
  t: {
    right: "50.68%",
    left: "40.65%",
  },
  r: {
    right: "60.98%",
    left: "30.35%",
  },
  e: {
    right: "71%",
    left: "20.33%",
  },
  symbol25: {
    left: "15.63%",
  },
  w: {
    right: "81.3%",
    left: "10.03%",
  },
  q: {
    right: "91.33%",
    left: "0%",
  },
  keys: {
    height: "89%",
    width: "98.4%",
    top: "2.75%",
    right: "0.8%",
    bottom: "8.25%",
    left: "0.8%",
    position: "absolute",
  },
  keyboardlightalphabetic: {
    top: 521,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.navajowhite,
    height: 291,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  chatScreenBackArrow: {
    left: 21,
    top: 104,
    position: "absolute",
  },
  vectorIcon1: {
    height: "40.46%",
    bottom: "59.54%",
    top: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  popover1: {
    top: 298,
    left: 22,
    width: 207,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    alignItems: "center",
    flexDirection: "row",
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
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
  },
  battery: {
    top: 17,
    right: 14,
    height: 11,
    width: 24,
    position: "absolute",
  },
  wifiIcon: {
    height: 11,
    width: 15,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    top: 6,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.colorGrey600,
    width: 54,
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 20,
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
    width: 375,
    left: 0,
    backgroundColor: Color.neutral10,
  },
  navigationtopNavChild: {
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
    marginLeft: 8,
  },
  outlinelocationMarkerParent: {
    left: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  favoriteIcon: {
    left: 323,
    height: 24,
    width: 24,
  },
  navigationtopNav: {
    top: 44,
    height: 48,
    position: "absolute",
  },
  text2: {
    top: 372,
    left: 33,
    position: "absolute",
  },
  text3: {
    top: 470,
    left: 311,
    position: "absolute",
  },
  home: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.neutral10,
  },
});

export default Home4;
