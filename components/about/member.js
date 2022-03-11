import React from 'react'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'


export default function Member({ memberInfo }) {
    let { name, role, img } = memberInfo;
    return (

        <GridItem border={'solid gray .05rem'}
            borderRadius=".25rem"
            display={'flex'} flexDir={'column'}
            alignItems={'center'} w='100%' h='16rem' >
            <Image
                borderRadius='full'
                boxSize='8rem'
                mt={'2rem'}

                src={img}
                alt={name}
            />
            <Text fontSize={'2rem'}>
                {name}
            </Text>
            <Text fontSize={'1rem'} color={'gray.500'}>
                {role}
            </Text>
        </GridItem>

    )
}



/*             <ui>
<ol><a href="">ProductOwner</a></ol>
<ol><a href="">ProjectManager</a></ol>
<ol><a href="">Backend (Solana) & FrontEnd (Nextjs) Developers</a></ol>
<ol><a href="">GameEngineers</a></ol>
</ui>
*/