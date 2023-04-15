

import React from "react";
import style from "./About.module.css"
import { getValue } from "@testing-library/user-event/dist/utils";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render(){
    return(
      <div className={style.body}>
        
        <div className={style.git__bash}>   
              <div className={style.nav}>
                <h2>MING:/c/User/lucasmartine38/About</h2>
                
                  <div className={style.div__icons}>
                    <span className={style.icons} ><img src={require('../../img/close.png')} alt="" /></span>
                    <span className={style.icons} ><img src={require('../../img/code.png')} alt="" /></span>
                    <span className={style.icons} ><img src={require('../../img/remove.png')} alt="" /></span>
                  </div>

                </div>
              <div className={style.consola}>
                <div className={style.menu}>
                  <h2>lukitas@DESKTOP-T3NG6IU <span className={style.menu__two}>MING64</span><span className={style.menu__three}> ~/Desktop</span></h2>
                  <h3>$</h3>      
                </div>
                <div className={style.menu__skills}>
                  <h2>lukitas@DESKTOP-T3NG6IU <span className={style.menu__two}>MING64</span><span className={style.menu__three}> ~/Desktop</span></h2>
                  <h3>$</h3>
                </div>
                <div className={style.skills__container} id="skills">
                  
                  <h3 className={style.habilidades}>HABILIDADES</h3>
                  
                  <div className={style.skill}>                    
                    <div className={style.info}>
                      <p><span className={style.lista}></span>Html & Css</p>
                      <span className={style.porcentaje}>90%</span>
                    </div>
                    <div className={style.barra}>
                      <div id="html" className={style.barra_progreso1}></div>              
                    </div>
                  </div>

                  <div className={style.skill}>                    
                    <div className={style.info}>
                      <p><span className={style.lista}></span>Javascript</p>
                      <span className={style.porcentaje}>70%</span>
                    </div>
                    <div className={style.barra}>
                      <div id="js" className={style.barra_progreso2}></div>              
                    </div>
                  </div>

                  <div className={style.skill}>                    
                    <div className={style.info}>
                      <p><span className={style.lista}></span>Base de Datos</p>
                      <span className={style.porcentaje}>80%</span>
                    </div>
                    <div className={style.barra}>
                      <div id="bd" className={style.barra_progreso3}></div>              
                    </div>
                  </div>

                  <div className={style.skill}>                    
                    <div className={style.info}>
                      <p><span className={style.lista}></span>React jsx</p>
                      <span className={style.porcentaje}>85%</span>
                    </div>
                    <div className={style.barra}>
                      <div id="react" className={style.barra_progreso4}></div>              
                    </div>
                  </div>

                </div>
             
              </div>
        </div>
        
      </div>
    )

  }




}
export default About;