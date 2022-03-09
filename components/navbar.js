import { Flex, Box, Button } from '@chakra-ui/react'

import { useRouter } from 'next/router'
export default function Navbar() {
    const router = useRouter()
    function redirectToAboutUs() {
        console.log('hit redirect')
        router.push('./aboutUs')

    }
    function redirectToHome() {
        console.log('hit redirect')
        router.push('./')

    }
    function redirectToContactUs() {
        console.log('hit redirect')
        router.push('./contactUs')

    }
    return (
        <Flex align={'center'} height={'7%'} bg={'MenuText'}>
            <Button margin={4} background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToHome}>Home</Button>
            <Button margin={4} background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToAboutUs}>About Us</Button>
            <Button margin={4} background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToContactUs}>Contact Us</Button>
        </Flex>
    )
}
