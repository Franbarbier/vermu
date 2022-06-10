import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import RightBar from '../../components/RightBar/RigthBar';
import { bbdd_proyectos } from '../../global-func.js';

import './Projects.css';
import LogoAzul from '../../components/LogoAzul/LogoAzul.svg'

const Projects = ({setActiveTab}) => {
    



  function render(){
      return  <div id="Projects-view">
                     <a href="/">
                            <img className="logo" src={LogoAzul} />
                     </a>
                    <main>
                            <div className='great-row'>
                                   <Link to="/project/0" className="vertical-one project-card" onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } } >
                                                 {/* <img src="https://images.pexels.com/photos/2872667/pexels-photo-2872667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}

                                                 <video muted loop controls={ false } src={"/assets/videos/"+bbdd_proyectos[0].video} />
                                                 
                                                 
                                          <div>
                                                 <h3>{bbdd_proyectos[0].nombre}</h3>
                                                 <h5>{bbdd_proyectos[0].descr}</h5>
                                                 <button>Watch now</button>
                                          </div>
                                   </Link>
                                   <div className='horizontal-two'>
                                          <Link to="/project/1" className='project-card' onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }  >

                                                        <video muted loop controls={ false } src={"/assets/videos/"+bbdd_proyectos[1].video} />
                                                 <div>
                                                        <h3>{bbdd_proyectos[1].nombre}</h3>
                                                        <h5>{bbdd_proyectos[1].descr}</h5>
                                                        <button>Watch now</button>
                                                 </div>
                                          </Link>
                                          <Link to="/project/2" className='project-card' onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }  >

                                                 <video muted loop controls={ false } src={"/assets/videos/"+bbdd_proyectos[2].video} />
                                                 <div>
                                                        <h3>{bbdd_proyectos[2].nombre}</h3>
                                                        <h5>{bbdd_proyectos[2].descr}</h5>
                                                        <button>Watch now</button>
                                                 </div>
                                          </Link>
                                   </div>
                            </div>
                            <div className='great-row'>
                                   <div className='horizontal-two'>
                                          <Link to="/project/3" className='project-card' onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }  >

                                                 <video muted loop controls={ false } src={"/assets/videos/"+bbdd_proyectos[3].video} />
                                                 <div>
                                                        <h3>{bbdd_proyectos[3].nombre}</h3>
                                                        <h5>{bbdd_proyectos[3].descr}</h5>
                                                        <button>Watch now</button>
                                                 </div>
                                          </Link>
                                          <Link to="/project/4" className='project-card' onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }  >

                                                 <video muted loop controls={ false } src={"/assets/videos/"+bbdd_proyectos[4].video} />
                                                 <div>
                                                        <h3>{bbdd_proyectos[4].nombre}</h3>
                                                        <h5>{bbdd_proyectos[4].descr}</h5>
                                                        <button>Watch now</button>
                                                 </div>
                                          </Link>
                                   </div>
                                   <Link to="/project/5" className="vertical-one project-card" onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }  >

                                          <video muted loop controls={ false } src={"/assets/videos/"+bbdd_proyectos[5].video} />
                                          <div>
                                                 <h3>{bbdd_proyectos[5].nombre}</h3>
                                                 <h5>{bbdd_proyectos[5].descr}</h5>
                                                 <button>Watch now</button>
                                          </div>
                                   </Link>
                            </div>
                            <div className='great-row'>
                                   <Link to="/project/6" className="vertical-one project-card" onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } } >
                                                 {/* <img src="https://images.pexels.com/photos/2872667/pexels-photo-2872667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}

                                                 <video muted loop controls={ false } src={"/assets/videos/"+bbdd_proyectos[6].video} />
                                                 
                                                 
                                          <div>
                                                 <h3>{bbdd_proyectos[6].nombre}</h3>
                                                 <h5>{bbdd_proyectos[6].descr}</h5>
                                                 <button>Watch now</button>
                                          </div>
                                   </Link>
                                   <div className='horizontal-two'>
                                          <Link to="/project/7" className='project-card' onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }  >

                                                        <video muted loop controls={ false } src={"/assets/videos/"+bbdd_proyectos[7].video} />
                                                 <div>
                                                        <h3>{bbdd_proyectos[7].nombre}</h3>
                                                        <h5>{bbdd_proyectos[7].descr}</h5>
                                                        <button>Watch now</button>
                                                 </div>
                                          </Link>
                                          <Link to="/project/8" className='project-card' onMouseEnter={ (e)=>{  e.target.play() } } onMouseLeave={ (e)=>{  e.target.pause() } }  >

                                                 <video muted loop controls={ false } src={"/assets/videos/"+bbdd_proyectos[8].video} />
                                                 <div>
                                                        <h3>{bbdd_proyectos[8].nombre}</h3>
                                                        <h5>{bbdd_proyectos[8].descr}</h5>
                                                        <button>Watch now</button>
                                                 </div>
                                          </Link>
                                   </div>
                            </div>

                    </main>
                    
                    <RightBar activePage="Work" />

              </div>

       }
       
       
       return ( render() )
}




export default Projects;