$(function () {
  var menuToggler = $('.navbar-default .navbar-toggle');

  $('#mmenu .navbar-nav>li>a').each(function (e) {
    var self = $(this);
    var target = self.attr('href');

    self.on('click', function (e) {
      e.preventDefault();

      $.smoothScroll({
        scrollElement: null,
        scrollTarget: target,
        offset: -50
      });

      if (menuToggler.css('display') !== 'none') {
        menuToggler.trigger('click');
      }
    });
  });

  $('.to-top').on('click', function () {
    $.smoothScroll({
      scrollElement: null,
      scrollTarget: '#top'
    });
  });

  var bodyEl = $('body');
  bodyEl.scrollspy({
    target: '#mmenu'
  });


  window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    if (!bodyEl.hasClass('show-totop') && scrolled > h) {
      bodyEl.addClass('show-totop');
    } else if (bodyEl.hasClass('show-totop') && scrolled <= h) {
      bodyEl.removeClass('show-totop')
    }
  }


  $('#gal a').each(function () {
    var self = $(this);
    var descr = self.find('.descr');

    self.hover(
      function () {
        descr.stop(true, true).slideDown('fast');
      },
      function () {
        descr.stop(true, true).slideUp('fast');
      }
    );

    self.attr('data-description', $.trim(descr.text()));
  });

  document.getElementById('gal').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
      link = target.src ? target.parentNode : target,
      options = {
        titleProperty: 'ttl', //  data-ttl
        emulateTouchEvents: false,
        index: link,
        onslide: function (index, slide) {
          console.log(slide, this.list);
          var text = this.list[index].getAttribute('data-description'),
            node = this.container.find('.description');
          node.empty();
          if (text) {
            node[0].appendChild(document.createTextNode(text));
          }
        },
        event: event
      },
      links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
  };
});
