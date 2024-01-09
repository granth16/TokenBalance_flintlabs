import React, { useState } from 'react';
import { icon1, icon2, icon3, icon4, icon5} from "./assets/image";
import icon6 from "./assets/icon6.png"
import linea from './assets/linea.jpeg'
import CustomModal from './Modal';
const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [walletAddress, setWalletAddress] = useState('');
  const [tokenBalances, setTokenBalances] = useState([]);

  const handleSubmit = async() => {
    // // Spawn a child process to run ans.js with the wallet address as an argument
    // const response = await fetch('http://localhost:3001/fetch-balance', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ walletAddress }),
    // });
    // const childProcess = spawn('node', ['ans.js', walletAddress]);

    // // Listen for data from the child process (if needed)
    // childProcess.stdout.on('data', (data) => {
    //   console.log(`ans.js output: ${data}`);
    // });

    // // Listen for errors from the child process (if needed)
    // childProcess.stderr.on('data', (error) => {
    //   console.error(`ans.js error: ${error}`);
    // });

    // // Listen for the child process to close
    // childProcess.on('close', (code) => {
    //   console.log(`ans.js process exited with code ${code}`);
    // });

    const balances = [
      { icon: linea, name: 'Linea', balance: '241009.69' },
      { icon:icon2, name: 'Mantle', balance: '24109.69' },
      { icon: linea, name: 'Kroma', balance: '24109.69' },
      { icon: linea, name: 'SHIBA INU', balance: '24109.69' },
    ];

    setTokenBalances(balances);
  };

  return (
    <>
      <nav>
        <img src={icon1} alt="icon" />
        <div></div>
      </nav>

      <main className="main main_container">
        <div className="main_inner">
          <div className="main_inner_header">
            <h2>get any wallet&apos;s token balance</h2>
          </div>
         
          <div className="main_inner_bottom">
            <div className="input_sec">
              <h4>add ERC20 Wallet Address</h4>
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
              <button  type="button" onClick={handleSubmit}>
                submit
              </button>
            </div>
            <ul>
              {tokenBalances.map((token, index) => (
                <li key={index}>
                  <div style={{padding:"0.3rem"}}>
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
      <button onClick={openModal}>Open Modal</button>

      {/* Render the CustomModal */}
      <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {/* Content inside the modal */}
        <div style={{justifyContent:"center",alignItems:"center",paddingLeft:"8.5rem"}}>
        <img src={icon6} style={{maxWidth:"2.75rem"}}/>
        <h2 style={{marginLeft:"-0.85rem"}}>Alert</h2>
        </div>
        <p style={{maxWidth:"20rem",marginTop:"1rem",marginBottom:"1rem",lineHeight:"1.25rem",fontFamily:"poppins"}}>Your wallet balance has decreased by 10% or more in the last 12 hours. Please review your recent transactions and account activity to ensure the security of your funds.</p>
        <button className="button_alert" type="button" onClick={handleSubmit}>
               Go Back
              </button>
      </CustomModal>
    </>
  );
};

export default App;
