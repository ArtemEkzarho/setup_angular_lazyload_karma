import angular from 'angular';

const servicesModule = angular
    .module('services', [])
    .service('dynamicImportsForTestsSrv', class DynamicImportsForTests {
        constructor($ocLazyLoad) {
            'ngInject';
    
            this.$ocLazyLoad = $ocLazyLoad;
        }
    
        init(str) {
            if (process.env.NODE_ENV === 'unit-tests') {
                import(/* webpackChunkName: "loadedfirst" */ '../components/loaded-first.module.js')
                    .then(mod => {
                        return this.$ocLazyLoad.inject(mod.loadedFirst);
                    })

                import(/* webpackChunkName: "loadedsecond" */ '../components/loaded-second.module.js')
                    .then(mod => {
                        return this.$ocLazyLoad.inject(mod.loadedSecond);
                    })
            } else {
                return false;
            }
        }
    })
    .name;

export default servicesModule;