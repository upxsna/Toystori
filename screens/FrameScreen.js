import * as React from "react";
import { StyleSheet, View } from "react-native";

const FrameScreen = () => {
  return <View style={styles.frameView} />;
};

const styles = StyleSheet.create({
  frameView: {
    flex: 1,
    width: "100%",
    height: 675,
  },
});

export default FrameScreen;
