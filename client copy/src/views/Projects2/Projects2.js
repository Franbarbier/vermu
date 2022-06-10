import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import RightBar from '../../components/RightBar/RigthBar';
import { bbdd_proyectos } from '../../global-func.js';
import { motion, AnimatePresence } from "framer-motion";

import './Projects2.css';
import LogoAzul from '../../components/LogoAzul/LogoAzul.svg'

const Projects2 = ({setActiveTab}) => {
    



  function render(){
      return  <div id="Projects2-view">
                     <a href="/">
                            <img className="logo" src={LogoAzul} />
                     </a>
                    <main>
                     <header>
                            <motion.h2
                                   initial={{ opacity: 0, y: 30 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition= {{ duration: 1 }}
                            >Our work</motion.h2>
                     </header>
                     <ul>
                            {bbdd_proyectos.map((proyecto)=>(
                                   <li onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }>
                                          <Link to={`/project/${proyecto.id}`} >
                                          <div>
                                                 <div className="videos-cont">
                                                        <video muted loop controls={ false } src={"/assets/videos/"+proyecto.video} />
                                                        <div></div>
                                                 </div>
                                                 <div className="txts-cont">
                                                        <hr />
                                                        <h4>{proyecto.nombre}</h4>
                                                        <p>{proyecto.descr}</p>
                                                        <button>Watch now</button>
                                                        <div>
                                                               <img src={`/assets/miscelanias/miscelanias (${ Math.floor(Math.random() * (10 - 1 + 1)) + 1}).svg`} />
                                                               <img src={`/assets/miscelanias/miscelanias (${ Math.floor(Math.random() * (10 - 1 + 1)) + 1}).svg`} />
                                                        </div>
                                                 </div>
                                          </div>
                                          </Link>
                                   </li>
                            ))}
                     </ul>

                    </main>
                    
                    <RightBar activePage="Work" />

              </div>

       }
       
       
       return ( render() )
}




export default Projects2;