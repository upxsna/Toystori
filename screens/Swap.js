import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Swap = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.swap}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.keyboardlightalphabetic}>
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
            <Text style={[styles.label, styles.labelTypo]}>Go</Text>
          </View>
          <View style={[styles.space, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle1.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>space</Text>
          </View>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle2.png")}
            />
            <Text style={[styles.label2, styles.labelTypo]}>123</Text>
          </View>
          <View style={[styles.delete, styles.shiftPosition]}>
            <View style={styles.keyLightPosition}>
              <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={require("../assets/rectangle3.png")}
              />
              <Text style={[styles.label3, styles.labelTypo]}>{` `}</Text>
            </View>
            <Image
              style={styles.deleteButtonIcon}
              resizeMode="cover"
              source={require("../assets/delete-button.png")}
            />
          </View>
          <View style={[styles.shift, styles.shiftPosition]}>
            <View style={styles.keyLightPosition}>
              <View style={[styles.rectangle, styles.rectangleShadowBox]} />
              <Text style={[styles.symbol, styles.symbolTypo]}>{` `}</Text>
            </View>
            <Image
              style={[styles.shiftIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/shift.png")}
            />
          </View>
          <View style={[styles.m, styles.mPosition]}>
            <View style={[styles.rectangle1, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol1, styles.symbolTypo]}>M</Text>
          </View>
          <View style={[styles.n, styles.nPosition]}>
            <View style={[styles.rectangle2, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>N</Text>
          </View>
          <View style={[styles.b, styles.bPosition]}>
            <View style={[styles.rectangle3, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>B</Text>
          </View>
          <View style={[styles.v, styles.vPosition]}>
            <View style={[styles.rectangle4, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>V</Text>
          </View>
          <View style={[styles.c, styles.cPosition]}>
            <View style={[styles.rectangle5, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>C</Text>
          </View>
          <View style={[styles.x, styles.xPosition]}>
            <View style={[styles.rectangle6, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>X</Text>
          </View>
          <View style={[styles.z, styles.zPosition]}>
            <View style={[styles.rectangle7, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Z</Text>
          </View>
          <View style={[styles.l, styles.lPosition]}>
            <View style={[styles.rectangle8, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>L</Text>
          </View>
          <View style={[styles.k, styles.lPosition]}>
            <View style={[styles.rectangle9, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>K</Text>
          </View>
          <View style={[styles.j, styles.lPosition]}>
            <View style={[styles.rectangle10, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>J</Text>
          </View>
          <View style={[styles.h, styles.lPosition]}>
            <View style={[styles.rectangle11, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>H</Text>
          </View>
          <View style={[styles.g, styles.lPosition]}>
            <View style={[styles.rectangle12, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>G</Text>
          </View>
          <View style={[styles.f, styles.lPosition]}>
            <View style={[styles.rectangle13, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>F</Text>
          </View>
          <View style={[styles.d, styles.lPosition]}>
            <View style={[styles.rectangle14, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>D</Text>
          </View>
          <View style={[styles.s, styles.lPosition]}>
            <View style={[styles.rectangle15, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>S</Text>
          </View>
          <View style={[styles.a, styles.lPosition]}>
            <View style={[styles.rectangle16, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>A</Text>
          </View>
          <View style={[styles.p, styles.pPosition]}>
            <View style={[styles.rectangle17, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>P</Text>
          </View>
          <View style={[styles.o, styles.pPosition]}>
            <View style={[styles.rectangle18, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>O</Text>
          </View>
          <View style={[styles.i, styles.pPosition]}>
            <View style={[styles.rectangle19, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol19, styles.symbolTypo]}>I</Text>
          </View>
          <View style={[styles.u, styles.pPosition]}>
            <View style={[styles.rectangle20, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>U</Text>
          </View>
          <View style={[styles.y, styles.pPosition]}>
            <View style={[styles.rectangle21, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Y</Text>
          </View>
          <View style={[styles.t, styles.pPosition]}>
            <View style={[styles.rectangle22, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>T</Text>
          </View>
          <View style={[styles.r, styles.pPosition]}>
            <View style={[styles.rectangle23, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>R</Text>
          </View>
          <View style={[styles.e, styles.pPosition]}>
            <View style={[styles.rectangle24, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>E</Text>
          </View>
          <View style={[styles.w, styles.pPosition]}>
            <View style={[styles.rectangle25, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol25, styles.symbolTypo]}>W</Text>
          </View>
          <View style={[styles.q, styles.pPosition]}>
            <View style={[styles.rectangle26, styles.rectangleShadowBox]} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>Q</Text>
          </View>
        </View>
      </View>
      <View style={[styles.popover, styles.rectangleShadowBox]}>
        <View style={styles.body}>
          <Text
            style={[styles.text, styles.textTypo]}
          >{`Hi there! Would you be interested in swap? `}</Text>
        </View>
        <View style={styles.arrowPositionScrubber}>
          <Image
            style={styles.arrowIcon}
            resizeMode="cover"
            source={require("../assets/arrow.png")}
          />
        </View>
      </View>
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={styles.swapChild}
        resizeMode="cover"
        source={require("../assets/group-48095842.png")}
      />
      <Image
        style={[styles.illustrationBeardManFacial, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-illustration-beard-man-facial-hair.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>Derick</Text>
      <View
        style={[styles.navigationtopNavWrapper, styles.navigationtopLayout]}
      >
        <View style={[styles.navigationtopNav, styles.navigationtopLayout]}>
          <View
            style={[styles.navigationtopNavChild, styles.keyLightPosition]}
          />
          <Image
            style={[styles.iconpersondefault, styles.iconchevronleftLayout]}
            resizeMode="cover"
            source={require("../assets/iconpersondefault1.png")}
          />
          <Image
            style={[styles.iconchevronleft, styles.iconchevronleftLayout]}
            resizeMode="cover"
            source={require("../assets/iconpersondefault.png")}
          />
          <Text style={[styles.digiDonor, styles.timeClr]}>Chat</Text>
          <Pressable
            style={[styles.outlinearrowSmLeft, styles.iconchevronleftLayout]}
            onPress={() => navigation.navigate("ProductPage")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/outlinearrowsmleft.png")}
            />
          </Pressable>
        </View>
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
            <Text style={[styles.time, styles.timeClr]}>9:41</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  labelTypo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.sFProTextRegular,
    lineHeight: 21,
    letterSpacing: 0,
    top: "24.84%",
    fontSize: FontSize.textLMedium_size,
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
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    position: "absolute",
  },
  symbolTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    marginTop: -14,
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
  textTypo: {
    textAlign: "left",
    color: Color.neutral900,
    fontFamily: FontFamily.textMRegular,
    fontSize: FontSize.textSMedium_size,
    lineHeight: 20,
  },
  navigationtopLayout: {
    height: 48,
    width: 375,
    left: 0,
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
  iconchevronleftLayout: {
    height: 24,
    top: 12,
    width: 24,
    position: "absolute",
  },
  timeClr: {
    color: Color.colorGrey600,
    textAlign: "center",
    position: "absolute",
  },
  barsPosition: {
    height: 44,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "59.36%",
    width: "120.53%",
    top: "48.15%",
    right: "-20.53%",
    bottom: "-7.51%",
    left: "0%",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
    backgroundColor: Color.colorGrey600,
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
    width: 84,
  },
  return: {
    width: "23.85%",
    left: "76.15%",
    right: "0%",
  },
  label1: {
    width: 173,
  },
  space: {
    width: "49.32%",
    right: "25.47%",
    left: "25.2%",
  },
  label2: {
    width: 83,
  },
  view: {
    width: "23.58%",
    right: "76.42%",
    left: "0%",
  },
  label3: {
    width: 40,
  },
  deleteButtonIcon: {
    width: 23,
    height: 17,
  },
  delete: {
    left: "88.62%",
    right: "0%",
  },
  rectangle: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  symbol: {
    left: "45.63%",
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
  rectangle1: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  symbol1: {
    left: "17.8%",
  },
  m: {
    right: "14.91%",
    left: "76.42%",
  },
  rectangle2: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  symbol2: {
    left: "23.73%",
  },
  n: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  rectangle3: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  symbol3: {
    left: "26.7%",
  },
  b: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  rectangle4: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  v: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  rectangle5: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  c: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  rectangle6: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  x: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  rectangle7: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  z: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  rectangle8: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  symbol8: {
    left: "29.67%",
  },
  l: {
    right: "4.88%",
    left: "86.45%",
  },
  rectangle9: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  k: {
    right: "15.18%",
    left: "76.15%",
  },
  rectangle10: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  j: {
    left: "66.12%",
    right: "25.2%",
  },
  rectangle11: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  h: {
    left: "55.83%",
    right: "35.5%",
  },
  rectangle12: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  g: {
    left: "45.8%",
    right: "45.53%",
  },
  rectangle13: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  f: {
    left: "35.5%",
    right: "55.83%",
  },
  rectangle14: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  d: {
    left: "25.47%",
    right: "65.85%",
  },
  rectangle15: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  s: {
    left: "15.18%",
    right: "76.15%",
  },
  rectangle16: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  a: {
    right: "86.18%",
    left: "5.15%",
  },
  rectangle17: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  p: {
    left: "91.33%",
    right: "0%",
  },
  rectangle18: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  symbol18: {
    left: "20.77%",
  },
  o: {
    right: "10.03%",
    left: "81.3%",
  },
  rectangle19: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  symbol19: {
    left: "38.57%",
  },
  i: {
    right: "20.33%",
    left: "71%",
  },
  rectangle20: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  u: {
    right: "30.35%",
    left: "60.98%",
  },
  rectangle21: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  y: {
    right: "40.65%",
    left: "50.68%",
  },
  rectangle22: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  t: {
    right: "50.68%",
    left: "40.65%",
  },
  rectangle23: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  r: {
    right: "60.98%",
    left: "30.35%",
  },
  rectangle24: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  e: {
    right: "71%",
    left: "20.33%",
  },
  rectangle25: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  symbol25: {
    left: "14.83%",
  },
  w: {
    right: "81.3%",
    left: "10.03%",
  },
  rectangle26: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
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
    width: 375,
    left: 0,
    position: "absolute",
  },
  text: {
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
    top: 431,
    left: 150,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 6,
    elevation: 6,
    width: 207,
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
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
  swapChild: {
    top: 120,
    left: 25,
    width: 82,
    height: 82,
    position: "absolute",
  },
  illustrationBeardManFacial: {
    height: "5.68%",
    width: "7.2%",
    top: "16.5%",
    right: "77.87%",
    bottom: "77.81%",
    left: "14.93%",
  },
  text1: {
    top: 147,
    left: 110,
    width: 70,
    position: "absolute",
  },
  navigationtopNavChild: {
    backgroundColor: Color.neutral10,
  },
  iconpersondefault: {
    right: 16,
    display: "none",
    overflow: "hidden",
  },
  iconchevronleft: {
    right: 52,
    opacity: 0,
  },
  digiDonor: {
    marginLeft: -20.5,
    top: "25%",
    letterSpacing: -0.2,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.textLMedium,
    color: Color.colorGrey600,
    fontSize: FontSize.textLMedium_size,
    left: "50%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  outlinearrowSmLeft: {
    left: 16,
  },
  navigationtopNav: {
    top: 0,
  },
  navigationtopNavWrapper: {
    top: 44,
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
    width: 54,
    lineHeight: 20,
    color: Color.colorGrey600,
    letterSpacing: 0,
    left: 0,
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
  swap: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.neutral10,
  },
});

export default Swap;
