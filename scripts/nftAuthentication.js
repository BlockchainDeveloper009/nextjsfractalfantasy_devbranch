import { Keypair, SystemProgram, Transaction, PublicKey } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token'
import * as solanaWeb3 from '@solana/web3.js';

let connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');
let nftTokensFromOwner = []
export async function handleNftAuthentication(){
    
    console.log('nftAuth.JS-starting nft auth--------------')
    const { solana } = window;
    if (solana) {
      //provider = solana;
      const response = await solana.connect();
      console.log('nftAuth.JS-------------------Connected with Public Key:', response.publicKey.toString());
   
      let tokenAccounts = await connection.getParsedTokenAccountsByOwner(
       response.publicKey, 
       { 
         programId: TOKEN_PROGRAM_ID,
       }
     );
   
     let nfts = tokenAccounts.value.filter((acc) => {
       let amnt = acc.account.data.parsed.info.tokenAmount;
       return amnt.decimals === 0 && amnt.uiAmount === 1;
     }).map((acc) => {
       console.log('---->'+acc.pubkey)
       console.log('----->'+acc.account.data.parsed.info.mint)
       nftTokensFromOwner.push(acc.account.data.parsed.info.mint)
       return {
         address: acc.pubkey,
         mint: new PublicKey(acc.account.data.parsed.info.mint),
       }
     })
   
     console.log(nfts);
   
    }
    return nftTokensFromOwner;
}
function printMsg(){
    console.log('import has worked')
}
async function f1()
{
    console.log('nftAuth.JS-starting nft auth--------------')
    const { solana } = window;
    if (solana) {
      //provider = solana;
      const response = await solana.connect();
      console.log('nftAuth.JS-------------------Connected with Public Key:', response.publicKey.toString());
   
      let tokenAccounts = await connection.getParsedTokenAccountsByOwner(
       response.publicKey, 
       { 
         programId: TOKEN_PROGRAM_ID,
       }
     );
   
     let nfts = tokenAccounts.value.filter((acc) => {
       let amnt = acc.account.data.parsed.info.tokenAmount;
       return amnt.decimals === 0 && amnt.uiAmount === 1;
     }).map((acc) => {
       console.log('---->'+acc.pubkey)
       console.log('----->'+acc.account.data.parsed.info.mint)
       nftTokensFromOwner.push(acc.account.data.parsed.info.mint)
       return {
         address: acc.pubkey,
         mint: new PublicKey(acc.account.data.parsed.info.mint),
       }
     })
   
     console.log(nfts);
   
    }
}

