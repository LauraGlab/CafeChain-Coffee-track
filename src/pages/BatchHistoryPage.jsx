import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import contractAddress from "../contractAddress.js";
import BatchHistoryButtons from "./../components/batchhistorypage/BatchHistoryButtons.jsx";
import ErrorPage from "./ErrorPage.jsx";
import BatchPDFControls from "./../components/batchhistorypage/BatchPDFControls.jsx";
import BatchHistoryStage from "./../components/batchhistorypage/BatchHistoryStage.jsx";
import TitleSection from "./../components/ui/TitleSection.jsx";
import ContactShortcut from "./../components/layout/ContactShortcut.jsx";
import AboutImg1 from "./../assets/batchImgs/batchHistoryImg.png";
import "./../css/pages/BatchHistoryPage.css";

export default function BatchHistoryPage({ contract, loadingComplete }) {
  const { batchId } = useParams();
  const [batchDetails, setBatchDetails] = useState([]);

  const [error, setError] = useState(null);
  const stageImages = [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchBatchDetails = async () => {
      try {
        if (!contract) {
          console.error("❌ Contract is not loaded yet!");
          return;
        }

        console.log(`🔹 Fetching batch data for batchId: ${batchId}`);

        const data = await contract.methods.getBatchStages(batchId).call();

        const formattedData = data.map((stage) => ({
          ...stage,
          index: Number(stage.index),
        }));

        console.log("✅ Batch data: ", formattedData);
        setBatchDetails(formattedData);
      } catch (error) {
        console.error("❌ Error fetching data: ", error);
        setError("Error fetching data.");
      }
    };
    fetchBatchDetails();
  }, [batchId, contract]);

  if (error) {
    return <ErrorPage />;
  }

  if (!batchDetails.length) {
    return <ErrorPage />;
  }

  return (
    <div className="batch-history section">
      <TitleSection
        titleSection={`Dane Partii ${batchId}`}
        titleImg={AboutImg1}
      />
      <div className="batch-history__decorative-section"></div>
      <BatchHistoryButtons batchDetails={batchDetails} />
      <div className="batch-history-stage__wrapper">
        {batchDetails.map((step) => (
          <BatchHistoryStage
            batchDetails={batchDetails}
            batchId={batchId}
            contractAddress={contractAddress}
            step={step}
          />
        ))}
      </div>
      <ContactShortcut
        questionTitle="Masz pytania?"
        ctaLink={<Link to="/kontakt">Skontaktuj się</Link>}
      />
      <BatchPDFControls
        batchId={batchId}
        batchDetails={batchDetails}
        contractAddress={contractAddress}
      />
    </div>
  );
}
