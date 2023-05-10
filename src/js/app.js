


document.addEventListener('click',(e)=>{
    const target = e.target;
    // Открытие модально окна конкретного шага
    if(target.closest('.production-step')){
        const selectedStep = target.closest('.production-step');
        const selectedStepId = selectedStep.dataset.step;
        const stepModal = document.querySelector(`[data-step-modal="${selectedStepId}"]`);
        stepModal && stepModal.classList.add('show');
        document.querySelectorAll('.ten-step-svg').forEach(item=>item.classList.remove('anim'));
    }
       // Закрытие модально окна
       if((target.closest('.step-modal') && !target.closest('.step-modal__content')) || target.closest('.step-modal__close')){
        const openedModal = document.querySelector('.step-modal.show');
        const modalId= openedModal.dataset.stepModal;
        if(modalId == 10){
            document.querySelectorAll('.ten-step-svg').forEach(item=>item.classList.add('anim'));
        }
        openedModal && openedModal.classList.remove('show');
    }
});


const stepsSection = document.querySelector('.production-steps');

function ckeckWindowSize(){
    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;
    if (windowInnerWidth < 680 || windowInnerHeight > windowInnerWidth) {
        stepsSection.classList.add('is-mobile');
    }else {
        stepsSection.classList.remove('is-mobile')
    }
}

ckeckWindowSize();
window.addEventListener('resize',ckeckWindowSize);