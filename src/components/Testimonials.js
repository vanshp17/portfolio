import React from 'react';
import '../styles/Testimonials.css'; // Import the specific styles for Testimonials component

const testimonialsData = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Data Scientist at TechCorp',
    testimonial: 'Vanshita is an exceptional data scientist. Her analytical skills and attention to detail significantly improved our project outcomes. Highly recommended!',
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Senior Data Analyst at DataCo',
    testimonial: 'Working with Vanshita was a pleasure. She brings a wealth of knowledge and a proactive approach to problem-solving that makes her a valuable asset to any team.',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Lead Data Engineer at AnalyticsPlus',
    testimonial: 'Vanshita’s ability to translate complex data into actionable insights is impressive. Her contributions were instrumental in achieving our project goals.',
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Product Manager at InnovateX',
    testimonial: 'Her attention to detail and expertise in data analysis greatly impacted our project success.',
  },
  {
    id: 5,
    name: 'Sarah Wilson',
    role: 'Marketing Analyst at AdVision',
    testimonial: 'Vanshita’s insights helped us shape our marketing strategy effectively.',
  },
  // Add more testimonials if needed
];

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <div className="testimonial-content">
      <h3 className="testimonial-name">{testimonial.name}</h3>
      <p className="testimonial-role">{testimonial.role}</p>
      <p className="testimonial-text">"{testimonial.testimonial}"</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2 className="testimonials-title">What People Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
        {/* Duplicate the testimonials for seamless scrolling */}
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={`duplicate-${testimonial.id}`} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
