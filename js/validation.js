'use strict';

(function () {
  var setupModal = document.querySelector('.setup');
  var setupForm = document.querySelector('.setup-wizard-form');
  var userNameInput = setupModal.querySelector('.setup-user-name');

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

  // fix for Edge browser
  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });

  setupForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(setupForm), window.dialog.closePopup, function (errorMessage) {
      window.error.errorHandler(errorMessage);
    });
  });

})();
