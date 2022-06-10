import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


import './Loader.css';


const Loader = ({setActiveTab }) => {

  const [isLoading, setIsLoading] = useState(true)

  function render(){
    // style={{ 'width': menu && '15vw' }} 
      return  <motion.div id="Loader-cont">
                <div>
                    <div id="franja-superior"></div>
                    <div id="center-cont">
                      <img src="/assets/logo-color.png"/>
                      <div id="loading"></div>
                    </div>
                    <div id="franja-inferior"></div>
                </div>
              </motion.div>

       }
       
       
       return ( render() )
}




export default Loader;