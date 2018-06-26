import angular from 'angular';

const defaultFirst = angular
    .module('defaultFirst', [])
    .component('defaultFirst', {
        template: '<h1>First default module<h1>',
        controller: class defaultFirstComponent {
            constructor() {
                this.testValue = 666;
                
                console.log('First default component is inited');
            }
        },
        controllerAs: 'ctrl'
    })
    .name;

export default defaultFirst;