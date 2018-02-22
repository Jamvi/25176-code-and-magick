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

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;
  var artifactsElement = document.querySelector('.setup-artifacts');

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
    evt.preventDefault();
    artifactsElement.style.outline = 'none';
  });


  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

})();
