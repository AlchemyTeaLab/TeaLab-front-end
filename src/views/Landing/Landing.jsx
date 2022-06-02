import React from 'react';
import { useTour } from '@reactour/tour';
import styles from './Landing.css';
import { useHistory } from 'react-router-dom';

export default function Landing() {
  const { setIsOpen } = useTour();
  const history = useHistory();

  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>
        Take a tour of TeaLab with Ruby the Tea Sommelier as your guide!
        </button>
      </div>
      <img
        className={styles.ruby}
        src="https://res.cloudinary.com/tealab/image/upload/v1654195346/vector_assets/rubyTable.svg"
        alt="An dog wearing overalls and a straw hat, standing behind a wooden table"
      />
    </>
  );
}
