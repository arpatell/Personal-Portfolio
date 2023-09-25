import React from 'react';
const Links = () => {
  return (
    <div className="p-8">
        <h2 className="text-3xl font-semibold mb-4">Contact Me!</h2>
        <div className="container mx-auto text-center">
            <p className='font semibold'>Thank you for checking out my portfolio. Be sure to connect with mne on LinkedIn and message me with any questions through email.</p>
            <br></br>
            <a href="https://linkedin.com/in/aaronpatel541" target="_blank" rel="noopener noreferrer" className="btn btn-active btn-ghost mr-4">LinkedIn</a>
            <a href="https://github.com/arpatell" target="_blank" rel="noopener noreferrer" className="btn btn-active btn-ghost mr-4">GitHub</a>
            <a href="mailto:aaronpatel970@gmail.com" className="btn btn-active btn-ghost mr-4">Email</a>
            <a href="media/Aaron_Patel_Resume.pdf" download className="btn btn-active btn-ghost">Download Resume</a>
        </div>
    </div>
  );
};

export default Links;