'use strict';

var IotDeviceModel = require('../models/iotDevice');


module.exports = function (router) {

    var model = new IotDeviceModel();

    router.get('/', function (req, res) {
        
        
        res.render('iotDevice', model);
        
        
    });

};
