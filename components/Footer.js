import React from "react";

import { Flex, Link } from "@chakra-ui/react";
import { BsLinkedin, BsTwitter, BsDiscord,BsTwitch } from "react-icons/bs"
import { FaMedium } from 'react-icons/fa'
import styles from "../styles/Footer.module.css"
const Twitch_Link = 'https://www.twitch.tv/socialprescribing'
const TWITTER_HANDLE = 'fractalfantasy1';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const LINKEDIN_HANDLE = 'fractalfantasy';
const LINKEDIN_LINK = `https://www.linkedin.com/company/${LINKEDIN_HANDLE}/`;
const medium_link = 'https://medium.com/@fractalfantasy'
const discord_link = ''

export default function Footer() {
  return (
    <Flex py='4rem' bg={'black'} w={'100%'} justify='space-around' alignItems={'center'}>

      <Link className={styles.iconLink} color={'white'} href={TWITTER_LINK} target='_blank' rel='noreferrer'>
        <BsTwitter className={styles.logo} color='white' />  {" "}{`@${TWITTER_HANDLE}`}
      </Link>

      <Link className={styles.iconLink} color={'white'} href={TWITTER_LINK} target='_blank' rel='noreferrer'>
        <FaMedium className={styles.logo} color='white' />  {" "} Medium
      </Link>

      <Link className={styles.iconLink} color={'white'} href={LINKEDIN_LINK} target='_blank' rel='noreferrer'>
        <BsLinkedin className={styles.logo} color='white' /> {" "} LinkedIn
      </Link>

      <Link className={styles.iconLink} color={'white'} href={Twitch_Link} target='_blank' rel='noreferrer'>
        <BsTwitch className={styles.logo} color='white' /> {" "} Twitch.TV
      </Link>

    </Flex>
  );

}
