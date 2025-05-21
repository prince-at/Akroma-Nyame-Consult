import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with your form submission logic or API call
    console.log('Form submitted:', formData);
    setSubmitted(true);
    emailjs.send(
        'service_7qeqwuq',
        'template_ozqrav8',
        formData,
        'zSlmZH8ZEiXzCKUAj'
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className='get-in-touch'>
        <div className='phone-numbers'>
        <h1 className='tel'>tel: +233 257 34 4490 / +233 50 231 1638 </h1>
        <h1 className='tel'>Whatsapp:  +233 201 61 3161</h1>
        <p className='tel'>gmail:  ant.consult@gmail.com </p>
        </div>

    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-xl w-full py-5 " >
      <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch with us</h2>
      {submitted ? (
        <p className="text-green-600 text-center">Thanks for reaching out! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border rounded p-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="border rounded p-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
    </div>
  );
}
