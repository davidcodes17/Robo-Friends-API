import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import Card from "../components/Card";
import { robots } from "../config/robots";

const HomePage = () => {
  const [robot, setRobot] = useState([]);
  const [search, setSearch] = useState("");

  const colors = [
    "#4B0596",
    "#9F45B0",
    "#F553DF",
    "#3D201E",
    "#05070D",
    "#7987AA",
  ];
  const generateColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRobot(data);
      });
  }, []);
  const filteredUsers = robot.filter(user =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Box p={10}>
      <Heading textAlign={"center"} fontSize={{lg : 50,md : 40, sm  :25,base : 20}} className="header">
        ROBOFRIENDS
      </Heading>
      <Flex justifyContent={"center"}>
        <SearchInput
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Flex>
      <Grid
        my={10}
        justifyContent={"center"}
        gridTemplateColumns={{lg : "1fr 1fr 1fr 1fr", md :"1fr 1fr 1fr", sm :"1fr 1fr",base  : "1fr"}}
        gridGap={"40px"}
      >
        {filteredUsers.map((user,key) => (
            <Card color={generateColor} name={user.username} email={user.email} id={user.id} key={key} />
      ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
