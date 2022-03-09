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
    <Flex px={'4'} align={'center'} height={'6vh'} bg={'MenuText'}>
      <Button background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToHome}>Home</Button>
      <Button background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToAboutUs}>About Us</Button>
      <Button background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToContactUs}>Contact Us</Button>

    </Flex>
  )
}
