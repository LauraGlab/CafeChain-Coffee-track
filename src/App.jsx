import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Web3 from "web3";
import About from "./routes/About.jsx";
import BatchDetails from "./routes/BatchDetails.jsx";
import Contact from "./routes/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./routes/homepage/Home.jsx";
import Loading from "./routes/Loading.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import TraceabilityChain from "./routes/TraceabilityChain.jsx";
import "./css/App.css";
import contractData from "./../artifacts/contracts/CoffeeTrack.sol/CoffeeTrack.json";
import contractAddress from "./contractAddress.js";
const contractABI = contractData.abi;

export default function App() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setLoadingComplete(false);

    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setLoadingComplete(true), 500);
    }, 3000);

    return () => clearTimeout(timer);
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
        <Route path="/" element={<Home loadingComplete={loadingComplete} />} />
        <Route
          path="/sledz-kawe"
          element={<TraceabilityChain loadingComplete={loadingComplete} />}
        />
        <Route
          path="/o-projekcie"
          element={<About loadingComplete={loadingComplete} />}
        />
        <Route
          path="/kontakt"
          element={<Contact loadingComplete={loadingComplete} />}
        />
        <Route
          path="/partie/:batchId"
          element={
            <BatchDetails
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
