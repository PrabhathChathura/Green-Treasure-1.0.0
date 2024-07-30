
import React, { useRef } from "react";
import "./Testimonials.css"
import next_icon from "../assets/images/next-icon.png"
import back_icon from "../assets/images/back-icon.png"
import user_1 from "../assets/images/user-1.png"
import user_2 from "../assets/images/user-2.png"
import user_3 from "../assets/images/user-3.png"
import user_4 from "../assets/images/user-4.png"



const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if(tx > -50) {
        tx -= 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;

}


const slideBackward = () => {

    if(tx < 0) {
        tx += 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
    
}

    return (
        <div className="testimonials">
            <img src ={next_icon} className="next-btn" onClick={slideForward}/>
            <img src ={back_icon} className="back-btn" onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src= {user_1}/>
                                <div>
                                    <h3>Ms. Pabasari Hettige</h3>
                                    <span>Demonstrator, University of Kelaniya</span>
                                </div>
                            </div>
                            <p>
                            At Green Treasure, we believe that every piece 
                            of waste is an opportunity
                            to make a positive impact on our planet.
                            </p>
                        </div>
                    </li><li>
                        <div className="slide">
                            <div className="user-info">
                                <img src= {user_2}/>
                                <div>
                                    <h3>Dr. Chanaka Withanage</h3>
                                    <span>Senior Lecturer, University of Kelaniya</span>
                                </div>
                            </div>
                            <p>
                            At Green Treasure, we believe that every piece 
                            of waste is an opportunity
                            to make a positive impact on our planet.
                            </p>
                        </div>
                    </li><li>
                        <div className="slide">
                            <div className="user-info">
                                <img src= {user_3}/>
                                <div>
                                    <h3>Dr. Amila Jeewandara</h3>
                                    <span>Senior Lecturer, University of Kelaniya</span>
                                </div>
                            </div>
                            <p>
                            At Green Treasure, we believe that every piece 
                            of waste is an opportunity
                            to make a positive impact on our planet.
                            </p>
                        </div>
                    </li><li>
                        <div className="slide">
                            <div className="user-info">
                                <img src= {user_4}/>
                                <div>
                                    <h3>Mr. Kesavan</h3>
                                    <span>Lecturer, University of Kelaniya</span>
                                </div>
                            </div>
                            <p>
                            At Green Treasure, we believe that every piece 
                            of waste is an opportunity
                            to make a positive impact on our planet.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
                

        </div>
    )

}

export default Testimonials;