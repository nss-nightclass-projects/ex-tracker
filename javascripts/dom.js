const writeLocations = (locations) => {
  let strang = '';
  locations.forEach((location) => {
    strang += `<div class="${location.TimeThatExNormallyGoes} time col-md-3 thumbnail card">`;
    strang +=   `<div class="caption">`;
    strang +=     `<h3 id="thumbnail-label">${location.Name}</h3>`;
    strang +=     `<p class="caption">${location.LocationAddress}</p>`;
    strang +=   `</div>`;
    strang += `</div>`;
  });
  return strang;
};

const writeEx = (ex) => {
  let strang = '';
  for (let i = 0; i < ex.length; i++) {
    strang += `<div class=" col-md-3 thumbnail card">`;
    strang +=   `<div class="caption">`;
    strang +=     `<h3 id="thumbnail-label">${location.Name}</h3>`;
    strang +=     `<p class="caption">${location.LocationAddress}</p>`;
    strang +=   `</div>`;
    strang += `</div>`;
  };
  return strang;
};

module.exports = {
  writeLocations,
  writeEx,
};
