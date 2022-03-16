import { Flex, Box, Button, Link, Text, ButtonGroup } from '@chakra-ui/react'
import styles from "../styles/Navbar.module.css"
import Image from 'next/image'
import fractalFantasyLogo from '../public/assets/fractalfantasy-logo.jpg';
import { useState } from 'react'
import { useRouter } from 'next/router'
import { handleNftAuthentication } from '../scripts/nftAuthentication'
let ownerNfts = []
export default function Navbar() {
  const router = useRouter()
  const [walletAddress, setWalletAddress] = useState(null);
  const [authComplete, setAuthComplete] = useState(false);
  //wil be stored in db in future
  let blueFractalAddr = ['EqVFJjLMT8ZbiURXbi9t2UCrw3UmHRxULvTDtgLqzgba', 'harrypksNFT']

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


  const connectWallet = async () => {
    const { solana } = window;

    try {
      if (solana) {
        //provider = solana;
        const response = await solana.connect();
        console.log('Connected with Public Key:', response.publicKey.toString());
        setWalletAddress(response.publicKey.toString());
        console.log('nftAuth==' + handleNftAuthentication)
        ownerNfts = await handleNftAuthentication()
        validate(ownerNfts)
      } else {
        console.log('No wallet, download wallet');
        alert('Missing "Phantom" wallet, Download phantom wallet and try again')
      }
    } catch (error) {
      console.log('No wallet found exception');
      console.error(error);
    }
  };
  function validate(ownerNfts) {
    console.log('validatingNFT token')

    if (blueFractalAddr.some(r => ownerNfts.includes(r))) {
      setAuthComplete(true);
      redirectToGameDownload();
    } else {
      redirectToGetFractals();
    }
  }
  function redirectToGameDownload() {
    console.log('authComplete' + authComplete)
    if (authComplete) {
      console.log('redirect to gotoGameDownload page')
      router.push('./gotoGameDownload')
    } else {
      console.log('auth failed, No fractals, contact fractal Fantasy Team')
      router.push('./getFractals')
    }


  }
  function redirectToGetWallet() {
    console.log('redirect to GetWallet page')
    router.push('./getWallet')

  }
  function redirectToGetFractals() {
    console.log('redirect to GetWallet page')
    router.push('./getFractals')

  }
  const renderNotConnectedContainer = () => {
    return (
      <Button
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
      <ButtonGroup ml={'auto'}>
        {renderNotConnectedContainer()}

        <Button m={2} background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToAboutUs} ml={'auto'}>About Us</Button>
        <Button m={2} background={'-webkit-linear-gradient(right, #ff8867, #ff52ff)'} onClick={redirectToContactUs}>Contact Us</Button>
      </ButtonGroup>


    </Flex>
  )
}