import React from "react";
import { View } from "react-native";

// COMPONENTs
import { Container } from "../../components";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <Container footer={<SocialLogin />}>
      <View />
    </Container>
  );
};

export default Login;
