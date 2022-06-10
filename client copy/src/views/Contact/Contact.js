import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import RightBar from '../../components/RightBar/RigthBar';

import {bbdd_proyectos} from '../../global-func'

import LogoAzul from '../../components/LogoAzul/LogoAzul.svg'

import './Contact.css';


const Contact = ({setActiveTab}) => {
    

       const [joinUs, setJoinUs] = useState(false)


  function render(){
      return  <div id="Contact-view">
                     <a href="/">
                            <img className="logo" src={LogoAzul} />
                     </a>
                     <div>
                            <div id="data-contact">
                                   <h5>CONTACT</h5>
                                   <div>
                                          <a href="https://wa.me/5491134536136" target="_blank">
                                                 <h3>+54 9 11345-6136</h3>
                                          </a>
                                          <a href="mailto:vermu@gmail.com?subject=Hi%20Vermu!">
                                                 <h3>vermu@gmail.com</h3>
                                          </a>
                                   </div>

                            </div>
                            <div id="wanna" className={joinUs ? 'joineate' : 'nojoin'}>
                                   <aside onClick={()=>{ setJoinUs(false) }}>x</aside>
                                   <h6 onClick={()=>{ setJoinUs(true) }}>Want to<br />join us?</h6>
                                   <span>Send us your portfolio at</span> <a href="mailto:joinus@vermu.com?subject=Want%20to%20join%20you!">joinus@vermu.com</a>
                            </div>
                     </div>
                    
                    <RightBar activePage="Contact" />
              </div>

       }
       
       
       return ( render() )
}




export default Contact;