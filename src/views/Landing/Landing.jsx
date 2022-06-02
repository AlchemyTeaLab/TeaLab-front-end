import React from 'react';
import { useTour } from '@reactour/tour';

export default function Landing() {
  const { setIsOpen } = useTour();

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Take a tour of TeaLab with Ruby the Tea Sommelier as your guide!</button>
    </div>
  )
}
