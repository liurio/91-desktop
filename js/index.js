window.onload=function(){
	//产品的菜单栏，类似延时提示框的功能
	var navdropdown=document.getElementById('nav-dropdown');
	var dropdownli=document.getElementById('dropdown-li');
	var timer=null;
	navdropdown.onmouseover=function(){
		clearTimeout(timer);
		dropdownli.style.display='block';
	};
	navdropdown.onmouseout=function(){
		timer=setTimeout(function(){
			dropdownli.style.display='none';	
		},500);	
	};

	function getByClass(sparent,sclass){
		var result=[];
		var ale=sparent.getElementsByTagName('*');
		for (var i=0;i<ale.length;i++){
			if(ale[i].className==sclass){
				result.push(ale[i]);
			}	
		}
		return result;	
	}

	var footer=document.getElementById("tab4-row");
	var footerdiv=footer.getElementsByTagName("div");
	for(var i=0;i<footerdiv.length;i++){
		var footerp=footerdiv[i].getElementsByTagName("p");
		for(var j=0;j<footerp.length;j++){
			footerp[j].onmouseover=function(){	
				this.style.color='cornflowerblue';
			}
			footerp[j].onmouseout=function(){
				this.style.color='#000';
			};
		}	
	}

	var faqgenius=document.getElementById("faq-genius-tab");
	var li1=faqgenius.getElementsByTagName("li");
	var faqgenius2=document.getElementById("faqgenius");
	var div1=faqgenius2.getElementsByTagName("div");
	for(var i=0;i<li1.length;i++){
		li1[i].onclick=function(){
			this.index=i;
			for(var j=0;j<div1.length;j++){
				div1[j].style.display='none';
			}
			div1[this.index].style.display='block';	
		};
	}



	var pritab=document.getElementById("pri-tab");
	var a1=pritab.getElementsByTagName("a");
	var prigenius=document.getElementById("prigenius");
	var div1=prigenius.getElementsByTagName("div");
	for(var i=0;i<a1.length;i++){
		a1[i].onclick=function(){
			this.index=i;
			for(var j=0;j<a1.length;j++){
				div1[j].style.display='none';
			}
			div1[this.index].style.display='block';

		};
	}
	/*var layer=document.getElementById("layer");
	var layernav=layer.getElementById("layernav");
	var ul=layernav.getElementsByTagName("ul")[0];
	var li=ul.getElementsByTagName("li");
	for(var i=0; i<li.length;i++){
		li[i].click=function(){
			for(var j=0;j<li.length;j++){
				li[j].style.color='';
			}
			this.style.color="#3c79e7";
		};
	}*/
};s