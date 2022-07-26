import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import RightBar from '../../components/RightBar/RigthBar';
import { motion, AnimatePresence } from "framer-motion";

import LogoAzul from '../../components/LogoAzul/LogoAzul.svg'

import './About.css';
import Gallery from '../../components/Gallery/Gallery';


const About = ({setActiveTab}) => {
    

       const [pVisible, setPVisible] = useState(false)
       const [scrollNow, setScrollNow] = useState(false);


       useEffect(()=>{
              const zoomAbout = (event) =>{
                     setPVisible(true)
              }
         
              window.addEventListener('scroll', zoomAbout);
              
       }, [])
         
         

  function render(){
      return  <div id="About-view">
                    <div>
                     <div id="logos-cont">
                         <img id="logo-negro" className={pVisible && "negro-inv"} src={LogoAzul} />
                         <img id="logo-blanco" className={pVisible && "blanco-inv"} src={LogoAzul} />
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
                                          <p><span>We are an audiovisual production company</span><div><img src="/assets/miscelanias/todas/Miscelaneas Vermú_Mesa de trabajo 1 copia 79.svg"/></div><span>based in Buenos Aires, Argentina.</span><div><img  style={{'transform':'translate(-65%, -67%)'}} src="/assets/miscelanias/todas/Miscelaneas Vermú_Mesa de trabajo 1 copia 8.svg"/></div><br/><span>Vermú was born in 2021, guided</span><div><img style={{'transform':'translate(-55%, -73%)'}} src="/assets/miscelanias/todas/Miscelaneas Vermú_Mesa de trabajo 1 copia 81.svg"/></div> <div><img style={{'transform':'translate(-86%, -63%)'}} src="/assets/miscelanias/todas/Miscelaneas Vermú_Mesa de trabajo 1 copia 54.svg"/></div><span>by our passions & our love for work.</span><div><img style={{'width':'30px','transform':'translate(-95%, -68%)'}} src="/assets/miscelanias/todas/Miscelaneas Vermú_Mesa de trabajo 1 copia 4.svg"/></div><span>Our main objective is to generate confidence,</span> <span>as we believe the human factor is essential</span><div style={{'width':'110px'}}><img style={{'width':'71px', 'transform':'translate(-55%,-80%)'}} src="/assets/miscelanias/todas/Miscelaneas Vermú_Mesa de trabajo 1 copia 83.svg"/></div><span> when it comes to creating something new.</span><br/><span>We are conected to Earth, and to what</span><div><img style={{'transform':'translate(-65%, -64%)'}} src="/assets/miscelanias/todas/Miscelaneas Vermú_Mesa de trabajo 1 copia 42.svg"/></div><span> brings us here today.</span><span> We are movement. </span><div><img style={{'width': '28px','transform': 'translate(-90%,-70%)'}} src="/assets/miscelanias/todas/Miscelaneas Vermú_Mesa de trabajo 1 copia 77.svg"/></div><span>We are the ones who make things happen.</span> <br/><b>We are vermú.</b></p>

                                          <a href="#gallery" id="scroll">
                                                 <span></span>
                                          </a>
                                          <span id="see-more"><a href="#gallery">SEE MORE</a></span>
                            </motion.div>
                            :
                            <button id="leer-mas-about" onClick={ ()=>{ setPVisible(true) } }><span>ABOUT US</span> <img style={{'filter':'invert(1)'}} src="/assets/down.png"/></button>
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