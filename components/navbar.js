import { Flex, Box, Button, Link, Text } from '@chakra-ui/react'
import styles from "../styles/Navbar.module.css"
import Image from 'next/image'
import fractalFantasyLogo from '../public/assets/fractalfantasy-logo.jpg';

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

  const connectWallet = () => {
    console.log("IMPLEMENT CONNECT WALLET FROM INDEX.JS")
  }

  const renderNotConnectedContainer = () => {
    return (<Button
      m={2} background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'}
      onClick={connectWallet}
      ml={'auto'}
    >
      Connect to Wallet
    </Button>
    )
  };

  return (
    <Flex px={4} align={'center'} height={'6%'} bg={'MenuText'}>
      <Link display={'flex'} gap={'.5rem'} alignItems={'center'} onClick={redirectToHome} >
        <Image m={2} alt='logo' src={fractalFantasyLogo} height={30} width={30} />
        <Text color={'white'} fontWeight='bold' fontSize={'1.25rem'} > Fractal Fantasy</Text>
      </Link>
      {renderNotConnectedContainer()}
      <Button m={2} background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToAboutUs}>About Us</Button>
      <Button m={2} background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToContactUs}>Contact Us</Button>

    </Flex>
  )
}
