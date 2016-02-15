'use strict';

var EnvironmentModel = require('../models/environment');


module.exports = function (router) {

    var model = new EnvironmentModel();

    router.get('/', function (req, res) {
        
        
        res.render('environment', model);
        
        
    });

};
