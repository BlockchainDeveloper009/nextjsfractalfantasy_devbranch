import React from "react";

import { Flex, Link } from "@chakra-ui/react";
import { BsLinkedin, BsTwitter, BsDiscord } from "react-icons/bs"
import { FaMedium } from 'react-icons/fa'
import styles from "../styles/Footer.module.css"

const TWITTER_HANDLE = 'fractalfantasy1';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const LINKEDIN_HANDLE = 'fractalfantasy';
const LINKEDIN_LINK = `https://www.linkedin.com/company/${LINKEDIN_HANDLE}/`;

export default function footer() {
  return (
    <Flex className={styles.container} padding={16} w={'100%'} bg={'MenuText'} justify='space-around' align='center'>

      <Link className={styles.iconLink} color={'white'} href={TWITTER_LINK} target='_blank' rel='noreferrer'>
        <BsTwitter className={styles.logo} color='white' />  {" "}{`@${TWITTER_HANDLE}`}
      </Link>

      <Link className={styles.iconLink} color={'white'} href={TWITTER_LINK} target='_blank' rel='noreferrer'>
        <BsDiscord className={styles.logo} color='white' />  {" "}{`@${TWITTER_HANDLE}`}
      </Link>

      <Link className={styles.iconLink} color={'white'} href={TWITTER_LINK} target='_blank' rel='noreferrer'>
        <FaMedium className={styles.logo} color='white' />  {" "}{`@${TWITTER_HANDLE}`}
      </Link>

      {/* <span className="iconify" data-icon="logos:linkedin-icon"></span>
      <span className="iconify" data-icon="logos:discord"></span>
      <span className="iconify" data-icon="logos:tiktok-icon"></span>
      <span className="iconify" data-icon="ant-design:medium-workmark-outlined"></span> */}

      <Link className={styles.iconLink} color={'white'} href={LINKEDIN_LINK} target='_blank' rel='noreferrer'>
        <BsLinkedin className={styles.logo} color='white' /> {" "} LinkedIn
      </Link>

    </Flex>
  );

}

