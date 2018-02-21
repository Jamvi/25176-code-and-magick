'use strict';

(function () {
  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_AMOUNT = 4;

  var createUniqueName = function (names, surnames, duplicateNames) {

    var fullName = window.util.getRandomElement(names) + ' ' + window.util.getRandomElement(surnames);

    if (duplicateNames.indexOf(fullName) > -1) {
      fullName = createUniqueName(names, surnames, duplicateNames);
    } else {
      duplicateNames.push(fullName);
    }

    return fullName;
  };

  var createWizard = function (names, surnames, amount) {

    var duplicateFullNames = [];
    var wizardsCatalog = [];

    for (var i = 0; i < amount; i++) {

      var wizard = {
        name: createUniqueName(names, surnames, duplicateFullNames),
        coatColor: window.util.getRandomColor('coat'),
        eyesColor: window.util.getRandomColor('eyes')
      };
      wizardsCatalog[i] = wizard;

    }

    return wizardsCatalog;
  };

  var wizards = createWizard(FIRST_NAMES, LAST_NAMES, WIZARDS_AMOUNT);

  window.createWizards = {
    wizards: wizards
  };
})();
