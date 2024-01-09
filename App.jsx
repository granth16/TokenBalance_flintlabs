// Import necessary dependencies and assets
import React, { useState } from 'react';
import { icon1, icon2, icon3, icon4, icon5} from "./assets/image";
import icon6 from "./assets/icon6.png"
import icon7 from "./assets/blockc.jpeg"
import linea from './assets/linea.jpeg'
import kroma from './assets/kromaicon.jpeg'
import mantle from './assets/mantle.png'
import CustomModal from './Modal';
import Web3 from 'web3';


const TokenBalance = () => {
  // Initializing Web3 instances for different networks
  const web3 = new Web3('https://rpc.mantle.xyz/');

  // State variables to store token balances
  const [mantleNativeTokenBalance, setMantleNativeTokenBalance] = useState(0);
  const [lineaNativeTokenBalance, setLineaNativeTokenBalance] = useState(0);
  const [kromaNativeTokenBalance, setKromaNativeTokenBalance] = useState(0);
  
  // Function to fetch native token balance of Mantle network
  const getNativeTokenBalanceOfMantle = async (contractAddress) => {
      try {
          const web3 = new Web3('https://rpc.mantle.xyz/');
          const balanceWei = await web3.eth.getBalance(contractAddress);
          const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
          setMantleNativeTokenBalance(parseFloat(balanceEther).toFixed(18) +  ' MNT');
      } catch (error) {
          console.error('Error fetching balance:', error);
          throw error;
      }
  };
  (async () => {
      try {
          const contractAddress = '0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7';
          const nativeTokenBalance = await getNativeTokenBalanceOfMantle(contractAddress);
          console.log(`Native Token Balance: ${nativeTokenBalance.toFixed(18)} MNT`);
      } catch (error) {
          console.error('Error:', error.message);
      }
  })();
 
    // Function to fetch native token balance of Kroma network
  const getNativeTokenBalanceOfKroma = async (contractAddress) => {
      try {
          const web3 = new Web3('https://api.kroma.network');
          const balanceWei = await web3.eth.getBalance(contractAddress);
          const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
          setKromaNativeTokenBalance(parseFloat(balanceEther) +' ETH');
      } catch (error) {
          console.error('Error fetching balance:', error);
          throw error;
      }
  };
  (async () => {
      try {
          const contractAddress = '0x7afb9de72A9A321fA535Bb36b7bF0c987b42b859';
          const nativeTokenBalance = await getNativeTokenBalanceOfKroma(contractAddress);
          console.log(`Native Token Balance: ${nativeTokenBalance.toFixed(18)} MNT`);
      } catch (error) {
          console.error('Error:', error.message);
      }
  })();

   // Function to fetch native token balance of Linea network
  const getNativeTokenBalanceOfLinea = async (contractAddress) => {
      try {
          const web3 = new Web3('https://rpc.linea.build/');
          const balanceWei = await web3.eth.getBalance(contractAddress);
          const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
          setLineaNativeTokenBalance(parseFloat(balanceEther)  +' ETH');
      } catch (error) {
          console.error('Error fetching balance:', error);
          throw error;
      }
  };
  // Initial fetch of token balances for Mantle, Kroma, and Linea networks
  (async () => {
      try {
          const contractAddress = '0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7';
          const nativeTokenBalance = await getNativeTokenBalanceOfLinea(contractAddress);
          console.log(`Native Token Balance linea: ${nativeTokenBalance.toFixed(18)} MNT`);
      } catch (error) {
          console.error('Error:', error.message);
      }
  })();
   // State variables for modal control
  const [modalIsOpen, setModalIsOpen] = useState(false);

   // Functions to open and close the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // State variables for wallet address and token balances
  const [walletAddress, setWalletAddress] = useState('');
  const [tokenBalances, setTokenBalances] = useState([]);

  // Function to handle form submission and fetch token balances
  const handleSubmit = async() => {
    await getNativeTokenBalanceOfMantle('0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7');
    const balances = [
      { icon: linea, name: 'Linea', balance:lineaNativeTokenBalance },
      { icon:mantle, name: 'Mantle', balance:mantleNativeTokenBalance  },
      { icon: kroma, name: 'Kroma', balance: kromaNativeTokenBalance },
     
    ];
    setModalIsOpen(true);
    setTokenBalances(balances);
  };

   // Function to handle modal close
  const handleClose = () =>{
    setModalIsOpen(false);
  }
  return (
    <>
      <nav>
        <img src={icon1} alt="icon" />
        <div></div>
      </nav>

      <main className="main main_container">
        <div className="main_inner">
          <div className="main_inner_header">
            <h2>check your wallet&apos;s token balance</h2>
          </div>
         
          <div className="main_inner_bottom">
            <div className="input_sec">
              {/* <h4>add ERC20 Wallet Address</h4> */}
              {/* <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              /> */}
              <button  type="button" onClick={handleSubmit}>
               Click here to check Your Token Balance
              </button>
            </div>
            <ul>
              {tokenBalances.map((token, index) => (
                <li key={index}>
                  <div style={{padding:"0.5rem"}}>
                    <img style={{maxWidth:"3rem", borderRadius: "35px"}}src={token.icon} alt={`icon${index + 2}`} />
                    <p>{token.name}</p>
                  </div>
                  <span>{token.balance}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      {/* <button onClick={openModal}>Open Modal</button> */}

      {/* Render the CustomModal */}
      <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {/* Content inside the modal */}
        <div style={{justifyContent:"center",alignItems:"center",paddingLeft:"8.5rem"}}>
        <img src={icon6} style={{maxWidth:"2.75rem"}}/>
        <h2 style={{marginLeft:"-0.85rem"}}>Alert</h2>
        </div>
        <p style={{maxWidth:"20rem",marginTop:"1rem",marginBottom:"1rem",lineHeight:"1.25rem",fontFamily:"poppins"}}>Your token balance has decreased by 10% or more in the last 12 hours. Please review your recent transactions and account activity to ensure the security of your funds.</p>
        <button className="button_alert" type="button" onClick={handleClose}>
               Go Back
              </button>
      </CustomModal>
    </>
  );
};

export default TokenBalance;
