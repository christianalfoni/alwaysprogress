alwaysprogress
==============

A progressbar that will always go from 0-100%, but adjusts to the synchronous or asynchronous steps you have set up.

It automatically detects if you are using jQuery and/or requirejs.

Take a look at the the examples in the repo or at this JSFiddle: http://jsfiddle.net/xeWrF/1/

How to use
==========

  ```javascript
  <script src="alwaysProgress.js"></script>
  <script>
    alwaysProgress(document.getElementById('bar'), true). // True sets it to synchronous
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
  </script>
  ```
  
### With jQuery
  ```javascript
      $('#bar').alwaysProgress(true). // True sets it to synchronous
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
  ```
