import { Flex,Box, Button } from '@chakra-ui/react'
import React from 'react'

export default function getFractals() {
    let fractalUrl = 'https://nft.fractal.is/'
  return (
    <div>
        
        <Flex px={'4'} align={'center'} > 
        <Box width={{ base: '90%', md: '60%' }} fontSize={'4rem'}>
         You need fractals to downlaod this game!!!
          </Box>
        </Flex>
        <Flex px={'4'} align={'center'} height={'6vh'} bg={'MenuText'}>
            <Button background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={fractalUrl}>Click here to buy fractals</Button>
        </Flex>
    </div>
  )
}
