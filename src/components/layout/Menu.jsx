import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./../../css/components/layout/Menu.css";

export default function Menu({ isOpen, handleClose }) {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("no-scroll");
      document.body.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    handleClose(); 
  }, [location.pathname]);

  const menuItems = [
    { name: "Śledź kawę", path: "/partie/1" },
    { name: "Co to jest blockchain?", path: "/co-to-jest-blockchain" },
    { name: "O projekcie", path: "/o-projekcie" },
    { name: "Kontakt", path: "/kontakt" },
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
          <motion.div
            className="menu__items"
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
                className="menu__item"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link to={path}>
                  <motion.button
                    className="menu__button"
                    onClick={handleClose}
                    transition={{ duration: 0.3 }}
                  >
                    {name}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="menu__bottom-bar"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}