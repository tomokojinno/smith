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

}