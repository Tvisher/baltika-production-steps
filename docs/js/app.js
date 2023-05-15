


document.addEventListener('click', (e) => {
  const target = e.target;
  // Открытие модально окна конкретного шага
  if (target.closest('.production-step')) {
    const selectedStep = target.closest('.production-step');
    const selectedStepId = selectedStep.dataset.step;
    const stepModal = document.querySelector(`[data-step-modal="${selectedStepId}"]`);

    if (stepModal) {
      stepModal.classList.add('show');
      const modalAudio = stepModal.querySelector('audio');
      modalAudio.play();
    }
    // setTimeout(() => {
    //   document.querySelectorAll('.ten-step-svg').forEach(item => item.classList.remove('anim'));
    // }, 300);
  }
  // Закрытие модально окна
  if ((target.closest('.step-modal') && !target.closest('.step-modal__content')) || target.closest('.step-modal__close')) {
    const openedModal = document.querySelector('.step-modal.show');
    const modalId = openedModal.dataset.stepModal;
    if (modalId == 10) {
      document.querySelectorAll('.ten-step-svg').forEach(item => item.classList.add('anim'));
    }
    if (openedModal) {
      openedModal.classList.remove('show');
      const modalAudio = openedModal.querySelector('audio');
      modalAudio.pause();
      modalAudio.currentTime = 0;
      modalAudio.volume = 1.0;
      const muteBtn = openedModal.querySelector('.step-modal__music');
      setTimeout(() => {
        muteBtn.classList.remove('mute');
      }, 300);
    }
  }

  if (target.closest('.step-modal__music')) {
    const modalMute = target.closest('.step-modal__music');
    const modalAudio = modalMute.closest('.step-modal').querySelector('audio');
    modalMute.classList.toggle('mute');
    if (modalMute.classList.contains('mute')) {
      modalAudio.volume = 0.0;
    } else {
      modalAudio.volume = 1.0;
    }
  }
});


const stepsSection = document.querySelector('.production-steps');

function ckeckWindowSize() {
  const windowInnerWidth = window.innerWidth;
  const windowInnerHeight = window.innerHeight;
  if (windowInnerWidth < 680 && windowInnerHeight > windowInnerWidth) {
    stepsSection.classList.add('is-mobile');
  } else {
    stepsSection.classList.remove('is-mobile')
  }
}

ckeckWindowSize();
window.addEventListener('resize', ckeckWindowSize);


const hoverElements = document.querySelectorAll('[data-step]');
const highlightElements = document.querySelectorAll('[data-text]');

hoverElements.forEach((hoverElement) => {
  hoverElement.addEventListener('mouseover', () => {
    const step = hoverElement.getAttribute('data-step');
    const highlightElement = document.querySelector(`[data-text="${step}"]`);
    highlightElement.classList.add('highlighted-element');
  });

  hoverElement.addEventListener('mouseout', () => {
    const step = hoverElement.getAttribute('data-step');
    const highlightElement = document.querySelector(`[data-text="${step}"]`);
    highlightElement.classList.remove('highlighted-element');
  });
});