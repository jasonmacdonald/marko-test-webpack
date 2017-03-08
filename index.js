/**
 * Created by Jason MacDonald on 3/8/2017.
 */
'use strict';
var tpl = require('./src/index.html');

window.addEventListener("load", () => {
    var result = tpl.render({});
    result.then(function (result) {
        result.appendTo(document.getElementById('main'));
    });
}, true)