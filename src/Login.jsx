import React, { useState } from "react";
import { Box, Input, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onButtonClick = (e) => {
    e.preventDefault();
    if (email === "admin123@gmail.com" && password === "admin@123") {
      localStorage.setItem("token", "admin@123");
      navigate("/products");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <Box
        w="100vw"
        h="80vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={{ base: "90%", md: "65%", lg: "35%" }}
          h="40%"
          gap={"20px"}
          border={"none"}
          borderRadius={"30px"}
          boxShadow={"0px 5px 20px rgba(0,0,0,0.110)"}
          p="2%"
        >
          <Text textAlign={"center"} fontSize={"1.4rem"} fontWeight={"600"}>
            Login
          </Text>
          <Input
            type="email"
            placeholder="Enter your Email :"
            value={email}
            border={"none"}
            borderRadius={"20px"}
            _focus={{
              boxShadow: "0px 5px 20px rgba(0,0,0,0.110)",
              border: "none",
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password :"
            value={password}
            border={"none"}
            borderRadius={"20px"}
            _focus={{
              boxShadow: "0px 5px 20px rgba(0,0,0,0.110)",
              border: "none",
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={onButtonClick}>Login</Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
