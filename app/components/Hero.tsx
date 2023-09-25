import React from 'react';
// py-44
const HeroSection = () => {
  return (
    <div className="bg-primary text-white py-36" style={{backgroundColor: 'transparent'}}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Hey👋, I'm Aaron Patel.</h1>
        <h1 className="text-xl font-bold mb-4">Welcome to my portfolio!</h1>
        <p className="text-lg mb-8">Explore my projects and learn more about me.</p>
        <a href="/projects" className="btn btn-active btn-ghost mr-4">View Projects</a>
        <a href="/about" className="btn btn-active btn-ghost mr-4">More About Me</a>
        <a href="/links" className="btn btn-active btn-ghost">Contact/Links</a>
      </div>
    </div>
  );
};

export default HeroSection;
