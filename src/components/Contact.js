import React from 'react';
import '../styles/Contact.css'; // Ensure your CSS includes styles for the new design.

const Contact = () => {
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfNjm-I-egopcie5bgHl6wQTWsxHHKc8nCbMtMc6F2VSlBDOw/viewform?usp=sf_link';

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Have any questions or want to collaborate? Click the button below to reach out through our form!
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          Fill Out Form
        </a>
      </div>
    </section>
  );
};

export default Contact;








//  ----- new but not good --------
// import React, { useState } from 'react';
// import '../styles/Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.message) newErrors.message = 'Message is required';
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         // const response = await fetch('https://portfolio-vanshita-gnb6g5g9ghazbqcz.canadacentral-01.azurewebsites.net/submit-form', {
//         const response = await fetch('https://portfolio-vanshita-gnb6g5g9ghazbqcz.canadacentral-01.azurewebsites.net/submit-form',{
//           // const response = await fetch('http://localhost:5000/submit-form', {

//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(formData)
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.text();
//         console.log('Success:', data);
//         setIsSubmitted(true);
//         setFormData({ name: '', email: '', message: '' });
//       } catch (error) {
//         console.error('Error:', error);
//         setErrors({ submit: 'Failed to submit form. Please try again.' });
//       }
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <section id="contact" className="contact">
//       <h2 className="contact-title">Get in Touch</h2>
//       {isSubmitted ? (
//         <div className="contact-success">
//           <p>Thank you! Your message has been sent. We'll get back to you soon.</p>
//           <div className="success-animation">🎉</div>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="contact-form">
//           <div className="form-group">
//             <label htmlFor="name">Name <span>*</span></label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className={errors.name ? 'input-error' : ''}
//             />
//             {errors.name && <p className="error">{errors.name}</p>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email <span>*</span></label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={errors.email ? 'input-error' : ''}
//             />
//             {errors.email && <p className="error">{errors.email}</p>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message <span>*</span></label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className={errors.message ? 'input-error' : ''}
//             ></textarea>
//             {errors.message && <p className="error">{errors.message}</p>}
//           </div>
//           {errors.submit && <p className="error">{errors.submit}</p>}
//           <button type="submit" className="contact-submit">Send Message</button>
//         </form>
//       )}
//     </section>
//   );
// };

// export default Contact;































// ----- old ----------
// import React, { useState } from 'react';
// import '../styles/Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});

//   // Google Form settings
//   const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfNjm-Iegopcie5bgHl6wQTWsxHHKc8nCbMtMc6F2VSlBDOw/formResponse';
//   const fieldIds = {
//     name: 'entry.2116052852',
//     email: 'entry.1558582620',
//     message: 'entry.1060472253'
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.message) newErrors.message = 'Message is required';
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const response = await fetch('http://localhost:3001/submit-form', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData)
//         });
  
//         const result = await response.json();
//         if (response.ok) {
//           setIsSubmitted(true);
//           setFormData({ name: '', email: '', message: '' }); // Reset form
//         } else {
//           setErrors({ submit: result.message });
//         }
//       } catch (error) {
//         console.error('Error submitting form:', error);
//         setErrors({ submit: 'Failed to submit form. Please try again.' });
//       }
//     } else {
//       setErrors(validationErrors);
//     }
//   };
  
//   return (
//     <section id="contact" className="contact">
//       <h2 className="contact-title">Get in Touch</h2>
//       {isSubmitted ? (
//         <div className="contact-success">
//           <p>Thank you! Your message has been sent. We'll get back to you soon.</p>
//           <div className="success-animation">🎉</div>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="contact-form">
//           <div className="form-group">
//             <label htmlFor="name">Name <span>*</span></label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className={errors.name ? 'input-error' : ''}
//             />
//             {errors.name && <p className="error">{errors.name}</p>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email <span>*</span></label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={errors.email ? 'input-error' : ''}
//             />
//             {errors.email && <p className="error">{errors.email}</p>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message <span>*</span></label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className={errors.message ? 'input-error' : ''}
//             ></textarea>
//             {errors.message && <p className="error">{errors.message}</p>}
//           </div>
//           {errors.submit && <p className="error">{errors.submit}</p>}
//           <button type="submit" className="contact-submit">Send Message</button>
//         </form>
//       )}
//     </section>
//   );
// };

// export default Contact;
