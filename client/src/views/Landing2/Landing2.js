import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loeader';
import RightBar from '../../components/RightBar/RigthBar';
import { motion, AnimatePresence } from "framer-motion";

import {proyectos_destacados} from '../../global-func.js'


import LogoAzul from '../../components/LogoAzul/LogoAzul.svg';
import GiraGira from '../../components/GiraGira/giragira.svg';

import { ReactComponent as Logo1 } from '../../components/LogoAzul/LogoAzul2.svg';

import './Landing2.css';


const Landing2 = ({ setActiveTab }) => {
    
       const [activeProject, setActiveProject] = useState(1)
       const [infoProject, setInfoProject] = useState({})
       const [nextProject, setNextProject] = useState({})
       
       const [scrollNow, setScrollNow] = useState(false);


       const [fullVideo, setFullVideo] = useState(true)

       useEffect(()=>{
              setInfoProject(proyectos_destacados.filter((element => element.id == activeProject) )[0])

              if (proyectos_destacados.filter((element => element.id == (activeProject)*1+1  ) )[0] != undefined) {
                     setNextProject( proyectos_destacados.filter((element => element.id ==(activeProject)*1+1 ) )[0] )
              }else{
                     setNextProject( proyectos_destacados.filter((element => element.id == 1) )[0] )
              }
              // let new_video = proyectos_destacados.filter((element => element.id == activeProject) )[0].video
              // console.log(proyectos_destacados.filter((element => element.id == activeProject) )[0].video )
              // console.log( document.getElementById("video-project-src") )
              // document.getElementById("video-project-src").setAttribute('src', "/assets/videos/"+new_video)

       }, [activeProject])
       



function selectProject(e) {
       // Que desaparezca la info actual
       // Que cambie la info
       if (e.target.tagName != "LI") {
              var targ = e.target.closest('li') 
       }else{
              var targ = e.target
       }
       setActiveProject(targ.getAttribute('data-id'))

       // Que aparezca la nueva info

}

// --- BUTTON
// const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

useEffect(()=>{

  $$(`.play-button`).forEach((el) =>
  el.addEventListener("mousemove", function (e) {
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - pos.left - pos.width / 2;
    const my = e.clientY - pos.top - pos.height / 2;

    this.style.transform = "translate(" + mx * 0.15 + "px, " + my * 0.3 + "px)";
    this.style.transform +=
      "rotate3d(" + mx * -0.5 + ", " + my * -0.7 + ", 0, 30deg)";
    this.children[0].style.transform =
      "translate(" + mx * 0.025 + "px, " + my * 0.075 + "px)";
  })
);

$$(`.play-button`).forEach((el) =>
  el.addEventListener("mouseleave", function () {
    this.style.transform = "translate3d(0px, 0px, 0px)";
    this.style.transform += "rotate3d(0, 0, 0, 0deg)";
    this.children[0].style.transform = "translate3d(0px, 0px, 0px)";
  })
);


setTimeout(() => {
      for (let index = 0; index < document.querySelectorAll('aside path').length; index++) {
       const element = document.querySelectorAll('aside path')[index];
       element.style.fill = '#28353e'
       element.style.filter = 'drop-shadow(2px 4px 6px #00000078)'
      }
}, 100);




     const zoom = (event) =>{
              setScrollNow(true)
     }

     window.addEventListener('wheel', zoom);
     


}, [])


useEffect(()=>{
       if (scrollNow) {
              // document.querySelector('body').style.overflow = 'hidden'
              window.scrollTo(0,document.body.scrollHeight);
              document.querySelector('#banner svg').style.transform = 'translate(-50%, -10%) scale(1)';   
              setTimeout(() => {
                     document.querySelector('#banner').style.height = '0';   
                     
              }, 800);
       }
}, [scrollNow])
       

     
function listenToScroll() {
       const winScroll = document.body.scrollTop || document.documentElement.scrollTop
     
       const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
     
       const scrolled = winScroll / height
     
       this.setState({
         theposition: scrolled,
       })
     }



  function render(){
      return  <div id="Landing2-view">
                     <aside id="banner">
                            <Logo1 className="someClassThatWillBeUsedInCSS" alt="icon" />
                            <div id="scroll-more" onClick={ ()=>{ setScrollNow(true) } }>
                                   <span>VIEW MORE</span>
                                   <div id="scroll-btn">
                                          <span></span>
                                   </div>
                            </div>
                     </aside>
              {/* <Loader /> */}
                    <div id="scroll-h">
                     <div id="video-cont">
                            {/* <img src={LogoAzul} width={5}/> */}
                            <video autoPlay loop controls={fullVideo ? false : true} src={"/assets/videos/"+infoProject.video} muted={fullVideo ? true : false} />
                            

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
                            <div id="logo-cont">
                                   <img src={LogoAzul} />
                            </div>
                            
                            <div id="videos-home">
                                   <ul>
                                          {proyectos_destacados.map( (proyecto, index) => (
                                                 <Link to={`/project/${index}`}>
                                                        <li data-id={proyecto.id} data-title={proyecto.nombre} onMouseOver={ (e)=>{selectProject(e)}} className={proyecto.id == activeProject && "video-selected"} >
                                                               <div>
                                                                      <p data-text={proyecto.nombre}>{proyecto.nombre} </p>
                                                               </div>
                                                        </li>
                                                        <div className="info-project">
                                                               <div className="description">
                                                                      <span>{proyecto.descr}</span>
                                                               </div>
                                                               <div className="read-more">
                                                                      <span>Read more</span>
                                                                      <img src="/assets/down.png" />
                                                               </div>
                                                        </div>
                                                        <br />
                                                 </Link>
                                          ) )
                                          }
                                   </ul>
                            </div>
                     </div>

                     

                     <div id="info-video">
                            <div id="dale-play" onClick={()=>{setFullVideo(false)}} >
                                   <div>
                                          <span>►</span>
                                          <p>Watch now</p>
                                   </div>
                            </div>
                            <Link to="/projects" id="more-work-cont">
                                   <div>
                                          <p>MORE WORK</p>
                                          {/* <img src="/assets/down.png" /> */}
                                          <aside id="section10" class="scrollbutton"><a href="#"><span></span></a></aside>
                                   </div>
                            </Link>
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




export default Landing2;