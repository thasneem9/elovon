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
  { 
    title: 'CHISEL IT', 
    image: class1, 
    icon: <FaDumbbell style={{ color: '#FF6347' }} />, 
    description: 'Turn up the intensity and sculpt your dream physique with this high-powered strength training session!' 
  },
  { 
    title: 'DANCE FUSION', 
    image: class2, 
    icon: <GrYoga style={{ color: '#FF69B4' }} />, 
    description: 'Get your heart pumping and your feet moving with this electrifying Zumba experience—fun, sweat, and rhythm all in one!' 
  },
  { 
    title: 'MIND BODY BURN', 
    image: class3, 
    icon: <FaSpa style={{ color: '#32CD32' }} />, 
    description: 'A perfect blend of relaxation and strength—stretch, breathe, and tone your body while calming your mind.' 
  },
  { 
    title: 'POWER LIFT', 
    image: class4, 
    icon: <GrYoga style={{ color: '#FFD700' }} />, 
    description: 'Feel unstoppable as you conquer heavy weights and build pure strength like never before!' 
  },
  { 
    title: 'THE RIDE', 
    image: class5, 
    icon: <FaWeightHanging style={{ color: '#1E90FF' }} />, 
    description: 'Hop on, crank up the resistance, and push your limits in this heart-racing, adrenaline-fueled cycling workout!' 
  },
  { 
    title: 'AERIAL FITNESS', 
    image: class6, 
    icon: <FaRing style={{ color: '#8A2BE2' }} />, 
    description: 'Defy gravity and build core strength with aerial silks—grace, power, and fun all wrapped in one!' 
  },
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