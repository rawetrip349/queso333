// UserScript
// @name Go Home
// @namespace https://github.com/derjanb
// @version 1.0
// @description Tampermonkey
// @author Jan Biniok
// @include http://
// @include https://
// @run-at document-start
// @grant none
// /UserScript

(function() {
    'use strict';
    alert('Loaded!');
    var $ = window.jQuery;
    $(document).on('keydown', function(e) {
        if (e.which == 16) {
            alert("shift");
        }
    });
})();
