//Hàm tạo ToolTip cho node element.
function CreateToolTips(props) {
    const { selector, position, message } = props;
    const element = document.querySelector(selector);
    if (element) {
        if (!element.style.position) {
            element.style.position = 'relative';
        }
        let toolTipElement;
        element.onmouseenter = function () {
            toolTipElement= handleCreate();
            element.appendChild( toolTipElement);
        }
        element.onmouseleave = function () {
            toolTipElement.remove();
        }
    }
    else {
        alert('Selector is not found');
    }
    function handleCreate() {
        const toolTip = document.createElement('div');
        toolTip.classList.add('tooltip', `tooltip--${position}`);
        const toolMessage = document.createElement('h4');
        toolMessage.classList.add('tool__message');
        toolMessage.innerText = message;
        toolTip.appendChild(toolMessage);
        return toolTip;
    }
}