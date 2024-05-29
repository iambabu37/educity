import React from "react";
import "./Testimonals.css"
import { useRef } from "react";
import next_btn from "../../assets/next-icon.png"
import back_btn from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"


const Testimonals = ()=>{
const slide = useRef();
let tx = 0 ;
const slideforward = ()=>{
    if (tx >-50){
        tx-=25;
    }
    slide.current.style.transform=`translateX(${tx}%)`
}

const slidebackword = () =>{
    if (tx < 0){
        tx+=25;
    }
    slide.current.style.transform =`translateX(${tx}%)`

}

    return(
        <div id ="testimonal"className="testimonals">
            <img src ={next_btn} onClick={slideforward} alt= "" className="next-btn"/>
            <img src ={back_btn} alt = ""
            onClick={slidebackword}
            className="back-btn"/>
            <div className="slider">
                <ul ref={slide}>
                    <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>wiliam Jackson</h3>
                                <span>Edusity,usa</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam, velit fugiat perspiciatis minima optio iusto, aut labore, repellendus adipisci atque ipsam sunt dolores nobis qui vero deserunt numquam enim.</p>
                    </div>
                    
                    </li>
                    <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>wiliam Jackson</h3>
                                <span>Edusity,usa</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam, velit fugiat perspiciatis minima optio iusto, aut labore, repellendus adipisci atque ipsam sunt dolores nobis qui vero deserunt numquam enim.</p>
                    </div>
                    
                    </li><li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>wiliam Jackson</h3>
                                <span>Edusity,usa</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam, velit fugiat perspiciatis minima optio iusto, aut labore, repellendus adipisci atque ipsam sunt dolores nobis qui vero deserunt numquam enim.</p>
                    </div>
                    
                    </li><li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>wiliam Jackson</h3>
                                <span>Edusity,usa</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam, velit fugiat perspiciatis minima optio iusto, aut labore, repellendus adipisci atque ipsam sunt dolores nobis qui vero deserunt numquam enim.</p>
                    </div>
                    
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonals