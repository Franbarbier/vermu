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
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg" alt="" />
                      </div>

                      <div class="img-wrapper faster">
                          
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/antiquedollboy.jpg" alt="" />
                      </div>

                      <div class="img-wrapper slower vertical">
                          
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/windowshopclock.jpg" alt="" />
                      </div>

                      <div class="img-wrapper slower slower-down">
                          
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/swanduckriver.jpg" alt="" />
                      </div>

                      <div class="img-wrapper">
                          
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-terrace.jpg" alt="" />
                      </div>

                      <div class="img-wrapper slower">
                          
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-seine-boat.jpg" alt="" />
                      </div>

                      <div class="img-wrapper faster1">
                          
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/old-man-river.jpg" alt="" />
                      </div>
                      
                      <div class="img-wrapper slower slower2">
                          
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-table-street.jpg" alt="" />
                      </div>
                      
                      <div class="img-wrapper">
                          
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/street-scene-people.jpg" alt="" />
                      </div>
                      
                      <div class="img-wrapper slower">
                          
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/notre-dame-river-boat.jpg" alt="" />
                      </div>
                      
                      <div class="img-wrapper slower last">
                          
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/shop-window-reflection.jpg" alt="" />
                      </div>
                    </div>
                    
                  </div>


              </motion.div>

       }
       
       
       return ( render() )
}




export default Gallery;