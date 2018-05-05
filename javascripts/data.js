const loadLocations = require('./locations');
const writeLocations = require('./dom');

const success = function (data) {
  console.log('data', data);
  $('#locations').append(writeLocations(data.locations));
};

const error = function (error) {
  console.error('shit broke', error);
};

const initializer = () => {
  loadLocations(success, error);
};

module.exports = initializer;
