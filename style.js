<script>

  $(document).ready(function () {
    $('.navbar-nav .nav-link').on('click', function (e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top - 70
      }, 1000);
    });
  });
</script>