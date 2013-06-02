(function (global) {

    var AlwaysProgress = function AlwaysProgress(element, sync) {

            var progressed = 0,
                stepCallbacks = [],
                minInterval = 30,
                interval = minInterval,
                steps = 0,
                finishedSteps = 0,
                stepLength = 0,
                createDoneCallback = function createDoneCallback() {
                    return function () {
                        if (sync) {
                            stepCallbacks.splice(0, 1);
                            if (stepCallbacks[0]) {
                                stepCallbacks[0](createDoneCallback());
                            }
                        }
                        finishedSteps++;
                    }
                },
                finishedCallback = function () {
                },
                progress = function () {
                    var newInterval;
                    newInterval = minInterval * (progressed - (100 / steps * finishedSteps)) * steps;
                    progressed++;
                    interval = newInterval > minInterval ? newInterval : minInterval;
                    if (progressed > 100) {
                        finishedCallback(finishedSteps);
                    } else {
                        if (element instanceof HTMLElement) {
                            element.style.width = progressed + '%';
                            element.innerHTML = progressed + '%';
                        } else {
                            element.width(progressed + '%').html(progressed + '%');
                        }
                        setTimeout(progress, interval);
                    }
                };

            this.step = function (callback) {
                steps++;
                if (sync) {
                    stepCallbacks.push(callback);
                } else {
                    callback(createDoneCallback());
                }
                return this;
            };

            this.finished = function (callback) {
                finishedCallback = callback;
                stepLength = 100 / steps;
                if (sync) {
                    stepCallbacks[0](createDoneCallback());
                }
                setTimeout(progress, interval);
                return element;
            };

        },
        initAlwaysProgress = function initAlwaysProgress() {
            var element = this === window ? arguments[0] : this,
                sync = arguments[0] === true || arguments[1] === true;
            if (!element) {
                return console.log('ALWAYSPROGRESS: There is no element here')
            }
            return new AlwaysProgress(element, sync);
        };

    if (typeof jQuery === 'undefined' && typeof define === "function" && define.amd) {
        define(function () { return initAlwaysProgress; } );
    } else if (typeof jQuery === 'undefined') {
        window.alwaysProgress = initAlwaysProgress;
    } else {
        jQuery.fn.alwaysProgress = initAlwaysProgress;
    }

}());