'use strict';

{
    $(function(){
        $('.header__btn').on('click', function(){
            $('.header__navMenu').toggleClass('active');
        });

        $('.index__btn, .header__navMenu a').on('click', function(){
            $('.header__navMenu').removeClass('active');
        });
    });

    $(function(){
        var fadeOut_time = 700; /* ms */
        var fadeIn_time = 700;
        $('#tab_all').on('click',function(){
            $('.regular').fadeIn(fadeIn_time);
            $('.seasonal').fadeIn(fadeIn_time);

            $('#tab_all').addClass('active');
            $('#tab_regular').removeClass('active');
            $('#tab_seasonal').removeClass('active');
        });

        $('#tab_regular').on('click',function(){
            $('.regular').fadeIn(fadeIn_time);
            $('.seasonal').fadeOut(fadeOut_time);

            $('#tab_all').removeClass('active');
            $('#tab_regular').addClass('active');
            $('#tab_seasonal').removeClass('active');
        });
        $('#tab_seasonal').on('click',function(){
            $('.regular').fadeOut(fadeOut_time);
            $('.seasonal').fadeIn(fadeIn_time);

            $('#tab_all').removeClass('active');
            $('#tab_regular').removeClass('active');
            $('#tab_seasonal').addClass('active');
        });    
    });

    $(function(){
        $('.flavor_cards').slick({
            arrows: true, // 前・次のボタンを表示する
            dots: true, // ドットナビゲーションを表示する
            appendArrows: $('.slider'),
            appendDots: $('.slider'), // ドットナビゲーションの生成位置を変更
            speed: 1000, // スライドさせるスピード（ミリ秒）
            slidesToShow: 1, // 表示させるスライド数
            centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
            variableWidth: true, // スライド幅の自動計算を無効化
            autoplay: false, //自動再生
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        autoplay: true, //自動再生
                        slidesToShow: 1, // 表示させるスライド数
                    }
                    }],
        });
    });


}