import React from 'react';
import linkedin from '../assets/img/linkedin.png';
import mail from '../assets/img/email.png';
import resume from '../assets/img/resume.png';
import github from '../assets/img/github.png';
import codewars from '../assets/img/codewars.png';
import stackoverflow from '../assets/img/stackoverflow.jpg';
import downloadAbleResume from '../assets/CanavanShawnResume.pdf';
import Reaptcha from 'reaptcha';

function Contact() {
  const information = [
    {
      title: 'LinkedIn',
      img: linkedin,
      desc: 'Connect with me on LinkedIn.',
      btnText: 'Connect',
      anchor: 'https://www.linkedin.com/in/shawn-canavan/',
      captcha: false,
    },
    {
      title: 'Email Me',
      img: mail,
      desc: 'Send me an email.',
      btnText: 'Email',
      anchor: 'mailto:shawncanavanjobs@gmail.com',
      captcha: true,
    },
    {
      title: 'Resume',
      img: resume,
      desc: 'Download my resume.',
      btnText: 'Download',
      anchor: downloadAbleResume,
      captcha: false,
    },
    {
      title: 'GitHub',
      img: github,
      desc: 'Check out my GitHub.',
      btnText: 'Commit',
      anchor: 'https://www.github.com/shawnbandy',
      captcha: false,
    },
    {
      title: 'CodeWars',
      img: codewars,
      desc: 'Find me on CodeWars.',
      btnText: 'Challenge',
      anchor: 'https://www.codewars.com/users/shawnbandy',
      captcha: false,
    },
    {
      title: 'Stack Overflow',
      img: stackoverflow,
      desc: 'See my Q&As.',
      btnText: 'Help Out',
      anchor: 'https://stackoverflow.com/users/19392762/shawnbandy',
      captcha: false,
    },
  ];

  return (
    <div className="container row justify-content-center text-center mb-4">
      {information.map((object) => {
        return (
          <div class="col-lg-4 col-md-6 col-sm-6 card">
            <img
              class="card-img-top mt-2 rounded w-100 h-100"
              src={object.img}
            />
            <div>
              <h4>{object.title}</h4>
              <p>{object.desc}</p>
              <a
                className="btn btn-primary mb-3"
                href={object.anchor}
                download={
                  object.title == 'Resume' ? 'CanavanShawnResume' : null
                }>
                {object.btnText}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Contact;
