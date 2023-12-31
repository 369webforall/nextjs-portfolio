import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from './ui/container';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'Issue Tracker',
    description:
      'FullStack application built with Nextjs, typescript, mongodb, prisma, tailwindcss, radix ui, NextAuth',
    image: '/screen_issue.png',
    github: 'https://github.com/369webforall/issue-tracker',
    link: 'https://issue-tracker-gilt-three.vercel.app/',
  },
  {
    name: 'Amazon clone',
    description:
      'Amazon is e-commerce app that built using the HTML, CSS and JavaScript.',
    image: '/amazon_screen.jpg',
    github: 'https://github.com/369webforall/online-store',
    link: 'https://harmonious-stroopwafel-567dbc.netlify.app/',
  },
  {
    name: 'Newsweek.com Clone',
    description:
      'This project is a clone of news site Newsweek.com using the Bootstrap framework.',
    image: '/newsweek.png',
    github: 'https://github.com/dev1980/Newsweek-Using-Bootstrap',
    link: 'https://dev1980.github.io/Newsweek-Using-Bootstrap/',
  },
];

const ProjectsSection = () => {
  return (
    <Container>
      <section id="projects" className="my-5">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={800}
                        height={800}
                        priority
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default ProjectsSection;
