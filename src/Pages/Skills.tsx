import React, {useState} from "react";
import { motion } from 'framer-motion';
import { title } from "process";



const skillArr = [
    { title: "Css", srcImg: "/css.svg" },
    { title: "Html", srcImg: "/html5.png" },
    { title: "JavaScript", srcImg: "/javaScript.svg" },
    { title: "Bootstrap", srcImg: "/bootstrap-logo.svg" },
    { title: "ReactTs", srcImg: "/reactJs.svg" },
    { title: "TypeScript", srcImg: "/typeScript.svg" },
    { title: "NestJs", srcImg: "/nestjs.svg" }
  ];

  
export default  function Skills() {
   
    const [skills, setSkills] = useState(skillArr);

    const explainPhrase = {
        hidden: {opacity: 0, y: "-20px" },
        show: { opacity: 1, y: "0", transition:{delay: 2.4, ease: "easeInOut"}}
      }
    
    
      const skillAnimation = {
        hidden: {opacity: 0},
        show: { opacity: 1, y: "0", transition:{duration: 0.2, staggerChildren: 0.2, ease: "easeInOut"}}
      }
    
      const skillItem = {
        hidden: {opacity: 0, y: "-20px"},
        show: { opacity: 1, y: "0", transition:{duration: 0.5, ease: "easeInOut", delay: 2.4}}
      }

    return(
        <div className="img_skill">
            <div className="img_wrap">
                <div className="carousel">
                    <motion.h5 
                    variants={explainPhrase}
                    initial="hidden"
                    animate="show"
                    className="img_title" style={{color: "white"}}
                    >
                     Tapaszalataim: 
                    </motion.h5>
                    
                    <div className="skill">
                    <motion.div
                    variants={skillAnimation}
                    initial="hidden"
                    animate="show"
                    className="wrap_item"
                    >
                        {skillArr.map((skill,index) => (
                            <motion.div
                            key={skill.title}
                            variants={skillItem}
                            className="skill-item"
                            >
                                <img src={skill.srcImg} />
                                </motion.div>
                        ))}
                        </motion.div>
                    </div>
                  
                </div>
            </div>
        </div>
    )

}