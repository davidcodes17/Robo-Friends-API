import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import Details from "../components/Details";

const Header = () => {
  return (
    <Flex justifyContent={"space-between"}>
      <Image src="/Logo.svg" />
      <Details name={localStorage.getItem("author")} />
    </Flex>
  );
};

export default Header;
