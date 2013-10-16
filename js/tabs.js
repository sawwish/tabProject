var tabUl;
// var firstTimeClick=true;
var prevTabElement;
var Tab=function(element,options)
{
	tabDiv=document.querySelector(element);
	tabDiv.classList.add('tabDiv');
	var tabs=options.TabHeaders;
	var firstDiv=tabDiv.firstChild;
	var headerContainerDiv = document.createElement('div');
	headerContainerDiv.id='headerContainerDiv';
	tabDiv.insertBefore(headerContainerDiv,firstDiv);
	var headerDiv = document.createElement('div');
	headerDiv.id='headerDiv';
	tabDiv.insertBefore(headerDiv,firstDiv);
	var footerDiv = document.createElement('div');
	footerDiv.id='footerDiv';
	tabDiv.appendChild(footerDiv);
	// var textNode = document.createElement('div');
	// tabUl.insertBefore(textNode,firstLi);
	for(var i=0;i<tabs.length; i++) 
	{
		tabName=tabs[i];
		var textElement = document.createTextNode(tabName);
		var divElement = document.createElement('div');
		// divElement.id='tab_'+i;
		divElement.classList.add('tabNameDiv');
		divElement.classList.add(i+2);

		divElement.appendChild(textElement);
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
		if(i==1)
		{
			divElement.classList.add('next-sibling');
		}
		
		divElement.onclick=showContent;
	}
	// debugger;
	var divList=tabDiv.children;

	for(var i=2;i<divList.length-1; i++) 
	{
		divList[i].classList.add(i);
		divList[i].classList.add('contentDiv');
		
		if(i==2)
		{
			divList[i].style.display='block';
		}
		else
		{
			divList[i].style.display='none';
		}
		// liList[i].onclick=showLi;		
	}


};

var showContent=function()
{
	debugger
	var divList=tabDiv.children;
	var sibling=this.nextSibling;
	if(sibling)
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
	

	}
	var tabClass;
	for(var i=0;i<this.classList.length; i++)
	{
		if(!isNaN(this.classList[i]))
		{
			tabClass=this.classList[i];
			break;
		}
	}
	for(var i=2;i<divList.length-1; i++) 
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
	prevTabElement=this;
}