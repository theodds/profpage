(function($) {
  $(function() {

    var $body = $('body');

    $body
      .on('click', '#mobile-nav', function() {
        $(this).toggleClass('open');
      })
      .on('click', 'a[href=#email]', function() {
        var $li = $('a[href=#email]').closest('li');

        // Close email if already open
        if ($li.hasClass('open')) {
          $('span#email').remove();
          $li.removeClass('open');
          return;
        }

        var emailName = 'arlinero';
        var emailDomain = 'stat.fsu.edu';
        var $email = $(
          '<span id="email">' +
            '<a href="mailto:' +
              emailName + '@' + emailDomain + '">' +
              emailName + '@' + emailDomain +
            '</a>' +
          '</span>'
        );

        $email.insertAfter($li);
        $li.addClass('open');
      })
    ;

	});
})(jQuery);
