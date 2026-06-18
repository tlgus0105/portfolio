$(function(){
//
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


//작업 슬라이드
    
 var swiper1 = new Swiper('.swiper-container.swiper1', {

	slidesPerView : 3, 
	spaceBetween : 30, 
	slidesPerGroup : 1, 

	// 그룹수가 맞지 않을 경우 빈칸으로 메우기
	// 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
	loopFillGroupWithBlank : true,
     autoplay: {
             delay:4000,
            },	
     speed : 2000,
	loop : true,

	navigation : { 
		nextEl : '.swiper-button-next', 
		prevEl : '.swiper-button-prev', 
	},
});



////////
});
