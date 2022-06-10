import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


import './Gallery.css';


const Gallery = ({ }) => {


  function render(){
    // style={{ 'width': menu && '15vw' }} 
      return  <motion.div id="Gallery-cont">
                    <div class="external">
                    <div class="horizontal-scroll-wrapper">
                      <div class="img-wrapper slower">
                          <img src="/assets/back/back (1).jpg" alt="" />
                      </div>

                      <div class="img-wrapper faster">
                          
                          <img src="/assets/back/back (2).jpg" alt="" />
                      </div>

                      <div class="img-wrapper slower vertical">
                          
                          <img src="/assets/back/back (3).jpg" alt="" />
                      </div>

                      <div class="img-wrapper slower slower-down">
                          
                          <img src="/assets/back/back (4).jpg" alt="" />
                      </div>

                      <div class="img-wrapper">
                          
                          <img src="/assets/back/back (5).jpg" alt="" />
                      </div>

                      <div class="img-wrapper slower">
                          
                          <img src="/assets/back/back (6).jpg" alt="" />
                      </div>

                      <div class="img-wrapper faster1">
                          
                          <img src="/assets/back/back (7).jpg" alt="" />
                      </div>
                      
                      <div class="img-wrapper slower slower2">
                          
                          <img src="/assets/back/back (8).jpg" alt="" />
                      </div>
                      
                      <div class="img-wrapper">
                          
                          <img src="/assets/back/back (9).jpg" alt="" />
                      </div>
                      
                      <div class="img-wrapper slower">
                          
                          <img src="/assets/back/back (10).jpg" alt="" />
                      </div>
                      
                      <div class="img-wrapper slower last">
                          
                          <img src="/assets/back/back (11).jpg" alt="" />
                      </div>
                    </div>
                    
                    <aside id="mise-cont">
                    {Array.apply(null, { length: 9 }).map((e, i) => (
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

                  </div>


              </motion.div>

       }
       
       
       return ( render() )
}




export default Gallery;