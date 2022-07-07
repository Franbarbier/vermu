import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import RightBar from '../../components/RightBar/RigthBar';

import {bbdd_proyectos} from '../../global-func'

import LogoAzul from '../../components/LogoAzul/LogoAzul.svg'

import './Contact.css';


const Contact = ({setActiveTab}) => {
    

       const [joinUs, setJoinUs] = useState(false)


function efectoDa1(str){ return Array.from(str) }

  function render(){
      return  <div id="Contact-view">
                     <a href="/">
                            <img className="logo" src={LogoAzul} />
                     </a>
                     <div>
                            <div id="data-contact">
                                   <h5>GET IN TOUCH</h5>
                                   <div>
                                          <div>
                                                 <span>email us at </span>
                                                 <a href="https://wa.me/5491144097065" target="_blank">{efectoDa1('(+54) 9 11 4409-7065').map((letra, index)=>(
                                                        <div data-letra={letra} style={{'transition-delay': `${index/30}s`}}>{letra}</div>
                                                 ))}</a>
                                          </div>
                                          <div>
                                                 <span>or text us at </span>
                                                 <a href="mailto:vermu@gmail.com?subject=Hi%20Vermu!">{efectoDa1('vermu@gmail.com').map((letra, index)=>(
                                                        <div data-letra={letra} style={{'transition-delay': `${index/30}s`}}>{letra}</div>
                                                 ))}</a>
                                          </div>


                                   </div>

                            </div>
                            <div id="wanna" className={`nojoin ${joinUs && 'ahorasi'}`}>
                                   <aside onClick={()=>{ setJoinUs(false) }}>x</aside>
                                   <h6 onClick={()=>{ setJoinUs(true) }}>Want to<br />join us?</h6>
                                   <span>Send us your portfolio at  </span><i><a href="mailto:vermuproductions@gmail.com?subject=Want%20to%20join%20you!"> vermuproductions@gmail.com</a></i>
                            </div>
                     </div>
                    
                    <RightBar activePage="Contact" />
              </div>

       }
       
       
       return ( render() )
}




export default Contact;