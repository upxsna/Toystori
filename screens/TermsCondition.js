import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const TermsCondition = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.termsCondition}>
      <Image
        style={[styles.vectorIcon, styles.textPosition]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View
        style={[
          styles.itemwallettransactions,
          styles.itemwallettransactionsLayout,
        ]}
      >
        <View style={styles.itemwallettransactionsChild} />
        <View
          style={[styles.mastercardParent, styles.mastercardParentPosition]}
        >
          <Text style={[styles.mastercard, styles.textTypo]}>Mastercard</Text>
          <Text style={[styles.text, styles.textTypo]}>
            •••• •••• •••• 1456
          </Text>
        </View>
        <Image
          style={[
            styles.itemwallettransactionsItem,
            styles.mastercardParentPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/frame-216.png")}
        />
        <View style={styles.itemwallettransactionsInner} />
        <Image
          style={styles.iconcheckboxempty}
          resizeMode="cover"
          source={require("../assets/iconcheckboxempty.png")}
        />
      </View>
      <View
        style={[
          styles.itemwallettransactions1,
          styles.itemwallettransactionsLayout,
        ]}
      >
        <View style={styles.itemwallettransactionsChild} />
        <View
          style={[styles.mastercardParent, styles.mastercardParentPosition]}
        >
          <Text style={[styles.mastercard, styles.textTypo]}>Visa</Text>
          <Text style={[styles.text, styles.textTypo]}>
            •••• •••• •••• 1432
          </Text>
        </View>
        <Image
          style={[
            styles.itemwallettransactionsItem,
            styles.mastercardParentPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/frame-2161.png")}
        />
        <View style={styles.itemwallettransactionsInner} />
        <Image
          style={styles.iconcheckboxempty}
          resizeMode="cover"
          source={require("../assets/iconcheckboxempty.png")}
        />
      </View>
      <View
        style={[
          styles.itemwallettransactions2,
          styles.itemwallettransactionsLayout,
        ]}
      >
        <View style={styles.itemwallettransactionsChild} />
        <View
          style={[styles.mastercardParent, styles.mastercardParentPosition]}
        >
          <Text style={[styles.mastercard, styles.textTypo]}>Visa</Text>
          <Text style={[styles.text, styles.textTypo]}>
            •••• •••• •••• 1232
          </Text>
        </View>
        <Image
          style={[
            styles.itemwallettransactionsItem,
            styles.mastercardParentPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/frame-2162.png")}
        />
        <View style={styles.itemwallettransactionsInner} />
        <Image
          style={styles.iconcheckboxempty}
          resizeMode="cover"
          source={require("../assets/iconcheckboxfilled.png")}
        />
      </View>
      <View style={styles.buttontertiarylargeiconlef}>
        <Image
          style={styles.iconadddefault}
          resizeMode="cover"
          source={require("../assets/iconadddefault.png")}
        />
        <Text style={[styles.submit, styles.textTypo]}>Add New Card</Text>
      </View>
      <View style={[styles.header30014m, styles.header30014mLayout]}>
        <Text style={[styles.transactions, styles.textTypo]}>
          Saved payment methods
        </Text>
      </View>
      <View style={[styles.barsStatusBarIphoneL, styles.borderPosition]}>
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
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.navigationtopNav, styles.header30014mLayout]}>
        <View style={styles.itemwallettransactionsChild} />
        <Image
          style={[styles.iconpersondefault, styles.iconchevronleftPosition]}
          resizeMode="cover"
          source={require("../assets/iconpersondefault1.png")}
        />
        <Image
          style={[styles.iconchevronleft, styles.iconchevronleftPosition]}
          resizeMode="cover"
          source={require("../assets/iconpersondefault.png")}
        />
        <Text style={[styles.digiDonor, styles.timeFlexBox]}>
          Payment Methods
        </Text>
        <Pressable
          style={[styles.solidarrowSmLeft, styles.iconchevronleftPosition]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/solidarrowsmleft.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: "0%",
    position: "absolute",
  },
  itemwallettransactionsLayout: {
    height: 74,
    width: 375,
    left: 0,
    position: "absolute",
  },
  mastercardParentPosition: {
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontWeight: "500",
  },
  header30014mLayout: {
    width: 375,
    left: 0,
  },
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.colorGrey600,
    position: "absolute",
  },
  iconchevronleftPosition: {
    top: 12,
    height: 24,
    width: 24,
    position: "absolute",
  },
  vectorIcon: {
    height: "59.36%",
    width: "120.53%",
    top: "52.46%",
    right: "-20.53%",
    bottom: "-11.82%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  itemwallettransactionsChild: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.neutral10,
  },
  mastercard: {
    color: Color.neutral100,
    textAlign: "left",
    fontFamily: FontFamily.textLMedium,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.textLMedium_size,
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  text: {
    top: "60.87%",
    fontSize: FontSize.textSMedium_size,
    letterSpacing: 0.1,
    lineHeight: 18,
    fontFamily: FontFamily.textMedium600,
    color: Color.colorGrey400,
    left: "0%",
    position: "absolute",
  },
  mastercardParent: {
    marginTop: -23,
    left: 55,
    width: 83,
    height: 46,
  },
  itemwallettransactionsItem: {
    marginTop: -15,
    width: 30,
    height: 30,
    left: 16,
  },
  itemwallettransactionsInner: {
    height: "1.35%",
    width: "87.47%",
    top: "99.32%",
    right: "6.27%",
    bottom: "-0.68%",
    left: "6.27%",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  iconcheckboxempty: {
    marginTop: -12,
    left: 335,
    height: 24,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  itemwallettransactions: {
    top: 148,
  },
  itemwallettransactions1: {
    top: 222,
  },
  itemwallettransactions2: {
    top: 296,
  },
  iconadddefault: {
    width: 20,
    height: 20,
  },
  submit: {
    color: Color.chocolate,
    marginLeft: 4,
    fontFamily: FontFamily.textLMedium,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.textLMedium_size,
  },
  buttontertiarylargeiconlef: {
    top: 386,
    left: 204,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    padding: Padding.p_5xs,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.neutral10,
  },
  transactions: {
    fontSize: FontSize.textMRegular_size,
    letterSpacing: -0.1,
    lineHeight: 20,
    color: Color.neutral100,
    textAlign: "left",
    fontFamily: FontFamily.textLMedium,
  },
  header30014m: {
    top: 106,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#212121",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    borderStyle: "solid",
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
    lineHeight: 20,
    textAlign: "center",
    color: Color.colorGrey600,
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
    height: 44,
    width: 375,
    left: 0,
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
    marginLeft: -72.5,
    top: "25%",
    left: "50%",
    fontFamily: FontFamily.textLMedium,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.textLMedium_size,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorGrey600,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  solidarrowSmLeft: {
    left: 16,
  },
  navigationtopNav: {
    top: 44,
    height: 48,
    position: "absolute",
    backgroundColor: Color.neutral10,
  },
  termsCondition: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral10,
  },
});

export default TermsCondition;
