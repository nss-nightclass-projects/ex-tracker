const writeLocations = (locations) => {
  let strang = '';
  locations.forEach((location) => {
    strang += `<div class="col-md-4 thumbnail">`;
    strang +=   `<div class="caption">`;
    strang +=     `<h3 id="thumbnail-label">${location.Name}</h3>`;
    strang +=     `${location.LocationAddress}`;
    strang +=     `<div class="caption card-footer">`;
    strang +=       `${location.TimeThatExNormallyGoes}`;
    strang +=     `</div>`;
    strang +=   `</div>`;
    strang += `</div>`;
  });
  return strang;
};

module.exports = writeLocations;
