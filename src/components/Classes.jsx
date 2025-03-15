import React from 'react';
import { FaDumbbell, FaBicycle, FaSpa, FaWeightHanging, FaRing } from 'react-icons/fa';
import { GrYoga } from "react-icons/gr";

import './Classes.css';
import class1 from '../assets/class1.png'
import class2 from '../assets/class2.png'
import class3 from '../assets/class3.png'
import class4 from '../assets/class4.png'
import class5 from '../assets/class5.png'
import class6 from '../assets/class6.png'

const classesData = [
  { title: 'CHISEL IT', image: class1, icon: <FaDumbbell />, description: 'High-intensity strength training' },
  { title: 'THE RIDE', image: class2, icon: <GrYoga />, description: 'Energetic Zumba Classes' },
  { title: 'MIND BODY BURN', image: class3, icon: <FaSpa />, description: 'Relax and strengthen the body' },
  { title: 'DANCE FUSION', image: class4, icon: <GrYoga />, description: 'Energetic dance workout' },
  { title: 'POWER LIFT', image: class5, icon: <FaWeightHanging />, description: 'Heavy lifting for power' },
  { title: 'AERIAL FITNESS', image: class6, icon: <FaRing />, description: 'Strength training with aerial silks' },
];

const Classes = () => {
  return (
    <>
    <div className='black' id="classes">
   <h1 className='classes-subtitle'>Our Exclusive Workout Classes</h1>
  <p className='classes-subtitle-small'>ONLY AT ELOVON</p>
   </div>
    <div className="classes-grid">
      {classesData.map((item, index) => (
        <div key={index} className="class-card">
          <img src={item.image} alt={item.title} className="class-image" />
          <h3 className="class-title">{item.title}</h3>
          <div className="overlay">
            <span className="icon">{item.icon}</span>
            <p className="description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};
export default Classes