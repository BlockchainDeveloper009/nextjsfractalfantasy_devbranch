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

const solanaWeb4 = require('@solana/web3.js');
console.log(solanaWeb4.Account);
let perspublicKey = 'Gziqn5y2C8sDPnYjJaewpzKTAyaVZNEoyQsEHk68ygZB'

// Constants
let arr = []
const TWITTER_HANDLE = 'fractalfantasy1';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const LINKEDIN_HANDLE = 'fractalfantasy';
const LINKEDIN_LINK = `https://www.linkedin.com/company/${LINKEDIN_HANDLE}/`;

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
                console.log('LLLLL72::::' + data[i].data.Image);

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

  /*
  * Let's define this method so our code doesn't break.
  * We will write the logic for this next!
  */
  const connectWallet = async () => {
    const { solana } = window;
    if (solana) {
      //provider = solana;
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

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
    <html>
      <div className="App">

        <div className="container">

          <div className="header-container">
            <p className="header"><Image height={100} width={100} class="logo" src={fractalFantasyLogo} alt='fractalfantasy' />
              <p>Fractal Fantasy</p>
            </p>
            <p className="sub-text">Improve your &apos;health&apos; &amp; &apos;wellbeing&apos; to earn tokens</p>
            {/* Render your connect to wallet button right here */}
            {!walletAddress && renderNotConnectedContainer()}

          </div>
          <div>
            {/* <Image src={images[0]} alt="loading..." /> */}
          </div>



        </div>
      </div>
    </html>

  );
}
/*
 <p className="sub-text">Try using JS to connect to phantom</p>
          {}{//connectUsingJS()}
          <p className="sub-text">nfts from phantom</p>
          /*console.log(getAllNftData())*/