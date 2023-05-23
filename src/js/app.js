const bgMusic = document.querySelector('#background-music');
const bgMusicBtn = document.querySelector('.background_music');

document.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.background_music')) {
    bgMusicBtn.classList.toggle('mute');
    bgMusicBtn.classList.contains('mute') ? bgMusic.play() : bgMusic.pause();
  }

  // Открытие модально окна конкретного шага
  if (target.closest('.production-step')) {
    const selectedStep = target.closest('.production-step');
    const selectedStepId = selectedStep.dataset.step;
    const stepModal = document.querySelector(`[data-step-modal="${selectedStepId}"]`);
    bgMusic.pause();
    if (stepModal) {
      stepModal.classList.add('show');
      const modalAudio = stepModal.querySelector('audio');
      modalAudio.play();
    }
  }

  // Закрытие модально окна
  if ((target.closest('.step-modal') && !target.closest('.step-modal__content')) || target.closest('.step-modal__close')) {
    const openedModal = document.querySelector('.step-modal.show');
    const modalId = openedModal.dataset.stepModal;
    bgMusicBtn.classList.contains('mute') ? bgMusic.play() : bgMusic.pause();
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


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 20, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
});




