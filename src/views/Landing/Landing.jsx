import React from 'react';
import { useTour } from '@reactour/tour';
import styles from './Landing.css';

export default function Landing() {
  const { setIsOpen } = useTour();

  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>
        Take a tour of TeaLab with Ruby the Tea Sommelier as your guide!
        </button>
      </div>
      <img
        className={styles.ruby}
        src="https://res.cloudinary.com/tealab/image/upload/v1653970382/vector_assets/ruby_trans.svg"
        alt=""
      />
    </>
  );
}
