import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";

const SliderComponent = ({ children}) => {
    const sliderSettings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        prevArrow: <button className="slick-prev text-gray-500 text-1" />,
        nextArrow: <button className="slick-next text-gray-500 text-1" />,
    };
    
    return <Slider {...sliderSettings}>{children}</Slider>;
}

export default SliderComponent