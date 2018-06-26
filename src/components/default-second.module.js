import angular from 'angular';

const defaultSecond = angular
    .module('defaultSecond',
        [])
    .component('defaultSecond', {
        template: '<h1>Second default module<h1>',
        controller: class defaultSecondComponent {
            constructor() {
                console.log('Second default component is inited');
            }
        },
        controllerAs: 'ctrl'
    })
    .name;

export default defaultSecond;