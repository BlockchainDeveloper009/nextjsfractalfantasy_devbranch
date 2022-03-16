import React from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
export default function GetWallet() {
  const router = useRouter()
  function redirectToPhantomWebsite() {
    let phantomWalletUrl = 'https://phantom.app/'
    console.log('redirect to phantom page')
    router.push(phantomWalletUrl)
  }

  return (
    <div>
      <Flex px={'4'} flexDir='column' justify={'center'} align={'center'} height={'80vh'} bg={'MenuText'}>
        <Button background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToPhantomWebsite}>Download phantom Wallet</Button>
      </Flex>

    </div>
  )
}


