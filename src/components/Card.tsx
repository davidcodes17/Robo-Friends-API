import { Box, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const Card = ({color,id,name,email}) => {
  return (
    <Box bg={color} boxShadow={'0px 0px 0px #fff'} borderRadius={40} as={motion.div} whileHover={{translateY : '-10px',boxShadow : '10px -10px 0px #fff'}} p={5} textAlign={'center'} cursor={'pointer'}>
        <Image src={`https://robohash.org/${id}?200x200`} />
        <Text fontWeight={800}>{name}</Text>
        <Text>{email}</Text>
    </Box>
  )
}

export default Card