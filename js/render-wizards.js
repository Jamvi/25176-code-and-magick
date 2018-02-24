'use strict';

(function () {
  var SIMILAR_LIST_ELEMENT = document.querySelector('.setup-similar-list');
  var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsAmount = 4;

  var renderWizard = function (wizard) {
    var wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (wizardsList) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.createWizards.wizards.length; i++) {
      fragment.appendChild(renderWizard(wizardsList[i]));
    }

    SIMILAR_LIST_ELEMENT.appendChild(fragment);
  };

  var successHandler = function (data) {
    var wizards = [];
    var wizardsList = data.slice();

    for (var i = 0; i < wizardsAmount; i++) {
      wizards.push(window.util.getRandomUniqueElement(wizardsList));
    }

    renderWizards(wizards);

    document.querySelector('.setup-similar').classList.remove('hidden');

  };

  window.backend.load(successHandler, function (errorMessage) {
    window.error.errorHandler(errorMessage);
  });

})();
