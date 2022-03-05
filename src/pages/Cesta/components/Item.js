import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../components/Texto";

export default function Item({ item: { imagem, nome } }) {
  return (
    <View style={styles.item}>
      <Image source={imagem} style={styles.imagem} />
      <Texto style={styles.texto}>{nome}</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    marginHorizontal: 16,
    paddingVertical: 16,
  },
  imagem: {
    width: 46,
    height: 46,
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 17,
    lineHeight: 26,
    color: "#464646",
  },
});
