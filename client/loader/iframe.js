/**
 * Created by odrapeza on 07.12.2016.
 * 
 * Create and manage HTMLIFrameElement
 * 
 */
export default class Iframe {
    /**
     * @param {string} host - iframe src host
     */
    constructor(host = '*') {
        this.host = host;
        this._iframe = document.createElement('iframe');
        this._messageHandlers = {
            close() {
                this.removeIframe();
            }
        };
    }

    /**
     * Iframe element is read-only
     * @return {HTMLIFrameElement}
     */
    get element() {
        return this._iframe;
    }

    /**
     * @param {Object} params - set of iframe element attributes with values
     * @example {width: 300}
     */
    setAttrs(params) {
        for (let key in params) {
            if (!params.hasOwnProperty(key)) continue;
            if (key in this._iframe) {
                this._iframe[key] = params[key];
            }
        }
    }

    /**
     * @param {Object} styles - set of iframe element styles with values
     * @example {width: '300px'}
     */
    setStyles(styles) {
        for (let key in styles) {
            if (!styles.hasOwnProperty(key)) continue;
            if (key in this._iframe.style) {
                this._iframe.style[key] = styles[key];
            }
        }
    }

    /**
     * Send message to internal window
     * @param {string} name - message name
     * @param {Object} params - message parameters
     * @example 'init', {value: 1}
     */
    sendMessage(name, params) {
        let data = JSON.stringify({name, params});
        this._iframe.contentWindow.postMessage(data, this.host);
    }

    /**
     * Catch message and call appropriate event
     * @param {string} name - message name
     * @param {Object} params - message parameters
     * @example 'close', {reason: 'timeout'}
     */
    receiveMessage(name, params) {
        if (this._messageHandlers[name]) {
            this._messageHandlers[name].call(this, params);
        }
    }
    
    /**
     * @param {HTMLElement} parent
     * @example document.body
     */
    appendIframeTo(parent) {
        parent.appendChild(this._iframe);
    }

    /**
     * @param {string} parentId
     * @example 'container'
     */
    appendIframeToId(parentId) {
        let parent = document.getElementById(parentId);
        if (parent) parent.appendChild(this._iframe);
    }
    
    removeIframe() {
        this._iframe.parentNode.removeChild(this._iframe);
    }
}