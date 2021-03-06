import styles from './TourSteps.css';

export default function getSteps(redirectFunction) {
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
      disableActions: false,
      },
      { 
        selector: '.second-step',
        content: (
          <>
            <div>
              <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>You're on the Auth page, woof.</p>
              <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
            </div>
          </>),
        action: () => { redirectFunction('/login') },
        disableActions: false,
      },
      {
        selector: '.third-step',
        content: (
          <>
            <div>
              <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>Sign Up to create your account. You can still view ingredients without signing up, but you won't be able to brew tea yourself unless you have an account, woof.</p>
              <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
            </div>
          </>),
        disableActions: true,
        },
        {
        selector: '.forth-step',
          content: (
          <>
            <div>
              <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>You're on the ingredients page, woof.</p>
              <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
            </div>
          </>),
          action: () => { redirectFunction('/ingredients') },
      },
      {
        selector: '.fifth-step',
        content: (
          <>
            <div>
              <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>Here, you can create your own tea recipe! You pick bases, flavors, and boosts. The only requirement is you need to pick at least one base, woof. </p>
              <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
            </div>
          </>),
        disableActions: false,
      },
      {
        selector: '.sixth-step',
        content: (
          <>
            <div>
              <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>Click on the tea tag to learn more about an ingredient, woof.</p>
              <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
            </div>
          </>),
        disableActions: false,
      },
      {
        selector: '.seventh-step',
        content: (
          <>
            <div>
              <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>Pick your ingredients, then brew! The kettle is the button you click to move on to the next ingredient type, and to brew your tea when you're done, woof.</p>
              <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
            </div>
          </>),
        disableActions: false,
      },
      {
        selector: '.eighth-step',
        content: (
          <>
            <div>
              <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>The kettle is the button you click to move on to the next ingredient type, and to brew your tea when you're done, woof.</p>
              <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
            </div>
          </>),
      },
      {
        selector: '.ninth-step',
        content: (
          <>
            <div>
              <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>You're on your profile page. All of the recipes you create will appear here, woof.</p>
              <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
            </div>
          </>),
        action: () => { redirectFunction('/profile') },
      },
      {
        selector: '.tenth-step',
        content: (
          <>
            <div>
              <p className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>You can click edit to add notes to your recipe or delete a recipe if you'd no longer like to keep it. Thanks for joining me on our tour! I hope you enjoy TeaLab, woof!</p>
              <img alt='friendly dog face' src='ruby_trans.png' height='120px' />
            </div>
          </>),
        action: () => { redirectFunction('/profile') },
    },
  ];
return steps
}
