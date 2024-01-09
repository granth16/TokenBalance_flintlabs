import { ethers } from 'ethers';
import axios from 'axios';
import { JsonRpcProvider } from 'ethers/providers';

// const { ethers } = require('ethers');

// Your code using axios


const infuraUrl = 'https://linea-mainnet.infura.io/v3/149da186ab9044d5a937b0c75af036d9';
// const provider =new ethers.providers.JsonRpcProvider(infuraUrl);
const { JsonRpcProvider1, utils } = ethers;
console.log(ethers,"ll");
// const { formatEther, BigNumber } = utils;
const provider = new JsonRpcProvider(infuraUrl);
const accountAddress = '0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7';
const mantleAccountAddress = '0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7';
const remainder = balance.mod(1e14);

// const  accountAddress = process.argv[2];

if (!accountAddress) {
    console.error('Please provide a wallet address as a command-line argument.');
} 
const getBalance = async () => {
    try {
        const balance = await provider.getBalance(accountAddress);
        // if (balance.isZero()) {
        //     console.log('Balance is zero.');
        //     return null;
        // }
        return balance;
    } catch (error) {
        console.error('Error fetching balance:', error);
        return null;
    }
};

const PrintBalance = async () => {
  try {
      const balance = await provider.getBalance(accountAddress);
    //   const balanceBigNumber = BigNumber.from(balance);
    //   console.log(`Current Balance: ${formatEther(balanceBigNumber)} ETH`);
      console.log("Balance1",balance);
  } catch (error) {
      console.error('Error fetching balance:', error);
      return null;
  }
};

const getPercentageChange = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = response.data;
        const currentPrice = data.ethereum.usd;
        
        const balanceBefore = await getBalance();
        await new Promise(resolve => setTimeout(resolve, 1000 * 60 * 60 * 12)); 
        const balanceAfter = await getBalance();

        const percentageChange = ((balanceAfter - balanceBefore) / balanceBefore) * 100;

        if (percentageChange <= -10) {
            console.log('Balance reduced by 10% or more in the last 12 hours!');
        }

        return percentageChange;
    } catch (error) {
        console.error('Error fetching price:', error);
        return null;
    }
};

const displayBalance = async () => {
    try {
        const balance = await getBalance();
        const percentageChange = await getPercentageChange();
        // console.log(`Current Balance: ${ethers.utils.formatEther(balance)} ETH`);
        console.log(`Percentage Change in 12 Hours: ${percentageChange.toFixed(2)}%`);
    } catch (error) {
        console.error('Error:', error.message);
    }}

displayBalance();
PrintBalance();
