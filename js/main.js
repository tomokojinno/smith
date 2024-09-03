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
            // $('.regular').addClass('active');
            // $('.seasonal').addClass('active');
            $('.flavor_cards').slick('slickUnfilter');


            $('#tab_all').addClass('active');
            $('#tab_regular').removeClass('active');
            $('#tab_seasonal').removeClass('active');
        });

        $('#tab_regular').on('click',function(){
            $('.regular').fadeIn(fadeIn_time);
            $('.seasonal').fadeOut(fadeOut_time);
            // $('.regular').addClass('active');
            // $('.seasonal').removeClass('active');
            $('.flavor_cards').slick('slickUnfilter');
            $('.flavor_cards').slick('slickFilter','.regular');

            $('#tab_all').removeClass('active');
            $('#tab_regular').addClass('active');
            $('#tab_seasonal').removeClass('active');
        });
        $('#tab_seasonal').on('click',function(){
            $('.regular').fadeOut(fadeOut_time);
            $('.seasonal').fadeIn(fadeIn_time);
            // $('.regular').removeClass('active');
            // $('.seasonal').addClass('active');
            $('.flavor_cards').slick('slickUnfilter');
            $('.flavor_cards').slick('slickFilter','.seasonal');

            $('#tab_all').removeClass('active');
            $('#tab_regular').removeClass('active');
            $('#tab_seasonal').addClass('active');
        });    
    });
 
    $(function(){
        $('.flavor_cards').slick({
            arrows: true, // 前・次のボタンを表示する
            dots: true, // ドットナビゲーションを表示する
            speed: 1000, // スライドさせるスピード（ミリ秒）
            appendArrows: $('.slider'),
            appendDots: $('.slider'), // ドットナビゲーションの生成位置を変更
            slidesToShow: 1, // 表示させるスライド数
            centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
            variableWidth: true, // スライド幅の自動計算を無効化
            autoplay: true, //自動再生
            autoplaySpeed: 3000,
            pauseOnHover: true,
            pauseOnFocus: true,

            pauseOnDotsHover: true,

            responsive: [{
                    breakpoint: 768,
                    settings: {
                        autoplay: true, //自動再生
                        slidesToShow: 1, // 表示させるスライド数
                        appendArrows: $('.slider'),
                        appendDots: $('.slider'), // ドットナビゲーションの生成位置を変更
                    }
                    }],
        });

        const flavors = ["chocolate", "mocha", "matcha", "vanilla", "pistachio", "strawberry", "lemon", "guava", "mikan", "plum"];
        const seasonal_flavors = ["lemon", "guava", "mikan", "plum"];

        $('.flavor_label').on('click', function(){
            var i_clicked = 0;
            if($('#tab_seasonal').hasClass('active')) {
                seasonal_flavors.forEach((flv, i) => {
                    if ($(this).hasClass(flv)) {
                        i_clicked = i;
                        return;
                    }
                });

            } else {
                flavors.forEach((flv, i) => {
                    if ($(this).hasClass(flv)) {
                        i_clicked = i;
                        return;
                    }
                });
            }

            $('.flavor_cards').slick('slickGoTo', i_clicked, false);
            // console.log(i_clicked);
            // console.log($('#tab_seasonal').hasClass('active'));
        });

        $('.flavor_cards').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            // console.log(currentSlide);
            // console.log(event);
            // console.log(slick);
            // var i = (currentSlide ? currentSlide : 0);
            // console.log(i);

            var dataId = $('.slick-current').attr("data-slick-index");    
            // console.log(dataId);
            $('.flavor_label').removeClass("selected");
            $('button.'+flavors[dataId]).addClass("selected");
            
        });

    });


    let winHeight,winScroll,scrollPos;
    // $(window).on('load scroll',function(){
    $(window).on('scroll',function(){
        winScroll = $(window).scrollTop();//スクロールした距離を取得
        winHeight = $(window).height();
	    scrollPos = winHeight * 0.9 + winScroll;
        // console.log(scrollPos);
        // $(".slidein").each(function(){
        //ページ上部からの距離を取得
        $(".scroll").each(function(){
            if($(this).offset().top <= (scrollPos)){
                $(this).addClass("on");
            }else{
                $(this).removeClass("on");
            }
            // console.log(scrollPos, $(this).offset().top);
        });
        $(".fuwafuwa").each(function(){
            if($(this).offset().top <= (scrollPos)){
                $(this).addClass("on");
            }else{
                $(this).removeClass("on");
            }
            // console.log(scrollPos, $(this).offset().top);
        });
        $(".slide_in").each(function(){
            if($(this).offset().top <= (scrollPos)){
                $(this).addClass("in");
            }else{
                $(this).removeClass("in");
            }
            // console.log(scrollPos, $(this).offset().top);
        });
    });

    // $(window).on('scroll',function(){
    //     winScroll = $(window).scrollTop();//スクロールした距離を取得
    //     winHeight = $(window).height();
	//     scrollPos = winHeight * 0.9 + winScroll;
    //     // console.log(scrollPos);
    //     // $(".slidein").each(function(){
    //     //ページ上部からの距離を取得
    //     $(".fuwafuwa").each(function(){
    //         if($(this).offset().top <= (scrollPos)){
    //             $(this).addClass("on");
    //         }else{
    //             $(this).removeClass("on");
    //         }
    //         // console.log(scrollPos, $(this).offset().top);
    //     });
    // });

    // 日付取得して表示
    var today_date = getNow();
    document.getElementById("view_time").innerHTML = today_date;

    function getNow() {
        var now = new Date();
        var year = now.getFullYear();
        var mon = now.getMonth()+1; //１を足すこと
        var day = now.getDate();
        // var hour = now.getHours();
        // var min = now.getMinutes();
        // var sec = now.getSeconds();

        //出力用
        // var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒"; 
        var s = year + "." + mon + "." + day; 
        return s;
    } 

    //アコーディオンをクリックした時の動作
    $('.title').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".times");//直後のアコーディオンを行うエリアを取得し
        $(findElm).slideToggle();//アコーディオンの上下動作
        
        if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去し
        }else{//それ以外は
        $(this).addClass('close');//クラス名closeを付与
        }
    });
    
    //ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
    $(window).on('load', function(){
        $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
        $(".open").each(function(index, element){ //openクラスを取得
        var Title =$(element).children('.title'); //openクラスの子要素のtitleクラスを取得
        $(Title).addClass('close');       //タイトルにクラス名closeを付与し
        var Box =$(element).children('.times'); //openクラスの子要素boxクラスを取得
        $(Box).slideDown(500);          //アコーディオンを開く
        });
    });

    $(function(){
        $('.pick_time').on('click', function(){
            $(this).toggleClass('pick');
        });
    });



    // counter_wrapを上部に固定する
    $(function(){
        var scrollStart = $('.counter_wrap').offset().top; //ページ上部からの距離を取得
        var distance = 0;
        $(document).scroll(function(){
          distance = $(this).scrollTop(); //スクロールした距離を取得
          if (scrollStart <= (distance + 80)) { //スクロール距離が『.sikaku_box』の位置を超えたら
            $('.counter_wrap').addClass('fixed'); //class『fixed』を追加
          } else if (scrollStart >= distance) { //スクロールがページ上部まで戻ったら
            $('.counter_wrap').removeClass('fixed'); //class『fixed』を削除
            }
        });
    });

    function countChecks(){
        const el = document.getElementsByName("flavor_order");
        let count = 0;
        for (let i = 0; i < el.length; i++) {
            // チェックされている数をカウント
            if (el[i].checked) {
                count++;
            }
        }
        console.log(count);
        document.getElementById("flavor_num").innerHTML = count;
    }

    // document.getElementById("flavor_num").innerHTML = 0;
    $(function(){
        $('.flavor_order').on('click', function(){
            const el = document.getElementsByName("flavor_order");
            let count = 0;
            for (let i = 0; i < el.length; i++) {
                // チェックされている数をカウント
                if (el[i].checked) {
                    count++;
                }
            }
            // console.log(count);
            document.getElementById("flavor_num").innerHTML = count;
        });
    });

    // document.getElementById("topping_num").innerHTML = 0;
    $(function(){
        $('.topping_order_check').on('click', function(){
            const el = document.getElementsByName("topping_order");
            let count = 0;
            for (let i = 0; i < el.length; i++) {
                // チェックされている数をカウント
                if (el[i].checked) {
                    count++;
                }
            }
            // console.log(count);
            document.getElementById("topping_num").innerHTML = count*50;
        });
    })

}