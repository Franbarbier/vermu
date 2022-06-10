import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
// import Landing from '../Landing/Landing';
import Landing2 from '../Landing2/Landing2';


import './Home.css';


const Home = ({setActiveTab }) => {
    


  function render(){
      return  <div id="Home-view">
                    <Landing2 />
              </div>

       }
       
       
       return ( render() )
}




export default Home;