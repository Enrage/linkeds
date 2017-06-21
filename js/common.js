$(document).ready(function () {
    // Slider
    $("#content-slider").lightSlider({
        loop: true,
        keyPress: true,
        auto: true,
        speed: 1800,
        pause: 3500,
        pager: true
    });

    //Scroll For comments
    $('#scrolCom').jScrollPane({
        scrollbarWidth: 30,
        showArrows: true
    });
    $(document).mouseup(function (e) {
        var container = $(".drop"),
                link = $('.selected a.label');
        if (!container.is(e.target) && container.has(e.target).length === 0 && !link.is(e.target)) {
            container.slideUp('fast').closest('.select_kk').removeClass('selected');
        }
    });

    $('.select_kk a.label').click(function (e) {
        var selected = $(this).closest('.select_kk').hasClass('selected');

        if (selected) {
            $(this).closest('.select_kk').removeClass('selected');
            $(this).next('.drop').slideUp('fast');
        } else {
            $('.what_complekt>section.selected').removeClass('selected');
            $(this).closest('.select_kk').addClass('selected');
            $('.select_kk .drop').hide();
            $(this).next('.drop').slideDown('fast');
        }
        $('.form_zakaz_komplekt input[name="komplekt"]').val($(this).closest('.select_kk').attr('data-komplekt'));

        e.preventDefault();
        return false;
    });


// Исчезновение результата регистрации через 3 секунды
    $('.success').delay(5000).fadeOut('slow');
    $('.error').delay(5000).fadeOut('slow');

    const RECEIVED_EMAIL = 'info@linkeds.ru';
    $('.form_zakaz_message').mailer({
        validation: true,
        showMessages: true,
        useCaptcha: false,
        errorClass: 'has-error',
        templateName: 'form_zakaz_message.tpl',
        templateDir: 'mail_tpl/',
        url: 'mail.php',
        messageSetting: {
            subject: 'Новое сообщение',
            mailTo: {
                email: RECEIVED_EMAIL
            },
            mailFrom: {
                name: 'No Reply',
                email: 'no-reply@linkeds.ru'
            }
        },
        afterSend: function (response) {
            if (response.hasOwnProperty('status') && response['status'] == 'success') {
                $('body>.wrapper').prepend('<div class="success">Спасибо за заказ. В ближайшее время с Вами свяжется менеджер для уточнения деталей заказа.</div>');
                setTimeout(function () {
                    location.reload(true);
                }, 4000);
            } else {
                $('body>.wrapper').prepend('<div class="error">Ошибка!<br>' + response['message'] + '</div>');
                $('.error').delay(5000).fadeOut('slow');
            }
            //console.log(response);
        }
    });

    $('.form_zakaz').mailer({
        validation: true,
        showMessages: true,
        useCaptcha: false,
        errorClass: 'has-error',
        templateName: 'form_zakaz.tpl',
        templateDir: 'mail_tpl/',
        url: 'mail.php',
        messageSetting: {
            subject: 'Новый заказ',
            mailTo: {
                email: RECEIVED_EMAIL
            },
            mailFrom: {
                name: 'No Reply',
                email: 'no-reply@linkeds.ru'
            }
        },
        afterSend: function (response) {
            if (response.hasOwnProperty('status') && response['status'] == 'success') {
                $('body>.wrapper').prepend('<div class="success">Спасибо за заказ. В ближайшее время с Вами свяжется менеджер для уточнения деталей заказа.</div>');
                setTimeout(function () {
                    location.reload(true);
                }, 4000);
            } else {
                $('body>.wrapper').prepend('<div class="error">Ошибка!<br>' + response['message'] + '</div>');
                $('.error').delay(5000).fadeOut('slow');
            }
            // console.log(response);
        }
    });

    $('.form_zakaz_text').mailer({
        validation: true,
        showMessages: true,
        useCaptcha: false,
        errorClass: 'has-error',
        templateName: 'form_zakaz_text.tpl',
        templateDir: 'mail_tpl/',
        url: 'mail.php',
        messageSetting: {
            subject: 'Новый заказ',
            mailTo: {
                email: RECEIVED_EMAIL
            },
            mailFrom: {
                name: 'No Reply',
                email: 'no-reply@linkeds.ru'
            }
        },
        afterSend: function (response) {
            if (response.hasOwnProperty('status') && response['status'] == 'success') {
                hideForm($('.form_text'));
                $('body>.wrapper').prepend('<div class="success">Спасибо за заказ. В ближайшее время с Вами свяжется менеджер для уточнения деталей заказа.</div>');
                setTimeout(function () {
                    location.reload(true);
                }, 4000);
            } else {
                $('body>.wrapper').prepend('<div class="error">Ошибка!<br>' + response['message'] + '</div>');
                $('.error').delay(5000).fadeOut('slow');
            }
            //console.log(response);
        }
    });

    $('.form_zakaz_komplekt').mailer({
        validation: true,
        showMessages: true,
        useCaptcha: false,
        errorClass: 'has-error',
        templateName: 'form_zakaz_komplekt.tpl',
        templateDir: 'mail_tpl/',
        url: 'mail.php',
        messageSetting: {
            subject: 'Новый заказ',
            mailTo: {
                email: RECEIVED_EMAIL
            },
            mailFrom: {
                name: 'No Reply',
                email: 'no-reply@linkeds.ru'
            }
        },
        afterSend: function (response) {
            if (response.hasOwnProperty('status') && response['status'] == 'success') {
                hideForm($('.form_komplekt'));
                $('body>.wrapper').prepend('<div class="success">Спасибо за заказ. В ближайшее время с Вами свяжется менеджер для уточнения деталей заказа.</div>');
                setTimeout(function () {
                    location.reload(true);
                }, 4000);
            } else {
                $('body>.wrapper').prepend('<div class="error">Ошибка!<br>' + response['message'] + '</div>');
                $('.error').delay(5000).fadeOut('slow');
            }
            // console.log(response);
        }
    });

    $('.form_post_review').mailer({
        url: 'comment.php',
        afterSend: function (response) {
            if (response.hasOwnProperty('status') && response['status'] == 'success') {
                hideForm($('.form_review'));
                $('body>.wrapper').prepend('<div class="success">Спасибо Ваш отзыв. В ближайшее время мы его проверим и опубликуем.</div>');
                setTimeout(function () {
                    location.reload(true);
                }, 4000);
            } else {
                $('body>.wrapper').prepend('<div class="error">Ошибка!<br>' + response['message'] + '</div>');
                $('.error').delay(5000).fadeOut('slow');
            }
            // console.log(response);
        }
    });

    $('.show_form_text').click(function (e) {
        showForm($('.form_text'));
        e.preventDefault();
        return false;
    });

    $('.show_form_komplekt').click(function (e) {
        showForm($('.form_komplekt'));
        e.preventDefault();
        return false;
    });

    $('.show_form_review').click(function (e) {
        showForm($('.form_review'));
        e.preventDefault();
        return false;
    });

    $('.close').click(function (e) {
        $(this).closest('.shadow').fadeOut(400);
        e.preventDefault();
        return false;
    });
});
function getSelectedKomplekt() {
    return $('.what_complekt>section.selected').attr('data-komplekt');
}

