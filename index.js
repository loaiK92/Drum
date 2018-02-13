$(document).ready(function(){

  function play(e){
      let key = $('.key-'+e.keyCode);
      let audio = $('.audio-'+e.keyCode);
      key.addClass('playing');
      audio.each(function(i){$(this)[i].currentTime = 0;});
      audio.each(function(i){$(this)[i].play();});
      console.log(e.keyCode);
  }

  function stop(){
    $(this).removeClass('playing');
  }

  $('.key').on('transitionend', stop);
  $(window).on('keydown', play);

});
