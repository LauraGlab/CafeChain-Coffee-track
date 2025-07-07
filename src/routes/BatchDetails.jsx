import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import contractAddress from "./../contractAddress.js";
import Questions from "../components/Questions.jsx";
import errorImg from "../assets/errorImg.svg";
/*batchImg*/
import batchImg1 from "../assets/batchImgs/batchImg1.svg";
import batchImg2 from "../assets/batchImgs/batchImg2.svg";
import batchImg3 from "../assets/batchImgs/batchImg3.svg";
import batchImg4 from "../assets/batchImgs/batchImg4.svg";
import batchImg5 from "../assets/batchImgs/batchImg5.svg";
import batchImg6 from "../assets/batchImgs/batchImg6.svg";
import batchImg7 from "../assets/batchImgs/batchImg7.svg";
/*batchIcon*/
import batchIcon1 from "../assets/batchIcons/batchIcon1.svg";
import batchIcon2 from "../assets/batchIcons/batchIcon2.svg";
import batchIcon3 from "../assets/batchIcons/batchIcon3.svg";
import batchIcon4 from "../assets/batchIcons/batchIcon4.svg";
import batchIcon5 from "../assets/batchIcons/batchIcon5.svg";
import batchIcon6 from "../assets/batchIcons/batchIcon6.svg";
import "./../css/routes/BatchDetails.css";