function showForm($object) {
    $($object).fadeIn(400);
}
function hideForm($object) {
    $($object).fadeOut(400);
}

function jump(h) {
    var top = document.getElementById(h).offsetTop,
            left = document.getElementById(h).offsetLeft;
    var animator = createAnimator({
        start: [0, window.pageYOffset],
        end: [left, top],
        duration: 500
    }, function (vals) {
        //console.log(arguments);
        window.scrollTo(vals[0], vals[1]);
    });
    animator();
}

function createAnimator(config, callback, done) {
    if (typeof config !== "object")
        throw new TypeError("Arguement config expect an Object");

    var start = config.start,
            mid = $.extend({}, start), //clone object
            math = $.extend({}, start), //precalculate the math
            end = config.end,
            duration = config.duration || 1000,
            startTime, endTime;

    //t*(b-d)/(a-c) + (a*d-b*c)/(a-c);
    function precalculate(a, b, c, d) {
        return [(b - d) / (a - c), (a * d - b * c) / (a - c)];
    }

    function calculate(key, t) {
        return t * math[key][0] + math[key][1];
    }

    function step() {
        var t = Date.now();
        var val = end;
        if (t < endTime) {
            val = mid;
            for (var key in mid) {
                mid[key] = calculate(key, t);
            }
            callback(val);
            requestAnimationFrame(step);
        } else {
            callback(val);
            done && done();
        }
    }

    return function () {
        startTime = Date.now();
        endTime = startTime + duration;
        for (var key in math) {
            math[key] = precalculate(startTime, start[key], endTime, end[key]);
        }
        step();
    }
}