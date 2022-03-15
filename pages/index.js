import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react';
import twitterLogo from './assets/twitter-logo.svg';
import linkedInLogo from './assets/linkedIn.jpg';
import fractalFantasyLogo from './assets/fractalfantasy-logo.jpg';
import * as solanaWeb3 from '@solana/web3.js';
import { ethers } from "ethers";
import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig, } from "@nfteyez/sol-rayz";
import axios from "axios";
import { useRouter } from 'next/router'
import { Box, Text, Link } from '@chakra-ui/react';
import {handleNftAuthentication} from '../scripts/nftAuthentication'


let blueFractalAddr = ['EqVFJjLMT8ZbiURXbi9t2UCrw3UmHRxULvTDtgLqzgba','harrypksNFT']
let redFractalAddr = ['6unsZbubuzsd9qBWbS4QAg8eUU1nWgFXtC7Nyz42vbJR','Harryini_NFT']
let purpleFractalAddr = ['J7spGEJ17wyMPFj6Hhws8BuVqraBAD7yFSVkEGX9RM18','Entreprenur_NFT']
let goldFractalAddr = []
const solanaWeb4 = require('@solana/web3.js');

let perspublicKey = 'Gziqn5y2C8sDPnYjJaewpzKTAyaVZNEoyQsEHk68ygZB'

// Constants
let ownerNfts = []
let arr = []
const TWITTER_HANDLE = 'fractalfantasy1';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const LINKEDIN_HANDLE = 'fractalfantasy';
const LINKEDIN_LINK = `https://www.linkedin.com/company/${LINKEDIN_HANDLE}/`;

// IMAGE


export default function Home() {

  const router = useRouter()

  // State
  const [walletAddress, setWalletAddress] = useState(null);
  let images = []
  const checkIfWalletIsConnected = async () => {

    try {

      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );

          let connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');
          // After Connecting

          connection.getBalance(response.publicKey).then(function (value) { console.log('L51 BALANCE = ' + value); })
          // connection.(response.publicKey).then(function(value) { console.log('L51 BALANCE = '+value); })

          let connectData = true;
          try {
            if (connectData === true) {
              //  const connect =    createConnectionConfig(clusterApiUrl("devnet"));

              let ownerToken = response.publicKey;
              // const result = isValidSolanaAddress(ownerToken);
              // console.log("result", result);
              const nfts = await getParsedNftAccountsByOwner({
                publicAddress: ownerToken,
                connection: new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed'),
                serialization: true,
              });
              //return nfts;
              let nftData = nfts;
              var data = Object.keys(nftData).map((key) => nftData[key]); let arr = [];
              let n = data.length;
              for (let i = 0; i < n; i++) {
                console.log('LLLLL71::::' + data[i].data.uri);


                let val = await axios.get(data[i].data.uri);
                images.push(data[i].data.Image)
                console.log('vall--->' + val)
                arr.push(val);
              }
              console.log('l:72' + arr)

            }
          } catch (error) {
            console.log(error);
          }

          redirectToGameDownload();
          /*
           * Set the user's publicKey in state to be used later!
           */
          console.log('setting WalletAddress')
          setWalletAddress(response.publicKey.toString());

        }
      } else {
        redirectToGetWallet();
        alert('Solana object not found! Get a Phantom Wallet 👻');

      }
    } catch (error) {
      console.error(error);
    }
  };

   /*
   * Let's define this method so our code doesn't break.
   * We will write the logic for this next!
   */
   const connectWallet = async () => {
     console.log('calling nftAuth....')
      // console.log('handle2==='+printMsg)

      // printMsg.printMsg()
      console.log('nftAuth=='+handleNftAuthentication)
      ownerNfts = await handleNftAuthentication()
      validate(ownerNfts)
     
    
  };
  function validate(ownerNfts){
    console.log('validatingNFT token')
    
    if(blueFractalAddr.some(r=> ownerNfts.includes(r)))
    {
      
      redirectToGameDownload();
    }else{
      redirectToGetFractals();
    }
  }
  function redirectToGameDownload() {

    console.log('redirect to gotoGameDownload page')
    router.push('./gotoGameDownload')

  }
  function redirectToGetWallet() {
    console.log('redirect to GetWallet page')
    router.push('./getWallet')

  }
  function redirectToGetFractals() {
    console.log('redirect to GetWallet page')
    router.push('./getFractals')

  }


  const renderNotConnectedContainer = () => (


    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  const connectWalletjs = async () => {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum
    )

    await provider.send("eth_requestAccounts", [])

    const account = provider.getSigner()
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <html className='main'>
      <Box className="App">
        <Box className={styles.container}>


          <Box classNames={styles.header}>
            <Image height={150} width={150} src={fractalFantasyLogo} alt='fractalfantasy' />
            <Text className={styles.title}>Fractal Fantasy</Text>
          </Box>
          <Text className={styles.subText}>Improve your &apos;health&apos; &amp; &apos;wellbeing&apos; to earn tokens</Text>
          {/* Render your connect to wallet button right here */}
          {walletAddress ? <Link w='25%' p={2}
            fontWeight={'bold'}
            borderRadius={'.5rem'}
            fontSize={'1.25rem'}
            background={'-webkit-linear-gradient(left, #ff8867, #ff52ff)'}
            href='gotoGameDownload'>
            Download Game
          </Link> : renderNotConnectedContainer()}



          {/* <Image src={images[0]} alt="loading..." /> */}




        </Box>
      </Box>
    </html >

  );
}
/*
 <p className="sub-text">Try using JS to connect to phantom</p>
          {}{//connectUsingJS()}
          <p className="sub-text">nfts from phantom</p>
          /*console.log(getAllNftData())*/