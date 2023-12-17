import { Flex, Input } from '@chakra-ui/react'
import { SearchFavorite1 } from 'iconsax-react'
import React from 'react'

const SearchInput = ({onChange}) => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} border={'2px solid #fff'} width={'fit-content'} px={3} borderRadius={20} my={5}>
        <Input onChange={onChange} width={350} placeholder='Search Robots...' border={'none'} />
        <SearchFavorite1 />
    </Flex>
  )
}

export default SearchInput