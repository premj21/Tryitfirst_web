import React, { useState } from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";

const Modal = ({ img, name, setSt }) => {
  const [pdata, setPdata] = useState([]);
  const handler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/proxy/${name}`, {
        method: "GET",
      });
      const data = await response.json();
      setPdata(data.message);
      console.log(pdata);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        w="100vw"
        h="90vh"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"absolute"}
        bg="white"
        boxShadow={"0px 5px 20px rgba(0,0,0,0.140)"}
        zIndex={"2"}
      >
        <Box
          w="50%"
          h="100%"
          p="1% 10%"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image w="90%" h="80%" src={img} alt="image" />
        </Box>
        <Box
          w="40%"
          h="100%"
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          <Text fontSize={"2rem"} fontWeight={"600"}>
            {name}
          </Text>
          <Text fontSize={"1rem"} fontWeight={"600"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, amet.
          </Text>
          <Text fontSize={"2rem"} fontWeight={"600"}>
            $90
          </Text>
          <Button onClick={handler}>Slot Book</Button>
          {pdata && pdata.length > 0 && (
            <Text fontSize={"2rem"} fontWeight={"600"} m="3rem 0">
              Available slots
            </Text>
          )}
          {pdata &&
            pdata.map((el, index) =>
              el.includes("No") ? null : (
                <Text
                  mb={"1rem"}
                  fontWeight={"300"}
                  key={index}
                  fontSize={"1rem"}
                >
                  {el}
                </Text>
              )
            )}
        </Box>
      </Box>
      <Box zIndex={"5"} position={"absolute"} top={"90px"} right={"40px"}>
        <Button onClick={() => setSt(false)} colorScheme={"blue"}>
          X
        </Button>
      </Box>
    </>
  );
};

export default Modal;
