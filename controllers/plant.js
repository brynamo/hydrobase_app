'use strict';

var PlantModel = require('../models/plant');


module.exports = function (router) {

    var model = new PlantModel();

    router.get('/', function (req, res) {
        
        
        res.render('plant', model);
        
        
    });

};
