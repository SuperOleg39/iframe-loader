import uiRouter from 'angular-ui-router';
import oclazyload from 'oclazyload';

import config from './app.config';
import run from './app.run';

angular
    .module('app', [
        uiRouter,
        oclazyload
    ])
    .config(config)
    .run(run);
