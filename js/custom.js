$(function () {
            
    $('.section.banner').css('margin-top',$('.header').height());

    // 토클 메뉴 호출 이벤트
    $('#tgl_btn').on('click',function(){
        fnEffect();
        if($('#line01').attr('class')){
            if($(window).width()>=768){
                $('#info').css('width','30%').css('right','0');
            }else{
                $('#info').css('width','50%').css('right','0');
            }
        }else{
            fnClose();
        }
    })
    
    // 윈도우 리사이즈 이벤트
    $(window).on('resize',function(){
        $('.section.banner').css('margin-top',$('.header').height());
        fnClose();        
    });

    // 토글메뉴 위치 함수
    function fnClose(){
        $('#info').css('width','0').css('right','-41px');
    }

    //토글버튼 모양 변경함수
    function fnEffect(){
        $('#line01').toggleClass('btn01');
        $('#line02').toggleClass('btn02');
        $('#line03').toggleClass('btn03');
    }



    // swiper 베너 이벤트 객체
    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: 'true',

        },
    });

    // swiper2 포스터 이벤트 객체
    var mySwiper = new Swiper('.swiper-container2', {
        // 반응형 슬라이드 뷰
        breakpoints: {
            // 360이상
            360: {
            slidesPerView: 1.5,
            spaceBetween: 15
            },
            // 768이상
            768: {
            slidesPerView: 2.5,
            spaceBetween: 24
            },
            // 1280이상
            1280: {
            slidesPerView: 4,
            spaceBetween: 24
            }
        }
    });
    // swiper3 이벤트 객체
    var mySwiper = new Swiper('.swiper-container3', {
       
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
    
    // 무비 타이틀 클릭 이벤트
    var moviePos=$('#movie .sec_bottom>div');
    moviePos.hide();
    moviePos.eq(0).show();
    var target=$('#movie_tit>li');
    target.on('click',function(){
        var i=$(this).index();
        moviePos.hide();
        moviePos.eq(i).show();
        target.removeClass();
        $(this).addClass('active');
            var mySwiper = new Swiper('.swiper-container2', {
            // 반응형 슬라이드 뷰
            breakpoints: {
                // 360이상
                360: {
                slidesPerView: 1.5,
                spaceBetween: 15
                },
                // 768이상
                768: {
                slidesPerView: 2.5,
                spaceBetween: 24
                },
                // 1280이상
                1280: {
                slidesPerView: 4,
                spaceBetween: 24
                }
            }
        });
    })

    // 공지사항 타이틀 클릭 이벤트
    var notice=$('.notice_tit>li');
    var noticeTxt=$('.notice_txt');
    notice.eq(0).addClass('notice_active');
    noticeTxt.hide();
    noticeTxt.eq(0).show();
    notice.css('cursor','pointer');
    notice.on('click',function(){
        var indexNum=$(this).index();
        noticeTxt.hide();
        noticeTxt.eq(indexNum).show();
        notice.removeClass();
        $(this).addClass('notice_active');
    })
    
    // ===로그인 모달===
    
    $('.container').hide();
    $('.modal_open_btn').on('click',function(){
        // $('#wrap').hide();
        $('.container').show();
        fnClose();
        fnEffect();
        return false;
    })
    $('#modal_close_btn').on('click',function(){
        $('.container').hide();
        // $('#wrap').show();
        return false;
    })
    var userId=['pam7461','pam7462','pam7463'];
    var userPassword=['123456','12345678','123456789'];
    $('#login_btn').on('click',function(){
        var user_id=$('#user_id');
        var user_pass=$('#user_pass');
        var tmp=0;
        for(cnt=0;cnt<=2;cnt++){
            if(user_id.val()==userId[cnt] && user_pass.val()==userPassword[cnt]){
                tmp=1;
                break;
            }
        }
        if(tmp==1){
            alert('환영합니다 ' + user_id.val() + '님');
        }else{
            alert('ID/PW를 확인하세요');
            user_id.val('');
            user_pass.val('');
            user_id.focus();
        }
    })
})




// $(function(){
//     $('.section.banner').css('margin-top',$('.header').height);
    
//     // 토클 메뉴 호출&닫기 이벤트
//     $('#tgl_btn').on('click',function(){
//         $('#line01').toggleClass('btn01');
//         $('#line02').toggleClass('btn02');
//         $('#line03').toggleClass('btn03');
//         if($('#line01').attr('class')){
//             if($(window).width()>=768){
//                 $('#info').css('width','30%').css('right','0');
//             }else{
//                 $('#info').css('width','50%').css('right','0');
//             }
//         }else{fnClose();}
//     })

//     // 윈도우 리사이즈 이벤트
//     $(window).on('resize',function(){
//         fnClose();
//         $('.section.banner').css(margin-top,$('.haeader').height);
//     });

//     // 토글메뉴 위치 함수
//     function fnClose(){
//         $('#info').css('width','0').css('right','-41px');
//     }



//     // swiper 베너 이벤트 객체
//     var mySwiper = new Swiper('.swiper-container', {
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'bullets',
//             clickable: 'true',
//         },
//     });

//     // swipter2 포스터 이벤트 객체
//     var mySwiper = new Swiper('.swiper-container2', {
//         // 반응형 슬라이드 뷰            
//         breakpoints: {
//         // when window width is >= 360px
//         360: {
//         slidesPerView: 1.5,
//         spaceBetween: 15
//         },
//         // when window width is >= 768px
//         768: {
//         slidesPerView: 2.5,
//         spaceBetween: 24
//         },
//         // when window width is >= 1280px
//         1280: {
//         slidesPerView: 4,
//         spaceBetween: 24
//         }
//     }
//     });


//     // swiper3 이벤트 객체

//     // 무비 타이틀 클릭 이벤트
//     var moviePos=$('#movie .sec_bottom>div');
//     moviePos.hide();
//     moviePos.eq(0).show();
//     var target=$('#movie_tit>li');
//     target.on('click',function(){
//         var i=$(this).index();
//         moviePos.hide();
//         moviePos.eq(i).show();
//         target.removeClass();
//         $(this).addClass('active');
//             var mySwiper = new Swiper('.swiper-container2', {
//             // 반응형 슬라이드 뷰
//             breakpoints: {
//                 // 360이상
//                 360: {
//                 slidesPerView: 1.5,
//                 spaceBetween: 15
//                 },
//                 // 768이상
//                 768: {
//                 slidesPerView: 2.5,
//                 spaceBetween: 24
//                 },
//                 // 1280이상
//                 1280: {
//                 slidesPerView: 4,
//                 spaceBetween: 24
//                 }
//             }
//         });
//     })
//     // 공지사항 타이틀 클릭 이벤트
//     var notice=$('.notice_tit>li');
//     var noticeTxt=$('.notice_txt');
//     noticeTxt.hide();
//     noticeTxt.eq(0).show();
//     notice.eq(0).addClass('notice_active');
//     notice.css('cursor','pointer');
//     notice.on('click',function(){
//         var indexNum=$(this).index();
//         noticeTxt.hide();
//         noticeTxt.eq(indexNum).show();
//         notice.removeClass();
//         $(this).addClass('notice_active');
//     })


// })
