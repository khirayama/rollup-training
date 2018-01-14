import messages from './messages';
import React from 'react';
import ReactDOM from 'react-dom';

window.addEventListener('DOMContentLoaded', () => {
  console.log(`Start app at ${new Date()}.`);
  console.log(messages.start);
  const applicationMainElement: Element|null = window.document.querySelector('.application');

  if (applicationMainElement !== null) {
    ReactDOM.render(
      <h1>Hello Rollup</h1>,
      applicationMainElement,
    );
  }
});
