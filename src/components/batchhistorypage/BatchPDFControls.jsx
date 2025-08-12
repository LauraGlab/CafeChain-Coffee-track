import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import fileIcon from "./../../assets/pdf/file.svg";
import linkIcon from "./../../assets/pdf/link.svg";
import pdfDocument from "./../../assets/pdf/pdf.png";
import "./../../css/components/batchhistorypage/BatchPDFControls.css";

export default function BatchPDFControls({
  batchId,
  batchDetails,
  contractAddress,
}) {
  const generateFullPDF = () => {
    const element = document.getElementById("pdfContent");

    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "mm", "a4");

      const background = new Image();
      background.src = pdfDocument;
      background.onload = () => {
        pdf.addImage(background, "PNG", 0, 0, 210, 297);
        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          210,
          (canvas.height * 210) / canvas.width
        );
        pdf.save(`batch-${batchId}.pdf`);
      };
    });
  };

  return (
    <div className="batch-pdf-generator">
      <div className="batch-history-pdf__buttons">
        <button
          className="batch-history-pdf__button pdf-buttons__generate-btn"
          onClick={generateFullPDF}
        >
          <img src={fileIcon} />
        </button>
        <button className="pdf-buttons__other-btn">
          <a
            href={`https://sepolia.etherscan.io/address/${contractAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkIcon} />
          </a>
        </button>
      </div>
      <div
        id="pdfContent"
        style={{
          backgroundImage: `url(${pdfDocument})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "210mm",
          height: "297mm",
          paddingTop: "55mm",
          paddingBottom: "40mm",
          paddingLeft: "15mm",
          paddingRight: "15mm",
          boxSizing: "border-box",
          lineHeight: "1.3",
          position: "absolute",
          left: "-9999px",
          top: "-9999px",
        }}
      >
        {batchDetails.map((stage, index) => (
          <div key={index} className="pdf-page">
            <h4 className="pdf-stage__title" style={{ fontSize: "12pt" }}>
              {stage.stage}
            </h4>
            <p className="pdf-stage__location" style={{ fontSize: "9pt" }}>
              📍 {stage.location}
            </p>
            <p className="pdf-stage__date" style={{ fontSize: "9pt" }}>
              📅 {stage.date}
            </p>
            {stage.sustainability && (
              <p
                className="pdf-stage__sustainability"
                style={{ fontSize: "9pt" }}
              >
                🌱 {stage.sustainability}
              </p>
            )}
            {stage.beanType && (
              <p className="pdf-stage__bean-type" style={{ fontSize: "9pt" }}>
                ☕ {stage.beanType}
              </p>
            )}
            {stage.process && (
              <p className="pdf-stage__process" style={{ fontSize: "9pt" }}>
                🔄 {stage.process}
              </p>
            )}
            {stage.roasting && (
              <p className="pdf-stage__roasting" style={{ fontSize: "9pt" }}>
                🔥 {stage.roasting}
              </p>
            )}
            {stage.details && (
              <p className="pdf-stage__details" style={{ fontSize: "9pt" }}>
                📝 {stage.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
