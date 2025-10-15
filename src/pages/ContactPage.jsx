import { motion } from "framer-motion";
import BackToHome from "../components/common/BackToHome.jsx";
import DecoratedSectionBlock from "../components/ui/DecoratedSectionBlock.jsx";
import ContactForm from "../components/contactpage/ContactForm.jsx";
import TitleSection from "../components/ui/TitleSection.jsx";
import ContactImg from "./../assets/contactPageImgs/contactPageImg.png";
import ContactImg1 from "./../assets/contactPageImgs/contactPageImg1.svg";
import ContactImg2 from "./../assets/contactPageImgs/contactPageImg2.svg";
import "./../css/pages/ContactPage.css";

export default function ContactPage({ loadingComplete }) {
  const animVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="contact section"
      initial="hidden"
      animate={loadingComplete ? "visible" : "hidden"}
      variants={animVariants}
    >
      <BackToHome />
      <TitleSection titleSection="Kontakt" titleImg={ContactImg} />
      <DecoratedSectionBlock
        title="Pozostańmy w kontakcie"
        content="Masz pytania dotyczące projektu CafeChain, pomysły na współpracę lub chcesz dowiedzieć się więcej o technologii, którą stosujemy? 
           Napisz do nas! Odpowiemy na każde zapytanie tak szybko, jak to możliwe. 
           Jesteśmy otwarci na nowe pomysły, partnerstwa i wspólne działania na rzecz transparentnej przyszłości kawy."
        first
        reverse
        imageSrc={ContactImg1}
      />
      <DecoratedSectionBlock imageSrc={ContactImg2} background="orange">
        <ContactForm />
      </DecoratedSectionBlock>
    </motion.div>
  );
}
