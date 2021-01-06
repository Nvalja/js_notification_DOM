'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.body;

  element.insertAdjacentHTML('afterbegin', `
    <div class="notification ${type}">
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `);

  const message = document.querySelector('.notification');

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  setTimeout(() => message.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
