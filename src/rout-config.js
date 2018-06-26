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
        component: 'loadedFirst',
        lazyLoad: ($transition$) => {
            const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
            
            return import(/* webpackChunkName: "loadedfirst" */ 
                './components/loaded-first.module')
                .then(mod => {
                    return $ocLazyLoad.inject(mod.loadedFirst);
                });

        }
    });

    $stateProvider.state('loaded-second', {
        url: '/loaded-second',
        component: 'loadedSecond',
        lazyLoad: ($transition$) => {
            const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
            
            return import(/* webpackChunkName: "loadedsecond" */ 
                './components/loaded-second.module')
                .then(mod => {
                    return $ocLazyLoad.inject(mod.loadedSecond);
                });

        }
    });
}

export default routConfig;