
import React from 'react'
import { Box, Flex } from '@chakra-ui/react'


export default function Roadmap() {
    return (


        <Flex width={{ base: '90%', md: '60%' }}  flexDir={'column'} gap={4}>
            <Box fontSize={'2rem'}>
                Our Roadmap
            </Box>
            <Box>
                Within the game, there will be a series of activities directly related to the 
                Social Determinants of Health (SDHs):
            </Box>

            <Box>
                ⦁	Income and social protection
                ⦁	Education
                ⦁	Unemployment and job insecurity
                ⦁	Working life conditions
                ⦁	Food insecurity
                ⦁	Housing, basic amenities and the environment
                ⦁	Early childhood development
                ⦁	Social inclusion and non-discrimination
                ⦁	Structural conflict
                ⦁	Access to affordable health services of decent quality
                ⦁	Digital inclusion 
            </Box>

            <Box>
                It will also introduce the role of a Social Prescribing Link Workers (SPLWs) as spiritual guide (Shiva) to help the gamer complete the activities. There will be a baseline score set by a series of questions at the beginning of playing the game and once again after completion. 

                Each activity will be developed with a specialised organisation like:
                    ⦁	a financial organisation for financial literacy
                    ⦁	a housing organisation for basic housing advice (with clear disclaimers)
                    ⦁	a mindfulness organisation for meditation practice

                Since our audience will be a global one, we will work towards different editions of the game to make it relevant for a specific country like India, Singapore and UK in regards to the housing and financial informations. 

            </Box>
        </Flex >

    )
}


// https://icobench.com/ico/solana

/*  TODO: 
1 what is our mission
2.  road map
3. the team
=======
import React from 'react'
import { Box, Flex } from '@chakra-ui/react'


export default function Roadmap() {
    return (


        <Flex width={{ base: '90%', md: '60%' }}  flexDir={'column'} gap={4}>
            <Box fontSize={'2rem'}>
                Our Roadmap
            </Box>
            <Box>
                R1: Talk about Game: 
                Proof of History, the basis for the Solana network,
                is a sequence of computation that can provide a way
                to cryptographically verify passage of time between
                two events. It uses a cryptographically secure function
                written so that output cannot be predicted from the input,
                and must be completely executed to generate the output.
            </Box>

            <Box>
                R2: Talk about Metaverse: 
                It  is possible to synchronize multiple Proof of History
                generators in the Solana network by mixing the sequence
                state from each generator to each other generator, and
                thus achieve horizontal scaling of the Proof of History
                generator. This scaling is done without sharding. The
                output of both generators is necessary to reconstruct
                the full order of events in the system.
            </Box>

            <Box>
                Similar to Google&apos;s TrueTime, which relies on synchronized
                atomic clocks for a trusted source of time and ordering,
                Solana has created a cryptographically secure and trustless
                time source--and built a blockchain around it. We call it
                Proof of History. By weaving this standardized timestamp
                into the blockchain, nodes in the network can verify the
                time and order of events without witnessing them directly.
                This drastically reduces messaging overhead and is one
                example of the many optimization capabilities that become
                available through Solana&apos;s Proof of History.
            </Box>
        </Flex >

    )
}


// https://icobench.com/ico/solana

/*  TODO: 
1 what is our mission
2.  road map
3. the team
>>>>>>> Stashed changes
*/