import React from "react";
import Image from "next/image";

interface Props {
    imgSrc: string;
    title: string;
    text: string;
}


const Pic = ({imgSrc, title, text}:Props) => {
    return(
        <section>
            <div className="mainImg">
                <Image src={imgSrc} alt={title} 
                layout="fill" objectFit={"cover"}
                 />
            </div>
            <div className="text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </section>
        
    );

}

export default Pic;

// const Container = styled.div`
// 	position: relative`;