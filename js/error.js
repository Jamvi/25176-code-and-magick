'use strict';

(function () {
  var errorHandler = function (message) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: yellow; color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);

    var deleteMessage = function () {
      node.remove();
    };

    node.addEventListener('click', function () {
      deleteMessage();
    });

    setTimeout(deleteMessage, 2000);
  };

  window.error = {
    errorHandler: errorHandler
  };
})();


