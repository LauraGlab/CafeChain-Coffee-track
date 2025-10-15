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
import stageImg1 from "./../assets/batchImgs/1.png";
import stageImg2 from "./../assets/batchImgs/2.png";
import stageImg3 from "./../assets/batchImgs/3.png";
import stageImg4 from "./../assets/batchImgs/4.png";
import stageImg5 from "./../assets/batchImgs/5.png";
import stageImg6 from "./../assets/batchImgs/6.png";
import stageImg7 from "./../assets/batchImgs/7.png";
import "./../css/pages/BatchHistoryPage.css";

export default function BatchHistoryPage({ contract, loadingComplete }) {
  const { batchId } = useParams();
  const [batchDetails, setBatchDetails] = useState([]);

  const [error, setError] = useState(null);
  const stageImages = [
    stageImg1,
    stageImg2,
    stageImg3,
    stageImg4,
    stageImg5,
    stageImg6,
    stageImg7,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchBatchDetails = async () => {
      try {
        if (!contract) {
          console.error("Contract is not loaded yet!");
          return;
        }

        console.log(`Fetching batch data for batchId: ${batchId}`);

        const data = await contract.methods.getBatchStages(batchId).call();

        const formattedData = data.map((stage) => ({
          ...stage,
          index: Number(stage.index),
        }));

        console.log("Batch data: ", formattedData);
        setBatchDetails(formattedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
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
        {batchDetails.map((step, index) => (
          <BatchHistoryStage
            batchDetails={batchDetails}
            batchId={batchId}
            contractAddress={contractAddress}
            step={{ ...step, image: stageImages[index] }}
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
