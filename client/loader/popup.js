/**
 * Created by odrapeza on 08.12.2016.
 *
 * Makes any element modal window
 *
 */
export default class Popup {
    /**
     * @param {HTMLElement} element
     * @param {string} className
     */
    constructor(element, className = 'modal-window') {
        this.modalClassName = className;
        
        this._modal = element;
        this._bodyDefaults = {
            position: document.body.style.position,
            overflow: document.body.style.overflow
        };
        this._bodyStyles = {
            position: 'relative',
            overflow: 'hidden'
        };
        this._modalDefaults = {
            top: element.style.top,
            left: element.style.left,
            width: element.style.width,
            position: element.style.position,
            height: element.style.height,
            'z-index': element.style['z-index'],
            'background-color': element.style['background-color']
        };
        this._modalStyles = {
            top: '0px',
            left: '0px',
            width: '100%',
            position: 'fixed',
            height: '100%',
            'z-index': '9999',
            'background-color': 'rgba(0, 0, 0, 0.2)'
        };
    }

    /**
     * Apply modal styles to element and body
     */
    open() {
        this._modal.classList.add(this.modalClassName);
        this.changeBodyStylesTo(this._bodyStyles);
        this.setStyles(this._modalStyles);
    }

    /**
     * Reset element and body styles to default
     */
    close() {
        this._modal.classList.remove(this.modalClassName);
        this.changeBodyStylesTo(this._bodyDefaults);
        this.setStyles(this._modalDefaults);
    }

    /**
     * Modal element is read-only
     * @return {HTMLElement}
     */
    get element() {
        return this._modal;
    }
    
    /**
     * @param {Object} styles - set of modal element styles with values
     * @example {width: '300px'}
     */
    setStyles(styles) {
        for (let key in styles) {
            if (!styles.hasOwnProperty(key)) continue;
            if (key in this._modal.style) {
                this._modal.style[key] = styles[key];
            }
        }
    }

    /**
     * Set body styles to modal wrapper
     */
    changeBodyStylesTo(styles) {
        let bodyStyle = document.body.style;

        for (let key in styles) {
            if (!styles.hasOwnProperty(key)) continue;
            if (key in bodyStyle) {
                bodyStyle[key] = styles[key];
            }
        }
    }
}