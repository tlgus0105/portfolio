$(function(){
//
//풀페이지 구현 소스
    
$(window).scroll(function(){
    console.log($(window).scrollTop());
  
    

    if($(window).scrollTop()>20){
            $("header").addClass("on");
             $("h1>img").attr("src","img/logo.png");

    }else{
            $("header").removeClass("on"); 
            $("h1>img").attr("src","img/logo.png");
         
    }
});           



    ////////// 메인슬라이드기호 슬라이드 ////////// 
    var poem_slider=$('.slide').slick({
    arrows:false,
	vertical: true,
    dots: false,
	autoplay: true,
    autoplaySpeed: 2000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,           
    speed: 1,
    touchMove: false,
    responsive: [{
    breakpoint: 769,
            settings:{ 
            arrows: false,
            dots: true,
            touchMove: true
                        }
                }]        
});
	

$(document).on("click",".smallnav img",function(){
             var di = $(this).data("index");
             $( '.slide' ).slick('slickGoTo', di);
    });

	var iii=1;
	poem_slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
	//console.log(currentSlide);
	//console.log(iii);
	iii=iii+1;
	});
	      


//skill//
$(window).scroll(function(){
  //console.log($(".content").offset().top);
	if($(window).scrollTop()>$(".box.pg4").offset().top-400){
		$(".box.pg4 .pro_box").addClass("on");
        }else {$(".box.pg4 .pro_box").removeClass("on");}
	
});	

 
//top//
$(".top").click(function(e){
	e.preventDefault
	$("html,body").animate({scrollTop:0},1000);

});   

 

////////
});
