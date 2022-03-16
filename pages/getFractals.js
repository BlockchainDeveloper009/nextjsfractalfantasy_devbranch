import { Flex,Box, Button,Link } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'

export default function getFractals() {
  const router = useRouter()
  function redirectToFractalsPage() {
    let fractalUrl = 'https://nft.fractal.is/'
    console.log('hit redirect')
    router.push(fractalUrl)

  }
    
  return (
    <div>
        
        <Flex px={'4'} flexDir='column' justify={'center'} align={'center'} height={'80vh'} bg={'MenuText'} > 
        <Box width={{ base: '90%', md: '70%' }} fontSize={'4rem'} color={'red'}>
        Oops! NFT Authentication Failed!
        </Box>
        <Box width={{ base: '90%', md: '70%' }} fontSize={'4rem'} color={'blue'}>
        Please buy blue fractals Or 
        </Box>
        <Box width={{ base: '90%', md: '70%' }} fontSize={'4rem'} color={'yellow'}>
         Contact Admin on Twitter (@fractalfantasy1) to mint custom Avatar NFT to download Fractal Fantasy 1.0 !!!
        </Box>
        </Flex>
        <Flex px={'4'} align={'center'} height={'6vh'} bg={'MenuText'}>
            <Button background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToFractalsPage}>Click here to buy fractals</Button>
        </Flex>
    </div>
  )
}
