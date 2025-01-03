

/* eslint-disable no-unused-vars */
import React from 'react';
import { ProjectCard } from './ProjectCard';

const works = [
  {
    imgSrc: '/images/jayma.jpg',
    title: 'Full stack ecommerce app',
    tags: ['API', 'expresse', 'React'],
    projectLink: 'https://ecommerce-frontend-tau-ten.vercel.app/',
  },
  {
    imgSrc: '/images/taskmaster.jpg',
    title: 'TaskMaster app',
    tags: ['Next', 'Nest'],
    projectLink: 'https://task-master-frontend-six.vercel.app/',
  },
  {
    imgSrc: '/images/budjet.jpg',
    title: 'Budjet app',
    tags: ['Development', 'JS'],
    projectLink: 'https://zingy-unicorn-2d95c9.netlify.app/',
  },
  // {
  //   imgSrc: '/images/project-4.jpg',
  //   title: 'Real estate website',
  //   tags: ['Web-design', 'Development'],
  //   projectLink: 'https://github.com/codewithsadee-org/wealthome',
  // },
  // {
  //   imgSrc: '/images/project-5.jpg',
  //   title: 'eCommerce website',
  //   tags: ['eCommerce', 'Development'],
  //   projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website',
  // },
  // {
  //   imgSrc: '/images/project-6.jpg',
  //   title: 'vCard Personal portfolio',
  //   tags: ['Web-design', 'Development'],
  //   projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio',
  // },
];

export const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 text-center">My Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard 
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

