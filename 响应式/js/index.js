$(function(){
	$(window).resize(function(){
		if ($(window).width() > 600) {
			$("#nav").show();
		}else{
			$("#nav").hide();
		}
	})
	// 手机导航下拉
	$("#btn").click(function(){
		$("#nav").toggle();
	})

	// 轮播
	var listul = document.getElementById("listul");
	var ali = listul.getElementsByTagName('li');
	var circles = document.getElementById("circles");
	var oli = circles.getElementsByTagName("li");
	var num = 0;
	// console.log(oli);
	console.log(ali)
	console.log(listul)
	var timer = null;
	for (var i = 0; i < oli.length; i++) {
		oli[i].index = i;
		oli[i].onclick = function(){
			for (var i = 0; i < oli.length; i++) {
				oli[i].className = "";
				ali[i].style.opacity = 0;
				if (this == oli[i]) {
					num = i;
					ali[num].style.opacity = 1;
					this.className = "cur";
				};
			};
		}
	};
	function tab(){
		for (var i = 0; i < ali.length; i++) {
			ali[i].style.opacity = 0;
			oli[i].className = "";
			
		};
		ali[num].style.opacity = 1;
		oli[num].className = "cur";
	}
	$("#left").click(function(){
		num--;
		if (num < 0) {
			num = 5;
		};
		tab();
	})
	$("#right").click(function(){
		right();
	})
	function right(){
		num++;
		if (num > 5) {
			num = 0;
		};
		tab();
	}
	$("#banner").mouseover(function(){
		clearInterval(timer);
	})
	$("#banner").mouseout(function(){
		timer = setInterval(right,1000);
	})
})