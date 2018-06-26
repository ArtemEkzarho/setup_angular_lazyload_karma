describe('default.first', () => {
    var createController;

    beforeEach(angular.mock.module('demoApp'));

    beforeEach(inject(($componentController) => {
        createController = () => {
            return $componentController('defaultFirst', {}, {});
        };
    }));


    describe('test_for_default_first', () => {
        it('is_testValueCorrect', () => {
            let ctrl = createController();
            
            expect(ctrl.testValue).toEqual(666);
        });
    });
});