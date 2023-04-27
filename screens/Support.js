import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Support = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.support}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <LinearGradient
        style={[styles.supportChild, styles.supportChildPosition]}
        locations={[0, 1]}
        colors={["#fd7326", "rgba(253, 115, 38, 0)"]}
      />
      <View style={styles.frameParent}>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View>
            <Text style={[styles.sendUsA, styles.sendUsATypo]}>
              Send us a message
            </Text>
            <Text style={[styles.weTypicallyReply, styles.howDoesTheTypo]}>
              We typically reply within a day
            </Text>
          </View>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          />
        </View>
        <View style={styles.frameContainer}>
          <View style={[styles.searchForHelpParent, styles.viewSpaceBlock]}>
            <Text style={[styles.searchForHelp, styles.sendUsATypo]}>
              Search for help
            </Text>
            <Image
              style={[styles.frameIcon1, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame1.png")}
            />
          </View>
          <View style={styles.parent}>
            <View style={[styles.view, styles.viewLayout]}>
              <Text style={[styles.howDoesThe, styles.howDoesTheTypo]}>
                How does the Toystori service work?
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame2.png")}
              />
            </View>
            <View
              style={[
                styles.withToystoriYouCanBuySelWrapper,
                styles.viewLayout,
              ]}
            >
              <Text
                style={[styles.withToystoriYou, styles.howDoesTheTypo]}
              >{`With Toystori you can buy, sell or swap pre loved toys with people near you.
Step 1: Browse available products.
step 2: Upload a picture and description of the toy you would like to sell.
Step 3: Pay using a variety of payment options including credit card and online banking.
Step 4: Choose to swap your toy for someone else’s!`}</Text>
            </View>
            <View style={[styles.view, styles.viewLayout]}>
              <Text style={[styles.howDoesThe, styles.howDoesTheTypo]}>
                How do I pay?
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame3.png")}
              />
            </View>
            <View style={[styles.view, styles.viewLayout]}>
              <Text style={[styles.howDoesThe, styles.howDoesTheTypo]}>
                How do I track my laundry progress?
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame3.png")}
              />
            </View>
            <View style={[styles.view, styles.viewLayout]}>
              <Text style={[styles.howDoesThe, styles.howDoesTheTypo]}>
                What is the cancellation policy?
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame3.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={[styles.vectorParent, styles.frameGroupFlexBox]}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-157.png")}
          />
        </View>
        <View style={styles.hiAngelaParent}>
          <Text style={[styles.hiAngela, styles.hiAngelaTypo]}>Hi Angela!</Text>
          <Text style={[styles.howCanWe, styles.hiAngelaTypo]}>
            How can we help?
          </Text>
        </View>
      </View>
      <Image
        style={styles.supportItem}
        resizeMode="cover"
        source={require("../assets/frame-592.png")}
      />
      <Pressable
        style={[styles.solidarrowSmLeft, styles.batteryLayout]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/solidarrowsmleft.png")}
        />
      </Pressable>
      <View style={[styles.barsStatusBarIphoneL, styles.supportChildPosition]}>
        <View style={[styles.battery, styles.batteryLayout]}>
          <View style={styles.border} />
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
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.navigationtopNav, styles.supportChildPosition]}>
        <View style={[styles.navigationtopNavChild, styles.iconLayout]} />
        <Image
          style={[styles.iconpersondefault, styles.iconchevronleftPosition]}
          resizeMode="cover"
          source={require("../assets/iconpersondefault2.png")}
        />
        <Image
          style={[styles.iconchevronleft, styles.iconchevronleftPosition]}
          resizeMode="cover"
          source={require("../assets/iconpersondefault.png")}
        />
        <Text style={[styles.digiDonor, styles.timeFlexBox]}>Support</Text>
        <Image
          style={[styles.outlinearrowLeftIcon, styles.iconchevronleftPosition]}
          resizeMode="cover"
          source={require("../assets/outlinearrowleft.png")}
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
  supportChildPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  frameGroupFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  sendUsATypo: {
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.textMRegular_size,
  },
  howDoesTheTypo: {
    fontFamily: FontFamily.textMRegular,
    textAlign: "left",
    letterSpacing: -0.1,
  },
  frameIconLayout: {
    height: 16,
    overflow: "hidden",
  },
  viewSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_5xs,
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewLayout: {
    width: 335,
    flexDirection: "row",
  },
  hiAngelaTypo: {
    color: Color.neutral10,
    textAlign: "left",
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  batteryLayout: {
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.neutral10,
    position: "absolute",
  },
  iconchevronleftPosition: {
    top: 12,
    width: 24,
    height: 24,
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
  supportChild: {
    height: 388,
    backgroundColor: Color.gradientComboTwo,
    top: 0,
  },
  sendUsA: {
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: -0.1,
    textAlign: "left",
    color: Color.black,
  },
  weTypicallyReply: {
    color: Color.dimgray_100,
    lineHeight: 20,
    fontSize: FontSize.textMRegular_size,
    fontFamily: FontFamily.textMRegular,
  },
  frameIcon: {
    width: 17,
  },
  frameGroup: {
    paddingVertical: Padding.p_base,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: Border.br_3xs,
    width: 343,
    overflow: "hidden",
    backgroundColor: Color.neutral10,
  },
  searchForHelp: {
    lineHeight: 21,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  frameIcon1: {
    width: 16,
  },
  searchForHelpParent: {
    backgroundColor: Color.whitesmoke_100,
    width: 326,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_5xs,
  },
  howDoesThe: {
    color: Color.neutral100,
    lineHeight: 20,
    fontSize: FontSize.textMRegular_size,
    fontFamily: FontFamily.textMRegular,
  },
  view: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_5xs,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.neutral10,
  },
  withToystoriYou: {
    fontSize: FontSize.textSMedium_size,
    color: Color.neutral90,
    width: 323,
  },
  withToystoriYouCanBuySelWrapper: {
    padding: Padding.p_3xs,
  },
  parent: {
    marginTop: 8,
  },
  frameContainer: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    marginTop: 12,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: Border.br_3xs,
    width: 343,
    overflow: "hidden",
    backgroundColor: Color.neutral10,
  },
  frameParent: {
    top: 229,
    width: 343,
    left: 16,
    position: "absolute",
  },
  vectorIcon1: {
    width: 32,
    height: 32,
  },
  frameChild: {
    width: 116,
    height: 40,
  },
  vectorParent: {
    alignItems: "flex-end",
    display: "none",
    alignSelf: "stretch",
  },
  hiAngela: {
    fontSize: FontSize.headingS_size,
    letterSpacing: -0.3,
    lineHeight: 28,
    opacity: 0.7,
  },
  howCanWe: {
    fontSize: FontSize.headingL_size,
    letterSpacing: -0.8,
    lineHeight: 44,
  },
  hiAngelaParent: {
    marginTop: 100,
    alignSelf: "stretch",
  },
  frameView: {
    top: 105,
    paddingTop: Padding.p_xl,
    paddingHorizontal: Padding.p_xl,
    width: 343,
    left: 16,
    position: "absolute",
  },
  supportItem: {
    top: 772,
    left: 42,
    width: 291,
    height: 24,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  solidarrowSmLeft: {
    left: 24,
    top: 68,
    height: 24,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#fff",
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
    width: 18,
    height: 7,
    position: "absolute",
    backgroundColor: Color.neutral10,
  },
  battery: {
    top: 17,
    right: 14,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    height: 11,
    width: 17,
  },
  time: {
    top: 6,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    width: 54,
    fontWeight: "600",
    lineHeight: 20,
    left: 0,
    textAlign: "center",
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
  },
  navigationtopNavChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
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
    marginLeft: -31.5,
    top: "25%",
    left: "50%",
    fontSize: FontSize.textLMedium_size,
    letterSpacing: -0.2,
    lineHeight: 24,
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  outlinearrowLeftIcon: {
    display: "none",
    left: 16,
    top: 12,
  },
  navigationtopNav: {
    top: 44,
    height: 48,
  },
  support: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral10,
  },
});

export default Support;
