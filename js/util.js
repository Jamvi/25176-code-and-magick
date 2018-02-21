'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var COLORS = {
    coat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyes: ['black', 'red', 'blue', 'yellow', 'green'],
    fireball: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e848d5']
  };

  var getRandomElement = function (items) {
    return items[Math.floor(Math.random() * items.length)];
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  var isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };

  var getRandomColor = function (part) {
    return getRandomElement(COLORS[part]);
  };

  var colorize = function (element, part, field) {
    element.addEventListener('click', function () {
      var color = getRandomColor(part);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      field.value = color;
    });
  };

  window.util = {
    getRandomElement: getRandomElement,
    getMaxElement: getMaxElement,
    isEnterEvent: isEnterEvent,
    isEscEvent: isEscEvent,
    getRandomColor: getRandomColor,
    colorize: colorize
  };

})();
