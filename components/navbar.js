import { Flex, Box, Button } from '@chakra-ui/react'
import styles from "../styles/Navbar.module.css"

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
    <Flex px={4} align={'center'} height={'6%'} bg={'MenuText'}>
      <Button m={2} background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToHome}>Home</Button>
      <Button m={2} ml={'auto'} background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToAboutUs}>About Us</Button>
      <Button m={2} background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToContactUs}>Contact Us</Button>

    </Flex>
  )
}
