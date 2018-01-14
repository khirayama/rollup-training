import messages from './messages';
import React from 'react';
import ReactDOM from 'react-dom';

// window.addEventListener('DOMContentLoaded', () => {
//   console.log(`Start app at ${new Date()}.`);
//
//   const applicationMainElement = window.document.querySelector('.application');
//
//   ReactDOM.render(
//     <h1>Hello Rollup</h1>,
//     applicationMainElement,
//   );
// });

window.addEventListener('DOMContentLoaded', () => {
  console.log(`Start app at ${new Date()}.`);
  console.log(messages.start);
});
