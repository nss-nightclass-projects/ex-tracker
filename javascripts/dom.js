const writeLocations = (locations) => {
  let strang = '';
  locations.forEach((location) => {
    strang += `<div class="${location.TimeThatExNormallyGoes} time col-md-3 card">`;
    strang +=   `<div class="panel panel-default" id="location-card">`;
    strang +=     `<div class="panel-heading">${location.Name}</div>`;
    strang +=     `<p class="caption">${location.LocationAddress}</p>`;
    strang +=   `</div>`;
    strang += `</div>`;
  });
  return strang;
};

const writeEx = (ex) => {
  let strang = '';
  for (let i = 0; i < ex.length; i++) {
    strang += `<div class="ex-card">`;
    strang +=   `<div class="panel panel-danger">`;
    strang +=     `<div class="panel-heading">${ex[i].Name}</div>`;
    strang +=     `<img src="${ex[i].Image}" alt=""Christian Grey>`;
    strang +=     `<h6>Age: ${ex[i].Age}</h6>`;
    strang +=     `<h6>Flaws: ${ex[i].Flaws}</h6>`;
    strang +=   `</div>`;
    strang += `</div>`;
  };
  return strang;
};

module.exports = {
  writeLocations,
  writeEx,
};
