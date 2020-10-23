import React from 'react';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';
import img1 from './bc.webp';
import img2 from './ai.gif';
import img3 from './ioi.webp';
import img4 from './qc.webp';
import img5 from './cs.webp';
import style from './slider.module.css';
import Tilt from 'react-tilt';


function Body(){
    return(
        <>
        <div>
         <h1 className={style.honer}>
         <LightSpeed left cascade>
         <Slide left >
         Learn the technologies that shape our future
        </Slide>
        </LightSpeed>
      
      </h1>
     </div>
    {/* first row */}
<div className={style.rowdiv}>

<div className={style.content}>
<h1>
         <LightSpeed left cascade>
         <Slide left >
         Block Chain
        </Slide>
        </LightSpeed>

        <LightSpeed left cascade>
         <Slide left cascade>
         <p>Learn More About This Rapidly Advancing Technology and Its Impact on the Internet. Stay Upto Date with the Changes and Advancements Made to Blockchain Technology. </p>
        </Slide>
        </LightSpeed>
      
      </h1>
    
    
</div>
<div className={style.alternate}>
     <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner">  <div className={style.container}>
    <div className={style.box}>
        <div className={style.imgBx}>
        <img src={img1} alt='block chain' />
       
        </div>
        <div className={style.contentBx}>
            <h2>Block Chain</h2>
           
        </div>
    </div>
    </div></div>
</Tilt>
</div>
</div>
{/* empty div */}
<div className={style.rowdiv2}>

<div className={style.content}>
    <h1>BLOCK CHAIN</h1>
 </div>
<div>

</div>
</div>

     {/* second row */}
    
<div className={style.rowdiv}>
<div className={style.alternate}>
<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner">  <div className={style.container}>
    <div className={style.box}>
        <div className={style.imgBx}>
      
        <img src={img2} alt='ai' />
        </div>
        <div className={style.contentBx}>
            <h2>Artificial Intelligence</h2>
           
        </div>
    </div>
    </div></div>
</Tilt>
</div>
<div className={style.content}>
<h1>
<LightSpeed left cascade>
         <Slide left >
         Artificial Intelligence
        </Slide>
        </LightSpeed>

        <LightSpeed left cascade>
         <Slide left cascade>
          
    <p>Accelerate Data-Driven Innovation And Process Automation With The Latest SAP Technologies. Learn How Intelligent Enterprises Use The Latest Technologies To Turn Insight Into Action.</p>
    </Slide>
        </LightSpeed>
    </h1>
   </div>

</div>
{/* empty div */}
<div className={style.rowdiv2}>

<div className={style.content}>
    <h1>Artificial Intelligence</h1>
 </div>
<div>

</div>
</div>


{/* thirdd row */}
<div className={style.rowdiv}>

<div className={style.content}>
<h1>
<LightSpeed left cascade>
         <Slide left >
         Internet of Things
        </Slide>
        </LightSpeed>

        <LightSpeed left cascade>
         <Slide left cascade>
          
         <p>The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.</p>
 </Slide>
        </LightSpeed>
    </h1> 
   </div>
<div className={style.alternate}>
        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner">  <div className={style.container}>
    <div className={style.box}>
        <div className={style.imgBx}>
      
        <img src={img3} alt='iot' />
        </div>
        <div className={style.contentBx}>
            <h2>Internet of Things</h2>
           
        </div>
    </div>
    </div></div>
</Tilt>
</div>
</div>
{/* empty div */}
<div className={style.rowdiv2}>

<div className={style.content}>
    <h1>Internet of Things</h1>
 </div>
<div>

</div>
</div>

{/* fourth row */}
<div className={style.rowdiv}>


<div className={style.alternate}>
<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner">  <div className={style.container}>
    <div className={style.box}>
        <div className={style.imgBx}>
      
        <img src={img4} alt='quantum' />
        </div>
        <div className={style.contentBx}>
            <h2>Quantum Computing</h2>
           
        </div>
    </div>
    </div></div>
</Tilt>
</div>
<div className={style.content}>
<h1>
<LightSpeed left cascade>
         <Slide left >
         Quantum Computing
        </Slide>
        </LightSpeed>

        <LightSpeed left cascade>
         <Slide left cascade>
         <p>Quantum computing is the use of quantum-mechanical phenomena such as superposition and entanglement to perform computation. Computers that perform quantum computations are known as quantum computers.</p>
 </Slide>
        </LightSpeed>
    </h1>  
   </div>
</div>
{/* empty div */}
<div className={style.rowdiv2}>

<div className={style.content}>
    <h1>Quantum Computing</h1>
 </div>
<div>

</div>
</div>


{/* fifth row */}
<div className={style.rowdiv}>

<div className={style.content}>
<h1>
<LightSpeed left cascade>
         <Slide left >
         Cyber Security
        </Slide>
        </LightSpeed>

        <LightSpeed left cascade>
         <Slide left cascade>
         <p>Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security.</p>
 </Slide>
        </LightSpeed>
    </h1>  
   </div>
<div className={style.alternate}>
<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner">  <div className={style.container}>
    <div className={style.box}>
        <div className={style.imgBx}>
      
        <img src={img5} alt='cyber' />
        </div>
        <div className={style.contentBx}>
            <h2>Cyber Security</h2>
           
        </div>
    </div>
    </div></div>
</Tilt>
</div>
</div>
        </>
    );
}
 export default Body;