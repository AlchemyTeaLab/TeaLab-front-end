import styles from './TourSteps.css';

const steps = [
    {
    selector: '.first-step',
    content: (
      <>
        <div>
          <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`} >Thanks for joining me on our tour of TeaLab! Time to explore, woof.</p>
          <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
        </div>
      </>),
    },
    { 
      selector: '.second-step',
      content: (
        <>
          <div>
            <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>Sign Up to brew some tea</p>
            <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
          </div>
        </>)
    },
    {
      selector: '.third-step',
      content: (
        <>
          <div>
            <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>Now you can go to another page!</p>
            <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
          </div>
        </>),
      },
      {
      selector: '.forth-step',
        content: (
        <>
          <div>
            <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>Check out AnotherPage!</p>
            <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
          </div>
        </>),
        action: () => { history.replace('/anotherpage') },
    },
    {
      selector: '.fifth-step',
      content: (
        <>
          <div>
            <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>You can go back to Home!</p>
            <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
          </div>
        </>),
    },
    {
      selector: '.sixth-step',
      content: (
        <>
          <div>
            <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>You've finished the tour! Click x.</p>
            <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
          </div>
        </>),
      action: () => { history.replace('/') },
    },
];



export default steps;