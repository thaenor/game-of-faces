function events(){
  $('#save').click(function(event) {
		player1.persist();
		player2.persist();
	});

	$('#load').click(function(event) {
		player1.loadData(1);
		player2.loadData(2);
	});

  /** cleans textfields */
	$('#typedPlayerName1').click(function() {
  		$('#typedPlayerName1').val('');
	});
	$('#typedPlayerName2').click(function() {
  		$('#typedPlayerName2').val('');
	});


  /** changes player name */
	$('#typedPlayerName1').keyup(function() {
  		player1.setName($('#typedPlayerName1').val());
  		player1.showData(1);
	});
	$('#typedPlayerName2').keyup(function() {
  		player2.setName($('#typedPlayerName2').val());
  		player2.showData(2);
	});


  /** Change active player */
  $('#panelplay1').bind('touchstart', function() {
    $(this).css('background-color', 'lightblue');
    activePane = 1;
  });

  $('#panelplay1').bind('touchend', function() {
    $(this).css('background-color', '#eee');
  });

  $('#panelplay2').bind('touchstart', function() {
    $(this).css('background-color', 'lightblue');
    activePane = 2;
  });

  $('#panelplay2').bind('touchend', function() {
    $(this).css('background-color', '#eee');
  });


  $('#true').click(function(event) {
    if(activePane === 1)
      player1.addPoint();
    else if (activePane === 2)
      player2.addPoint();
    player1.showData(1);
    player2.showData(2);
  });
  $('#jinx').click(function(event) {
    if(activePane === 1)
      player1.points--;
    else if (activePane === 2)
      player2.addPoint();
    player1.showData(1);
    player2.showData(2);
  });
}
