const filterMorning = () => {
  $('.time').not('.morning').closest('.card').addClass('hide');
  $('.time').filter('.morning').closest('.card').removeClass('hide');
};

const filterAfternoon = () => {
  $('.time').not('.afternoon').closest('.card').addClass('hide');
  $('.time').filter('.afternoon').closest('.card').removeClass('hide');
};

const filterEvening = () => {
  $('.time').not('.evening').closest('.card').addClass('hide');
  $('.time').filter('.evening').closest('.card').removeClass('hide');
};

const filterAfterDark = () => {
  $('.time').not('.night').closest('.card').addClass('hide');
  $('.time').filter('.night').closest('.card').removeClass('hide');
};

const bindEvents = () => {
  $('#morning-btn').click(filterMorning);
  $('#afternoon-btn').click(filterAfternoon);
  $('#evening-btn').click(filterEvening);
  $('#afterdark-btn').click(filterAfterDark);
};

module.exports = bindEvents;
