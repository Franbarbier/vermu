import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


import './VideoLanding.css';


const VideoLanding = ({fullVideo, infoProject }) => {



  function render(){
    // style={{ 'width': menu && '15vw' }} 
      return  <video autoPlay muted loop controls={fullVideo ? false : true} muted={fullVideo ? true : false}>
                <source src={"/assets/videos/"+infoProject.video} type="video/mp4" />
                </video>

       }
       
       
       return ( render() )
}




export default VideoLanding;