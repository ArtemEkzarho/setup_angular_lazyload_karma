describe('loaded.first', () => {
    var createController;

    beforeEach(angular.mock.module('demoApp'));

    beforeEach(inject(($componentController) => {
        createController = () => {
            return $componentController('loadedFirst', {}, {});
        };
    }));


    describe('test_for_loaded_first', () => {
        it('is_testValueCorrect', () => {
            let ctrl = createController();
            
            expect(ctrl.testValue).toEqual(777);
        });
    });
});