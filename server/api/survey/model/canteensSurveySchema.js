var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment-timezone');

var canteensSurveySchema = new Schema({
    name: [{id: Number, value: String}],
    phoneNumber: [{id: Number, value: Number}],
    email: [{id: Number, value: String}],
    hostel: [{id: Number, value: Number}],
    frequency: [{id: Number, value: Number}],
    foodItems: [{id: Number, value: Number}],
    hygieneOfItems: [{id: Number, value: Number}],
    absenceMenuItemTimes: [{id: Number, value: Number}],
    otherParameters: [{id: Number, value: Number}],
    otherSuggestions: [{id: Number, value: String}],
    submittedOn: [{id: Number, value: Date}]
});

canteensSurveySchema.pre('save', function(next) {
    this.submittedOn = [{id: 0, value: moment()}]
    next()
});

module.exports = mongoose.model('CanteensSurvey', canteensSurveySchema);