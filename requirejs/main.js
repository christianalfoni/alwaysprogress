require(['../alwaysProgress'], function(alwaysProgress) {
    alwaysProgress(document.getElementById('bar'), true).
        step(function (done) {
            setTimeout(function () {
                console.log('done with step 1');
                done();
            }, 2000);
        }).
        step(function (done) {
            setTimeout(function () {
                console.log('done with step 2');
                done();
            }, 4000);
        }).
        step(function (done) {
            setTimeout(function () {
                console.log('done with step 3');
                done();
            }, 1000);
        }).
        step(function (done) {
            setTimeout(function () {
                console.log('done with step 4');
                done();
            }, 10000);
        }).
        finished(function (finishedSteps) {
            console.log('done with ' + finishedSteps);
        });
});