import React from "react";
import loader from "../../assets/waiting-icon-gif.jpeg";


export const Preloader = () => {
    return (
        <div>
            <img src={loader} alt={"Preloader"} width={"80px"}/>
        </div>
    )
}