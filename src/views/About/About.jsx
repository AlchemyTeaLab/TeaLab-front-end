import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './About.css';

export default function About() {
  return (
    <>
      <h2>About the Developers</h2>
      <section className={styles.about}>
        <article>
          <h3>Sam Melius Oxford</h3>
          <p>Bio: Sam is a full-stack software developer based out of Mesa, Az. He has a background in Aerospace which has helped to fully develop excellent problem solving abilities. Sam Looks forward to collaborating on future software projects.</p>
          <p>Favorite Tea: Arnold Palmer...</p>
          <p>Contact Info:</p>
          <NavLink to="https://github.com/Sam-Melius">Github</NavLink>
          <NavLink to="https://www.linkedin.com/in/sam-melius-oxford/">
            LinkedIn
          </NavLink>
          <NavLink to="samsjmelius@gmail.com">
            Email: samsjmelius@gmail.com
          </NavLink>
        </article>
        <article>
          <h3>Clare McDonald</h3>
          <p>
            Bio: Clare is a full-stack software developer from Eugene, OR. She
            has a background in arts management and theatre, which has given her
            a knack for creativity, collaboration, and dependability.
          </p>
          <p>Favorite Tea: Earl Gray</p>
          <p>Contact Info: below!</p>
          <NavLink to="https://github.com/ClareMcDonald">Github</NavLink>
          <NavLink to="https://www.linkedin.com/in/clare-s-mcdonald/">
            LinkedIn
          </NavLink>
          <NavLink to="">Email: clare.s.mcdonald@gmail.com </NavLink>
        </article>
        <article>
          <h3>Ari Harlem-Caballero</h3>
          <p>
            Bio: Ari is a full-stack developer from Portland, OR. They've been a
            freelance artist in various mediums since graduating high school and
            hope to incorporate their creativity in the coding world.
          </p>
          <p>Favorite Tea: Sam's tears...</p>
          <p>Contact Info:</p>
          <NavLink to="https://github.com/ari-harlem-caballero">Github</NavLink>
          <NavLink to="https://www.linkedin.com/in/ari-harlem-caballero/">
            LinkedIn
          </NavLink>
          <NavLink to="ari.bash.harlem@gmail.com">
            Email: ari.bash.harlem@gmail.com
          </NavLink>
        </article>
        <article>
          <h3>Alice Hsing</h3>
          <p>
            Bio: Alice is a user-focused PERN stack developer based in Portland,
            Oregon. She has a background in real estate and recruitment, and is
            passionate about uplifting others and solving problems. Alice hopes
            to use technologies to create empathetic solutions.
          </p>
          <p>Favorite Tea: The hopes and dreams of children</p>
          <p>Contact Info:</p>
          <NavLink to="https://github.com/alicehsing">Github</NavLink>
          <NavLink to="https://www.linkedin.com/in/alice-hsing-94603315/">
            LinkedIn
          </NavLink>
          <NavLink to="alicehsing@gmail.com">
            Email: alicehsing@gmail.com{' '}
          </NavLink>
        </article>
        <article>
          <h3>Ryan Flitcroft</h3>
          <p>Bio: </p>
          <p>Favorite Tea: Just Tea</p>
          <p>Contact Info:</p>
          <NavLink to="https://github.com/ryanflitcroft">Github</NavLink>
          <NavLink to="https://www.linkedin.com/in/ryanflitcroft/">
            LinkedIn
          </NavLink>
          <NavLink to="">Email: </NavLink>
        </article>
      </section>
    </>
  );
}
