import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import RightBar from '../../components/RightBar/RigthBar';

import {bbdd_proyectos} from '../../global-func'
import LogoAzul from '../../components/LogoAzul/LogoAzul.svg'

import './Project.css';


const Project = ({setActiveTab}) => {
    

       const { id } = useParams();
       
       const proyecto = bbdd_proyectos[id]

       const more_work = bbdd_proyectos.slice(0,5)

  function render(){
      return  <div id="Project-view">
                     <a href="/">
                            <img className="logo" src={LogoAzul} />
                     </a>
                    <main>
                            <div id="video-project-cont">
                                   <video width="100%" controls src={"/assets/videos/"+proyecto.video} />
                                   
                            </div>
                            <div id="project-info">
                                   <h3>{proyecto.nombre}</h3>
                                   <p>{proyecto.descr}</p>
                                   <button>See more</button>
                            </div>

                    </main>
                    <div id="more-info-project">
                           <div id="more-work">
                          
                            <div id="project-description">
                                          <div>
                                                 <h5>DESCRIPTION</h5>
                                                 <p>{proyecto.long_descr}</p>
                                                 
                                                 {proyecto.staff.map((staff)=>(
                                                        <>
                                                               <br />
                                                               <br />
                                                               <span>{Object.keys(staff)}</span>: <span className="tagRole">{Object.values(staff)}</span>
                                                        </>
                                                 ))}
                                          </div>
                                          <div>
                                                 <h5>BACK</h5>
                                                 
                                                 {proyecto.imgs.map((img)=>(
                                                        <img src={img} />
                                                 ))}
                                          </div>
                            </div>
                            <div id="projects-related">
                                   <div>
                                          <h5>MORE WORK</h5>
                                          <ul>
                                                 {more_work.map((project, index)=>(
                                                        index != id &&
                                                        <li>
                                                               <div className="thumb-related">
                                                                      <img src={project.imgs[0]} />
                                                               </div>
                                                               <div>
                                                                      <h6>{project.nombre}</h6>
                                                                      <p>{project.descr}</p>
                                                               </div>
                                                        </li>                                                        
                                                 ))

                                                 }
                                                        
                                          </ul>
                                   </div>
                                   <a id="btn-more-projects" href="#more-work"><span>See all projects</span></a>
                            </div>
                     </div>
                    </div>
                    <RightBar activePage="Work" />
              </div>

       }
       
       
       return ( render() )
}




export default Project;