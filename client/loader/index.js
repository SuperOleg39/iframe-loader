import EventManager from './eventManager';
import Iframe from './iframe';
import Popup from './popup';

const handlers = {
    'init': initWidget,
    'widgets': configureWidget,
    'start': startWidget
};

const events  = window.OB || [];
const frame   = new Iframe('http://localhost:8000');
const modal   = new Popup(frame.element);
const manager = new EventManager(events, handlers);

init();

function initWidget(params) {
    console.log(params);
    frame.appendIframeTo(document.body);
}

function configureWidget(params) {
    console.log(params);
}

function startWidget(params) {
    console.log(params);
    modal.open();

    setTimeout(() => {
        modal.close();
    }, 3000);
}

function init() {
    frame.host = '/';
    frame.setAttrs({src: '/'});

    frame.element.onload = () => {
        frame.sendMessage('init', {time: 0});
    };

    window.addEventListener('message', (event) => {
        console.log(event);
        let data = JSON.parse(event.data);

        frame.receiveMessage(data.name, data.params);
    });
}