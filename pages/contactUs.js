import React from 'react'
import { Box, Flex, Link, Text } from "@chakra-ui/react";

// ICONS
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaMedium, FaTiktok, FaInstagramSquare } from 'react-icons/fa'

// STYLES
import styles from "../styles/Contact.module.css"

// LINKS

export default function contactUs() {
  return (
    <>
      <header>

        <title>Contact Fractal Fantasy Team</title>
        <meta name="description" content="Product Owner" />
      </header>
      <main >
        <Flex flexDir={'column'} justify="center" align={'center'}>
          <Flex p={16} flexDir={'column'} align='center' >
            <Text fontSize={'4rem'}>
              We&apos;d Love to Hear From You
            </Text>
            <Text color={'gray.500'} fontSize={'1rem'}>
              Our goal is to provide as much value to you as possible! We&apos;re ready to answer all questions possible.
            </Text>
          </Flex>
          <Flex p={8} flexDir={'column'} >
            <Text fontSize={'2rem'}>
              Feel Free to Contact Us on Any of The Following
            </Text>

          </Flex>

          <Flex mb={8} w={{ base: '90%', md: '60%' }} flexDir={'column'} align={'flex-start'} justify='start' >



            {/* SOCIAL LINK */}
            <Flex flexDir={'column'} justify={'center'} p={4}>
              <Text px='4' fontSize='1.25rem '>
                <BsTwitter className={styles.logo} />         Join Our  <Link color={'blue'} href={" https://twitter.com/fractalfantasy1"} target='_blank' rel='noreferrer'>Twitter</Link>
              </Text>
              <Text color={'gray.500'} fontSize={'1rem'} px="4" width={'100%'}>
                We host fun and exciting events each day
              </Text>
            </Flex>
            
            {/* SOCIAL LINK */}
            <Flex flexDir={'column'} justify={'center'} p={4}>
              <Text px='4' fontSize='1.25rem '>
                <FaInstagramSquare className={styles.logo} />      Join Our  <Link color={'blue'} href={"https://www.instagram.com/fractalfantasy1/"} target='_blank' rel='noreferrer'>Instagram</Link>
              </Text>
              <Text color={'gray.500'} fontSize={'1rem'} px="4" width={'100%'}>
                We host fun and exciting events each day
              </Text>
            </Flex>
            
            {/* SOCIAL LINK */}
            <Flex flexDir={'column'} justify={'center'} p={4}>
              <Text px='4' fontSize='1.25rem '>
                <FaTiktok className={styles.logo} />     Join Our  <Link color={'blue'} href={"https://www.tiktok.com/@fractalfantasy1"} target='_blank' rel='noreferrer'>TikTok</Link>
              </Text>
              <Text color={'gray.500'} fontSize={'1rem'} px="4" width={'100%'}>
                We host fun and exciting events each day
              </Text>
            </Flex>
          
            {/* SOCIAL LINK */}
            <Flex flexDir={'column'} justify={'center'} p={4}>
              <Text px='4' fontSize='1.25rem '>
                <FaMedium className={styles.logo} />  Join Our  <Link color={'blue'} href={"https://medium.com/@fractalfantasy"} target='_blank' rel='noreferrer'>Medium</Link>
              </Text>
              <Text color={'gray.500'} fontSize={'1rem'} px="4" width={'100%'}>
                We host fun and exciting events each day
              </Text>
            </Flex>
         
            {/* SOCIAL LINK */}
            <Flex flexDir={'column'} justify={'center'} p={4}>
              <Text px='4' fontSize='1.25rem '>
                <BsLinkedin className={styles.logo} />      Join Our  <Link color={'blue'} href={"https://www.linkedin.com/company/fractalfantasy"} target='_blank' rel='noreferrer'>Linkedin</Link>

              </Text>
              <Text color={'gray.500'} fontSize={'1rem'} px="4" width={'100%'}>
                We post fun updates each day!
              </Text>
            </Flex>



          </Flex>
        </Flex>
      </main>

    </>



  )
}

/*

Add Icons somehwere

*/