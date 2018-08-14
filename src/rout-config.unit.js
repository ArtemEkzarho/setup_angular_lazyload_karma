const routConfig = ($locationProvider, $stateProvider) => {
    'ngInject';

    $locationProvider.hashPrefix('');

    $stateProvider.state('default-first', {
        url: '/default-first',
        component: 'defaultFirst'
    });

    $stateProvider.state('default-second', {
        url: '/default-second',
        component: 'defaultSecond'
    });

    $stateProvider.state('default-third', {
        url: '/default-third',
        component: 'defaultThird'
    });

    $stateProvider.state('loaded-first', {
        url: '/loaded-first',
        component: 'loadedFirst'
    });

    $stateProvider.state('loaded-second', {
        url: '/loaded-second',
        component: 'loadedSecond'
    });
}

export default routConfig;