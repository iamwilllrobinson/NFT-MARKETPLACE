import "./App.css";
import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";
import contractABI from "./contractABI.json";
import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';

//importing images from assets folder.
import mp from "./assets/images/Maharana-Pratap.jpg";
import radhe from "./assets/images/Radhe.jpg";
import sachin from "./assets/images/Sachin.png";
import vikas from "./assets/images/Vikas.jpg";
import vikass from "./assets/images/Vikas.jpg";
import vivek from "./assets/images/Vivek.jpg";

const contractAddress = "0x2F31F0E4D1235353714a6206E2497aC3f378A5d2";

function App() {
  const [account, setAccount] = useState(null);
   const [NFTContract, setNFTContract] = useState(null);
  // state for whether app is minting or not.
  const [isMinting, setIsMinting] = useState(false);
   useEffect(() => {
    if (window.ethereum) {
     }
  }, []);

  useEffect(() => {
    function initNFTContract() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setNFTContract(new Contract(contractAddress, contractABI.abi, signer));
    }
    initNFTContract();
  }, [account]);

  async function connectWallet1() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }
  document.title = "NFT Market";


  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const url = form.elements.url.value;
    const param = form.elements.param.value;
    const newData = [
      ...data,
      {
        url: url,
        param: param,
      },
    ];
    setdata(newData);
    form.reset();
  }

  let [data, setdata] = useState([
    {
      url: mp,
      param:
        "handleMint('https://gateway.pinata.cloud/ipfs/QmR4kQiwoE9LRDjPVTQ5FnQqBHUxzNDJNsSzHwYWUsHNQG/1')",
    },
    {
      url: radhe,
       param:
        "handleMint('https://gateway.pinata.cloud/ipfs/QmR4kQiwoE9LRDjPVTQ5FnQqBHUxzNDJNsSzHwYWUsHNQG/2')",
    },
    {
      url: sachin,
       param:
        "handleMint('https://gateway.pinata.cloud/ipfs/QmR4kQiwoE9LRDjPVTQ5FnQqBHUxzNDJNsSzHwYWUsHNQG/3')",
    },
    {
      url: vikas,
       param:
        "handleMint('https://gateway.pinata.cloud/ipfs/QmR4kQiwoE9LRDjPVTQ5FnQqBHUxzNDJNsSzHwYWUsHNQG/4')",
    },
    {
      url: vikass,
       param:
        "handleMint('https://gateway.pinata.cloud/ipfs/QmR4kQiwoE9LRDjPVTQ5FnQqBHUxzNDJNsSzHwYWUsHNQG/4')",
    },
    {
      url: vivek,
       param:
        "handleMint('https://gateway.pinata.cloud/ipfs/QmR4kQiwoE9LRDjPVTQ5FnQqBHUxzNDJNsSzHwYWUsHNQG/5')",
    },
  ])

  async function withdrawMoney() {
    try {
      const response = await NFTContract.withdrawMoney();
      console.log("Received: ", response);
    } catch (err) {
      alert(err);
    }
  }

  async function handleMint(tokenURI) {
    setIsMinting(true);
    try {
      const options = { value: ethers.utils.parseEther("0.01") };
      const response = await NFTContract.mintNFT(tokenURI, options);
      console.log("Received: ", response);
    } catch (err) {
      alert(err);
    } finally {
      setIsMinting(false);
    }
  }

  if (account === null) {
    return (
      <>
        <div className="min-h-screen">
          <div className="gradient-bg-hero">
            <Header connectWallet={connectWallet1} />
            <Hero />
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <div className="app container-flex gradient-bg-hero-2">
      <div  >
        <br />
        <div>
          <h1>🔮 MiniProject</h1>
        </div>
        <h2>NFT Marketplace</h2>
        {data.map((item, index) => (
          <div className="imgDiv">
            <img
              src={item.url}
              key={index}
              alt="images"
              width={200}
              height={250}
            />
            <button
              isLoading={isMinting}
              onClick={handleMint}>
              Mint - 0.01 eth
            </button>
          </div>
        ))}
        <br></br>
        <button
          className="withdraw-button"
          onClick={() => {
            withdrawMoney();
          }}
        >
          Withdraw Money from Contract
        </button>
         <div  >
          <form onSubmit={handleSubmit}>
            <label>
              URL:
              <input type="text" name="url" />
            </label>
            <label>
              Param:
              <input type="text" name="param" />
            </label>
            <button type="submit">Add Data</button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App;
