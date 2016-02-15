'use strict';

var mongoose = require('mongoose');

var IotDeviceModel = function() {
	var iotDeviceSchema = mongoose.Schema({
		name: String,
		type: String,
		sensorsAvailable: [{
			ec: Boolean,
			pH: Boolean,
			waterTemp: Boolean,
			soilMoisture: Boolean,
			light: Boolean,
			envHumidity: Boolean,
			envTemp: Boolean,
		}],
		dateAdded: Date,

	});

	iotDeviceSchema.methods.doesItHaveSensor = function(){
		//var sensorPresent = this.
		return this.sensorsAvailable
	};

	return mongoose.model('IoT Device', iotDeviceSchema);

};

module.exports = new IotDeviceModel();
