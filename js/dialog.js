'use strict';

(function () {
  var setupModal = document.querySelector('.setup');
  var setupModalOpen = document.querySelector('.setup-open');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupModalClose = setupModal.querySelector('.setup-close');
  var userNameInput = setupModal.querySelector('.setup-user-name');

  var openPopup = function () {
    setupModal.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setupModal.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupModalOpen.addEventListener('click', openPopup);

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  setupOpenIcon.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupModalClose.addEventListener('click', closePopup);

  setupModalClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  userNameInput.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, function () {
      evt.stopPropagation();
    });
  });

  userNameInput.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, function () {
      evt.preventDefault();
    });
  });

})();
