// src/components/Testimonials.js
import React, { useState, useEffect, useRef } from 'react';
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Ganaram Chaudhary',
    role: 'Data Engineer at Iron Mountain',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQGSbU-1uCMC8w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709788912384?e=1751500800&v=beta&t=hltTN8QjDMNrmVZ2Yd3l4RfNDjTcPLfW0eWe-IHH7V8', // Using placeholder for demo
    testimonial: 'Vanshita is an exceptional data scientist. Her analytical skills and attention to detail significantly improved our project outcomes. Highly recommended!'
  },
  {
    id: 2,
    name: 'Saad Shaikh',
    role: 'Date Engineer at Revsure AI',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQFyl46zsJGPdA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716388546979?e=1751500800&v=beta&t=RiP3oN4objen9jehZLVy_qqjqprfJNPH5rOjP99MgLA', // Using placeholder for demo
    testimonial: 'Working with Vanshita was a pleasure. She brings a wealth of knowledge and a proactive approach to problem-solving that makes her a valuable asset to any team.'
  },
  {
    id: 3,
    name: 'Aishwarya Bhosale',
    role: 'Senior Test Engineer at QualityKiosk Technologies',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEV2tE4BVTfyg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707747359836?e=1751500800&v=beta&t=_n_o_jsBQZIXlAPbCwRe1FbWHEk7drMqkaNKCImqxGg', // Using placeholder for demo
    testimonial: `Vanshita's ability to translate complex data into actionable insights is impressive. Her contributions were instrumental in achieving our project goals.`
  },
  {
    id: 4,
    name: 'Shashank Bhosale',
    role: 'Data Analyst Engineer at Niveus Solutions',
    photo: 'https://media.licdn.com/dms/image/v2/D5603AQF4qFg2Iqx7Ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689012553921?e=1751500800&v=beta&t=Co1RJCXoxrrt0aBJSaFj-kbkcrI0WAQEHIIHVWmvuNw', // Using placeholder for demo
    testimonial: `Few professionals I've worked with match Vanshita's combination of technical expertise and collaborative spirit. She consistently delivers results that exceed expectations.`
  }
];

const TestimonialCard = ({ testimonial, isHovered, onMouseEnter, onMouseLeave }) => (
  <div 
    className={`testimonial-card ${isHovered ? 'hovered' : ''}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="testimonial-content">
      <p className="testimonial-text">"{testimonial.testimonial}"</p>
      <div className="testimonial-profile">
        <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
        <div className="testimonial-info">
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <p className="testimonial-role">{testimonial.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);
  
  // Duplicate testimonials to create seamless loop
  const allTestimonials = [...testimonialsData, ...testimonialsData];
  
  useEffect(() => {
    // Clean up animation frames on unmount
    return () => {
      if (marqueeRef.current?.style) {
        marqueeRef.current.style.animationPlayState = 'running';
      }
    };
  }, []);
  
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setIsPaused(true);
    if (marqueeRef.current?.style) {
      marqueeRef.current.style.animationPlayState = 'paused';
    }
  };
  
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsPaused(false);
    if (marqueeRef.current?.style) {
      marqueeRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-heading">
        <h2 className="testimonials-title">What People Say</h2>
        <div className="testimonials-subtitle">Trusted by data professionals worldwide</div>
      </div>
      
      <div className="testimonials-marquee-container">
        <div 
          className={`testimonials-marquee ${isPaused ? 'paused' : ''}`}
          ref={marqueeRef}
        >
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={`${testimonial.id}-${index}`}
              testimonial={testimonial}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;