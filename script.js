var delayInShortMilliseconds = 350;
var delayInMilliseconds = 500;

$('.navbar-button').click(function(){
  
  if($("#nav-icon3").hasClass('open')) {
    $('#nav-icon3').toggleClass('open');
    $('.menu-bc').css('animation', 'menu2 .35s ease-in-out forwards');
    $('.menu-items').css('animation', 'menu-items2 .25s ease-in-out forwards');
    setTimeout(function() {
      $('.menu').css('display', 'none');
    }, delayInShortMilliseconds);
  } else {
    $('#nav-icon3').toggleClass('open');
    $('.menu-bc').css('animation', 'menu .35s ease-in-out forwards');
    $('.menu').css('display', 'block');
    $('.menu-items').css('animation', 'menu-items .25s .2s ease-in-out forwards');
  }
  
});

$(document).ready(function() {
$(".button-down").click(function() {
     $('html, body').animate({
         scrollTop: $(".scroll1").offset().top + (0)
     }, 750);
 });
});

$('.play-but').click(function(){
  
  $('.video-modal-wrapper').css("display", "flex");
  $(".video-modal-wrapper").css("animation", "fadein .3s ease-in-out forwards");
  $(".video-modal").css("animation", "fade .3s ease-in-out forwards");
  
  setTimeout(function() {
      $(".video-modal-wrapper").css("", "");
    }, delayInMilliseconds);
});

$('.video-modal-wrapper').click(function(){
  $('.video-modal-wrapper').css("animation", "fadeout .3s ease-in-out forwards");
  $('.video-modal').css("animation", "fade2 .3s ease-in-out forwards");
  
  setTimeout(function() {
      $('.video-modal-wrapper').css("display", "none");
    }, delayInMilliseconds);
});




gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false
  });
});



(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" +
        selectors.item
          .first()
          .find(selectors.img)
          .attr("src") +
        ")"
    );
    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item
                .last()
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
            "background-image",
            "url(" +
              $(this)
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();


/*ギャラリー*/
//lightbox オプションの設定※https://lokeshdhakar.com/projects/lightbox2/#options参照

lightbox.option({
  'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
  'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
})

//ふわっと見せるためのJS。3-5-3 ページが読み込まれたらすぐに動かしたい&画面をスクロールをしたら動かしたい場合内のソースコード使用

function fadeAnime(){
// flipLeft
$('.gallery li').each(function(){ 
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('flipLeft');
    }else{
        $(this).removeClass('flipLeft');
    }
});
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまでページが読み込まれたらすぐに動かしたい場合の記述


  




