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
  });
  $('#chronoExample .pauseButton').click(function () {
    timer.pause();
  });
  $('#chronoExample .stopButton').click(function () {
    timer.stop();
    //$('#chronoExample .values').html('00:00:00:00');
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
    $("#exercise_status").val(btn.innerHTML);
    $("#timerContainer").animate({right: "100%"}, "slow", function(){
      $("#timerContainer").hide();
      $("#pageTitle").text("Your Mood");
      $("#emojiContainer").show();
      $("#emojiContainer").animate({left: "0"},"slow");
    });
  }

// get mood
  function getMood (mood) {
    console.log(mood.id);
    $("#mood").val(mood.id);
    // submit form
    $("#new_exercise").submit();
  }

// Edit Activity
// set duration
  $(".howLong").on("input", function() {
    var duration = ($("#hrs").val().length == 2 ? $("#hrs").val() : '0'+$("#hrs").val()) + ":" + ($("#mins").val().length == 2 ? $("#mins").val() : '0'+$("#mins").val()) + ":" + ($("#secs").val().length == 2 ? $("#secs").val() : '0'+$("#secs").val() );
    $("#exercise_duration").val(duration);
  });

// get duration
  function getDuration() {
    var duration = $("#exercise_duration").val();
    $("#hrs").val(duration.substring(0,2));
    $("#mins").val(duration.substring(3,5));
    $("#secs").val(duration.substring(7,9));
  }
  getDuration();