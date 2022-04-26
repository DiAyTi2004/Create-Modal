function CreateModal(props) {
    const {
        selector,
        title,
        message,
        confirm,
        cancel
    } = props;
    function createCancelBtn() {
        if (cancel) {
            return `
            <button class="modal__btn btn--cancel">
                Cancel
                <i class="fa-solid fa-triangle-exclamation"></i>
            </button>
            `;
        }
    }
    function createConfirmBtn() {
        if (confirm) {
            return `
            <button class="modal__btn btn--confirm">
                Confirm
                <i class="fa-solid fa-circle-check"></i>
            </button>
            `;
        }
    }
    function removeModal(){
        const modalWrapper= document.querySelector( '.modal__wrapper');
        const closeModalBtn= document.querySelector( '.modal__close');
        closeModalBtn.onclick= function(){
            modalWrapper.remove();
        }
        return closeModalBtn;
    }
    function instantRemoveModal(){
        const closeModalBtn= removeModal();
        closeModalBtn.click();
    }
    function createModalWrapper() {
        let modalWrapper = document.createElement('div');
        modalWrapper.classList.add('modal__wrapper');
        modalWrapper.innerHTML = `
            <div class="modal">
                <header class="modal__heading">
                    <h2 class="modal__tit">
                        ${title}
                    </h2>
                    <div class="modal__close">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </header>
                <div class="modal__body">
                    <div class="modal__content">
                        ${message}
                    </div>
                </div>
                <footer class="modal__footer">
                    ${createCancelBtn() ? createCancelBtn() : ''}
                    ${createConfirmBtn() ? createConfirmBtn() : ''}
                </footer>
            </div>
        `;
        return modalWrapper;
    }
    function handleConfirm(){
        const confirmBtn= document.querySelector( '.modal__btn.btn--confirm');
        confirmBtn.onclick= function(){
            confirm();
            instantRemoveModal();
        }
    }
    function handleCancel(){
        const cancelBtn= document.querySelector( '.modal__btn.btn--cancel');
        cancelBtn.onclick= function(){
            cancel();
            instantRemoveModal();
        }
    }
    function appendIntoDom() {
        const modalWrapper = createModalWrapper();
        document.querySelector('#main').appendChild (modalWrapper);
        removeModal();
        if( confirm){
            handleConfirm();
        }
        if( cancel){
            handleCancel();
        }
    }
    function start() {
        if (
            !selector ||
            !title ||
            !message ||
            !( confirm || cancel )
        ){
            alert('Not enough information!');
        }
        else{
            const clickedElement = document.querySelector(selector);
            clickedElement.onclick = function(){
                appendIntoDom();
            };
        }
    }
    start();
}