import { Image, View, StyleSheet } from "react-native";
import { Container } from "../../components/Container/Style";
import React from "react";

export default function Index() {
  return (
    <Container bgColor={'49B3BA'}>
      <Image source={require("../../assets/VitalHub_Logo 2.png")} />
    </Container>
  );
};
