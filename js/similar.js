'use strict';
(function () {
  var coatColor = getComputedStyle(document.querySelector('.wizard-coat')).getPropertyValue('fill');
  var eyesColor = getComputedStyle(document.querySelector('.wizard-eyes')).getPropertyValue('fill');
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.renderWizards(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var onCoatChange = function (color) {
    coatColor = color;
    window.util.debounce(updateWizards);
  };

  var onEyesChange = function (color) {
    eyesColor = color;
    window.util.debounce(updateWizards);
  };

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  window.backend.load(successHandler, function (errorMessage) {
    window.error.errorHandler(errorMessage);
  });

  window.similar = {
    onCoatChange: onCoatChange,
    onEyesChange: onEyesChange
  };
})();
