import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import RightBar from '../../components/RightBar/RigthBar';
import { bbdd_proyectos } from '../../global-func.js';
import { motion, AnimatePresence } from "framer-motion";


import './Projects2.css';
import LogoAzul from '../../components/LogoAzul/LogoAzul.svg'

const Projects2 = ({setActiveTab}) => {
    
       const [scrollCero, setScrollCero] = useState(false)

       useEffect(()=>{
              window.scroll(0, document.getElementById("Projects2-view").getBoundingClientRect().top + window.scrollY  );

              const zoom = (event) =>{
                     if (window.pageYOffset == 0) {
                            setScrollCero(true)
                     }
              }
              window.addEventListener('scroll', zoom);
       },[])

       const navigate = useNavigate();

       useEffect(()=>{
              if (scrollCero) {
                     navigate('/')
              }
       },[scrollCero])


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
                     <div id="logos-gallery">
                            <div>
                                   {[...Array(12)].map((index) => ( 
                                   <div>
                                          <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/400px-Levi%27s_logo.svg.png" />
                                   </div>
                                   ))}
                            </div>
                     </div>
                     <ul>

                            {bbdd_proyectos.map((proyecto, index)=>(
                                   <motion.li 
                                          initial={{ 
                                                 opacity: 0,
                                                 y: 10,
                                          }}
                                          whileInView={{ 
                                                 opacity: 1,
                                                 y: 0,
                                                 transition: { 
                                                        duration: 1
                                                 }
                                          }}
                                          
                                          viewport={{ once: true }}
                                          onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }>
                                          <Link to={`/project/${index}`} >
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
                                   </motion.li>
                            ))}
                     </ul>

                    </main>
                    <aside id="mise-cont">
                    {Array.apply(null, { length: 15 }).map((e, i) => (
                        <div
                            className={`anim${Math.floor(Math.random() * (4 - 1 + 1)) + 1}`}
                            style={{ 'top': `${Math.floor(Math.random() * (100 - 1 + 1)) + 1}%`,  'left': `${Math.floor(Math.random() * (100 - 1 + 1)) + 1}%`,'animationDelay': `${Math.floor(Math.random() * (4 - 1 + 1)) + 1}s` }}
                        >
                            <img
                                src={`/assets/miscelanias/todas/Miscelaneas Vermú_Mesa de trabajo 1 copia ${ Math.floor(Math.random() * (104 - 1 + 1)) + 1}.svg`}
                            />
                        </div>
                    ))}
                    </aside>
                    
                    <RightBar activePage="Work" />

              </div>

       }
       
       
       return ( render() )
}




export default Projects2;