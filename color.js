// sarthak laghate
var oop1=document.querySelector(".op1");
var oop2=document.querySelector(".op2");
var num=6;
var colors=generate(num);
var win=pickcolor();
var x=document.querySelectorAll(".square");
var y=document.querySelector(".change");
var resetbtn=document.querySelector(".resetit");

oop1.addEventListener("click",function(){

	num=3;

	colors=generate(num);
	win=pickcolor();
	y.textContent=win;	 
	 for(var i=0;i<colors.length;i++)
	{

		x[i].style.backgroundColor=colors[i];

		x[i].addEventListener("click",function(){
			if(this.style.backgroundColor===win)
				{
					document.querySelector(".two").textContent="Correct";	
					display(win)
					changeback(this.style.backgroundColor);
				}else{

					this.style.backgroundColor="black";		
					document.querySelector(".two").textContent="Try Again";			
				}
		});

	}
	 for(var i=colors.length;i<6;i++)
	{

		x[i].style.backgroundColor="black";
	}

	document.querySelector(".two").textContent="";
	
});

oop2.addEventListener("click",function(){

	num=6;
	colors=generate(num);
	win=pickcolor();
	y.textContent=win;	 
	 for(var i=0;i<colors.length;i++)
	{

		x[i].style.backgroundColor=colors[i];

		x[i].addEventListener("click",function(){
			if(this.style.backgroundColor===win)
				{
					document.querySelector(".two").textContent="Correct";	
					display(win);
					changeback(this.style.backgroundColor);
				}else{

					this.style.backgroundColor="black";		
					document.querySelector(".two").textContent="Try Again";			
				}
		});

	}

	document.querySelector(".two").textContent="";
});


resetbtn.addEventListener("click",function(){
	 
	 colors=generate(num);
	 win=pickcolor();	
	
	 y.textContent=win;	 
	 for(var i=0;i<colors.length;i++)
	{

		x[i].style.backgroundColor=colors[i];

		x[i].addEventListener("click",function(){
			if(this.style.backgroundColor===win)
				{
					document.querySelector(".two").textContent="Correct";	
					display(win);
					changeback(this.style.backgroundColor);
				}else{

					this.style.backgroundColor="black";		
					document.querySelector(".two").textContent="Try Again";			
				}
		});

	}

	document.querySelector(".two").textContent="";	
					

});



y.textContent=win;

for(var i=0;i<colors.length;i++)
{

		x[i].style.backgroundColor=colors[i];

		x[i].addEventListener("click",function(){
			if(this.style.backgroundColor===win)
				{
					document.querySelector(".two").textContent="Correct";	
					display(win);
					changeback(this.style.backgroundColor);

				}else{

					this.style.backgroundColor="black";		
					document.querySelector(".two").textContent="Try Again";			
				}
		});

}


function display(w)
{	
	for(var i=0;i<colors.length;i++)
	{
		x[i].style.backgroundColor=win;
	}

}


function pickcolor(){

	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generate(k)
{
	var tt=[];

	for(var i=0;i<k;i++)
	{
		var a,b,c;
		var str="rgb(";

		a=Math.floor(Math.random()*256).toString();
		str=str+a;
		str=str+", ";
		b=Math.floor(Math.random()*256).toString();
		str=str+b;
		str=str+", ";
		c=Math.floor(Math.random()*256).toString();
		str=str+c;
		str=str+")";
		tt.push(str);
	}

	return tt;
}

function changeback(k1)
{
	document.querySelector(".top").style.backgroundColor=k1;
}