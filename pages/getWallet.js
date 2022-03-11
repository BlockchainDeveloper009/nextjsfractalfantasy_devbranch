import React from 'react'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
export default function getWallet() {
    phantomWalletUrl = 'https://phantom.app/'
  return (
    <div>
         <Flex px={'4'} align={'center'} height={'6vh'} bg={'MenuText'}>
            <Button background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={phantomWalletUrl}>Download phantom Wallet</Button>
        </Flex>
        
    </div>
  )
}


