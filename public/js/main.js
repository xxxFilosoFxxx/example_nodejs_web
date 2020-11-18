$(function() {
  // TODO: fix scroll
  // const windowHeight = $(window).height();

  // $(document).on("scroll", function() {
  //   $(".counter").each(function() {
  //     const self = $(this);
  //     const height = self.offset().top + self.height();
  //     if ($(document).scrollTop() + windowHeight >= height) {
  //       self.addClass("dynamic-number");
  //     }
  //   });
  // });


  $(".dynamic-number").each( function(index, value) {
    $(this).animate({numberValue: $(this).text()}, {
      duration: 3000,
      step: function() {
        $(this).text(Math.ceil(this.numberValue));
      },
    });
  });

});
