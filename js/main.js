(function($) {
  $(function() {

    var $body = $('body');

    $body.on('click', '#mobile-nav', function() {
      $(this).toggleClass('open');
    });

	});
})(jQuery);
