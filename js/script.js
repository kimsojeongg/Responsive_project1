$(function () {
    /* 헤더 네비 */
    $('.pc > nav > ul >li').on('mouseenter focusin', function () {
        $(this).find('.sub').addClass('active');
        $('#header .pc').addClass('active');
    });

    $('.pc > nav > ul >li').on('mouseleave focusout', function () {
        $(this).find('.sub').removeClass('active');
        $('#header .pc').removeClass('active');
    });

    /* 모바일 네비 */
    $('.mobile>ul>li').click(function () {
        $('.Mmenu').toggle('slow');
    }); 0
    $('.Mmenu>ul>li:first').click(function () {
        $('.Mmenu').toggle('slow');
    });


    /* 슬라이드 */
    var current = 0;
    var button = $('#buttonList>li');
    var visual = $('.slide');

    // var i = tg.inde동그라미 버튼 클릭했을 때 버튼 컬러 바꾸기
    button.on({
        click: function () {
            var tg = $(this);
            var i = tg.index();

            button.removeClass('on');
            tg.addClass('on');

            move1(i);

            return false;

        }
    })

    //버튼을 클릭했을 때 해당 배너 보여지도록
    function move1(i) {
        if (current == i) {
            return;  //현재 보이는 이미지가 i순번과 같다면 종료
        }
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);

        currentEl.css({ left: 0 }).stop().animate({ left: '-100%' }, 500);
        nextEl.css({ left: '100%' }).stop().animate({ left: 0 }, 500);

        current = i;

    }

});

$(function () {

    /* 슬라이드 */
    var banner = $('#contents_wrap #contents .content');
    var button1 = $('.Cbtn p.prev');
    var button2 = $('.Cbtn p.next');
    var current = 0;
    var setIntervalId;

    timer();

    function timer() {
        setIntervalId = setInterval(function () {
            var prev = banner.eq(current);


            move(prev, 0, '-100%');

            current++;

            if (current == banner.size()) {
                current = 0;
            }

            var next = banner.eq(current);


            move(next, '100%', 0);
            // pn.addClass('bl');
        }, 2000);
    }

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, { duration: 500, ease: 'easeOutCubic' })
    }




    //마우스 올려졌을 때 멈춤
    $('#contents_wrap .content,.Cbtn p.prev,.Cbtn p.next').on({
        mouseover: function () {
            clearInterval(setIntervalId);  //반복되는거 취소
        }, mouseout: function () {
            timer();
        }
    })


    //버튼 클릭
    button1.click(function () {
        var prev = banner.eq(current);


        //현재 보여지는 이미지를 왼쪽으로 이동
        //넘버는 현재 보여지는 넘버는 안보이게
        move(prev, 0, '100%');

        //조건문 배너 이미지가 끝까지 갔다면 초기화
        current++;

        if (current == banner.size()) {
            current = 0;
        }


        //다음 이미지는 현재 보여지도록 이동
        var next = banner.eq(current);

        move(next, '-100%', 0);
        pn.addClass('bl');

        //원래의 링크속성을 없애기
        return false;

    })

    button2.click(function () {
        var prev = banner.eq(current);


        move(prev, 0, '-100%');


        current--;

        if (current == -banner.size()) {
            current = 0;
        }

        var next = banner.eq(current);

        move(next, '100%', 0);


        return false;
    })

});

$(function () {
    $('#m_footer .Ftext ul').click(function () {
        $(this).find('li:gt(0)').toggle('fast');
    });
});
