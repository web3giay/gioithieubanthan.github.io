$(function(){
	//code cho slide tổng
	var thoigian = setInterval(function(){
		if(trangthai=="dangchuyendong"){return false;}
		trangthai ="dangchuyendong";
		var phantuhientai = slides[chisohientai];
		var trangthai2cd = 0;
		if(chisohientai>0){
			chisohientai--;
		}else {
			chisohientai=soluongslide-1;
		}
		var phantutieptheo = slides[chisohientai];
		var xulyhientaiketthuccd = function(){
			this.classList.remove('hienthi');
			this.classList.remove('bienmatkhianprev');
			trangthai2cd++;
			if(trangthai2cd==2){
				trangthai = "dungyen";
			}
		}
		var xulytieptheoketthuccd=function(){
			this.classList.add('hienthi');
			this.classList.remove('divaokhianprev');
			trangthai2cd++;
			if(trangthai2cd==2){
				trangthai = "dungyen";
			}
		}
		phantuhientai.addEventListener("webkitAnimationEnd",xulyhientaiketthuccd);
		phantutieptheo.addEventListener("webkitAnimationEnd",xulytieptheoketthuccd);
		phantuhientai.classList.add('bienmatkhianprev');
		phantutieptheo.classList.add('divaokhianprev');
	},20000)
	var nutnext = document.querySelector('.nutslide img.nutphai'),
		nutprev = document.querySelector('.nutslide img.nuttrai'),
		slides=document.querySelectorAll('.cacslide ul.anhslide li.motslide'),
		chisohientai=0,
		soluongslide=slides.length,
		trangthai ="dungyen";
		nutnext.addEventListener('click',function(){
		clearInterval(thoigian);
		// kiem tra trang thai
		if(trangthai=="dangchuyendong"){
			return false;
		}
		trangthai = "dangchuyendong";
		var trangthai2cd =0;
		var slidehientai = slides[chisohientai];
		if(chisohientai<soluongslide-1){
			chisohientai++;
		}else{
			chisohientai=0;
		}
		var slidetieptheo = slides[chisohientai];
		slidehientai.classList.add('bienmatkhiannext');
		slidetieptheo.classList.add('divaokhiannext');	
		var xulyhientaiketthuccd = function(){
			this.classList.remove('hienthi');
			this.classList.remove('bienmatkhiannext');
			trangthai2cd++;
			if(trangthai2cd==2){
				trangthai ="dungyen";
			}
		}	
		var xulytieptheoketthuccd = function(){
			this.classList.remove('divaokhiannext');
			this.classList.add('hienthi');
			trangthai2cd++;
			if(trangthai2cd==2){
				trangthai ="dungyen";
			}
		}
		slidehientai.addEventListener("webkitAnimationEnd",xulyhientaiketthuccd);
		slidetieptheo.addEventListener("webkitAnimationEnd",xulytieptheoketthuccd);
	})
	// xong nút phải
	nutprev.addEventListener('click',function(){
		clearInterval(thoigian);
		if(trangthai=="dangchuyendong"){return false;}
		trangthai ="dangchuyendong";
		var phantuhientai = slides[chisohientai];
		var trangthai2cd = 0;
		if(chisohientai>0){
			chisohientai--;
		}else {
			chisohientai=soluongslide-1;
		}
		var phantutieptheo = slides[chisohientai];
		var xulyhientaiketthuccd = function(){
			this.classList.remove('hienthi');
			this.classList.remove('bienmatkhianprev');
			trangthai2cd++;
			if(trangthai2cd==2){
				trangthai = "dungyen";
			}
		}
		var xulytieptheoketthuccd=function(){
			this.classList.add('hienthi');
			this.classList.remove('divaokhianprev');
			trangthai2cd++;
			if(trangthai2cd==2){
				trangthai = "dungyen";
			}
		}
		phantuhientai.addEventListener("webkitAnimationEnd",xulyhientaiketthuccd);
		phantutieptheo.addEventListener("webkitAnimationEnd",xulytieptheoketthuccd);
		phantuhientai.classList.add('bienmatkhianprev');
		phantutieptheo.classList.add('divaokhianprev');
	}) //het su kien cho nut

});