import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <LinearGradient
        style={[styles.profileChild, styles.profileChildPosition]}
        locations={[0, 1]}
        colors={["#fd7326", "rgba(253, 115, 38, 0)"]}
      />
      <View style={[styles.navigationtopNav, styles.profileChildPosition]}>
        <View
          style={[styles.navigationtopNavChild, styles.vectorIconPosition]}
        />
        <Image
          style={[styles.iconchevronleft, styles.iconchevronleftLayout]}
          resizeMode="cover"
          source={require("../assets/iconpersondefault.png")}
        />
        <Image
          style={[styles.iconchevronleft1, styles.iconchevronleftLayout]}
          resizeMode="cover"
          source={require("../assets/iconpersondefault.png")}
        />
        <Text style={[styles.title, styles.timeClr]}>Profile</Text>
        <Image
          style={[styles.solidarrowSmLeftIcon, styles.frameParentPosition]}
          resizeMode="cover"
          source={require("../assets/solidarrowsmleft1.png")}
        />
      </View>
      <View style={styles.profileItem} />
      <View style={styles.pair50016sb30012rParent}>
        <View style={styles.pair50016sb30012r}>
          <Text style={[styles.emilyMurphy, styles.titleTypo]}>
            Emily Murphy
          </Text>
          <Text style={[styles.text, styles.textTypo]}>+141 1234 567891</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Image
            style={styles.friendlyOnesAvatar}
            resizeMode="cover"
            source={require("../assets/friendly-ones-avatar.png")}
          />
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameShadowBox]}>
        <Pressable
          style={[styles.rectangleParent, styles.framePressableLayout]}
          onPress={() => navigation.navigate("TermsCondition")}
        >
          <View style={styles.frameChild} />
          <View style={styles.frameGroup}>
            <View
              style={[styles.iconpaymentmoneyWrapper, styles.wrapperFlexBox]}
            >
              <Image
                style={[styles.iconpaymentmoney, styles.iconpaymentmoneyLayout]}
                resizeMode="cover"
                source={require("../assets/iconpaymentmoney.png")}
              />
            </View>
            <Text style={[styles.paymentMethods, styles.textTypo]}>
              Payment Methods
            </Text>
          </View>
          <View style={[styles.frameItem, styles.borderBorder]} />
          <Image
            style={styles.iconchevronright}
            resizeMode="cover"
            source={require("../assets/iconchevronright.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.rectangleParent, styles.framePressableLayout]}
          onPress={() => navigation.navigate("TermsCondition1")}
        >
          <View style={styles.frameChild} />
          <Image
            style={styles.iconchevronright}
            resizeMode="cover"
            source={require("../assets/iconchevronright.png")}
          />
          <View style={styles.frameGroup}>
            <View
              style={[styles.outlinedocumentTextWrapper, styles.wrapperFlexBox]}
            >
              <Image
                style={styles.iconpaymentmoneyLayout}
                resizeMode="cover"
                source={require("../assets/outlinedocumenttext.png")}
              />
            </View>
            <Text
              style={[styles.paymentMethods, styles.textTypo]}
            >{`Terms & Conditions`}</Text>
          </View>
          <View style={[styles.frameItem, styles.borderBorder]} />
        </Pressable>
        <Pressable
          style={[styles.rectangleParent, styles.framePressableLayout]}
          onPress={() => navigation.navigate("Support1")}
        >
          <View style={styles.frameChild} />
          <Image
            style={styles.iconchevronright}
            resizeMode="cover"
            source={require("../assets/iconchevronright.png")}
          />
          <View style={styles.frameGroup}>
            <View
              style={[styles.outlinedocumentTextWrapper, styles.wrapperFlexBox]}
            >
              <Image
                style={styles.iconpaymentmoneyLayout}
                resizeMode="cover"
                source={require("../assets/outlinequestionmarkcircle.png")}
              />
            </View>
            <Text style={[styles.paymentMethods, styles.textTypo]}>FAQ</Text>
          </View>
          <View style={[styles.frameItem, styles.borderBorder]} />
        </Pressable>
        <Pressable
          style={[styles.framePressable, styles.framePressableLayout]}
          onPress={() => navigation.navigate("Onboarding1")}
        >
          <View style={styles.frameChild} />
          <Image
            style={styles.iconchevronright}
            resizeMode="cover"
            source={require("../assets/iconchevronright.png")}
          />
          <View style={styles.frameGroup}>
            <View style={[styles.outlinelogoutWrapper, styles.wrapperFlexBox]}>
              <Image
                style={styles.iconpaymentmoneyLayout}
                resizeMode="cover"
                source={require("../assets/outlinelogout.png")}
              />
            </View>
            <Text style={[styles.paymentMethods, styles.textTypo]}>Logout</Text>
          </View>
          <View style={[styles.frameItem, styles.borderBorder]} />
        </Pressable>
      </View>
      <Image
        style={styles.profileInner}
        resizeMode="cover"
        source={require("../assets/frame-592.png")}
      />
      <View style={[styles.barsStatusBarIphoneT, styles.profileChildPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection1.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeClr]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconPosition: {
    left: "0%",
    position: "absolute",
  },
  profileChildPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconchevronleftLayout: {
    opacity: 0,
    height: 24,
    width: 24,
    top: 12,
    position: "absolute",
  },
  timeClr: {
    color: Color.neutral10,
    textAlign: "center",
    position: "absolute",
  },
  frameParentPosition: {
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  titleTypo: {
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  textTypo: {
    fontFamily: FontFamily.textMRegular,
    textAlign: "center",
  },
  frameShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 0,
    },
  },
  framePressableLayout: {
    width: 343,
    height: 112,
  },
  wrapperFlexBox: {
    padding: Padding.p_base,
    borderRadius: Border.br_29xl,
    alignItems: "center",
    flexDirection: "row",
  },
  iconpaymentmoneyLayout: {
    height: 32,
    width: 32,
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  vectorIcon: {
    height: "59.36%",
    width: "120.53%",
    top: "48.15%",
    right: "-20.53%",
    bottom: "-7.51%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  profileChild: {
    height: 388,
    backgroundColor: Color.gradientComboTwo,
    top: 0,
  },
  navigationtopNavChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    width: "100%",
  },
  iconchevronleft: {
    right: 16,
  },
  iconchevronleft1: {
    right: 52,
  },
  title: {
    marginLeft: -24.5,
    top: "25%",
    left: "50%",
    textAlign: "center",
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.textLMedium_size,
  },
  solidarrowSmLeftIcon: {
    display: "none",
    height: 24,
    width: 24,
    top: 12,
    left: 16,
  },
  navigationtopNav: {
    top: 44,
    height: 48,
  },
  profileItem: {
    top: 148,
    shadowColor: "rgba(0, 0, 0, 0.19)",
    shadowRadius: 19,
    elevation: 19,
    height: 664,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 0,
    },
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.neutral10,
  },
  emilyMurphy: {
    fontSize: FontSize.headingS_size,
    letterSpacing: -0.3,
    lineHeight: 28,
    color: Color.neutral100,
    textAlign: "center",
  },
  text: {
    fontSize: FontSize.textMRegular_size,
    letterSpacing: -0.1,
    color: Color.colorGrey400,
    marginTop: 4,
    lineHeight: 20,
  },
  pair50016sb30012r: {
    top: 105,
    left: 19,
    width: 139,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 2,
    position: "absolute",
  },
  groupChild: {
    top: -5,
    left: -9,
    width: 124,
    height: 124,
    position: "absolute",
  },
  friendlyOnesAvatar: {
    top: 18,
    left: 18,
    borderRadius: Border.br_31xl,
    width: 70,
    height: 70,
    position: "absolute",
  },
  ellipseParent: {
    top: -13,
    left: 35,
    width: 106,
    height: 106,
    position: "absolute",
  },
  pair50016sb30012rParent: {
    top: 108,
    left: 97,
    width: 178,
    height: 153,
    position: "absolute",
  },
  frameChild: {
    right: 0,
    height: 112,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.neutral10,
  },
  iconpaymentmoney: {
    overflow: "hidden",
  },
  iconpaymentmoneyWrapper: {
    backgroundColor: Color.colorGreen100,
  },
  paymentMethods: {
    marginLeft: 8,
    color: Color.neutral100,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.textLMedium_size,
  },
  frameGroup: {
    top: 24,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  frameItem: {
    top: 112,
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
    right: 0,
    left: 0,
  },
  iconchevronright: {
    top: 46,
    width: 20,
    height: 20,
    right: 16,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    height: 112,
  },
  outlinedocumentTextWrapper: {
    backgroundColor: Color.colorBlue100,
  },
  outlinelogoutWrapper: {
    backgroundColor: Color.colorPrimary100,
  },
  framePressable: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    height: 112,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 0,
    },
  },
  frameParent: {
    top: 277,
    borderRadius: Border.br_base,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  profileInner: {
    top: 772,
    left: 42,
    width: 291,
    height: 24,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#fff",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
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
    position: "absolute",
    backgroundColor: Color.neutral10,
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
    textAlign: "center",
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
  barsStatusBarIphoneT: {
    height: 44,
    top: 0,
  },
  profile: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral10,
  },
});

export default Profile;
