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
      return  <motion.div id="RightBar-view" animate={menu ? "abierto" : 'cerrado'} variants={menu_status}  >
                <div>
                    <div>
                        <div id="menu-bars" onClick={ abrirMenu }>
                            {/* <img src="" /> */}
                            <div className={menu && "rayas-menos"} id="barra-uno"></div>
                            <div className={menu && "rayas-menos"} id="barra-dos"></div>
                        </div>
                        <ul>
                            {menu &&
                                pages.map( (page, i)=>(
                                    <Link to={page.link }>
                                    <motion.li
                                    custom={i}
                                    animate="visible"
                                    variants={menu_items}
                                    className={ page.nombre == activePage && "activeTab" }
                                    initial={{opacity: 0 }}
                                    >{page.nombre}</motion.li>

                                    {console.log(page , activePage)}

                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                    <div id="rrss">
                        <div>
                            <motion.a target="_blank" href="https://www.instagram.com/p/CcTyNxjJb4d/">
                                {menu && 
                                    <motion.p animate={{ x: -10, opacity: 1 }} initial={{opacity: 0 }} transition={{delay: 0.1}}>INSTAGRAM</motion.p>
                                }
                                <img src="/assets/instagram.png" />
                            </motion.a >
                            <motion.a target="_blank" href="https://www.instagram.com/p/CcTyNxjJb4d/">
                                {menu && 
                                    <motion.p animate={{ x: -10, opacity: 1 }} initial={{opacity: 0 }} transition={{delay: 0.1}}>VIMEO</motion.p>
                                }
                                <img src="/assets/vimeo.png" />
                            </motion.a >
                        </div>
                    </div>
                </div>
              </motion.div>

       }
       
       
       return ( render() )
}




export default RightBar;