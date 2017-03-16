/**
 * Created by odrapeza on 08.12.2016.
 *
 * Get events before and after initialization, and call appropriate handlers
 *
 */
export default class EventManager {
    /**
     * @param {Object} events - global object, contains set of {name, params} elements
     * @param {Object} handlers - set of event handlers {name, callback}
     */
    constructor(events = [], handlers = {}) {
        this._events = events;
        this._handlers = handlers;
        
        /**
         * Rewrite Array.push method for immediate call event handler
         * @param {Array} event - [name, params]
         */
        this._events.push = event => this.callHandler(event);

        this.handleEvents();
    }

    /**
     * Process all events
     */
    handleEvents() {
        this._events.forEach(event => {
            this.callHandler(event);
        });
    }

    /**
     * Find and call handler to event
     * @param {Array} event - [name, params]
     */
    callHandler(event) {
        let name = event[0];
        let params = event[1];

        if (this._handlers[name]) {
            this._handlers[name].call(null, params);
        }
    }

    /**
     * Add set of event handlers
     * @param {Array} handlers - [ [name, callback], [name, callback] ]
     */
    addHandlers(handlers) {
        handlers.forEach(handler => {
            let name = handler[0];
            let callback = handler[1];
            
            this.addHandler(name, callback);
        });
    }

    /**
     * Add event handler
     * @param {string} name
     * @param {Function} callback
     */
    addHandler(name, callback) {        
        if (!this._handlers[name]) {
            this._handlers[name] = callback;
        }
    }
}