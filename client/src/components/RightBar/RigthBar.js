import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


import './RightBar.css';


const RightBar = ({setActiveTab, activePage }) => {

const [menu, setMenu] = useState(false)

function abrirMenu() {
    setMenu(!menu)
}

const pages = [
    {nombre: 'Home',
    link: "/"},
    {nombre: 'Work',
    link: "/projects"},
    { nombre: 'Us',
    link: "/about"},
    { nombre: 'Contact',
    link: "/contact"}
]

const menu_status = {
    abierto: { width: '15vw' },
    cerrado: { width: '25px' }
}

const menu_items = {
    visible: i => ({
      opacity: 1,
      x: -15,
      transition: {
        delay: i * 0.15,
        // stiffness: 2000,
      },
    })
  }



  function render(){
    // style={{ 'width': menu && '15vw' }} 
    //   return  <motion.div id="RightBar-view" animate={menu ? "abierto" : 'cerrado'} variants={menu_status}  >
      return  <motion.div id="RightBar-view" >
            
            <div>

                    <div>
                        <div id="menu-bars" onClick={ abrirMenu }>
                            {/* <img src="" /> */}
                            <div className={menu && "rayas-menos"} id="barra-uno"></div>
                            <div className={menu && "rayas-menos"} id="barra-dos"></div>
                        </div>
                        

                </div>
                <div id="rrss">
                    <div>
                        <a>
                            <img src="/assets/instagram.png"/>
                        </a>
                        <a>
                            <img src="/assets/vimeo.png"/>
                        </a>
                    </div>
                </div>
             </div>

                {menu &&
                        <>
                                <motion.div
                                    style={{
                                        'height': '100vh',
                                        'width': '100vw',
                                        'position': 'fixed',
                                        'top': '0',
                                        'left': '-95.5vw',
                                        'backgroundColor': '#ddd',
                                        'zIndex': '80'
                                    }}
                                    initial={{ y: "100vh"}}
                                    animate={{ y: 0 }}
                                    exit={{ y: "100vh"}}
                                    transition={{ duration: 0.7 }}
                                />

                            <motion.div
                             initial={{ y: "100vh"}}
                             animate={{ y: 0 }}
                             exit={{ y: "100vh"}}
                             transition={{ duration: 0.7, delay: 0.5}}
                             id="new-menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/projects">Work</Link></li>
                                    <li><Link to="/about">Us</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                                <aside>
                                    <div>
                                        <a>
                                            <span>INSTAGRAM</span>
                                            <img src="/assets/instagram.png" />
                                        </a>
                                        <a>
                                            <img src="/assets/vimeo.png" />
                                            <span>VIMEO</span>
                                        </a>
                                    </div>
                                </aside>
                                <div id="iconCont">
                                    <img src="/assets/miscelanias/todas/Miscelaneas Vermú_Mesa de trabajo 1 copia 29.svg" />

                                </div>
                            </motion.div>
                        </>
                    }
              </motion.div>

       }
       
       
       return ( render() )
}




export default RightBar;