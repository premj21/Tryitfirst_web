import React, { useEffect, useState } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import apple from "./assets/Iphone.jpg";
import Samsung from "./assets/Samsung s22.jpg";
import iphone from "./assets/iphone-15.jpg";
import smsg from "./assets/Samsung s24.jpg";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal.jsx";

const Products = () => {
  const navigate = useNavigate();
  const [st, setSt] = useState({
    name: "",
    img: "",
  });
  const data = [
    {
      name: "Apple 15",
      img: apple,
    },
    {
      name: "Samsung S22",
      img: Samsung,
    },
    {
      name: "Apple 15 Plus",
      img: iphone,
    },
    {
      name: "Samsung S24",
      img: smsg,
    },
  ];

  useEffect(() => {
    const items = localStorage.getItem("token");
    if (!items) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      {st.name ? <Modal img={st.img} name={st.name} setSt={setSt} /> : ""}
      <Box w="100vw" h="90vh" p={"0px 5%"}>
        <Text fontSize="1.7rem" fontWeight={"600"} m="3rem 0">
          Products
        </Text>
        <Box
          w="100%"
          h="100%"
          display={"flex"}
          flexWrap={"wrap"}
          transition="width 0.3s ease"
          alignItems={{ base: "center", md: "flex-start", lg: "flex-start" }}
          justifyContent={{
            base: "center",
            md: "space-between",
            lg: "space-between",
          }}
          gap={{ base: "30px", md: "0", lg: "0" }}
        >
          {data.map((el, index) => (
            <>
              <Box
                key={index}
                h="50%"
                minW={{ base: "80%", md: "45%", lg: "20%" }}
                mb="2rem"
                display={"flex"}
                flexDir={"column"}
                boxShadow={"0px 5px 20px rgba(0,0,0,0.130)"}
                _hover={{ transform: "scale(1.1)" }}
              >
                <Image
                  borderTopRadius={"20px"}
                  w="100%"
                  h="80%"
                  src={el.img}
                  alt="loading"
                />
                <Text
                  textAlign={"center"}
                  fontSize={"1.5rem"}
                  fontWeight={"600"}
                  letterSpacing={"4px"}
                  fontFamily={'"Audiowide",cursive'}
                  textShadow="-0.01em -0.01em 0.01em #000"
                  m="1rem 0"
                >
                  {el.name}
                </Text>
                <Button
                  variant={"solid"}
                  colorScheme="blue"
                  fontWeight={"600"}
                  fontFamily={'"Audiowide",cursive'}
                  textShadow="-0.01em -0.01em 0.01em #000"
                  onClick={() => setSt({ name: el.name, img: el.img })}
                >
                  Trt Now
                </Button>
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Products;
