'use strict';

(function () {
  var SIMILAR_LIST_ELEMENT = document.querySelector('.setup-similar-list');
  var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderWizards = function (wizardsList) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.createWizards.wizards.length; i++) {
      fragment.appendChild(renderWizard(wizardsList[i]));
    }

    SIMILAR_LIST_ELEMENT.appendChild(fragment);
  };

  renderWizards(window.createWizards.wizards);

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
