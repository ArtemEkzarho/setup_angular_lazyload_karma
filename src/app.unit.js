import angular from 'angular';

import uiRouter from 'angular-ui-router';
import oclazyload from 'oclazyload';

import defaultFirst from './components/default-first.module';
import defaultSecond from './components/default-second.module';
import defaultThird from './components/default-third.module';
import {loadedFirst} from './components/loaded-first.module';
import {loadedSecond} from './components/loaded-second.module';

import config from './rout-config.unit';

export const AppModule = angular
    .module('demoApp', [
        uiRouter,
        oclazyload,
        defaultFirst,
        defaultSecond,
        defaultThird,
        loadedFirst,
        loadedSecond
    ])
    .config(config);