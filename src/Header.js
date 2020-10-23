import React from 'react';
import Slide from 'react-reveal/Slide';
import style from './nav.module.css';
import Tilt from 'react-tilt';


function Header(){
   
    return(

        <>
         <Tilt className="Tilt" options={{ max : 15 }}  >
 <div className="Tilt-inner">  <div className={style.nav}>
        <div className={style.navtext}>
         <h1>
         <Tilt className="Tilt" options={{ max : 15 }}  >
 <div className="Tilt-inner">
        <Slide left cascade>
          LET US GET BACK TO THE DRAWING BOARD.
        </Slide></div>
</Tilt>
      </h1>
    
       
      </div>
    </div> </div>
</Tilt>
       
        
        </>
    );
}

export default Header;