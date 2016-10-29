$(function(){
	var floor_nav=$('.floor_nav')[0];
	var floor=$('.floor');
	var floor_lis=$('.floor_lis');//返回属性
	var back=$('.back')[0];		//获取属性‘返回’
  var lou=$('.lou');
  var ziti=$('.ziti');
  console.log(ziti)
	var Cheight=document.documentElement.clientHeight;
	var Cwidth=document.documentElement.clientWidth;	
	var nownode;	
  var floor_flag=true;  
  var floor_flag1=true;
	for(var i=0;i<floor.length;i++){		//获取每一楼层距离浏览器的高度
		floor[i].h=floor[i].offsetTop;
	}
	window.onscroll=function(){
	var obj=document.body.scrollTop?document.body:document.documentElement;
	var top=obj.scrollTop;				//取滚动条的高度
	if(top>=floor[0].h-500){
		floor_nav.style.display='block';
    back.style.display='block';
		var nHeight=floor_nav.offsetHeight;
		floor_nav.style.top=(Cheight-nHeight)/2+'px';	//
    if(floor_flag){
      floor_flag=false;
      }floor_flag=true;
		}
    if(top<floor[0].h-500){
    floor_nav.style.display='none';
    back.style.display='none';
      if(floor_flag1){
        floor_flag1=false;  
      }floor_flag1=true;
  }
		for(var i=0;i<floor.length;i++){
			if(top>=floor[i].h-300){
				for(var j=0;j<floor_lis.length;j++){
					floor_lis[j].style.background='#ccc';
          lou[j].style.display='block';
          ziti[j].style.display='none';
				}
				floor_lis[i].style.background='red';
         lou[i].style.display='none';
        ziti[i].style.display='block';
				nownode=i;
				console.log(nownode);
			}
		}
	}
	for(var i=0;i<floor_lis.length;i++){
		floor_lis[i].index=i;
		floor_lis[i].onclick=function(){
			animate(document.body,{scrollTop:floor[this.index].h});
			animate(document.documentElement,{scrollTop:floor[this.index].h});
		}
		floor_lis[i].onmouseover=function(){
			if(nownode==this.index){
				return;
        // ziti[this.index].style.display='block';
			}
			else {this.style.background='red';	
        lou[this.index].style.display='none';
        ziti[this.index].style.display='block';}
		}
		floor_lis[i].onmouseout=function(){
			if(nownode==this.index){
				return;
			}
			else {this.style.background='#ccc';
        lou[this.index].style.display='block';
        ziti[this.index].style.display='none';}	
		}
	}
	back.onclick=function(){
		animate(document.body,{scrollTop:0})
	}
	animate(document.documentElement,{scrollTop:0})



//banner_lunbo
	var imgs=$('.banner-img');
	var lits=$('.circle');
	var left=$('.leftbutton')[0];
	var banner=$('.centerR')[0];
	var right=$('.rightbutton')[0];//以类定义的要定义下标
	var width=parseInt(getStyle(banner,'width'));
	var n=0;
	var next=0;
  var flag=true;
	var t=setInterval(move,2000);
	function move(){                    //时间函数
		if(!flag){
      return;
    }
    flag=false;
    next=n+1;
		if(next>=imgs.length){
			next=0;
		}
		imgs[next].style.left=width+'px';  //强制转化下一张在右侧等待
		animate(imgs[n],{left:-width},600);
		animate(imgs[next],{left:0},600,function(){flag=true;});
    lits[n].style.background='#ccc';
    lits[next].style.background='red';
		n=next;
	}
  banner.onmouseover=function(){      //鼠标进入图片静止
    clearInterval(t);
  }
  banner.onmouseout=function(){       //鼠标移出图片轮播
    t=setInterval(move,2000);
  }
  right.onclick=function(){           //右击按钮，图片左移
    move();
  }
  left.onclick=function(){            //左击按钮，图片右移
    if(!flag){
      return;
    }
    flag=true;
    next=n-1;
    if(next<0){
      next=imgs.length-1;
    }
    imgs[next].style.left=-width+'px';  //强制转化下一张在左侧等待
    animate(imgs[n],{left:width},600);
    animate(imgs[next],{left:0},600,function(){flag=true;});
    lits[n].style.background='#ccc';
    lits[next].style.background='red';
    n=next;
  }
  //点击事件
  for(i=0;i<lits.length;i++){           //完成点击哪一张，那一张显示
    lits[i].index=i;
    lits[i].onclick=function(){
      if(this.index>n){                 //点击右侧，左移
        if(!flag){
          return;
        }
        flag=true;
        imgs[this.index].style.left=width+'px';
        animate(imgs[n],{left:-width},600);
        animate(imgs[this.index],{left:0},600,function(){flag=true;});
        lits[n].style.background='#ccc';
        lits[this.index].style.background='red';
        n=this.index;
      }else if(this.index<n){             //点击左侧，右移
        if(!flag){
          return;
        }
        flag=true;
        imgs[this.index].style.left=-width+'px';
        animate(imgs[n],{left:width},600);
        animate(imgs[this.index],{left:0},600,function(){flag=true;});
        lits[n].style.background='#ccc';
        lits[this.index].style.background='red';
        n=this.index;
      }
    }
  }

//下拉框-北京
function first(obj){
  var but1=$('.left',obj)[0];
    hover(but1,function(){
    var left_down=$('.left_down',this)[0];
    var blank1=$('.blank1',this)[0];
    left_down.style.display='block';
    blank1.style.display='block';
    this.style.background='#fff';
    this.style.border='1px solid #e4e4e4';
    },function(){
    var that=this;
    var left_down=$('.left_down',this)[0];
    var blank1=$('.blank1',this)[0];
    left_down.style.display='none';
    blank1.style.display='none';
    that.style.background='';
    that.style.border='';
    }
  )
}
first($('.sTitle')[0]);
first($('.right')[0]);
//手机京东
var but2=$('.left_sj')[0];
    hover(but2,function(){
    var left_down1=$('.left_down1',this)[0];
    var blank3=$('.blank3',this)[0];
    left_down1.style.display='block';
    blank3.style.display='block';
    this.style.background='#fff';
    this.style.border='1px solid #e4e4e4';
    },function(){
    var that=this;
    var left_down1=$('.left_down1',this)[0];
    var blank3=$('.blank3',this)[0];
    left_down1.style.display='none';
    blank3.style.display='none';
    that.style.background='';
    that.style.border='';
    }
  )
//
var but3=$('.left_jd')[0];
    hover(but3,function(){
    var left_down2=$('.left_down2',this)[0];
    var blank4=$('.blank4',this)[0];
    left_down2.style.display='block';
    blank4.style.display='block';
    this.style.background='#fff';
    this.style.border='1px solid #e4e4e4';
    },function(){
    var that=this;
    var left_down2=$('.left_down2',this)[0];
    var blank4=$('.blank4',this)[0];
    left_down2.style.display='none';
    blank4.style.display='none';
    that.style.background='';
    that.style.border='';
    }
  )
//
var but4=$('.left_khfw')[0];
    hover(but4,function(){
    var left_down3=$('.left_down3',this)[0];
    var blank5=$('.blank5',this)[0];
    left_down3.style.display='block';
    blank5.style.display='block';
    this.style.background='#fff';
    this.style.border='1px solid #e4e4e4';
    },function(){
    var that=this;
    var left_down3=$('.left_down3',this)[0];
    var blank5=$('.blank5',this)[0];
    left_down3.style.display='none';
    blank5.style.display='none';
    that.style.background='';
    that.style.border='';
    }
  )
//
var but5=$('.left_web')[0];
    hover(but5,function(){
    var left_down4=$('.left_down4',this)[0];
    var blank6=$('.blank6',this)[0];
    left_down4.style.display='block';
    blank6.style.display='block';
    this.style.background='#fff';
    this.style.border='1px solid #e4e4e4';
    },function(){
    var that=this;
    var left_down4=$('.left_down4',this)[0];
    var blank6=$('.blank6',this)[0];
    left_down4.style.display='none';
    blank6.style.display='none';
    that.style.background='';
    that.style.border='';
    }
  )
//大侧栏下拉框
var but6=$('.o');
for(var i=0;i<but6.length;i++){
  hover(but6[i],function(){
    var Oword=$('.Oword',this)[0];
    Oword.style.display='block';
    this.style.background='#fff';
    },function(){
    var that=this;
    var Oword=$('.Oword',this)[0];
    Oword.style.display='none';
    that.style.background='';
    }
  )
}
    





//f1lunbo
var f1imgs=$('.f1ul_imgs');
	var f1lits=$('.f1circle');
	var f1left=$('.f1leftbutton')[0];
	var f1banner=$('.t5')[0];
	var f1right=$('.f1rightbutton')[0];//以类定义的要定义下标
	var f1width=parseInt(getStyle(f1banner,'width'));
	var f1n=0;
	var f1next=0;
  	var f1flag=true;
	var f1t=setInterval(f1move,2000);
	function f1move(){                    //时间函数
		if(!f1flag){
      return;
    }
    f1flag=false;
    f1next=f1n+1;
		if(f1next>=f1imgs.length){
			f1next=0;
		}
		f1imgs[f1next].style.left=f1width+'px';  //强制转化下一张在右侧等待
		animate(f1imgs[f1n],{left:-f1width},600);
		animate(f1imgs[f1next],{left:0},600,function(){f1flag=true;});
    f1lits[f1n].style.background='#ccc';
    f1lits[f1next].style.background='red';
		f1n=f1next;
	}
  f1banner.onmouseover=function(){      //鼠标进入图片静止
    clearInterval(f1t);
  }
  f1banner.onmouseout=function(){       //鼠标移出图片轮播
    f1t=setInterval(f1move,2000);
  }
  f1right.onclick=function(){           //右击按钮，图片左移
    f1move();
  }
  f1left.onclick=function(){            //左击按钮，图片右移
    if(!f1flag){
      return;
    }
    f1flag=true;
    f1next=f1n-1;
    if(f1next<0){
      f1next=f1imgs.length-1;
    }
    f1imgs[f1next].style.left=-f1width+'px';  //强制转化下一张在左侧等待
    animate(f1imgs[f1n],{left:f1width},600);
    animate(f1imgs[f1next],{left:0},600,function(){f1flag=true;});
    f1lits[f1n].style.background='#ccc';
    f1lits[f1next].style.background='red';
    f1n=f1next;
  }
  //点击事件
  for(i=0;i<f1lits.length;i++){           //完成点击哪一张，那一张显示
    f1lits[i].index=i;
    f1lits[i].onclick=function(){
      if(this.index>f1n){                 //点击右侧，左移
        if(!f1flag){
          return;
        }
        f1flag=true;
        f1imgs[this.index].style.left=f1width+'px';
        animate(f1imgs[f1n],{left:-f1width},600);
        animate(f1imgs[this.index],{left:0},600,function(){f1flag=true;});
        f1lits[f1n].style.background='#ccc';
        f1lits[this.index].style.background='red';
        f1n=this.index;
      }else if(this.index<f1n){             //点击左侧，右移
        if(!f1flag){
          return;
        }
        f1flag=true;
        f1imgs[this.index].style.left=-f1width+'px';
        animate(f1imgs[f1n],{left:f1width},600);
        animate(f1imgs[this.index],{left:0},600,function(){f1flag=true;});
        f1lits[f1n].style.background='#ccc';
        f1lits[this.index].style.background='red';
        f1n=this.index;
      }
    }
  }
//f3lunbo
  var f3imgs=$('.f3ul_imgs');
	var f3lits=$('.f3circle');
	var f3left=$('.f3leftbutton')[0];
	var f3banner=$('.f3tu2')[0];
	var f3right=$('.f3rightbutton')[0];//以类定义的要定义下标
	var f3width=parseInt(getStyle(f3banner,'width'));
	var f3n=0;
	var f3next=0;
  var f3flag=true;
	var f3t=setInterval(f3move,2000);
	function f3move(){                    //时间函数
		if(!f3flag){
      	return;
    	}
    	f3flag=false;
    	f3next=f3n+1;
		if(f3next>=f3imgs.length){
			f3next=0;
			}
		f3imgs[f3next].style.left=f3width+'px';  //强制转化下一张在右侧等待
		animate(f3imgs[f3n],{left:-f3width},600);
		animate(f3imgs[f3next],{left:0},600,function(){f3flag=true;});
    f3lits[f3n].style.background='#ccc';
    f3lits[f3next].style.background='red';
		f3n=f3next;
	}
  f3banner.onmouseover=function(){      //鼠标进入图片静止
    clearInterval(f3t);
  }
  f3banner.onmouseout=function(){       //鼠标移出图片轮播
    f3t=setInterval(f3move,2000);
  }
  f3right.onclick=function(){           //右击按钮，图片左移
    f3move();
  }
  f3left.onclick=function(){            //左击按钮，图片右移
    if(!f3flag){
      return;
    }
    f3flag=true;
    f3next=f3n-1;
    if(f3next<0){
      f3next=f3imgs.length-1;
    }
    f3imgs[f3next].style.left=-f3width+'px';  //强制转化下一张在左侧等待
    animate(f3imgs[f3n],{left:f3width},600);
    animate(f3imgs[f3next],{left:0},600,function(){f3flag=true;});
    f3lits[f3n].style.background='#ccc';
    f3lits[f3next].style.background='red';
    f3n=f3next;
  }
  //点击事件
  for(i=0;i<f3lits.length;i++){           //完成点击哪一张，那一张显示
    f3lits[i].index=i;
    f3lits[i].onclick=function(){
      if(this.index>f3n){                 //点击右侧，左移
        if(!f3flag){
          return;
        }
        f3flag=true;
        f3imgs[this.index].style.left=f3width+'px';
        animate(f3imgs[f3n],{left:-f3width},600);
        animate(f3imgs[this.index],{left:0},600,function(){f3flag=true;});
        f3lits[f3n].style.background='#ccc';
        f3lits[this.index].style.background='red';
        f3n=this.index;
      }else if(this.index<f3n){             //点击左侧，右移
        if(!f3flag){
          return;
        }
        f3flag=true;
        f3imgs[this.index].style.left=-f3width+'px';
        animate(f3imgs[f3n],{left:f3width},600);
        animate(f3imgs[this.index],{left:0},600,function(){f3flag=true;});
        f3lits[f3n].style.background='#ccc';
        f3lits[this.index].style.background='red';
        f3n=this.index;
      }
    }
  }
//f4lunbo
var f4imgs=$('.f4ul_imgs');
	var f4lits=$('.f4circle');
	var f4left=$('.f4leftbutton')[0];
	var f4banner=$('.f4tu2')[0];
	var f4right=$('.f4rightbutton')[0];//以类定义的要定义下标
	var f4width=parseInt(getStyle(f4banner,'width'));
	var f4n=0;
	var f4next=0;
  var f4flag=true;
	var f4t=setInterval(f4move,2000);
	function f4move(){                    //时间函数
		if(!f4flag){
      	return;
    	}
    	f4flag=false;
    	f4next=f4n+1;
		if(f4next>=f4imgs.length){
			f4next=0;
			}
		f4imgs[f4next].style.left=f4width+'px';  //强制转化下一张在右侧等待
		animate(f4imgs[f4n],{left:-f4width},600);
		animate(f4imgs[f4next],{left:0},600,function(){f4flag=true;});
    	f4lits[f4n].style.background='#ccc';
    	f4lits[f4next].style.background='red';
		f4n=f4next;
	}
  f4banner.onmouseover=function(){      //鼠标进入图片静止
    clearInterval(f4t);
  }
  f4banner.onmouseout=function(){       //鼠标移出图片轮播
    f4t=setInterval(f4move,2000);
  }
  f4right.onclick=function(){           //右击按钮，图片左移
    f4move();
  }
  f4left.onclick=function(){            //左击按钮，图片右移
    if(!f4flag){
      return;
    }
    f4flag=true;
    f4next=f4n-1;
    if(f4next<0){
      f4next=f4imgs.length-1;
    }
    f4imgs[f4next].style.left=-f4width+'px';  //强制转化下一张在左侧等待
    animate(f4imgs[f4n],{left:f4width},600);
    animate(f4imgs[f4next],{left:0},600,function(){f4flag=true;});
    f4lits[f4n].style.background='#ccc';
    f4lits[f4next].style.background='red';
    f4n=f4next;
  }
  //点击事件
  for(i=0;i<f4lits.length;i++){           //完成点击哪一张，那一张显示
    f4lits[i].index=i;
    f4lits[i].onclick=function(){
      if(this.index>f4n){                 //点击右侧，左移
        if(!f4flag){
          return;
        }
        f4flag=true;
        f4imgs[this.index].style.left=f4width+'px';
        animate(f4imgs[f4n],{left:-f4width},600);
        animate(f4imgs[this.index],{left:0},600,function(){f4flag=true;});
        f4lits[f4n].style.background='#ccc';
        f4lits[this.index].style.background='red';
        f4n=this.index;
      }else if(this.index<f4n){             //点击左侧，右移
        if(!f4flag){
          return;
        }
        f4flag=true;
        f4imgs[this.index].style.left=-f4width+'px';
        animate(f4imgs[f4n],{left:f4width},600);
        animate(f4imgs[this.index],{left:0},600,function(){f4flag=true;});
        f4lits[f4n].style.background='#ccc';
        f4lits[this.index].style.background='red';
        f4n=this.index;
      }
    }
  }
//f5lunbo
var f5imgs=$('.f5ul_imgs');
	var f5lits=$('.f5circle');
	var f5left=$('.f5leftbutton')[0];
	var f5banner=$('.f5tu2')[0];
	var f5right=$('.f5rightbutton')[0];//以类定义的要定义下标
	var f5width=parseInt(getStyle(f4banner,'width'));
	var f5n=0;
	var f5next=0;
  	var f5flag=true;
	var f5t=setInterval(f5move,2000);
	function f5move(){                    //时间函数
		if(!f5flag){
      	return;
    	}
    	f5flag=false;
    	f5next=f5n+1;
		if(f5next>=f5imgs.length){
			f5next=0;
			}
		f5imgs[f5next].style.left=f5width+'px';  //强制转化下一张在右侧等待
		animate(f5imgs[f5n],{left:-f5width},600);
		animate(f5imgs[f5next],{left:0},600,function(){f5flag=true;});
    	f5lits[f5n].style.background='#ccc';
    	f5lits[f5next].style.background='red';
		f5n=f5next;
	}
  f5banner.onmouseover=function(){      //鼠标进入图片静止
    clearInterval(f5t);
  }
  f5banner.onmouseout=function(){       //鼠标移出图片轮播
    f5t=setInterval(f5move,2000);
  }
  f5right.onclick=function(){           //右击按钮，图片左移
    f5move();
  }
  f5left.onclick=function(){            //左击按钮，图片右移
    if(!f5flag){
      return;
    }
    f5flag=true;
    f5next=f5n-1;
    if(f5next<0){
      f5next=f5imgs.length-1;
    }
    f5imgs[f5next].style.left=-f5width+'px';  //强制转化下一张在左侧等待
    animate(f5imgs[f5n],{left:f5width},600);
    animate(f5imgs[f5next],{left:0},600,function(){f5flag=true;});
    f5lits[f5n].style.background='#ccc';
    f5lits[f5next].style.background='red';
    f5n=f5next;
  }
  //点击事件
  for(i=0;i<f5lits.length;i++){           //完成点击哪一张，那一张显示
    f5lits[i].index=i;
    f5lits[i].onclick=function(){
      if(this.index>f5n){                 //点击右侧，左移
        if(!f5flag){
          return;
        }
        f5flag=true;
        f5imgs[this.index].style.left=f5width+'px';
        animate(f5imgs[f5n],{left:-f5width},600);
        animate(f5imgs[this.index],{left:0},600,function(){f5flag=true;});
        f5lits[f5n].style.background='#ccc';
        f5lits[this.index].style.background='red';
        f5n=this.index;
      }else if(this.index<f5n){             //点击左侧，右移
        if(!f5flag){
          return;
        }
        f5flag=true;
        f5imgs[this.index].style.left=-f5width+'px';
        animate(f5imgs[f5n],{left:f5width},600);
        animate(f5imgs[this.index],{left:0},600,function(){f5flag=true;});
        f5lits[f5n].style.background='#ccc';
        f5lits[this.index].style.background='red';
        f5n=this.index;
      }
    }
  }
  //f10lunbo
  function all(obj){
    var f10imgs=$('.f10ul_imgs',obj);
    var f10lits=$('.f10circle',obj);
    var f10left=$('.f10leftbutton',obj)[0];
    var f10banner=$('.f10tu2',obj)[0];
    var f10right=$('.f10rightbutton',obj)[0];//以类定义的要定义下标
    var f10width=parseInt(getStyle(f10banner,'width'));
    var f10n=0;
    var f10next=0;
    var f10flag=true;
    var f10t=setInterval(f10move,2000);
    function f10move(){                    //时间函数
      if(!f10flag){
          return;
        }
        f10flag=false;
        f10next=f10n+1;
      if(f10next>=f10imgs.length){
        f10next=0;
        }
      f10imgs[f10next].style.left=f10width+'px';  //强制转化下一张在右侧等待
      animate(f10imgs[f10n],{left:-f10width},600);
      animate(f10imgs[f10next],{left:0},600,function(){f10flag=true;});
      f10lits[f10n].style.background='#ccc';
      f10lits[f10next].style.background='red';
      f10n=f10next;
    }
    f10banner.onmouseover=function(){      //鼠标进入图片静止
      clearInterval(f10t);
    }
    f10banner.onmouseout=function(){       //鼠标移出图片轮播
      f10t=setInterval(f10move,2000);
    }
    f10right.onclick=function(){           //右击按钮，图片左移
      f10move();
    }
    f10left.onclick=function(){            //左击按钮，图片右移
      if(!f10flag){
        return;
      }
      f10flag=true;
      f10next=f10n-1;
      if(f10next<0){
        f10next=f10imgs.length-1;
      }
      f10imgs[f10next].style.left=-f10width+'px';  //强制转化下一张在左侧等待
      animate(f10imgs[f10n],{left:f10width},600);
      animate(f10imgs[f10next],{left:0},600,function(){f10flag=true;});
      f10lits[f10n].style.background='#ccc';
      f10lits[f10next].style.background='red';
      f10n=f10next;
    }
    //点击事件
    for(i=0;i<f10lits.length;i++){           //完成点击哪一张，那一张显示
      f10lits[i].index=i;
      f10lits[i].onclick=function(){
        if(this.index>f10n){                 //点击右侧，左移
          if(!f10flag){
            return;
          }
          f10flag=true;
          f10imgs[this.index].style.left=f10width+'px';
          animate(f10imgs[f10n],{left:-f10width},600);
          animate(f10imgs[this.index],{left:0},600,function(){f10flag=true;});
          f10lits[f10n].style.background='#ccc';
          f10lits[this.index].style.background='red';
          f10n=this.index;
        }else if(this.index<f10n){             //点击左侧，右移
          if(!f10flag){
            return;
          }
          f10flag=true;
          f10imgs[this.index].style.left=-f10width+'px';
          animate(f10imgs[f10n],{left:f10width},600);
          animate(f10imgs[this.index],{left:0},600,function(){f10flag=true;});
          f10lits[f10n].style.background='#ccc';
          f10lits[this.index].style.background='red';
          f10n=this.index;
        }
      }
    }
  }
  all($('.f10all')[0]);
  all($('.f12left')[0]);
  all($('.f12right')[0]);
  all($('.f11all')[0]);

//第六栏 节点轮播
function nodelunbo(){
  var jiedian=$('.jiedian')[0];
  var jiedian_left=$('.jiedian_left')[0];
  var jiedian_right=$('.jiedian_right')[0];
  var jiedian_box=$('.jiedian_box')[0];
  var jiedian_img=$('.jiedian_img')[0];      //类记得加下标
  var njd=4;
  var jdwidth=parseInt(getStyle(jiedian_img,'width'));
  function moving(){
    animate(jiedian_box,{left:-jdwidth*4},1000,function(){
      for(var i=1;i<=njd;i++){
      var imgFirst=getFirst(jiedian_box);
      jiedian_box.appendChild(imgFirst);
      jiedian_box.style.left=0+'px';}
    });
  }
  jiedian.onmouseover=function(){
    jiedian_right.style.display='block';
    jiedian_left.style.display='block';
  }
  jiedian.onmouseout=function(){
    jiedian_right.style.display='none';
    jiedian_left.style.display='none';
  }
  jiedian_right.onclick=function(){
    moving();
  }
  jiedian_left.onclick=function(){
    for(var i=1;i<=njd;i++){
    var imgFirst=getFirst(jiedian_box);
    var imgLast=getLast(jiedian_box);
    jiedian_box.insertBefore(imgLast,imgFirst);
    jiedian_box.style.left=-jdwidth*4+'px';
    animate(jiedian_box,{left:0},1000);}
  }
}

nodelunbo();


//二楼轮播
  var f2second_left=$('.f2second_left');
  var f2circle_list=$('.f2circle_list');
  var f2left_button=$('.f2left_button')[0];
  var f2lun=$('.f2lun')[0];
  var f2right_button=$('.f2right_button')[0];//以类定义的要定义下标
  var f2w=parseInt(getStyle(f2lun,'width'));
  var nf2=0;
  var nextf2=0;
  var flagf2=true;
  var tf2=setInterval(movef2,2000);
  function movef2(){                    //时间函数
    if(!flagf2){
        return;
      }
      flagf2=false;
      nextf2=nf2+1;
    if(nextf2>=f2second_left.length){
      nextf2=0;
      }
    f2second_left[nextf2].style.left=f2w+'px';  //强制转化下一张在右侧等待
    animate(f2second_left[nf2],{left:-f2w},600);
    animate(f2second_left[nextf2],{left:0},600,function(){flagf2=true;});
    f2circle_list[nf2].style.background='#ccc';
    f2circle_list[nextf2].style.background='red';
    nf2=nextf2;
  }
  f2lun.onmouseover=function(){      //鼠标进入图片静止
    clearInterval(tf2);
  }
  f2lun.onmouseout=function(){       //鼠标移出图片轮播
    tf2=setInterval(movef2,2000);
  }
  f2right_button.onclick=function(){           //右击按钮，图片左移
    movef2();
  }
  f2left_button.onclick=function(){            //左击按钮，图片右移
    if(!flagf2){
      return;
    }
    flagf2=true;
    nextf2=nf2-1;
    if(nextf2<0){
      nextf2=f2second_left.length-1;
    }
    f2second_left[nextf2].style.left=-f2w+'px';  //强制转化下一张在左侧等待
    animate(f2second_left[nf2],{left:f2w},600);
    animate(f2second_left[nextf2],{left:0},600,function(){flagf2=true;});
    f2circle_list[nf2].style.background='#ccc';
    f2circle_list[nextf2].style.background='red';
    nf2=nextf2;
  }
  //点击事件
  for(i=0;i<f2circle_list.length;i++){           //完成点击哪一张，那一张显示
    f2circle_list[i].index=i;
    f2circle_list[i].onclick=function(){
      if(this.index>nf2){                 //点击右侧，左移
        if(!flagf2){
          return;
        }
        flagf2=true;
        f2circle_list[this.index].style.left=f2w+'px';
        animate(f2second_left[nf2],{left:-f2w},600);
        animate(f2second_left[this.index],{left:0},600,function(){flagf2=true;});
        f2circle_list[nf2].style.background='#ccc';
        f2circle_list[this.index].style.background='red';
        nf2=this.index;
      }else if(this.index<nf2){             //点击左侧，右移
        if(!flagf2){
          return;
        }
        flagf2=true;
        f2circle_list[this.index].style.left=-f2w+'px';
        animate(f2second_left[nf2],{left:f2w},600);
        animate(f2second_left[this.index],{left:0},600,function(){flagf2=true;});
        f2circle_list[nf2].style.background='#ccc';
        f2circle_list[this.index].style.background='red';
        nf2=this.index;
      }
    }
  }

//六楼轮播
  function twotoo(obj){
    var twotu2=$('.twotu2',obj);
    var twotu2=$('.twotu2',obj);
    var twocir=$('.twocir',obj);
    var zuo=$('.tbutton-left',obj)[0];
    var boxlun=$('.twobigbox',obj)[0];
    var you=$('.tbutton-right',obj)[0];//以类定义的要定义下标
    var wid=parseInt(getStyle(boxlun,'width'));
    var nn=0;
    var nt=0;
    var flagn=true;
    var tt=setInterval(moven,2000);
    function moven(){                    //时间函数
      if(!flagn){
          return;
        }
        flagn=false;
        nt=nn+1;
      if(nt>=twotu2.length){
        nt=0;
        }
      twotu2[nt].style.left=wid+'px';  //强制转化下一张在右侧等待
      animate(twotu2[nn],{left:-wid},600);
      animate(twotu2[nt],{left:0},600,function(){flagn=true;});
      twocir[nn].style.background='#ccc';
      twocir[nt].style.background='red';
      nn=nt;
    }
    boxlun.onmouseover=function(){      //鼠标进入图片静止
      clearInterval(tt);
    }
    boxlun.onmouseout=function(){       //鼠标移出图片轮播
      tt=setInterval(moven,2000);
    }
    you.onclick=function(){           //右击按钮，图片左移
      moven();
    }
    zuo.onclick=function(){            //左击按钮，图片右移
      if(!flagn){
        return;
      }
      flagn=true;
      nt=nn-1;
      if(nt<0){
        nt=twotu2.length-1;
      }
      twotu2[nt].style.left=-wid+'px';  //强制转化下一张在左侧等待
      animate(twotu2[nn],{left:wid},600);
      animate(twotu2[nt],{left:0},600,function(){flagn=true;});
      twocir[nn].style.background='#ccc';
      twocir[nt].style.background='red';
      nn=nt;
    }
    //点击事件
    for(i=0;i<twocir.length;i++){           //完成点击哪一张，那一张显示
      twocir[i].index=i;
      twocir[i].onclick=function(){
        if(this.index>nn){                 //点击右侧，左移
          if(!flagn){
            return;
          }
          flagn=true;
          twocir[this.index].style.left=wid+'px';
          animate(twotu2[nn],{left:-wid},600);
          animate(twotu2[this.index],{left:0},600,function(){flagn=true;});
          twocir[nn].style.background='#ccc';
          twocir[this.index].style.background='red';
          nn=this.index;
        }else if(this.index<nn){             //点击左侧，右移
          if(!flagn){
            return;
          }
          flagn=true;
          twocir[this.index].style.left=-wid+'px';
          animate(twotu2[nn],{left:wid},600);
          animate(twotu2[this.index],{left:0},600,function(){flagn=true;});
          twocir[nn].style.background='#ccc';
          twocir[this.index].style.background='red';
          nn=this.index;
        }
      }
    }
  }
  twotoo($('.twotoo')[0]);
  twotoo($('.twotoo')[1]);
  twotoo($('.twotoo')[2]);
  twotoo($('.twotoo')[3]);

//楼层选项卡
function som(obj){
      var lb1=$('.wr1',obj);
      var smbox1=$('.f2second',obj);
      console.log(lb1.length)
      for(var i=0;i<lb1.length;i++){
        lb1[i].index=i;
        lb1[i].onmouseover=function(){
          for(j=0;j<lb1.length;j++){
            smbox1[j].style.display='none';
            }
            smbox1[this.index].style.display='block';
          }
      }
    }
    som($('.floor_1')[0]);
    som($('.floor_2')[0]);
    som($('.floor_3')[0]);
    som($('.floor_4')[0]);
    som($('.floor_5')[0]);
    som($('.floor_6')[0]);
    som($('.floor_7')[0]);
    som($('.floor_8')[0]);
    som($('.floor_9')[0]);
    som($('.floor_10')[0]);
    som($('.floor_11')[0]);
// 楼层边框变化
function biankuang(obj){
    var li=$('.wordPart',obj);
    var blank=$('.blank',obj);
    for(var i=0;i<li.length;i++){
      li[i].index=i;
      li[i].onmouseover=function(){
        for(var j=0;j<li.length;j++){
          blank[j].style.display='none';
        }
        blank[this.index].style.display='block';
      }
    }
}
biankuang($('.biankuang')[0])
biankuang($('.biankuang')[1])
biankuang($('.biankuang')[2])    
biankuang($('.biankuang')[3])
biankuang($('.biankuang')[4])
biankuang($('.biankuang')[5])
biankuang($('.biankuang')[6])
biankuang($('.biankuang')[7])
biankuang($('.biankuang')[8])
biankuang($('.biankuang')[9])
biankuang($('.biankuang')[10])

//楼层选项卡-一楼
function som0(obj){
      var lb=$('.wr',obj);
      var smbox=$('.f1small',obj);
      console.log(lb.length)
      for(var i=0;i<lb.length;i++){
        lb[i].index=i;
        lb[i].onmouseover=function(){
          for(j=0;j<lb.length;j++){
            smbox[j].style.display='none';
            }
            smbox[this.index].style.display='block';
          }
      }
    }
    som0($('.floor_1')[0])



//热门晒单
  var sandan=$('.sanf')
  var n8=0;
  var next8=0;
  sandan[0].style.top=0;
  var t8=setInterval(san,2000)
  function san(){
    next8=n8+1
    if(next8>=sandan.length){
      next8=0;
    }
    sandan[next8].style.top="240"+"px";
    animate(sandan[n8],{top:-240},1000);
    animate(sandan[next8],{top:0},1000);
    n8=next8;
  }
  sandan.onmouseover=function(){      //鼠标进入图片静止
      clearInterval(t8);
    }
  sandan.onmouseout=function(){       //鼠标移出图片轮播
      t8=setInterval(san,1000);
    }

//右边的固定
  var jmb=$('.jbm-in');
  for(var i=0;i<jmb.length;i++){
    hover(jmb[i],function(){
        var intext=$('.in-text',this)[0];
        animate(intext,{width:64},600);
      },function(){
        var intext=$('.in-text',this)[0];
        animate(intext,{width:0},600);
      })
  }
    

})