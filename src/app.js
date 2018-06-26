import angular from 'angular';

import uiRouter from 'angular-ui-router';
import oclazyload from 'oclazyload';

import defaultFirst from './components/default-first.module';
import defaultSecond from './components/default-second.module';
import defaultThird from './components/default-third.module';

import config from './rout-config';

export const AppModule = angular
    .module('demoApp', [
        uiRouter,
        oclazyload,
        defaultFirst,
        defaultSecond,
        defaultThird
    ])
    .config(config);