import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
export default function GotoGameDownload() {

  const router = useRouter();
  function redirectToGameDownloadPage() {
    let downloadUrl = 'https://drive.google.com/file/d/1Rp7d2P3r8sl_tE6iM8szT1g57o1issoV/view?usp=sharing'
    console.log('redirect to ' + downloadUrl)
    router.push(downloadUrl)
  }
  return (
    <div>

      <Flex px={'4'} flexDir='column' justify={'center'} align={'center'} height={'80vh'} bg={'MenuText'}>
        <Button background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'} onClick={redirectToGameDownloadPage}>Download your Game</Button>

      </Flex>

    </div>
  )
}
