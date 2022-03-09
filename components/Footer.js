// LOGOS / ICONS
import twitterLogo from '../public/assets/twitter-logo.svg';
import linkedInLogo from '../public/assets/linkedIn.jpg';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';

import { Flex, Link } from '@chakra-ui/react';

// STYLES
import styles from '../styles/Footer.module.css'

// LINKS
const TWITTER_HANDLE = 'fractalfantasy1';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const LINKEDIN_HANDLE = 'fractalfantasy';
const LINKEDIN_LINK = `https://www.linkedin.com/company/${LINKEDIN_HANDLE}/`;

export default function Footer() {

  return (
    <Flex padding={4} h={'10%'} w={'100%'} bg={'MenuText'} justify='center' align='center'>
      <Flex flexDirection={'column'}>
        <Link display='flex' color={'white'} href={TWITTER_LINK} target='_blank' rel='noreferrer'>
          <BsTwitter className={styles.logo} color='white' />  {" "}{`@${TWITTER_HANDLE}`}
        </Link>

        <Link display='flex' color={'white'} href={LINKEDIN_LINK} target='_blank' rel='noreferrer'>
          <BsLinkedin className={styles.logo} color='white' /> {" "} LinkedIn
        </Link>
      </Flex>
    </Flex >

  )
}
