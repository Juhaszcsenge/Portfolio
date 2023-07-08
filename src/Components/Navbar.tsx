import { AnimatePresence, motion, useCycle } from "framer-motion";
import React, { useRef, useState } from "react";
import { GoThreeBars, GoX } from "react-icons/go";

const Navbar = () => {
  const ProjectRef = useRef(null);
  const SkillsRef = useRef(null);
  const ContactRef = useRef(null);

  const handleNavItemClick = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };


const navMobile = [
    {title: "About me", url: "#Me"},
    {title: "Skills", url: "#Skills"},
    {title: "Works", url: "#Project"},
    {title: "Contact", url: "#Contact"},
    {title: "Linkedin", url: "https://www.linkedin.com/in/juh%C3%A1sz-csenge-803302270/"},
    {title: "GitHub", url: "https://github.com/Juhaszcsenge"},
];

const navAnimation = {
  hidde: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.2,
      ease: "easeInOut",
    },
  },
};


const navItem = {
    hidden: {
        opacity: 0,
        y: "-20px",
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          // staggerChildren: 0.4,
          // delayChildren:.8
          ease: "easeInOut",
        },
    },
};

    const [works, setWorks] = useState([]);
    const [toggle, setToogle] = useState(false);
    const [open, cycleOpen] = useCycle(false, true);
  
    const [isOpen, setIsOpen] = useState(false);
  
    const itemVariants = {
      closed: {
        opacity: 0,
      },
      open: { opacity: 1 },
    };
    const sideVariants = {
      closed: {
        transition: {
          staggerChildren: 0.2,
          staggerDirection: -1,
        },
      },
      open: {
        transition: {
          staggerChildren: 0.2,
          staggerDirection: 1,
        },
      },
    };

    return(
        <div className="igme__navbar">
            <motion.div 
             variants={navAnimation}
             initial="hidden"
             animate="show"
             className="igme__navbar-logo"
            >
            <motion.a variants={navItem} href="">
          <img className="" src="/logo.png" />
        </motion.a>
      </motion.div>
      <motion.div
        variants={navAnimation}
        initial="hidden"
        animate="show"
        className="igme__navbar-links"
      >
        {navMobile.slice(0, -2).map((item) => (
          <motion.div
            variants={navItem}
            key={`navigation-link-${item.title}`}
            className="navigation-link"
          >
            <a href={`${item.url}`} className="igme__text">
              {item.title}
            </a>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={navAnimation}
        initial="hidden"
        animate="show"
        className="igme__navbar-lang"
      >
       <motion.div variants={navItem} className="igme__navbar-select">
          <span>
            <div className="text-white">
              <span className="wrap-lang ">
                {/* <img src="/globe.png" /> */}
              </span>
              <div className="language">En</div>
            </div>
          </span>
          <div className="igme__navbar-subMenu">
            <div className="wrap-subMenu">
              <a href="">En</a>
              <a href="">HU</a>
            </div>
          </div>
        </motion.div>
        <motion.div variants={navItem} className="icons-wrapper app__flex">
          <a
            href="https://www.linkedin.com/in/juh%C3%A1sz-csenge-803302270/"
            target="_blank"
            className="app__flex iconSocial"
          >
            <img src="/linkedin.png" />
          </a>
          <a
            href="https://github.com/Juhaszcsenge"
            target="_blank"
            className="app__flex iconSocial"
          >
            <img src="/github.svg" />
          </a>
        </motion.div>
      </motion.div>
      <div className="igme__navbar-menu">
        <GoThreeBars onClick={() => setIsOpen(true)} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="inside-mobile"
              initial={{ width: 0 }}
              animate={{
                width: "100%",
              }}
              exit={{
                width: 0,
                transition: { delay: 0.1, duration: 0.3 },
              }}
            >
              <div className="container-close">
                <div>
                  <GoX onClick={() => setIsOpen(false)} />
                </div>
              </div>
              <motion.div
                className="container-mobile"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {navMobile.map((item) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    key={item.title}
                    className="navigation-link-mobile"
                  >
                    <a href={item.url} onClick={() => setIsOpen(false)}>
                      {item.title}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    );
  }
export default Navbar;
