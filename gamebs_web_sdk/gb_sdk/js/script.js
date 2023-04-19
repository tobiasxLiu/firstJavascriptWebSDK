$(document).ready(function () {
  var $draggable = $('.loginBar').draggabilly({
    axis: 'y',
    containment: true
  });

  $draggable.on('staticClick', function () {
	if(accessToken2OBJ){
		$(this).toggleClass('on');
	}
	else{
		$('#loginModal').modal('show');
	}
    // console.log('staticClick');
  });
  $draggable.on( 'dragMove', function() {
    $(this).removeClass('on')
  })

  $('.modal').on('shown.bs.modal', function (e) {
    var windowH = $(window).height();
    var modalH = $(this).find('.modal-content').height();
    if (modalH>windowH) {
      $('body').addClass('modal-open');
      $(this).animate({
        scrollTop: 0
      }, 500);
    }
  });
});
