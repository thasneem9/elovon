import React from 'react';
import './plans.css';
import proImg from '../assets/pro.jpg'
import playImg from '../assets/play.jpg'
import homeImg from '../assets/home.jpg'

const plans = [
  {
    id: "pro",
    title: "Elovon PRO",
    img: proImg,
    benefits: [
      "All PRO gyms",
      "2 Sessions/month at ELITE gyms & group classes",
      "At-home live workouts",
    ],
  },
  {
    id: "play",
    title: "Elovon PLAY",
    img: playImg,
    benefits: [
      "Badminton, swimming & other sports",
      "Guaranteed playing partner",
      "Guided sessions with experts",
    ],
  },
  {
    id: "home",
    title: "Elovon HOME",
    img: homeImg,
    benefits: [
      "At home workouts",
      "Celebrity Workouts",
      "Goal-based Workouts and Meditation Sessions",
    ],
  },
];

const Card = ({ title, img, benefits, id }) => {
  const gradientStyles = {
    pro: "linear-gradient(90deg,rgb(239, 129, 51), #ff007a)",
    play: "linear-gradient(90deg, #00ff87, #60efff)",
    home: "linear-gradient(90deg, #a18cd1, #fbc2eb)",
  };

  return (
   

    <div className="card">
      <img src={img} alt={title} className="card-img" />
      <h2
        className="card-title"
        style={{
          backgroundImage: gradientStyles[id],
        }}
      >
        {title}
      </h2>
      <ul className="card-list">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <div className="card-buttons">
        <button className="btn free">TRY FOR FREE</button>
        <button className="btn learn">LEARN MORE</button>
      </div>
    </div>
   
  );
};

const Plans = () => {
  return (
    <div className='main-container' id="plans">

   <h1>Explore Our Workout Plans</h1>
    <div className="container">
      {plans.map((plan) => (
        <Card key={plan.id} {...plan} />
      ))}
    </div>
    </div>
  );
};

export default Plans;