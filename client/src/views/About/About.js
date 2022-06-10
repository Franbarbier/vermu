import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import RightBar from '../../components/RightBar/RigthBar';
import { motion, AnimatePresence } from "framer-motion";


import './About.css';
import Gallery from '../../components/Gallery/Gallery';


const About = ({setActiveTab}) => {
    

       const [pVisible, setPVisible] = useState(false)


  function render(){
      return  <div id="About-view">
                    <div>
                     <div id="logos-cont">
                         <img id="logo-negro" className={pVisible && "negro-inv"} src="/assets/logo-color.png" />
                         <img id="logo-blanco" className={pVisible && "blanco-inv"} src="/assets/logo-color.png" />
                     </div>
                     <div id="info-us">
                     <AnimatePresence>

                            {pVisible ?
                             <motion.div
                             initial={{ opacity: 0, y: 0 }}
                             animate={{ opacity: 1, y: -125 }}
                             exit={{ opacity: 0, y: 0 }}
                             transition= {{ duration: 0.7, delay: 0.1 }}
                             delay
                            >
                                          <p>We are an audiovisual production company based in Buenos Aires, Argentina.<br/>Vermú was born in 2021, guided by our passions & our love for work. Our main objective is to generate confidence, as we believe the human factor is essential when it comes to creating something new.<br/>We are conected to Earth, and to what brings us here today. We are movement. we are the ones who make things happen. <br/>We are vermú.</p>

                                          <div id="scroll">
                                                 <span></span>
                                          </div>
                                          <span id="see-more"><a href="#gallery">SEE MORE</a></span>
                            </motion.div>
                            :
                            <button id="leer-mas-about" onClick={ ()=>{ setPVisible(true) } }>ABOUT US ></button>
                            }
                     </AnimatePresence>

                     </div>
                    </div>
                    {pVisible &&
                    <div id="gallery">
                            <Gallery />
                    </div>
                     }
                    <RightBar activePage="Us" />
              </div>

       }
       
       
       return ( render() )
}




export default About;