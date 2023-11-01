import React from 'react';

const Expertise = () => {
  const expertiseList = [
    'Frontend Development: Proficient in building modern, responsive web applications using Next.js.',
    'Tailwind CSS Mastery: Expert in using Tailwind CSS to streamline the styling and design of web applications.',
    'Full-Stack Development: Capable of working on both frontend and backend aspects of web development.',
    'State Management: Skilled in implementing state management with tools like Redux and Context API.',
    'TypeScript Integration: Experience in incorporating TypeScript to enhance code quality and type safety.',
    'API Integration: Capable of integrating RESTful and GraphQL APIs into web applications.',
    'Database Management: Proficient in working with databases, including MongoDB, for data storage and retrieval.',
    'SEO Optimization: Knowledgeable in implementing SEO best practices to improve website search engine rankings.',
    'Component Reusability: Proficient in creating reusable UI components to enhance code maintainability.',
    'Responsive Design: Experienced in designing and developing websites that adapt seamlessly to various screen sizes and devices.',
    'Collaboration and Teamwork: Effective communication and collaboration skills for working in development teams.',
    'Best Practices: Strong commitment to following best coding practices, including code reviews, testing, and version control using Git.',
    'Deployment and Hosting: Proficient in deploying web applications to platforms like Heroku, Vercel, and Netlify.',
  ];

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">My Expertise Includes:</h2>
      <ul className="list-disc pl-6">
        {expertiseList.map((item, index) => (
          <li key={index} className="mb-4">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expertise;
