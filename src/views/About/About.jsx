import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.css';

const team = [
  {
    name: 'Sam Melius Oxford',
    image: 'https://avatars.githubusercontent.com/u/91688565?v=4',
    bio: 'Full-stack software developer based out of Mesa, Az.',
    favTea: 'Arnold Palmer...',
    contact: {
      github: 'https://github.com/Sam-Melius',
      linkedin: 'https://www.linkedin.com/in/sam-melius-oxford/',
      email: 'samsjmelius@gmail.com',
    },
  },
  {
    name: 'Clare McDonald',
    image: 'https://avatars.githubusercontent.com/u/89673020?v=4',
    bio: 'Clare is a full-stack software developer from Eugene, OR. She has a background in arts management and theatre, which has given her a knack for creativity, collaboration, and dependability.',
    favTea: 'Earl Gray',
    contact: {
      github: 'https://github.com/ClareMcDonald',
      linkedin: 'https://www.linkedin.com/in/clare-s-mcdonald/',
      email: 'clare.s.mcdonald@gmail.com',
    },
  },
  {
    name: 'Ari Harlem-Caballero',
    image: 'https://avatars.githubusercontent.com/u/90234868?v=4',
    bio: "Ari is a full-stack developer from Portland, OR. They've been a freelance artist in various mediums since graduating high school and hope to incorporate their creativity in the coding world.",
    favTea: "Sam's tears...",
    contact: {
      github: 'https://github.com/ari-harlem-caballero',
      linkedin: 'https://www.linkedin.com/in/ari-harlem-caballero/',
      email: 'ari.bash.harlem@gmail.com',
    },
  },
  {
    name: 'Alice Hsing',
    image: 'https://avatars.githubusercontent.com/u/66229521?v=4',
    bio: 'Alice is a user-focused PERN stack developer based in Portland, Oregon. She has a background in real estate and recruitment, and is passionate about uplifting others and solving problems. Alice hopes to use technologies to create empathetic solutions.',
    favTea: 'The hopes and dreams of children',
    contact: {
      github: 'https://github.com/alicehsing',
      linkedin: 'https://www.linkedin.com/in/alice-hsing-94603315/',
      email: 'alicehsing@gmail.com',
    },
  },
  {
    name: 'Ryan Flitcroft',
    image: 'https://avatars.githubusercontent.com/u/90467280?v=4',
    bio: 'Full-stack software developer based in Portland, Oregon. Likes riding bikes, taking photos on film, and writing code!',
    favTea: 'Peppermint/chamomile',
    contact: {
      github: 'https://github.com/ryanflitcroft',
      linkedin: 'https://www.linkedin.com/in/ryanflitcroft/',
      email: 'ryanflitcroft@ymail.com',
    },
  },
];

export default function About() {
  return (
    <>
      <h2>About the Developers</h2>

      <section className={styles.about}>
        {team.map((contributor) => (
          <figure>
            <h3>{contributor.name}</h3>
            <img
              className={styles.profilePic}
              src={contributor.image}
              alt={contributor.name}
            />
            <p>{contributor.bio}</p>
            <h4>Favorite Tea</h4>
            <p>{contributor.favTea}</p>
            <h4>Contact Info</h4>
            <Link to={{ pathname: contributor.contact.github }} target="_blank">
              GitHub
            </Link>
            <Link
              to={{ pathname: contributor.contact.linkedin }}
              target="_blank"
            >
              LinkedIn
            </Link>
            {contributor.contact.email}
          </figure>
        ))}
      </section>
    </>
  );
}