export default function BatchDetails({ contract, loadingComplete }){
  const { batchId } = useParams();
  const [batchDetails, setBatchDetails] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const stageImages = [
    batchImg1,
    batchImg2,
    batchImg3,
    batchImg4,
    batchImg5,
    batchImg6,
    batchImg7,
  ];

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

        const formattedData = data.map((stage, index) => ({
          ...stage,
          index: Number(stage.index),
          image: stageImages[index] || batchImg1,
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
    return (
      <div className="errorContainer">
        <img className="errorImg" src={errorImg} alt="error rysunek" />
        <p className="errorText">
          Wystąpił błąd podczas pobierania danych. Spróbuj odświeżyć stronę lub
          wrócić później.
        </p>
      </div>
    );
  }

  if (!batchDetails.length) {
    return <div className="errorContainer">Trwa ładowanie danych...</div>;
  }

  const nextStep = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, batchDetails.length - 1));
  const prevStep = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));


  const generateFullPDF = () => {
    const element = document.getElementById("allStagesContainer");

    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`batch-${batchId}.pdf`);
    });
  };

  const animVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -100, transition: { duration: 1 } },
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="batchPage">
      <motion.h1
        className="batchTitle fraunces"
        animate={loadingComplete ? "visible" : "hidden"}
        variants={animVariants}
      >
        Historia <br className="batchBr" />
        partii {batchId}
      </motion.h1>
      <motion.div
        className="batchInfoWrapper"
        animate={{ opacity: loadingComplete ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="carouselCard"
            key={currentIndex}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div>
              <motion.h3
                className="carouselStepTitleMobile fraunces"
                animate={{ opacity: loadingComplete ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {batchDetails[currentIndex].stage}
              </motion.h3>
              {batchDetails[currentIndex].image && (
                <motion.img
                  className="carouselImage"
                  src={batchDetails[currentIndex].image}
                  alt={`Stage ${batchDetails[currentIndex].stage}`}
                  animate={{ opacity: loadingComplete ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              )}
              <div className="carouselControls">
                <motion.button
                  className="carouselBtn"
                  onClick={prevStep}
                  whileTap={{ scale: 1.1 }}
                >
                  ◀
                </motion.button>
                <motion.button
                  className="carouselBtn"
                  onClick={nextStep}
                  whileTap={{ scale: 1.1 }}
                >
                  ▶
                </motion.button>
              </div>
            </div>
            <div className="carouselCardContainer">
              <motion.h3
                className="carouselStepTitleDesktop fraunces"
                animate={{ opacity: loadingComplete ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {batchDetails[currentIndex].stage}
              </motion.h3>
              <motion.div
                className="carouselStep"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="carouselStepIcon">
                  <img className="carouselStepSvg" src={batchIcon1} />
                </div>
                <div className="carouselStepInfoWrapper">
                  <p>Lokalizacja</p>
                  <p className="carouselStepInfo">
                    {batchDetails[currentIndex].location}
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="carouselStep"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="carouselStepIcon">
                  <img className="carouselStepSvg" src={batchIcon2} />
                </div>
                <div className="carouselStepInfoWrapper">
                  <p>Data</p>
                  <p className="carouselStepInfo">
                    {batchDetails[currentIndex].date}
                  </p>
                </div>
              </motion.div>
              {batchDetails[currentIndex].sustainability && (
                <motion.div
                  className="carouselStep"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="carouselStepIcon">
                    <img
                      className="carouselStepSvg"
                      id="sustainability"
                      src={batchIcon3}
                    />
                  </div>
                  <div className="carouselStepInfoWrapper">
                    <p>Zrównoważony rozwój</p>
                    <p className="carouselStepInfo">
                      {batchDetails[currentIndex].sustainability}
                    </p>
                  </div>
                </motion.div>
              )}
              {batchDetails[currentIndex].beanType && (
                <motion.div
                  className="carouselStep"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="carouselStepIcon">
                    <img className="carouselStepSvg" src={batchIcon4} />
                  </div>
                  <div className="carouselStepInfoWrapper">
                    <p>Odmiana ziaren</p>
                    <p className="carouselStepInfo">
                      {batchDetails[currentIndex].beanType}
                    </p>
                  </div>
                </motion.div>
              )}
              {batchDetails[currentIndex].process && (
                <motion.div
                  className="carouselStep"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="carouselStepIcon">
                    <img className="carouselStepSvg" src={batchIcon5} />
                  </div>
                  <div className="carouselStepInfoWrapper">
                    <p>Proces</p>
                    <p className="carouselStepInfo">
                      {batchDetails[currentIndex].process}
                    </p>
                  </div>
                </motion.div>
              )}
              {batchDetails[currentIndex].roasting && (
                <motion.div
                  className="carouselStep"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="carouselStepIcon">
                    <img className="carouselStepSvg" src={batchIcon6} />
                  </div>
                  <div className="carouselStepInfoWrapper">
                    <p>Palenie</p>
                    <p className="carouselStepInfo">
                      {batchDetails[currentIndex].roasting}
                    </p>
                  </div>
                </motion.div>
              )}
              {batchDetails[currentIndex].details && (
                <motion.div
                  className="carouselStep"
                  id="details"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <p id="detailsTitle">Szczegóły</p>
                    <p className="carouselStepInfo" id="detailsInfo">
                      {batchDetails[currentIndex].details}
                    </p>
                  </div>
                </motion.div>
              )}
              {currentIndex === batchDetails.length - 1 && (
                <div className="pdfBlockchainBtns">
                  <motion.button
                    className="pdfBtn"
                    onClick={generateFullPDF}
                    whileHover={{ scale: 1.1 }}
                  >
                    Pobierz PDF
                  </motion.button>

                  <motion.a
                    href={`https://sepolia.etherscan.io/address/${contractAddress}`}
                    target="_blank"
                    className="blockchainBtn"
                    whileHover={{ scale: 1.1 }}
                  >
                    Zweryfikuj Blockchain
                  </motion.a>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <Questions
        questionTitle="Masz pytania?"
        ctaLink={<Link to="/kontakt">Sontaktuj się</Link>}
      />
      <div className="pdf" id="allStagesContainer">
        <h3 className="pdfTitle fraunces">
          Historia
          <br /> partii {batchId}
        </h3>
        {batchDetails.map((stage, index) => (
          <div key={index} className="pdfStage">
            <h3 className="pdfStageTitle">{stage.stage}</h3>
            <p>📍 {stage.location}</p>
            <p>📅 {stage.date}</p>
            {stage.sustainability && <p>🌱 {stage.sustainability}</p>}
            {stage.beanType && <p>☕ {stage.beanType}</p>}
            {stage.process && <p>🔄 {stage.process}</p>}
            {stage.roasting && <p>🔥 {stage.roasting}</p>}
            {stage.details && <p>📝 {stage.details}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};