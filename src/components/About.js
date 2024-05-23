import React from 'react';
import Links from './Links';

const About = ({ bio, github, linkedin }) => {
  return (
    <div>
      {bio && <p>{bio}</p>}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
};

export default About;

