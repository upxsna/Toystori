import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameScreen1 = () => {
  return (
    <View style={styles.weAreSadToSeeYouGoParent}>
      <Text style={styles.weAreSad}>We are sad to see you go!</Text>
      <Text style={styles.continueBelowTo}>
        Continue below to sign out of the app
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weAreSad: {
    fontSize: FontSize.headingS_size,
    letterSpacing: -0.3,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: FontFamily.textLMedium,
    color: Color.neutral100,
    textAlign: "center",
  },
  continueBelowTo: {
    fontSize: FontSize.textLMedium_size,
    letterSpacing: -0.2,
    lineHeight: 24,
    fontFamily: FontFamily.textMRegular,
    color: Color.neutral90,
    marginTop: 7,
    textAlign: "center",
  },
  weAreSadToSeeYouGoParent: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default FrameScreen1;
