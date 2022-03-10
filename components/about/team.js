import React from 'react'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'

// COMPONENTS
import Member from './member'

export default function Team() {
    let m1 = {
        name: "Josh McCown",
        role: "Chief Executive Officer",
        img: "https://bit.ly/dan-abramov"
    }

    let m2 = {
        name: "Ryna Florence",
        role: "Chief Operating Officer",
        img: "https://bit.ly/ryan-florence"
    }
    let m3 = {
        name: "George Cooper",
        role: "Cheif Technology Officer",
        img: "https://bit.ly/kent-c-dodds"
    }
    let members = [
        m1, m2, m3, m1, m2, m3, m1, m2, m3,
    ]
    return (


        <Flex width={{ base: '90%', md: '60%' }} flexDir={'column'} gap={4}>
            <Box fontSize={'2rem'}>
                Our Team
            </Box>
            <Grid templateRows='repeat(3 1fr)'
                templateColumns='repeat(3, 1fr)' gap={4}>
                {members.map((member) => <Member key={Math.random()} memberInfo={member} />)}

            </Grid>
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