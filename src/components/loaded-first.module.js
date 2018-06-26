import angular from 'angular';

export const loadedFirst = angular
    .module('loadedFirst',
        [])
    .component('loadedFirst', {
        template: '<h1>First lazy loaded module<h1>',
        controller: class loadedFirstComponent {
            constructor() {
                this.testValue = 777;
                console.log('First lazy loaded component is inited');
            }
        },
        controllerAs: 'ctrl'
    })
    .name;