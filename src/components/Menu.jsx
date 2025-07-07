import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; 
import Logo from "./../assets/logoHorizontal.svg";
import "../css/components/Menu.css";

export default function Menu({ isOpen, handleClose }) {
  const menuItems = [
    { name: "Śledź kawę", path: "/sledz-kawe" },
    { name: "O projekcie", path: "/o-projekcie" },
    { name: "Kontakt", path: "/kontakt" },
    { name: "English version", path: "/en" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="menu"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="menuHeader">
            <div className="logoSection">
              <img src={Logo} alt="Logo" className="logo" />
            </div>
            <button className="closeBtn" onClick={handleClose}>
              Zamknij
            </button>
          </div>

          <motion.div
            className="menuItems"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {menuItems.map(({ name, path }, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link to={path} onClick={handleClose}>
                  <motion.button
                    whileHover={{ scale: 1.1}}
                    transition={{ duration: 0.3 }}
                  >
                    {name}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
