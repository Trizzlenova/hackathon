const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/allways_test');

let voterInfo = require('./info');

module.exports = {
  voterInfo: voterInfo
};
