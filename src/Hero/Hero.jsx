import React from "react";
import './Hero.css';

import CountUp from 'react-countup';

const Hero = () => {
  return (

    <section id="hero">
        <div className="hero_stats">
            <div className="stat_box">
                <span>
                    <CountUp start={1400} end={1500} duration={4}/>           
                    <p>+</p>
                 </span> 
                 <span>Brands</span>
            </div>

            <div className="stat_box">
                <span>
                    <CountUp start={300} end={500} durion={4}/>           
                    <p>+</p>
                 </span> 
                 <span>Outlets</span>
            </div>


            <div className="stat_box">
                <span>
                    <CountUp start={11400} end={12500} duration={4}/>           
                     <p>+</p>
                 </span> 
                 <span>Customers</span>
            </div>

            

        </div>

    </section>

  );
  };

export default Hero;