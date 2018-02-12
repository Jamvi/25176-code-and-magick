'use strict';

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var SIMILAR_LIST_ELEMENT = document.querySelector('.setup-similar-list');
var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var setupModal = document.querySelector('.setup');

var openPopup = function () {
  setupModal.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupModal.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var setupModalOpen = document.querySelector('.setup-open');

setupModalOpen.addEventListener('click', openPopup);

var setupOpenIcon = document.querySelector('.setup-open-icon');

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

var setupModalClose = setupModal.querySelector('.setup-close');

setupModalClose.addEventListener('click', closePopup);

setupModalClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var getRandomElement = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

var userNameInput = setupModal.querySelector('.setup-user-name');

userNameInput.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  } else if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

var setupWizardCoat = document.querySelector('.wizard-coat');

setupWizardCoat.addEventListener('click', function (evt) {
  var newWizardCoat = getRandomElement(COAT_COLORS);
  evt.target.style.fill = newWizardCoat;
  setupModal.querySelector('[name=coat-color]').value = newWizardCoat;
});

var setupWizardEyes = document.querySelector('.wizard-eyes');

setupWizardEyes.addEventListener('click', function (evt) {
  var newWizardEyes = getRandomElement(EYES_COLORS);
  evt.target.style.fill = newWizardEyes;
  setupModal.querySelector('[name=eyes-color]').value = newWizardEyes;
});

var setupFireball = document.querySelector('.setup-fireball-wrap');

setupFireball.addEventListener('click', function (evt) {
  var newFireBall = getRandomElement(FIREBALL_COLORS);
  evt.target.style.backgroundColor = newFireBall;
  setupModal.querySelector('[name=fireball-color]').value = newFireBall;
});

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
      coatColor: getRandomElement(coats),
      eyesColor: getRandomElement(eyes)
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
