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
