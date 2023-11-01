// components/Contact.js

import React from 'react';

const Contact = () => {
  return (
    <div className="shadow-md p-4 my-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <div className="mb-4">
        <p className="text-lg font-semibold">Email:</p>
        <p className="text-blue-500">
          <a href="mailto:brham1980@gmail.com">brham1980@gmail.com</a>
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">Phone:</p>
        <p className="text-blue-500">+977-9849429828</p>
      </div>
    </div>
  );
};

export default Contact;
