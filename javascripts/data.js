const loadLocations = require('./locations');
const writeLocations = require('./dom');
const events = require('./events');

const success = function (data) {
  console.log('data', data);
  $('#locations').append(writeLocations(data.locations));
  events.bindEvents();
  events.searchKeypress();
  events.searchClick();
};

const error = function (error) {
  console.error('shit broke', error);
};

const initializer = () => {
  loadLocations(success, error);
};

module.exports = initializer;
