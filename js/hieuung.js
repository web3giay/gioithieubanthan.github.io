$( document ).ready(function() {
	
   $('.tieudedm').click(function(event) {
   	$('.menuc2').toggleClass('hien');
   	$('i.fa.fa-sort-desc').toggleClass('xoay');
   });
   $('.icontim.fa.fa-search').click(function(event) {
   	$('.otim select').toggleClass('hienotim');
   	$(this).toggleClass('doimau');
   });

   //dành cho menu dd
	$('.mndd').click(function(event) {
		$('ul.menucondd').addClass('divaomndd');
	});
	$('ul.menucondd .dong').click(function(event) {
		$('ul.menucondd').removeClass('divaomndd');
	});
	$('li.xora .tamgiac').click(function(event) {
		if ($(this).next('ul.dpaodaidd').css('display') == 'none') {
			$('ul.dpaodaidd').hide();
			$('li.xora .tamgiac').removeClass('doihuong');
    		$(this).next('ul.dpaodaidd').slideDown();
    		$(this).addClass('doihuong');
		}else {
			$(this).next('ul.dpaodaidd').slideUp();
			$(this).removeClass('doihuong');
		}
	});
	//hết menudd
	

	$(window).scroll(function(event) {
		var vitri = $('html,body').scrollTop();
		if(vitri>=300){
			$('.dieuhuong').addClass('hienradh');
		}else {
			$('.dieuhuong').removeClass('hienradh');
		}
	});
	$('li.tren').click(function(event) {
		$('body,html').animate({scrollTop:0},800);
	});
	$('li.xuong').click(function(event) {
		var vitricuoitrang = $('.ftbottom').offset().top;
		$('body,html').animate({scrollTop:vitricuoitrang},800);
	});
	// js cho list anh
	var thutucuahienthia = 0;
		$('.hinhsp img').click(function(event) {
			$('.nenden').addClass('ra');
		var vitri = $(this).index();
		var anhtohienra =  $('.listanh ul li')[vitri];
		$(anhtohienra).addClass('hienthia');
		thutucuahienthia= vitri;
		});
		$('.donglist').click(function(event) {
			$('.nenden').removeClass('ra');
			$('.nenden3.cangiuaform').removeClass('ra');
			$('.nenden2').removeClass('ra');
			 $('.nencuactv').removeClass('ra');
			$('.listanh ul li').removeClass('hienthia');
			 var video = $("#clipsp").attr("src");
			$("#clipsp").attr("src","");
			$("#clipsp").attr("src",video);
		});
		var thutu2 =thutucuahienthia;
		$('.nnp').click(function(event) {
			var soluonganh = $('.listanh ul li').length;
			var anhhientai = $('.listanh ul li')[thutu2];
			thutu2=(thutu2<soluonganh-1)?(thututieptheo = thutu2+1):0;
			var tieptheo2=thutu2;
			var anhtieptheo = $('.listanh ul li')[tieptheo2];
			$(anhhientai).removeClass('hienthia');
			$(anhtieptheo).addClass('hienthia');
		});
		$('.nnt').click(function(event) {
			var soluonganh = $('.listanh ul li').length;
			var anhhientai = $('.listanh ul li')[thutu2];
			thutu2=(thutu2>0)?(thututieptheo = thutu2-1):(soluonganh-1);
			var tieptheo2=thutu2;
			var anhtieptheo = $('.listanh ul li')[tieptheo2];
			$(anhhientai).removeClass('hienthia');
			$(anhtieptheo).addClass('hienthia');
		});
		$('.listanh ul li img').click(function(event) {
			$('.nnp').trigger('click'); 
		});

		$('.clickclip').click(function(event) {
			$('.nenden2').addClass('ra');
			$('.video-wrapper').addClass('hienthia');
		});
	
		$('.raty_detailt').raty({
			score:function(){
				return $(this).attr('data-score');
			},
			half:true,
			starHalf:'http://localhost/webaodaiCI/public/js/raty-master/lib/images/star-half.png',
    		starOff:'http://localhost/webaodaiCI/public/js/raty-master/lib/images/star-off.png',
    		starOn:'http://localhost/webaodaiCI/public/js/raty-master/lib/images/star-on.png',
    		hints:['Tồi', 'Chưa tốt', 'Bình thường', 'Tốt', 'Rất tốt'],
  			readOnly: true,
			click:function(score,evt){
				var rate_count= $('.rate_count');
				var rate_count_total = rate_count.text();
				$.ajax({
					url: '<?php echo site_url("product/raty") ?>',
					type: 'POST',
					data: {'id':'<?php echo $row->id ?>','score':score},
					dataType: 'json',
					success: function(data)
					{
						if(data.complete){
							var total = parseInt(rate_count_total)+1;
							rate_count.html(parseInt(total));
						}
						alert(data.msg);
					}
				});
			}
		});	
	
});