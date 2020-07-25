import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import { Text } from "../../components";
interface SlideProps {
  title: string;
  right?: boolean;
}

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

const Slide = ({ title, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
});

export default Slide;
