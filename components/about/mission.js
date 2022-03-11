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
                Proof of History, the basis for the Solana network,
                is a sequence of computation that can provide a way
                to cryptographically verify passage of time between
                two events. It uses a cryptographically secure function
                written so that output cannot be predicted from the input,
                and must be completely executed to generate the output.
            </Box>

            <Box>
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



/*             <ui>
<ol><a href="">ProductOwner</a></ol>
<ol><a href="">ProjectManager</a></ol>
<ol><a href="">Backend (Solana) & FrontEnd (Nextjs) Developers</a></ol>
<ol><a href="">GameEngineers</a></ol>
</ui>
*/