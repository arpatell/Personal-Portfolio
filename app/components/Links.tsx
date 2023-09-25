import React from 'react';
const Links = () => {
  return (
    <div className="p-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray">Contact Me!</h2>
        <div className="container mx-auto text-center text-gray">
            <p className="font-semibold">Thank you for checking out my portfolio. Be sure to connect with me on LinkedIn and message me with any questions through email.</p>
            <br></br>
            <a href="https://linkedin.com/in/aaronpatel541" target="_blank" rel="noopener noreferrer" className="btn btn-active btn-ghost mr-4 text-gray">LinkedIn</a>
            <a href="https://github.com/arpatell" target="_blank" rel="noopener noreferrer" className="btn btn-active btn-ghost mr-4 text-gray">GitHub</a>
            <a href="mailto:aaronpatel970@gmail.com" className="btn btn-active btn-ghost mr-4 text-gray">Email</a>
            <a href="media/Aaron_Patel_Resume.pdf" download className="btn btn-active btn-ghost text-gray">Download Resume</a>
        </div>
    </div>
  );
};

export default Links;