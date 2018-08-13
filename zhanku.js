//轮播图
var left_btn=document.querySelector("#left_btn");
var right_btn=document.getElementById("right_btn");
var oLi=document.querySelectorAll(".lun ul li");
var oUl=document.querySelector(".lun ul");
var banner_index=0;
right_btn.onclick=function(){
	if(banner_index == oLi.length-1){
		banner_index=1;
		oUl.style.left = 0;
	}else{
		banner_index++;
	}
	for(var i=0;i<oLi.length;i++){
		oLi[i].className=" ";
	}
	move(oUl,-1150 * banner_index , "left")

}
left_btn.onclick=function(){
	if(banner_index == 0){
		banner_index=oLi.length-2;
		oUl.style.left =- 4600+"px" ;
	}else{
		banner_index--;
	}
	for(var i=0;i<oLi.length;i++){
		oLi[i].className=" ";
	}
	move(oUl,-1150 * banner_index , "left")
}
setInterval(right_btn.onclick,3000);



var rt_top=document.querySelector(".over");
document.onscroll=function(){
	var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop >800){
		rt_top.style.display="block";
	}else{
		rt_top.style.display="none";
	}
	if(scrollTop >3050){
	rt_top.style.position="none"
	}else{
		rt_top.style.bottom=50+"px"
	}
}
