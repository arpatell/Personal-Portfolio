import React from 'react';
const About = () => {
  return (
    <div className="p-8">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="font-semibold">
        Hi! My name is Aaron Patel and I am currently a sophomore at the University
        of North Carolina at Chapel Hill. I am pursuing a B.S. in Computer Science 
        and a minor in Data Science. I have been interested in computers since a
        young age, as I learned basic JavaScript on KhanAcademy (iykyk). It was since
        then that I decided that I would concentrate my interests in the field of
        technology, as a hobby and a career. Some of the things that I do in my free
        time include listening to music (a lot), playing basketball, and hanging out
        with friends.
        </p>
        <br></br>
        <div className="carousel relative w-full">
            <div id="item1" className="carousel-item w-full flex justify-center items-center">
                <img src="media/img.jpg" className="w-1/2" />
            </div>
        </div> 
        <div className="flex justify-center w-1000 py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a> 
        </div>
        <p className="prose text-center font-semibold">
          Here are some cool pictures of me!
        </p>
    </div>
  );
};

export default About;