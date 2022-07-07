import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import LogoAzul from '../../components/LogoAzul/LogoAzul.svg';


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
      return <div>  
                        <div id="menu-bars" onClick={ abrirMenu }>
                            {/* <img src="" /> */}
                            <div className={menu && "rayas-menos"} id="barra-uno"></div>
                            <div className={menu && "rayas-menos"} id="barra-dos"></div>
                        </div>
      <motion.div id="RightBar-view" >
            
            <div>

                    <div>
                        

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

               
              </motion.div>
              {menu &&
                        <>
                                <motion.div
                                    style={{
                                        'height': '100vh',
                                        'width': '100vw',
                                        'position': 'fixed',
                                        'top': '0',
                                        'left': '0',
                                        'backgroundColor': '#ddd',
                                        'zIndex': '80',
                                        'overflow': 'hidden'
                                    }}
                                    initial={{ y: "100vh"}}
                                    animate={{ y: 0 }}
                                    exit={{ y: "100vh"}}
                                    transition={{ duration: 0.7 }}
                                >
                                    <span className='spanMenu'>
                                        WE ARE VERMU
                                    </span>
                                </motion.div>

                            <motion.div
                             initial={{ y: "100vh"}}
                             animate={{ y: 0 }}
                             exit={{ y: "100vh"}}
                             transition={{ duration: 0.7, delay: 0.5}}
                             id="new-menu">
                                <div id="menu-logo">
                                    <img src={LogoAzul} />
                                </div>
                                <ul>
                                    <Link className={activePage == "Home" && 'activeTab'} to="/"><li data-text="HOME">Home</li></Link>
                                    <Link className={activePage == "Work" && 'activeTab'} to="/projects"><li data-text="WORK">Work</li></Link>
                                    <Link className={activePage == "Us" && 'activeTab'} to="/about"><li data-text="US">Us</li></Link>
                                    <Link className={activePage == "Contact" && 'activeTab'} to="/contact"><li data-text="CONTACT">Contact</li></Link>
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
                                <div id="Cruz">
                                    <img src="/assets/miscelanias/miscelanias (7).svg"/>
                                </div>
                                <div id="Resortin">
                                    <div>
                                        <div id="aro1"></div>
                                        <div id="aro2"></div>
                                        <div id="aro3"></div>
                                        <div id="aro4"></div>
                                        <div id="aro5"></div>
                                    </div>
                                
                                </div>
                                <div id="aceituna-cont">
                                    <img src="/assets/aceituna.svg" />
                                </div>
                            </motion.div>
                        </>
                    }
              </div>

       }
       
       
       return ( render() )
}




export default RightBar;