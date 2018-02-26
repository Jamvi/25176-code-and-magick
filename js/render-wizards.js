'use strict';

(function () {
  var SIMILAR_LIST_ELEMENT = document.querySelector('.setup-similar-list');
  var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var WIZARDS_AMOUNT = 4;

  var renderWizard = function (wizard) {
    var wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (wizardsList) {
    var fragment = document.createDocumentFragment();

    while (SIMILAR_LIST_ELEMENT.firstChild) {
      SIMILAR_LIST_ELEMENT.removeChild(SIMILAR_LIST_ELEMENT.firstChild);
    }

    var maxAmount = WIZARDS_AMOUNT;

    if (WIZARDS_AMOUNT > wizardsList.length) {
      maxAmount = wizardsList.length;
    }

    for (var i = 0; i < maxAmount; i++) {
      fragment.appendChild(renderWizard(wizardsList[i]));
    }

    SIMILAR_LIST_ELEMENT.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.renderWizards = renderWizards;

})();
