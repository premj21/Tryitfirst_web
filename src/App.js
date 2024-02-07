import { Box, Image, Avatar } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import logo from "./assets/TryItFirst.png";
function App() {
  return (
    <>
      <Box
        height={{ base: "10vh", md: "10vh", lg: "10vh" }}
        width={"100vw"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={"0px 5%"}
        display={"flex"}
      >
        <Box>
          <Image src={logo} alt="image" w={"30%"} />
        </Box>
        <div>
          <Avatar
            w={{ base: "2rem", md: "3rem", lg: "3.5rem" }}
            h={{ base: "2rem", md: "3rem", lg: "3.5rem" }}
            src="https://bit.ly/broken-link"
          />
        </div>
      </Box>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
