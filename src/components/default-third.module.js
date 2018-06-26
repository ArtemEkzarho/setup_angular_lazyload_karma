import angular from 'angular';

const defaultThird = angular
    .module('defaultThird',
        [])
    .component('defaultThird', {
        template: '<h1>Third default module<h1>',
        controller: class defaultThirdComponent {
            constructor() {
                console.log('Third default component is inited');
            }
        },
        controllerAs: 'ctrl'
    })
    .name;

export default defaultThird;