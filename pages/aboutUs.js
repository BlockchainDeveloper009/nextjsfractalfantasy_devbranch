import React from 'react'
import { Flex, Box } from '@chakra-ui/react'

// COMPONENTS
import Roadmap from '../components/about/roadmap'
import Team from '../components/about/team'
import Mission from '../components/about/mission'



export default function aboutUs() {
  return (
    <html>
      <header>
        <title>Meet Fractal Fantasy Team</title>
        <meta name="description" content="Product Owner" />
      </header>
      <main>
        <Flex mt={'2rem'} gap={"2rem"} flexDir={'column'} align={'center'}>
          <Box width={{ base: '90%', md: '60%' }} fontSize={'4rem'}>
            About Us
          </Box>
          <Mission />
          <Roadmap />
          <Team />
        </Flex>
      </main>
    </html>
  )
}


// https://icobench.com/ico/solana

/*  TODO: 
1 what is our mission
2.  road map
3. the team
*/