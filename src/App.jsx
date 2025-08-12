import { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Web3 from "web3";
import AboutPage from "./pages/AboutPage.jsx";
import BatchHistoryPage from "./pages/BatchHistoryPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BlockchainPage from "./pages/BlockchainPage.jsx";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import Loading from "./pages/LoadingScreen.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import contractData from "./../artifacts/contracts/CoffeeTrack.sol/CoffeeTrack.json";
import contractAddress from "./contractAddress.js";
const contractABI = contractData.abi;
import "./css/App.css";

export default function App() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setLoadingComplete(false);
    const loadPage = async () => {
     
      await new Promise((resolve) => setTimeout(resolve, 1500)); 
      setLoading(false);
      setLoadingComplete(true);
    };

    loadPage();
  }, [location.pathname]);

  useEffect(() => {
    const titles = {
      "/": "Home - CafeChain",
      "/sledz-kawe": "Śledź Kawę - CafeChain",
      "/o-projekcie": "O Projekcie - CafeChain",
      "/kontakt": "Kontakt - CafeChain",
    };

    document.title = titles[location.pathname] || "CafeChain";
  }, [location.pathname]);

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        console.log("🔹 Initializing Web3...");

        const infuraUrl = import.meta.env.VITE_INFURA_SEPOLIA_URL;

        if (!infuraUrl) {
          throw new Error("❌ Missing VITE_INFURA_SEPOLIA_URL in .env!");
        }

        const web3Instance = new Web3(infuraUrl);
        setWeb3(web3Instance);

        const contractInstance = new web3Instance.eth.Contract(
          contractABI,
          contractAddress
        );
        setContract(contractInstance);

        console.log("✅ Web3 and contract loaded successfully!");
      } catch (error) {
        console.error("❌ Web3 Initialization Error:", error);
      }
    };

    initWeb3();
  }, []);

  return (
    <div className="app">
      <ScrollToTop />
      {loading && <Loading />}
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage loadingComplete={loadingComplete} />}
        />
        <Route
          path="/o-projekcie"
          element={<AboutPage loadingComplete={loadingComplete} />}
        />
        <Route
          path="/kontakt"
          element={<ContactPage loadingComplete={loadingComplete} />}
        />
        <Route
          path="/partie/:batchId"
          element={
            <BatchHistoryPage
              loadingComplete={loadingComplete}
              contract={contract}
            />
          }
        />
        <Route
          path="/co-to-jest-blockchain"
          element={
            <BlockchainPage
              loadingComplete={loadingComplete}
              contract={contract}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
