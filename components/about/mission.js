import React from 'react'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'

// COMPONENTS
import Member from './member'

export default function Mission() {

    return (
        <Flex width={{ base: '90%', md: '60%' }} flexDir={'column'} gap={4}>
            <Box fontSize={'2rem'}>
                Our Mission
            </Box>

            <Box>
            “To bring Social Prescribing to the global population via gamification.”
            Fractal Fantasy is building on the concept of Play-to-Earn (P2E) & 
            Move-to-Earn (M2E) games to Fulfill-to-Earn (F2E) games using Maslow's hierarchy of needs.

            </Box>

            <Box>
            By playing the game, it will make you more fulfilled in life which will improve your health and wellbeing as 
            well rewarding you with tokens. We strongly believe F2E games will soon be part of the Fractal games portfolio to 
            improve the health & well-being of gamers. Currently, there are only 1-2 million P2E gamers and 2.7 billion gamers 
            worldwide. 

            </Box>

            <Box>
            Currently, there are only 1-2 million P2E gamers and 2.7 billion gamers worldwide. 
            We can increase the uptake:
                ⦁	by having Healthcare Professionals (HCPs) prescribing F2E games to their patients (similarly to 
                    Digital Therapeutics – DTx)
                ⦁	by having patients self-refer themselves to using the game 
            </Box>
        </Flex >

    )
}



