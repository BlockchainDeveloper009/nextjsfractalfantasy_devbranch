import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'

export default function gotoGameDownload() {
    let downloadUrl = 'https://drive.google.com/file/d/1Rp7d2P3r8sl_tE6iM8szT1g57o1issoV/view?usp=sharing'
  return (
    <div>

        <Flex px={'4'} align={'center'} height={'6vh'} bg={'MenuText'}>
            <Button background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={downloadUrl}>Download your Game</Button>
        
        </Flex>

    </div>
  )
}
