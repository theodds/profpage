(function($) {
  $(function() {

    var $body = $('body');

    $body
      .on('click', '#mobile-nav', function() {
        $(this).toggleClass('open');
      })
      .on('click', 'a.modal', function(e) {
        e.stopPropagation();
        var id = $(this).attr('href');
        var $modal = $('aside.modal' + id);

        if ($modal.length) {
          $body.addClass('modal-open');
          $modal.addClass('open');
        }
      })
      .on('click', '.modal .close', function() {
        closeModal();
      })
      .on('click', function(e) {
        if ($body.hasClass('modal-open')) {
          var $target = $(e.target);
          var modalTargeted = $target.hasClass('modal') || $target.closest('.modal').length;
          if (!modalTargeted) {
            closeModal();
          }
        }
      })
    ;

    function closeModal() {
      $('body').removeClass('modal-open');
      $('aside.modal').removeClass('open');
    }

	});
})(jQuery);
