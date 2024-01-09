import Web3 from 'web3';
const web3 = new Web3('https://rpc.mantle.xyz/');
//const web3 = new Web3('https://api.kroma.network');
//const web3 = new Web3('https://rpc.linea.build/');
const getNativeTokenBalanceOfMantle = async (contractAddress) => {
    try {
        const web3 = new Web3('https://rpc.mantle.xyz/');
        const balanceWei = await web3.eth.getBalance(contractAddress);
        const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
        return parseFloat(balanceEther);
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

const getNativeTokenBalanceOfKroma = async (contractAddress) => {
    try {
        const web3 = new Web3('https://api.kroma.network');
        const balanceWei = await web3.eth.getBalance(contractAddress);
        const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
        return parseFloat(balanceEther);
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
const getNativeTokenBalanceOfLinea = async (contractAddress) => {
    try {
        const web3 = new Web3('https://rpc.linea.build/');
        const balanceWei = await web3.eth.getBalance(contractAddress);
        const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
        return parseFloat(balanceEther);
    } catch (error) {
        console.error('Error fetching balance:', error);
        throw error;
    }
};
(async () => {
    try {
        const contractAddress = '0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7';
        const nativeTokenBalance = await getNativeTokenBalanceOfLinea(contractAddress);
        console.log(`Native Token Balance linea: ${nativeTokenBalance.toFixed(18)} MNT`);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();