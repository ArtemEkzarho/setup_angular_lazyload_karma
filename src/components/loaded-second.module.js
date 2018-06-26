import angular from 'angular';

export const loadedSecond = angular
    .module('loadedSecond',
        [])
    .component('loadedSecond', {
        template: '<h1>Second lazy loaded module<h1>',
        controller: class loadedSecondComponent {
            constructor() {
                console.log('Second lazy loaded component is inited');
            }
        },
        controllerAs: 'ctrl'
    })
    .name;