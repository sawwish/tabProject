var tabUl;
// var firstTimeClick=true;
var prevTabElement;
var containerDiv
var Tab=function(element,options)
{
	debugger;
	tabDiv=document.querySelector(element);
	tabDiv.classList.add('tabDiv');
	var children=new Array();
	children=tabDiv.children;
	var tabs=options.TabHeaders;
	var firstDiv=tabDiv.firstElementChild;



	var headerContainerDiv = document.createElement('div');
	headerContainerDiv.id='headerContainerDiv';
	tabDiv.insertBefore(headerContainerDiv,firstDiv);

	containerDiv = document.createElement('div');
	containerDiv.id='containerDiv';
	tabDiv.insertBefore(containerDiv,firstDiv);
	var headerDiv = document.createElement('div');
	headerDiv.id='headerDiv';
	containerDiv.appendChild(headerDiv);
	var cloneChildren =new Array();
	for(var i=2;i<children.length;i++)
	{
		 var cloneChild=children[i].cloneNode(true);
		 cloneChildren.push(cloneChild);
		//tabDiv.removeChild(children[child]);
		 containerDiv.appendChild(cloneChild);
		// children[child].parentNode=containerDiv
	}
	for(var i=2;i<cloneChildren.length+2;i++)
	{
		//var cloneChild=children[child].cloneNode();
		tabDiv.removeChild(children[2]);
		//ontainerDiv.appendChild(cloneChildren[i-2]);
		// children[child].parentNode=containerDiv
	}
	var footerDiv = document.createElement('div');
	footerDiv.id='footerDiv';
	containerDiv.appendChild(footerDiv);

	for(var i=0;i<tabs.length; i++)
	 	{
	 		tabName=tabs[i];
	 		var textElement = document.createTextNode(tabName);
	 		var divElement = document.createElement('div');
			var spanElement = document.createElement('span');
			spanElement.appendChild(textElement);
	 		// divElement.id='tab_'+i;
	 		divElement.classList.add('tabNameDiv');
	 		divElement.classList.add(i);

	 		divElement.appendChild(spanElement);
			// textResize(spanElement);
	 		// divElement.style.width=(1/tabs.length)*100-1+"%";
	 		headerContainerDiv.appendChild(divElement);
	 		if(i==0)
	 		{
	 			// var divList=tabDiv.children;
	 			// 		var sibling=this.nextSibling;
	 			divElement.classList.add('current-tab');
	 			prevTabElement=divElement;
	 			// sibling.classList.add('next-sibling');
	 		}
	 		divElement.onclick=showContent;
	 	}
	 	// debugger;
	 	var divList=containerDiv.children;

	 	for(var i=1;i<divList.length-1; i++)
	 	{
	 		divList[i].classList.add(i-1);
	 		divList[i].classList.add('contentDiv');

	 		if(i==1)
	 		{
	 			divList[i].style.display='block';
	 		}
	 		else
	 		{
	 			divList[i].style.display='none';
	 		}
	 		// liList[i].onclick=showLi;
	 	}
// startAnimation(document.getElementById('containerDiv'))	;
move(document.getElementById('containerDiv'))
};

var showContent=function()
{
	debugger
	// var spanElement= document.querySelector('.tabNameDiv span');
	// textResize(spanElement);
	

	var divList=containerDiv.children;
	var sibling=this.nextSibling;
	this.classList.add('current-tab');
	if(prevTabElement &&(this!=prevTabElement))
	{
		prevTabElement.classList.remove('current-tab');

	}
	/*if(sibling)
	{
		this.classList.add('current-tab');
		sibling.classList.add('next-sibling');
	}
	else
	{
		this.classList.add('last-tab');
		this.previousSibling.classList.add('prev-sibling');
	}

	if(prevTabElement)
	{
		if(prevTabElement.nextSibling)
		{
			prevTabElement.nextSibling.classList.remove('next-sibling');
			prevTabElement.classList.remove('current-tab');

		}
		else
		{
			prevTabElement.previousSibling.classList.remove('prev-sibling');
			prevTabElement.classList.remove('last-tab');
		}


	}*/
	var tabClass;
	for(var i=0;i<this.classList.length; i++)
	{
		if(!isNaN(this.classList[i]))
		{
			tabClass=this.classList[i];
			break;
		}
	}
	for(var i=1;i<divList.length-1; i++)
	{
		if(!divList[i].classList.contains(tabClass))
		{
			divList[i].style.display='none';
		}
		else
		{
			divList[i].style.display='block';
		}
	}
	
	// startAnimation(document.getElementById('containerDiv'))	;
	move(document.getElementById('containerDiv'))
	prevTabElement=this;
}
// function startAnimation(e) {
// 	var height=10;    
// 	e.style.height = height+'%';
// 
// 	// make sure to reset the name after 4 seconds, otherwise another call to colorchange wont have any effect
// 	var id=setInterval(function() {
// 		height+=10;
// 		e.style.height = height+'%';	
// 		if(height==100)
// 		{
// 			clearInterval(id);
// 		}
// 		}, 100);
// 	}
// 	
	function move(elem) {
		var elmHeight=window.getComputedStyle(elem,null).getPropertyValue("height");
		  var height = 0;
		 
		  function frame() {
		     
		    height=height+5;  // update parameters
		     
		    elem.style.height = height + 'px' // show frame
		 
		    if (height >= elmHeight.substr(0,elmHeight.length-2))  // check finish condition
		      clearInterval(id)
		  }
		 
		  var id = setInterval(frame, 10) // draw every 10ms
		}
		
	function textResize(spanElement) {
		 	debugger
		    var fontSize = window.getComputedStyle(spanElement,null).getPropertyValue("fontSize");;

		    do {
		        fontSize--;
		        spanElement.style.fontSize= fontSize.toString() + 'px';
		    } while (spanElement.style.width >= 100);
		}