import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Home3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Image
        style={[styles.vectorIcon, styles.illustrationLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.addAPhotoIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/add-a-photo.png")}
      />
      <Image
        style={[styles.accountCircleIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/account-circle.png")}
      />
      <Pressable
        style={[styles.home1, styles.iconLayout1]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/home.png")}
        />
      </Pressable>
      <Image
        style={[styles.smsIcon, styles.navPosition]}
        resizeMode="cover"
        source={require("../assets/sms.png")}
      />
      <View style={[styles.nav, styles.navPosition]} />
      <View style={[styles.chatScreenInboxButton, styles.chatLayout]}>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.text, styles.textTypo4]}>Inbox</Text>
        </View>
      </View>
      <Pressable
        style={[styles.chatScreenSentButton, styles.chatLayout]}
        onPress={() => navigation.navigate("Home1")}
      >
        <View style={[styles.button1, styles.borderPosition]}>
          <Text style={[styles.text1, styles.textTypo4]}>Sent</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.derickChatScreenParent, styles.parentGroupLayout]}
        onPress={() => navigation.navigate("Home4")}
      >
        <Image
          style={[styles.derickChatScreen, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-48095842.png")}
        />
        <View style={styles.derickMessage}>
          <Text style={[styles.text2, styles.textTypo3]}>Derick</Text>
          <Text style={styles.text3}>1 new message</Text>
        </View>
      </Pressable>
      <Image
        style={[styles.illustrationBeardManFacial, styles.illustrationLayout]}
        resizeMode="cover"
        source={require("../assets/-illustration-beard-man-facial-hair1.png")}
      />
      <View style={[styles.avatarsChatScreen, styles.avatarsLayout]}>
        <View style={[styles.frameParent, styles.parentGroupLayout]}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../assets/group-480958421.png")}
            />
            <View style={styles.friendlyOnesAvatar} />
          </View>
          <Text style={[styles.text4, styles.textTypo3]}>Maryann</Text>
          <Text style={[styles.text5, styles.textTypo2]}>2 new messages</Text>
        </View>
        <View style={[styles.groupParent, styles.parentGroupLayout]}>
          <Image
            style={[styles.derickChatScreen, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/group-480958421.png")}
          />
          <Text style={[styles.text4, styles.textTypo3]}>Bethany</Text>
          <Text style={[styles.text7, styles.textTypo2]}>1 new messages</Text>
          <Image
            style={[
              styles.illustrationLongHairDarkS,
              styles.illustrationLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/-illustration-long-hair-dark-skin.png")}
          />
        </View>
        <View style={[styles.groupContainer, styles.parentGroupLayout]}>
          <Image
            style={[styles.derickChatScreen, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/group-480958421.png")}
          />
          <Text style={styles.text8}>Naomi</Text>
          <Text style={[styles.text9, styles.textTypo2]}>1 new messages</Text>
          <Image
            style={[
              styles.illustrationWavyHairWoman,
              styles.illustrationLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/-illustration-wavy-hair-woman-girl.png")}
          />
        </View>
        <Image
          style={[styles.illustrationCurlyHair, styles.illustrationLayout]}
          resizeMode="cover"
          source={require("../assets/-illustration-curly-hair.png")}
        />
      </View>
      <View style={[styles.avatarsChatScreen1, styles.avatarsLayout]}>
        <View style={[styles.frameParent, styles.parentGroupLayout]}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../assets/group-480958421.png")}
            />
            <View style={styles.friendlyOnesAvatar} />
          </View>
          <Text style={[styles.text4, styles.textTypo3]}>Maryann</Text>
          <Text style={[styles.text5, styles.textTypo2]}>2 new messages</Text>
        </View>
        <View style={[styles.groupParent, styles.parentGroupLayout]}>
          <Image
            style={[styles.derickChatScreen, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/group-480958421.png")}
          />
          <Text style={[styles.text4, styles.textTypo3]}>Bethany</Text>
          <Text style={[styles.text7, styles.textTypo2]}>1 new messages</Text>
          <Image
            style={[
              styles.illustrationLongHairDarkS,
              styles.illustrationLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/-illustration-long-hair-dark-skin.png")}
          />
        </View>
        <View style={[styles.groupContainer, styles.parentGroupLayout]}>
          <Image
            style={[styles.derickChatScreen, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/group-480958421.png")}
          />
          <Text style={styles.text8}>Naomi</Text>
          <Text style={[styles.text9, styles.textTypo2]}>1 new messages</Text>
          <Image
            style={[
              styles.illustrationWavyHairWoman,
              styles.illustrationLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/-illustration-wavy-hair-woman-girl.png")}
          />
        </View>
        <Image
          style={[styles.illustrationCurlyHair, styles.illustrationLayout]}
          resizeMode="cover"
          source={require("../assets/-illustration-curly-hair.png")}
        />
      </View>
      <View
        style={[styles.barsStatusBarIphoneL, styles.navigationtopNavPosition]}
      >
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
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
        <View style={[styles.navigationtopNavChild, styles.iconLayout]} />
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
      <Text style={[styles.text16, styles.textTypo1]}>8:20</Text>
      <Text style={[styles.text17, styles.textTypo1]}>8:20</Text>
      <Text style={[styles.text18, styles.textTypo]}>8:20</Text>
      <Text style={[styles.text19, styles.textTypo1]}>8:20</Text>
      <Text style={[styles.text20, styles.textTypo]}>8:20</Text>
      <Text style={[styles.text21, styles.textTypo1]}>8:20</Text>
      <Text style={[styles.text22, styles.textTypo]}>8:20</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  illustrationLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  navPosition: {
    top: 775,
    position: "absolute",
  },
  chatLayout: {
    height: 30,
    width: 145,
    top: 110,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_5xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    height: 30,
    width: 145,
    overflow: "hidden",
  },
  textTypo4: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.textMRegular_size,
  },
  borderPosition: {
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  parentGroupLayout: {
    height: 64,
    width: 172,
    position: "absolute",
  },
  frameChildLayout: {
    height: 82,
    width: 82,
  },
  textTypo3: {
    width: 70,
    color: Color.neutral900,
    fontFamily: FontFamily.textMRegular,
    fontSize: FontSize.textSMedium_size,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  avatarsLayout: {
    height: 242,
    width: 172,
    position: "absolute",
  },
  textTypo2: {
    top: 31,
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
    color: Color.neutral900,
    fontSize: FontSize.textSMedium_size,
    left: 75,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  navigationtopNavPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
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
    left: 316,
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
  home1: {
    left: 42,
    top: 774,
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
    color: Color.neutral10,
  },
  button: {
    backgroundColor: Color.chocolate,
    top: 0,
    position: "absolute",
  },
  chatScreenInboxButton: {
    left: 22,
  },
  text1: {
    color: "#a6a6a6",
  },
  button1: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 0.3,
    justifyContent: "center",
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_5xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    height: 30,
    width: 145,
    overflow: "hidden",
    backgroundColor: Color.neutral10,
  },
  chatScreenSentButton: {
    left: 202,
  },
  derickChatScreen: {
    top: -5,
    left: -9,
    position: "absolute",
  },
  text2: {
    left: 0,
    top: 0,
  },
  text3: {
    top: 20,
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
    color: Color.neutral900,
    fontSize: FontSize.textSMedium_size,
    width: 97,
    textAlign: "left",
    lineHeight: 20,
    left: 0,
    position: "absolute",
  },
  derickMessage: {
    height: 40,
    width: 97,
    left: 75,
    top: 11,
    position: "absolute",
  },
  derickChatScreenParent: {
    top: 168,
    left: 22,
  },
  illustrationBeardManFacial: {
    height: "5.68%",
    width: "7.2%",
    top: "21.8%",
    right: "81.87%",
    bottom: "72.52%",
    left: "10.93%",
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
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  text4: {
    left: 75,
    top: 11,
    width: 70,
  },
  text5: {
    width: 105,
  },
  frameParent: {
    left: 0,
    top: 0,
  },
  text7: {
    width: 106,
  },
  illustrationLongHairDarkS: {
    height: "71.36%",
    width: "22.09%",
    top: "14.06%",
    right: "70.35%",
    bottom: "14.58%",
    left: "7.56%",
  },
  groupParent: {
    top: 89,
    left: 0,
  },
  text8: {
    width: 77,
    color: Color.neutral900,
    fontFamily: FontFamily.textMRegular,
    fontSize: FontSize.textSMedium_size,
    left: 75,
    top: 11,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  text9: {
    width: 107,
  },
  illustrationWavyHairWoman: {
    height: "79.76%",
    width: "29.31%",
    top: "9.38%",
    right: "66.62%",
    bottom: "10.87%",
    left: "4.07%",
  },
  groupContainer: {
    top: 178,
    left: 0,
  },
  illustrationCurlyHair: {
    height: "22.42%",
    width: "25.58%",
    top: "2.07%",
    right: "68.6%",
    bottom: "75.52%",
    left: "5.81%",
  },
  avatarsChatScreen: {
    top: 257,
    left: 22,
  },
  avatarsChatScreen1: {
    top: 515,
    left: 19,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#212121",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
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
    fontWeight: "600",
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
    height: 44,
    top: 0,
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
  text16: {
    top: 197,
  },
  text17: {
    top: 290,
  },
  text18: {
    top: 548,
  },
  text19: {
    top: 383,
  },
  text20: {
    top: 641,
  },
  text21: {
    top: 476,
  },
  text22: {
    top: 734,
  },
  home: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral10,
  },
});

export default Home3;
