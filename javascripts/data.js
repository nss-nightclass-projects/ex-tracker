const loadLocations = require('./locations');
// const printToDom = require('./dom');

let locationArray = [];

const success = function () {
  locationArray = JSON.parse(this.responseText).locations;
  // printToDom(locationArray);
};

const error = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadLocations(success, error);
};

const getLocations = () => {
  return locationArray;
};

module.exports = {
  initializer,
  getLocations,
};
