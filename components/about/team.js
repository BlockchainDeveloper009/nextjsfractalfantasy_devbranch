import React from 'react'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'

// COMPONENTS
import Member from './member'

export default function Team() {
    let m1 = {
        name: "Arun Nadarasa",
        role: "Founder",
        img: "../pages/assets/teamImages/Arun_Nadarasa.jpeg"
    }

    let m2 = {
        name: "Harish G Krishnamurthy",
        role: "Chief Technology Officer & Architect",
        img: "https://bit.ly/ryan-florence"
    }
    let m3 = {
        name: "Rudresh ",
        role: "Chief Creation Officer",
        img: "https://bit.ly/kent-c-dodds"
    }
    let m4 = {
        name: "Steve ",
        role: "Web Developer",
        img: "https://bit.ly/kent-c-dodds"
    }
    let m5 = {
        name: "Jebin Rohit",
        role: "Game Designer",
        img: "https://bit.ly/kent-c-dodds"
    }
    let m6 = {
        name: "Dejan Bukovic",
        role: "Project Manager",
        img: "https://bit.ly/kent-c-dodds"
    }

    let members = [
        m1, m2, m3, m4, m5, m6
    ]
    return (


        <Flex width={{ base: '90%', md: '60%' }} flexDir={'column'} gap={4}>
            <Box fontSize={'2rem'}>
                Our Team
            </Box>
            <Grid templateRows='repeat(3 1fr)'
                templateColumns='repeat(3, 1fr)' gap={4} mb={8}>
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