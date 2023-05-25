import React, { useState} from "react";
import CardClients from "./cardClients";
import SliderComponent from "./Slider";
import sliderSettings from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewsData = [
  {
    id:1,
    name: 'Alan Vargas',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/alan.png?alt=media&token=b31acad7-dfb7-4688-afb5-d5dee4d1637b',
    place: 'https://www.google.com'
  },

  {
    id:2,
    name: 'Alan Vargas',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/alan.png?alt=media&token=b31acad7-dfb7-4688-afb5-d5dee4d1637b',
    place: 'https://www.google.com'
  },
  {
    id:3,
    name: 'Alan Vargas',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/alan.png?alt=media&token=b31acad7-dfb7-4688-afb5-d5dee4d1637b',
    place: 'https://www.google.com'
  },
  {
    id:4,
    name: 'Alan Vargas',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/alan.png?alt=media&token=b31acad7-dfb7-4688-afb5-d5dee4d1637b',
    place: 'https://www.google.com'
  },
  {
    id:5,
    name: 'Alan Vargas',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/alan.png?alt=media&token=b31acad7-dfb7-4688-afb5-d5dee4d1637b',
    place: 'https://www.google.com'
  },
  {
    id:6,
    name: 'Alan Vargas',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/alan.png?alt=media&token=b31acad7-dfb7-4688-afb5-d5dee4d1637b',
    place: 'https://www.google.com'
  },
];

const Clientes = () => {
  return (
    <div className="container mx-auto p-4">

      <div className="flex items-center justify-center mb-4">
        <h1 className="text-3xl mb-10 mt-14 font-extralight">Reseñas de Clientes</h1>
      </div>

<SliderComponent>
    {reviewsData.map((review) => (
      <div key={review.id}>
        <CardClients review={review} />
      </div>
    ))}
</SliderComponent>
    </div>
  );
};

export default Clientes;