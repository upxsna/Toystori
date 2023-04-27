import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
  StatusBar,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home8 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector6.png")}
      />
      <Text style={[styles.newUploads, styles.newUploadsTypo]}>
        New uploads
      </Text>
      <Text style={[styles.trendingToys, styles.newUploadsTypo]}>
        Trending Toys
      </Text>
      <Text style={[styles.shopReccomends, styles.newUploadsTypo]}>
        Shop reccomends
      </Text>
      <Image
        style={[styles.homeChild, styles.homeLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-326.png")}
      />
      <Image
        style={[styles.homeItem, styles.homeLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-329.png")}
      />
      <Image
        style={[styles.homeInner, styles.homeLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-342.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.homeLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-327.png")}
      />
      <Pressable
        style={[styles.toystoryWoody, styles.homeLayout1]}
        onPress={() => navigation.navigate("ProductPage")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-330.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeChild1, styles.homeChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-343.png")}
      />
      <Image
        style={[styles.homeChild2, styles.homeChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-328.png")}
      />
      <Image
        style={[styles.homeChild3, styles.homeChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-331.png")}
      />
      <Image
        style={[styles.homeChild4, styles.homeLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-341.png")}
      />
      <View style={styles.homeScreenSearchBarWrapper}>
        <RNPTextInput
          style={styles.homeScreenSearchBar}
          placeholder="Type something"
          label="Label"
          mode="flat"
          theme={{ colors: { text: "#94a3b8", background: "#fff" } }}
        />
      </View>
      <View style={[styles.homeNavBarWrapper, styles.homePosition]}>
        <View style={[styles.homeNavBar, styles.homePosition]}>
          <StatusBar style={styles.homePosition} barStyle="default" />
        </View>
      </View>
      <View style={styles.navigationtopNavWrapper}>
        <View style={[styles.navigationtopNav, styles.iconLayout]}>
          <Image
            style={[styles.outlinebellIcon, styles.favoriteLayout]}
            resizeMode="cover"
            source={require("../assets/outlinebell.png")}
          />
          <Image
            style={[styles.iconchevronleft, styles.favoriteLayout]}
            resizeMode="cover"
            source={require("../assets/iconpersondefault.png")}
          />
          <View
            style={[
              styles.outlinelocationMarkerParent,
              styles.favoritePosition,
            ]}
          >
            <Image
              style={styles.outlinelocationMarkerIcon}
              resizeMode="cover"
              source={require("../assets/outlinelocationmarker.png")}
            />
            <Text style={styles.ulDromroe}>UL - Dromroe Student Village</Text>
          </View>
          <Pressable
            style={[styles.favorite, styles.favoritePosition]}
            onPress={() => navigation.navigate("Favourites")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/favorite2.png")}
            />
          </Pressable>
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
  newUploadsTypo: {
    color: Color.neutral70,
    fontFamily: FontFamily.textLMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.headingS_size,
    textAlign: "center",
    left: 16,
    position: "absolute",
  },
  homeLayout1: {
    height: 104,
    width: 104,
    left: 16,
    position: "absolute",
  },
  homeLayout: {
    left: 137,
    height: 104,
    width: 104,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  homeChildLayout: {
    left: 254,
    height: 104,
    width: 104,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  homePosition: {
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  favoriteLayout: {
    width: 24,
    height: 24,
  },
  favoritePosition: {
    top: 14,
    position: "absolute",
  },
  vectorIcon: {
    height: "35.92%",
    width: "120.53%",
    top: "13.61%",
    right: "-20.53%",
    bottom: "50.47%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  newUploads: {
    top: 209,
    textAlign: "center",
  },
  trendingToys: {
    top: 386,
    textAlign: "center",
  },
  shopReccomends: {
    top: 562,
    textAlign: "center",
  },
  homeChild: {
    borderRadius: Border.br_base,
    width: 104,
    top: 440,
  },
  homeItem: {
    top: 616,
    borderRadius: Border.br_base,
    width: 104,
  },
  homeInner: {
    top: 264,
  },
  rectangleIcon: {
    top: 440,
  },
  toystoryWoody: {
    top: 264,
  },
  homeChild1: {
    top: 264,
  },
  homeChild2: {
    top: 440,
  },
  homeChild3: {
    top: 616,
  },
  homeChild4: {
    top: 616,
  },
  homeScreenSearchBar: {
    borderRadius: Border.br_5xl,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
    top: 0,
    height: 36,
    width: 280,
    position: "absolute",
    backgroundColor: Color.neutral10,
  },
  homeScreenSearchBarWrapper: {
    top: 116,
    left: 47,
    height: 36,
    width: 280,
    position: "absolute",
  },
  homeNavBar: {
    width: 359,
  },
  homeNavBarWrapper: {
    width: 375,
  },
  outlinebellIcon: {
    right: 16,
    top: 12,
    width: 24,
    position: "absolute",
  },
  iconchevronleft: {
    right: 52,
    opacity: 0,
    top: 12,
    width: 24,
    position: "absolute",
  },
  outlinelocationMarkerIcon: {
    width: 20,
    height: 20,
  },
  ulDromroe: {
    fontSize: FontSize.textSMedium_size,
    lineHeight: 16,
    fontFamily: FontFamily.textMRegular,
    color: Color.neutral90,
    marginLeft: 8,
    textAlign: "center",
  },
  outlinelocationMarkerParent: {
    flexDirection: "row",
    alignItems: "center",
    left: 16,
    top: 14,
  },
  favorite: {
    left: 323,
    width: 24,
    height: 24,
  },
  navigationtopNav: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.neutral10,
  },
  navigationtopNavWrapper: {
    top: 44,
    left: 2,
    height: 48,
    width: 375,
    position: "absolute",
  },
  home: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.neutral10,
  },
});

export default Home8;
