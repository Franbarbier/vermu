import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loeader';
import RightBar from '../../components/RightBar/RigthBar';
import { motion, AnimatePresence } from "framer-motion";

import {proyectos_destacados} from '../../global-func.js'

import './Landing.css';
import VideoLanding from '../../components/VideoLanding/VideoLanding';


const Landing = ({ setActiveTab }) => {
    
       const [activeProject, setActiveProject] = useState(1)
       const [infoProject, setInfoProject] = useState({})
       const [nextProject, setNextProject] = useState({})

       const [fullVideo, setFullVideo] = useState(true)

       useEffect(()=>{
              setInfoProject(proyectos_destacados.filter((element => element.id == activeProject) )[0])

              if (proyectos_destacados.filter((element => element.id == (activeProject)*1+1  ) )[0] != undefined) {
                     setNextProject( proyectos_destacados.filter((element => element.id ==(activeProject)*1+1 ) )[0] )
              }else{
                     setNextProject( proyectos_destacados.filter((element => element.id == 1) )[0] )
              }
              let new_video = proyectos_destacados.filter((element => element.id == activeProject) )[0].video
              console.log(new_video )
              // console.log( document.getElementById("video-project-src") )
              // document.getElementById("video-project-src").setAttribute('src', "/assets/videos/"+new_video)

       }, [activeProject])
       
       useEffect(()=>{
              console.log(nextProject)
       }, [nextProject])


function selectProject(e) {
       // Que desaparezca la info actual
       // Que cambie la info
       setActiveProject(e.target.getAttribute('data-id'))
       // Que aparezca la nueva info

}
       
  function render(){
      return  <div id="Landing-view">
              {/* <Loader /> */}
                    <div>
                     <div id="video-cont">
                            {/* <img src="/assets/logo-color.png" width={5}/> */}
                            <video autoPlay muted loop controls={fullVideo ? false : true} src={"/assets/videos/"+infoProject.video}  muted={fullVideo ? true : false} />
                            

                     </div>
                     <AnimatePresence>

                     {fullVideo && (
                     <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition= {{ duration: 1 }}
                     >
                     <div id="LeftBar">
                            <div>
                                   <img src="/assets/logo-color.png" />
                            </div>
                            <div id="videos-home">
                                   <ul>
                                          {proyectos_destacados.map( (proyecto) => (
                                                 <>
                                                        <br />
                                                        <li data-id={proyecto.id} onClick={ (e)=>{selectProject(e)}} className={proyecto.id == activeProject && "video-selected"} >{proyecto.nombre}</li>
                                                 </>
                                          ) )
                                          }
                                   </ul>

                            </div>
                     </div>

                     
                     
                     <div id="info-video">
                            <div>
                                   <div id="">
                                          <span>{infoProject.descr}</span>
                                          <h1>{infoProject.nombre}</h1>
                                   </div>
                                   <div>
                                          <button onClick={ ()=>{setFullVideo(false)} }>PLAY ></button>
                                   </div>
                            </div>
                            <div>
                                   <div>
                                          <p>MORE WORK ></p>
                                   </div>
                                   <div>
                                          <p data-id={nextProject.id} onClick={ (e)=>{selectProject(e)}} >{nextProject.nombre} ></p>
                                   </div>
                            </div>
                     </div >

                     <RightBar activePage="Home" />

                     </motion.div>
                     )}


                     {!fullVideo && (
                     <motion.div
                            id="close-vid"
                            exit={{ y: 0, opacity: 0 }}
                            initial={{ y: 0, opacity: 0 }}
                            animate={{y: 20, opacity: 1 }}
                            transition= {{ duration: 1 }}
                            onClick={()=>{setFullVideo(true)}}
                     >
                            <span>x</span>
                     </motion.div>
                     )}



                     </AnimatePresence>
                    </div>
              </div>

       }
       
       
       return ( render() )
}




export default Landing;