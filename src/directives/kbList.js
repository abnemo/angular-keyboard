/**
 * kb-list directive
 *
 * Usage:
 * <div kb-list ng-model="selection"> ... <div kb-item="aItem">...</div> ... </div>
 */
angular.module('keyboard').directive('kbList', function (KbContainerController, $parse) {
    'use strict';

    return {
        controller: KbContainerController,
        require: 'kbList',
        link: function ($scope, el, attrs, kbContainer) {
            kbContainer.activate = function (kbItem) {
                this.select(kbItem.model);
                return KbContainerController.prototype.activate.apply(this, arguments);
            };
            kbContainer.bind($scope, attrs.kbList);
//            var getModal =ter = $parse(attrs.attrs);

//            ngModel.$render = function () {
//                if (kbContainer.mode === 'multiselect') {
//                    kbContainer.selected = angular.isArray(ngModel.$viewValue) ? ngModel.$viewValue : [];
//                    for (var i in kbContainer.selected) {
//                        var kbItem = kbContainer._locate(kbContainer.selected[i]);
//                        if (kbItem) {
//                            kbContainer.active = kbItem;
//                            break;
//                        }
//                    }
//                } else {
//                    kbContainer.selected[0] = ngModel.$viewValue;
//                    var kbItem = kbContainer._locate(kbContainer.selected[0]);
//                    if (kbItem) {
//                        kbContainer.active = kbItem;
//                    }
//                }
//            };
            $scope.$watch(function () {
                return kbContainer.selected;
            }, function (selected) {
                if (kbContainer.mode === 'multiselect') {
//                    ngModel.$setViewValue(selected);
                } else {
//                    ngModel.$setViewValue(selected[0]);
                }
            });
        }
    };
});