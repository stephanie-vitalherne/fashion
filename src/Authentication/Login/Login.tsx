import React from "react";
import { View } from "react-native";

// COMPONENTs
import { Container, Button, Text, Box } from "../../components";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert("Pressed")}>
          <Box flexDirection="row">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up Here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <View />
    </Container>
  );
};

export default Login;
