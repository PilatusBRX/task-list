import React from 'react';

const About = () => {
  return (
    <div className='about container flex-column'>
      <h1>Sobre este App</h1>
      <p className='my-1'>App para gerenciar tarefas.</p>
      <p className='bg-dark p'>
        <strong>Versão: </strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
