(function () {
                var contador = 1;
                var altoAdicional = 86;
                $(window).on('scroll', function () {
                    var altura_del_menu = $('nav.navbar').outerHeight(true);
                    if ($(document).width() > 960) {
                        if ($(window).scrollTop() >= altura_del_menu) {
                            if (!$('nav.navbar').hasClass('fixed')) {
                                $('nav.navbar').css({'opacity': '0'}).addClass('fixed').animate({'opacity': '1'}, 'slow');
                            }
                        } else {
                            if ($('nav.navbar').hasClass('fixed')) {
                                $('nav.navbar').removeClass('fixed');
                            }
                        }
                    }
                });
                $(".btn-contacto").on('click', function (e) {
                    e.preventDefault();
                    var offset = $("#contacto").offset().top - altoAdicional;
                    $('html, body').animate({scrollTop: offset}, 'slow');
                });
            })();
        