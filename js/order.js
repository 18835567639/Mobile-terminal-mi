function lunbo(topSelect,bottomSelect){
	let topList=document.querySelectorAll(topSelect);
	let botList=document.querySelector(bottomSelect);
	topList.forEach((val,index)=>{
		val.onclick=function(){
			topList.forEach((val,index)=>{
				val.classList.remove("act");
			});
			topList[index].classList.add("act");
			botList.style.left=-index*100+"vw";
		}
	});
}
lunbo("main .mulu div span","main .bigbox");