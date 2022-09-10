var tl = new TimelineMax({ 
  delay: 2, 
  repeat: -1,
  repeatDelay: 4
})
tl
  .set('.coveredImage', {opacity: 0})
  .set('.rippleReveal', {opacity: 0})
  .fromTo('.rippleCover', .4, { scale: 0}, { scale: 3, ease: Power2.easeIn})
  .set('.rippleReveal', {opacity: 1, scale: 1})
  .set('.coveredImage', {opacity: 1})
  .set('.rippleCover',  {opacity: 0})
  .to('.rippleReveal svg', .4, {scale: 3, transformOrign: '50% 50%', ease: Power0.easeNone }, 'same')
  .to('.rippleReveal div', .4, {scale: 37.7, transformOrign: '50% 50%', ease: Power0.easeNone }, 'same');