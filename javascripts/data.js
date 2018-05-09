const loadLocations = require('./locations');
const loadEx = require('./ex');
const dom = require('./dom');
const events = require('./events');

const onExLoad = (data) => {
  console.log('data', data);
  $('#ex').append(dom.writeEx(data.ex));
};

const onLocationLoad = (data) => {
  $('#locations').append(dom.writeLocations(data.locations));
  events();
};

const error = function (error) {
  console.error('shit broke', error);
};

const initializer = () => {
  loadLocations(onLocationLoad, error);
  loadEx(onExLoad, error);
};

module.exports = initializer;
