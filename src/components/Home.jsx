import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import img from '../assets/1.png'
const Home = () => {
  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
        <Image src={img} w={"30%"} p="5" filter={"grayscale(100%) "}  />
        <Text fontSize={"2rem"} fontWeight={'800'} borderBottom={'2px solid'}>Crypto-Hub</Text>
        
      </Box>

    </>
  )
}

export default Home