import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home, styles.homeLayout]}>
      <Image
        style={[styles.vectorIcon, styles.illustrationLayout1]}
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
        source={require("../assets/sms.png")}
      />
      <View style={[styles.nav, styles.navPosition]} />
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("Home3")}
      >
        <Text style={[styles.text, styles.textTypo5]}>Inbox</Text>
      </Pressable>
      <View style={[styles.button1, styles.buttonLayout]}>
        <Text style={[styles.text1, styles.textTypo5]}>Sent</Text>
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-480958421.png")}
        />
        <Text style={[styles.text2, styles.textPosition1]}>Derick</Text>
        <Text style={[styles.text3, styles.textTypo3]}>1 new message</Text>
      </View>
      <Pressable
        style={[styles.frameParent, styles.groupParentLayout]}
        onPress={() => navigation.navigate("Home2")}
      >
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-491.png")}
          />
          <View style={styles.friendlyOnesAvatar} />
        </View>
        <Text style={[styles.text4, styles.textLayout]}>Maryann</Text>
        <Text style={[styles.text5, styles.textTypo2]}>1 new messages</Text>
      </Pressable>
      <Pressable
        style={[styles.frameParent, styles.groupParentLayout]}
        onPress={() => navigation.navigate("Home2")}
      >
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-491.png")}
          />
          <View style={styles.friendlyOnesAvatar} />
        </View>
        <Text style={[styles.text4, styles.textLayout]}>Maryann</Text>
        <Text style={[styles.text7, styles.textPosition]}>Maryann</Text>
        <Text style={[styles.text5, styles.textTypo2]}>1 new messages</Text>
        <Text style={[styles.text9, styles.textPosition]}>1 new messages</Text>
      </Pressable>
      <View style={[styles.groupContainer, styles.groupParentLayout]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-480958421.png")}
        />
        <Text style={[styles.text4, styles.textLayout]}>Bethany</Text>
        <Text style={[styles.text5, styles.textTypo2]}>1 new messages</Text>
        <Image
          style={[styles.illustrationLongHairDarkS, styles.illustrationLayout1]}
          resizeMode="cover"
          source={require("../assets/-illustration-long-hair-dark-skin.png")}
        />
      </View>
      <View style={[styles.groupContainer, styles.groupParentLayout]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-480958421.png")}
        />
        <Text style={[styles.text4, styles.textLayout]}>Bethany</Text>
        <Text style={[styles.text5, styles.textTypo2]}>1 new messages</Text>
        <Image
          style={[styles.illustrationLongHairDarkS, styles.illustrationLayout1]}
          resizeMode="cover"
          source={require("../assets/-illustration-long-hair-dark-skin.png")}
        />
      </View>
      <View style={[styles.groupParent1, styles.groupParentPosition]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-480958421.png")}
        />
        <Text style={[styles.text4, styles.textLayout]}>Bethany</Text>
        <Text style={[styles.text5, styles.textTypo2]}>1 new messages</Text>
        <Image
          style={[styles.illustrationLongHairDarkS, styles.illustrationLayout1]}
          resizeMode="cover"
          source={require("../assets/-illustration-long-hair-dark-skin.png")}
        />
      </View>
      <View style={[styles.groupParent2, styles.groupParentLayout]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-480958421.png")}
        />
        <Text style={[styles.text16, styles.textPosition1]}>Naomi</Text>
        <Text style={[styles.text17, styles.textTypo3]}>1 new messages</Text>
        <Image
          style={[styles.illustrationWavyHairWoman, styles.illustrationLayout1]}
          resizeMode="cover"
          source={require("../assets/-illustration-wavy-hair-woman-girl.png")}
        />
      </View>
      <View style={[styles.groupParent2, styles.groupParentLayout]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-480958421.png")}
        />
        <Text style={[styles.text16, styles.textPosition1]}>Naomi</Text>
        <Text style={[styles.text17, styles.textTypo3]}>1 new messages</Text>
        <Image
          style={[styles.illustrationWavyHairWoman, styles.illustrationLayout1]}
          resizeMode="cover"
          source={require("../assets/-illustration-wavy-hair-woman-girl.png")}
        />
      </View>
      <Image
        style={[styles.homeChild, styles.frameChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-480958421.png")}
      />
      <View style={[styles.groupParent4, styles.groupParentPosition]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-480958421.png")}
        />
        <Text style={[styles.text16, styles.textPosition1]}>Naomi</Text>
        <Text style={[styles.text17, styles.textTypo3]}>1 new messages</Text>
        <Image
          style={[styles.illustrationWavyHairWoman, styles.illustrationLayout1]}
          resizeMode="cover"
          source={require("../assets/-illustration-wavy-hair-woman-girl.png")}
        />
      </View>
      <Image
        style={[styles.illustrationBeardManFacial, styles.illustrationLayout1]}
        resizeMode="cover"
        source={require("../assets/-illustration-beard-man-facial-hair1.png")}
      />
      <Image
        style={[styles.illustrationCurlyHair, styles.illustrationLayout]}
        resizeMode="cover"
        source={require("../assets/-illustration-curly-hair.png")}
      />
      <Image
        style={[styles.illustrationCurlyHair1, styles.illustrationLayout]}
        resizeMode="cover"
        source={require("../assets/-illustration-curly-hair.png")}
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
        <View style={[styles.navigationtopNavChild, styles.homeLayout]} />
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
          <Text style={styles.ulDromroe}>UL - Dromroe Student Village</Text>
        </View>
        <Image
          style={[styles.favoriteIcon, styles.favoriteIconPosition]}
          resizeMode="cover"
          source={require("../assets/favorite.png")}
        />
      </View>
      <Text style={[styles.text22, styles.textTypo1]}>8:20</Text>
      <Text style={[styles.text23, styles.textTypo1]}>8:20</Text>
      <Text style={[styles.text23, styles.textTypo1]}>8:20</Text>
      <Text style={[styles.text25, styles.textTypo]}>8:20</Text>
      <Text style={[styles.text26, styles.textTypo1]}>8:20</Text>
      <Text style={[styles.text27, styles.textTypo]}>8:20</Text>
      <Text style={[styles.text28, styles.textTypo1]}>8:20</Text>
      <Text style={[styles.text28, styles.textTypo1]}>8:20</Text>
      <Text style={[styles.text30, styles.textTypo]}>8:20</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: "100%",
    backgroundColor: Color.neutral10,
  },
  illustrationLayout1: {
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
  buttonLayout: {
    justifyContent: "center",
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    height: 30,
    width: 145,
    borderWidth: 0.3,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: Border.br_5xl,
    top: 110,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo5: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.textMRegular_size,
  },
  groupParentLayout: {
    height: 64,
    width: 172,
    left: 22,
    position: "absolute",
  },
  frameChildLayout: {
    height: 82,
    width: 82,
  },
  textPosition1: {
    color: Color.neutral900,
    fontSize: FontSize.textSMedium_size,
    left: 75,
    top: 11,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  textTypo3: {
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
    top: 31,
    color: Color.neutral900,
    fontSize: FontSize.textSMedium_size,
    left: 75,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  textLayout: {
    width: 75,
    fontFamily: FontFamily.textMRegular,
  },
  textTypo2: {
    width: 104,
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  textPosition: {
    left: 73,
    color: Color.neutral900,
    fontSize: FontSize.textSMedium_size,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  groupParentPosition: {
    left: 20,
    height: 64,
    width: 172,
    position: "absolute",
  },
  illustrationLayout: {
    width: "11.73%",
    height: "6.68%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  navigationtopNavPosition: {
    width: 375,
    left: 0,
    position: "absolute",
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
  textTypo1: {
    left: 319,
    color: Color.neutral90,
    lineHeight: 16,
    textAlign: "center",
    fontFamily: FontFamily.textMRegular,
    fontSize: FontSize.textSMedium_size,
    position: "absolute",
  },
  textTypo: {
    left: 317,
    color: Color.neutral90,
    lineHeight: 16,
    textAlign: "center",
    fontFamily: FontFamily.textMRegular,
    fontSize: FontSize.textSMedium_size,
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
    color: "#979797",
  },
  button: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 22,
    justifyContent: "center",
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    height: 30,
    width: 145,
    borderWidth: 0.3,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: Border.br_5xl,
    top: 110,
    backgroundColor: Color.neutral10,
  },
  text1: {
    color: Color.neutral10,
  },
  button1: {
    left: 202,
    backgroundColor: Color.chocolate,
    justifyContent: "center",
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    height: 30,
    width: 145,
    borderWidth: 0.3,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: Border.br_5xl,
    top: 110,
  },
  frameChild: {
    top: -5,
    left: -9,
    position: "absolute",
  },
  text2: {
    width: 70,
    fontFamily: FontFamily.textMRegular,
    color: Color.neutral900,
    fontSize: FontSize.textSMedium_size,
    left: 75,
    top: 11,
  },
  text3: {
    width: 97,
  },
  groupParent: {
    top: 168,
  },
  friendlyOnesAvatar: {
    borderRadius: Border.br_31xl,
    width: 42,
    height: 42,
  },
  ellipseParent: {
    left: 14,
    width: 36,
    height: 61,
    top: 0,
    alignItems: "center",
    position: "absolute",
  },
  text4: {
    color: Color.neutral900,
    fontSize: FontSize.textSMedium_size,
    left: 75,
    top: 11,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
    width: 75,
  },
  text5: {
    top: 31,
    width: 104,
    color: Color.neutral900,
    fontSize: FontSize.textSMedium_size,
    left: 75,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  frameParent: {
    top: 257,
  },
  text7: {
    top: 267,
    width: 75,
    fontFamily: FontFamily.textMRegular,
  },
  text9: {
    top: 287,
    width: 104,
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  illustrationLongHairDarkS: {
    height: "71.36%",
    width: "22.09%",
    top: "14.06%",
    right: "70.35%",
    bottom: "14.58%",
    left: "7.56%",
  },
  groupContainer: {
    top: 346,
  },
  groupParent1: {
    top: 602,
  },
  text16: {
    width: 74,
    fontFamily: FontFamily.textMRegular,
    color: Color.neutral900,
    fontSize: FontSize.textSMedium_size,
    left: 75,
    top: 11,
  },
  text17: {
    width: 102,
  },
  illustrationWavyHairWoman: {
    height: "79.76%",
    width: "29.31%",
    top: "9.38%",
    right: "66.62%",
    bottom: "10.87%",
    left: "4.07%",
  },
  groupParent2: {
    top: 435,
  },
  homeChild: {
    top: 513,
    left: 11,
    position: "absolute",
  },
  groupParent4: {
    top: 691,
  },
  illustrationBeardManFacial: {
    height: "5.68%",
    width: "7.2%",
    top: "21.8%",
    right: "81.87%",
    bottom: "72.52%",
    left: "10.93%",
  },
  illustrationCurlyHair: {
    top: "32.27%",
    right: "79.73%",
    bottom: "61.05%",
    left: "8.53%",
  },
  illustrationCurlyHair1: {
    top: "63.79%",
    right: "80.27%",
    bottom: "29.53%",
    left: "8%",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#212121",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    borderStyle: "solid",
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
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.colorGrey600,
    width: 54,
    textAlign: "center",
    left: 0,
    fontWeight: "600",
    lineHeight: 20,
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
    left: 0,
  },
  navigationtopNavChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
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
    color: Color.neutral90,
    lineHeight: 16,
    textAlign: "center",
    fontFamily: FontFamily.textMRegular,
    fontSize: FontSize.textSMedium_size,
  },
  outlinelocationMarkerParent: {
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    top: 14,
  },
  favoriteIcon: {
    left: 323,
    height: 24,
    width: 24,
  },
  navigationtopNav: {
    top: 44,
    height: 48,
  },
  text22: {
    top: 197,
  },
  text23: {
    top: 290,
  },
  text25: {
    top: 546,
  },
  text26: {
    top: 383,
  },
  text27: {
    top: 639,
  },
  text28: {
    top: 476,
  },
  text30: {
    top: 732,
  },
  home: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Home1;
