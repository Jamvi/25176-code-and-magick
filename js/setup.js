'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var SIMILAR_LIST_ELEMENT = document.querySelector('.setup-similar-list');
var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var createUniqueName = function (names, surnames, duplicateNames) {

  var fullName = names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)];

  if (duplicateNames.indexOf(fullName) > -1) {
    fullName = createUniqueName(names, surnames, duplicateNames);
  } else {
    duplicateNames.push(fullName);
  }

  return fullName;
};

var createWizard = function (names, surnames, coats, eyes) {

  var duplicateFullNames = [];
  var wizardsCatalog = [];

  for (var i = 0; i < 4; i++) {

    var wizard = {
      name: createUniqueName(names, surnames, duplicateFullNames),
      coatColor: coats[Math.floor(Math.random() * coats.length)],
      eyesColor: eyes[Math.floor(Math.random() * eyes.length)]
    };
    wizardsCatalog[i] = wizard;

  }

  return wizardsCatalog;
};

var renderWizard = function (wizard) {
  var wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizardsList) {
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizardsList[j]));
  }

  SIMILAR_LIST_ELEMENT.appendChild(fragment);
};

var wizards = createWizard(FIRST_NAMES, LAST_NAMES, COAT_COLORS, EYES_COLORS);

renderWizards(wizards);

document.querySelector('.setup-similar').classList.remove('hidden');
