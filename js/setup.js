'use strict';

(function () {
  var setupModal = document.querySelector('.setup');

  var setupWizardCoat = document.querySelector('.wizard-coat');
  var setupWizardEyes = document.querySelector('.wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');

  var wizardCoatField = setupModal.querySelector('[name=coat-color]');
  var wizardEyesField = setupModal.querySelector('[name=eyes-color]');
  var wizardFireballField = setupModal.querySelector('[name=fireball-color]');

  window.util.colorize(setupWizardCoat, 'coat', wizardCoatField);

  window.util.colorize(setupWizardEyes, 'eyes', wizardEyesField);

  window.util.colorize(setupFireball, 'fireball', wizardFireballField);
})();
