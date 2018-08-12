window.onload = function(){
	var book = document.getElementById('book');
	var opt = document.getElementsByTagName('dd');
	var list = document.getElementById('list').children;
	for (var i = 0; i < opt.length; i++) {
		opt[i].onclick = function(){
			var name = this.getAttribute('id');  //获取点击的选项的id
			remove();			
				if(name != 'open-book'){
					this.setAttribute('class','cur');
					book.removeAttribute('class');
					book.setAttribute('class',name);
				}else{
					if(book.getAttribute('class')!='open-book'){
						this.setAttribute('class','cur');
						book.removeAttribute('class');
						book.setAttribute('class',name);					
					}else{
						document.getElementById('view-cover').setAttribute('class','cur');
						book.removeAttribute('class');
						book.setAttribute('class','view-cover');	
					}
				}		
		}

	}
	function remove(){
		for(var j = 0; j < list.length; j++){
			list[j].removeAttribute('class');
		}
	}

	// var next_page = document.getElementsByClassName("next-page");
	// var pages = document.getElementsByClassName("pages");
	// // for(var i=0;i<pages.length;i++){
	// 	// next_page[0].onclick = function(){
	// 		pages[0].setAttribute('class','next');
	// 	// }		
	// 	// pages[1]
	// // }

}		