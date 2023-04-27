import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const TermsCondition1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.termsCondition}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.byUsingOurServicesYouAgrWrapper}>
        <Text style={[styles.byUsingOurContainer, styles.digiDonorTypo]}>
          <Text style={styles.digiDonorLayout}>
            <Text
              style={styles.byUsingOur}
            >{`By using our services, you agree to be bound by the following terms and conditions:
`}</Text>
            <Text style={styles.blankLine}> </Text>
          </Text>
          <Text
            style={styles.acceptanceOfTerms}
          >{`Acceptance of Terms By using Toystori, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions, as well as our privacy policy.
Registration To use Toystori services, you must register and provide accurate and complete information about yourself. You agree to keep your account information up to date and secure.
Services Toystori provides laundry and dry cleaning services through our mobile application. Our services include pick-up and delivery, as well as the cleaning of garments and other textiles. We reserve the right to refuse service at any time.
Payments All payments for Toystori services are made through our mobile application. You agree to pay the full amount for all services rendered, and you authorize us to charge your chosen payment method.
Delivery Toystori will deliver your cleaned garments and textiles to the address you provided during registration. We are not responsible for any damages or loss incurred during delivery.
Liability Toydtori is not liable for any damages or loss incurred as a result of the use of our services. We are not responsible for any damage to garments or textiles that are not suitable for our cleaning process.
Intellectual Property All intellectual property rights related to Cleanco, including the mobile application and its content, are owned by Cleanco. You agree not to copy, modify, or distribute any of our intellectual property without our prior written consent.
Termination Cleanco may terminate your account at any time, for any reason, without notice. You may also terminate your account at any time by contacting us.
Governing Law These terms and conditions are governed by and construed in accordance with the laws of the state in which Cleanco is registered.
Changes to Terms and Conditions Cleanco reserves the right to modify these terms and conditions at any time. We will notify you of any changes by posting the updated terms and conditions on our mobile application.

By using Cleanco, you agree to these terms and conditions. If you do not agree, please do not use our services.




`}</Text>
        </Text>
      </View>
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
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.navigationtopNav, styles.navigationtopNavPosition]}>
        <View style={[styles.navigationtopNavChild, styles.iconLayout]} />
        <Image
          style={[styles.iconpersondefault, styles.iconchevronleftLayout]}
          resizeMode="cover"
          source={require("../assets/iconpersondefault3.png")}
        />
        <Image
          style={[styles.iconchevronleft, styles.iconchevronleftLayout]}
          resizeMode="cover"
          source={require("../assets/iconpersondefault.png")}
        />
        <Text
          style={[styles.digiDonor, styles.timeFlexBox]}
        >{`Terms & Conditions`}</Text>
        <Pressable
          style={[styles.solidarrowSmLeft, styles.iconchevronleftLayout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/solidarrowsmleft.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconPosition: {
    left: "0%",
    position: "absolute",
  },
  digiDonorTypo: {
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  navigationtopNavPosition: {
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.neutral20,
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.colorGrey600,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  iconchevronleftLayout: {
    height: 24,
    top: 12,
    width: 24,
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
  byUsingOur: {
    color: Color.chocolate,
  },
  blankLine: {
    color: Color.black,
  },
  digiDonorLayout: {
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.textLMedium_size,
  },
  acceptanceOfTerms: {
    fontSize: FontSize.textMRegular_size,
    letterSpacing: -0.1,
    color: Color.neutral90,
    lineHeight: 20,
  },
  byUsingOurContainer: {
    textAlign: "left",
    width: 311,
  },
  byUsingOurServicesYouAgrWrapper: {
    top: 92,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutral10,
    height: 688,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xl,
    left: 16,
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
    left: 0,
    textAlign: "center",
    color: Color.colorGrey600,
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
    top: 0,
  },
  navigationtopNavChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.neutral20,
    height: "100%",
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
    marginLeft: -78.5,
    top: "25%",
    left: "50%",
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.textLMedium_size,
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
  },
  icon: {
    overflow: "hidden",
  },
  solidarrowSmLeft: {
    left: 16,
  },
  navigationtopNav: {
    top: 44,
    height: 48,
  },
  termsCondition: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral20,
  },
});

export default TermsCondition1;
