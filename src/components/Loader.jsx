import React from 'react'
import { VStack, Box, Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <>
        <VStack h='90vh' justifyContent={'center'}>
            <Box transform={'scale(3)'}>
                <Spinner thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='red.500'
                    size='xl'/>
            </Box>
        </VStack>
    </>
  )
}

export default Loader