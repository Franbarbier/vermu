import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import RightBar from '../../components/RightBar/RigthBar';

import {bbdd_proyectos} from '../../global-func'
import LogoAzul from '../../components/LogoAzul/LogoAzul.svg'

import { motion, AnimatePresence } from "framer-motion";


import './Project.css';
import Gallery from '../../components/Gallery/Gallery';


const Project = ({setActiveTab}) => {
    

       const { id } = useParams();
       const [scrollNow, setScrollNow] = useState(1)
       const proyecto = bbdd_proyectos[id]

       const more_work = bbdd_proyectos.slice(0,5)

       // console.log(proyecto)

       useEffect(() => {
              const handleScroll = event => {
                     if (window.scrollY < 750) {
                            setScrollNow( 1 - (window.scrollY / 750))
                            console.log(window.scrollY)
                     }
              };
          
              window.addEventListener('scroll', handleScroll);
          
              return () => {
                window.removeEventListener('scroll', handleScroll);
              };
       }, []);
       

       useEffect(() => {
              console.log(scrollNow)
       }, [scrollNow]);

  function render(){
      return  <div id="Project-view">
                     <a href="/">
                            <img className="logo" src={LogoAzul} />
                     </a>
                    <main>
                            <div style={{'opacity': scrollNow}} className={scrollNow < 0.1 && 'chauGrad'} id="gradient-fondo"></div>
                            <div id="project-info">
                                   <div>
                                          <motion.h3
                                                 initial={{ opacity: 0, y: 30 }}
                                                 animate={{ opacity: 1, y: 0 }}
                                                 // exit={{ opacity: 0 }}
                                                 transition= {{ duration: 2,  ease: [0.26, 1.03, 0, 1] }}
                                          >{proyecto.nombre}</motion.h3>
                                   </div>
                                   <div>
                                          <motion.p
                                                 initial={{ opacity: 0, y: 30 }}
                                                 animate={{ opacity: 1, y: 0 }}
                                                 // exit={{ opacity: 0 }}
                                                 transition= {{ duration: 2,  ease: [0.26, 1.03, 0, 1], delay: 0.4 }}
                                          >{proyecto.descr}</motion.p>
                                   </div>
                                   {/* <div>
                                          <motion.button
                                                 initial={{ opacity: 0, y: 30 }}
                                                 animate={{ opacity: 1, y: 0 }}
                                                 // exit={{ opacity: 0 }}
                                                 transition= {{ duration: 1,  ease: [0.26, 1.03, 0, 1], delay: 0.7 }}
                                                 onClick={ ()=>{ document.querySelector('#more-work').scrollIntoView({behavior: "smooth"}) } }
                                          >See more</motion.button>
                                   </div> */}
                            </div>
                            <div id="video-project-cont">
                                   <video width="100%" controls src={"/assets/videos/"+proyecto.video} />
                                   
                            </div>

                    </main>
                    <div id="more-info-project">
                           <div id="more-work">
                          
                            <div id="project-description">
                                          <div>
                                                 <motion.h5
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition= {{ duration: 2, 
                                                                      ease: [0.26, 1.03, 0, 1],
                                                                      delay: 0.7,
                                                                      bounce: 1
                                                                      }}
                                                 >DESCRIPTION</motion.h5>
                                                 <motion.p 
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition= {{ duration: 2, 
                                                                      ease: [0.26, 1.03, 0, 1],
                                                                      delay: 1.2,
                                                                      bounce: 1
                                                                      }}
                                                 >{proyecto.long_descr}</motion.p>
                                                 
                                                 {proyecto.staff.map((staff, index)=>(
                                                        <motion.div
                                                               initial="hidden"
                                                               whileInView="show"
                                                               viewport={{ once: true }}
                                                               variants={{
                                                                      hidden: { opacity: 0, y: 10 },
                                                                      show: { opacity: 1, y: 0 }
                                                               }}
                                                               transition= {{ duration: 2, 
                                                                      ease: [0.26, 1.03, 0, 1],
                                                                      delay: ( index*2/10 + 1.7),
                                                                      bounce: 1
                                                               }}
                                                        >
                                                               <br />
                                                               <br />
                                                               <span>{Object.keys(staff)}</span>: <span className="tagRole">{Object.values(staff)}</span>
                                                        </motion.div>
                                                 ))}
                                          </div>
                                          <div>
                                                 <motion.h5
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition= {{ duration: 2, 
                                                                      ease: [0.26, 1.03, 0, 1],
                                                                      delay: 0.7,
                                                                      bounce: 1
                                                                      }}
                                                 >BACK</motion.h5>
                                                 
                                                 <div id="back">
                                                        <Gallery />
                                                 </div>

                                                 {/* {proyecto.imgs.map((img)=>(
                                                        <motion.img
                                                               initial={{ opacity: 0, y: 10 }}
                                                               whileInView={{ opacity: 1, y: 0 }}
                                                               viewport={{ once: true }}
                                                               transition= {{ duration: 3, 
                                                                             ease: [0.26, 1.03, 0, 1],
                                                                             delay: 0.5,
                                                                             bounce: 1
                                                                             }}
                                                               src={img} />
                                                 ))} */}
                                          </div>
                            </div>
                            <div id="projects-related">
                                   <div>
                                                 <motion.h5
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition= {{ duration: 2, 
                                                                      ease: [0.26, 1.03, 0, 1],
                                                                      delay: 0.7,
                                                                      bounce: 1
                                                                      }}
                                                 >MORE WORK</motion.h5>
                                         <ul>
                                                 {more_work.map((project, index)=>(
                                                        index != id &&
                                                        <motion.li
                                                               initial="hidden"
                                                               whileInView="show"
                                                               viewport={{ once: true }}
                                                               variants={{
                                                                      hidden: { opacity: 0, y: 10 },
                                                                      show: { opacity: 1, y: 0 }
                                                               }}
                                                               transition= {{ duration: 2, 
                                                                      ease: [0.26, 1.03, 0, 1],
                                                                      delay: ( index*2/10 + 1.7),
                                                                      bounce: 1
                                                               }}

                                                        >
                                                               <div className="thumb-related">
                                                                      {/* <img src={project.imgs[0]} /> */}
                                                                      <video width="100%" controls={false} pause src={"/assets/videos/"+project.video} />

                                                               </div>
                                                               <div>
                                                                      <h6>{project.nombre}</h6>
                                                                      <p>{project.descr}</p>
                                                               </div>
                                                        </motion.li>                                                        
                                                 ))

                                                 }
                                                        
                                          </ul>
                                   </div>
                                   <a id="btn-more-projects" href="#more-work"><span>See all projects</span></a>
                            </div>
                     </div>
                    </div>
                    <RightBar activePage="" />
              </div>

       }
       
       
       return ( render() )
}




export default Project;