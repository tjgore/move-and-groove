// Modal
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) 
  var recipient = button.data('delete') 
  var modal = $(this)
  modal.find('.modal-btn').html(recipient)
})
$(".menu-closebtn").on("click", function(){
  $(".collapse").removeClass("show");
});

// Timer 
var timer = new Timer();
$('#chronoExample .startButton').click(function () {
  timer.start({precision: 'secondTenths'});
  $('.startButton').hide();
  $('.stopButton').show();
});
$('#chronoExample .pauseButton').click(function () {
  timer.pause();
  $('.stopButton').hide();
  $('.startButton').show();
});
$('#chronoExample .stopButton').click(function () {
  timer.stop();
  //$('#chronoExample .values').html('00:00:00:00');
  $('.startButton').show();
  $('.stopButton').hide();
  if($("#intimerContainer").length){
  $("#intimerContainer").fadeToggle("fast", function() {
    $("#completeContainer").fadeToggle();
  });
  }
});
$('#chronoExample .resetButton').click(function () {
  timer.reset();
});
timer.addEventListener('secondTenthsUpdated', function (e) {
  $('#chronoExample .values').html(timer.getTimeValues().toString(['hours', 'minutes', 'seconds', 'secondTenths'])); 
});
timer.addEventListener('started', function (e) {
  $('#chronoExample .values').html(timer.getTimeValues().toString(['hours', 'minutes', 'seconds', 'secondTenths']));
});
timer.addEventListener('reset', function (e) {
  $('#chronoExample .values').html(timer.getTimeValues().toString(['hours', 'minutes', 'seconds', 'secondTenths']));
});

// Add Activity
// get date
var date = new Date();
var today = date.getFullYear() + "-" + (date.getMonth() < 10 ? '0':'') + (date.getMonth() + 1) + "-" + (date.getDate() < 10 ? '0':'') + date.getDate();
$("#date").val(today);

// get timer and animate emoji view in
function getTimer (btn) {
  $("#duration").val($("#time").text().substring(0,8));
  $("#exercise_status").val(btn.id);
  $("#timerContainer").animate({right: "100%"}, "slow", function(){
    $("#timerContainer").hide();
    $("#pageTitle").text("Your Mood");
    $("#emojiContainer").show();
    $("#emojiContainer").animate({left: "0"},"slow");
  });
}

function getMood (mood) {
  $("#mood").val(mood.id);
  $("#new_exercise").submit();
}

// Edit Activity
// set duration
$(".howLong").on("input", function() {
  var hours =  $("#hrs").val();
  var minutes = $("#mins").val();
  var seconds = $("#secs").val();
  var duration = setTimeValues(hours) + ":" + setTimeValues(minutes) + ":" + setTimeValues(seconds);
  $("#exercise_duration").val(duration);
});

function setTimeValues (time) {
  return time.length == 2 ? time : '0' + time;
}


// get duration
if ($("#exercise_duration").length) {
  var duration = $("#exercise_duration").val();
  $("#hrs").val(duration.substring(0,2));
  $("#mins").val(duration.substring(3,5));
  $("#secs").val(duration.substring(7,9));
}