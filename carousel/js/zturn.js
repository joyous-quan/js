(function(win,doc,undefined){
 	var zturn=function(turn){
 		this.turn=turn
 		this.zturn=$("#"+turn.id)
 		this.X=0
 		this.zturnitem=this.zturn.children(".zturn-item")
 		this.num_li=this.zturnitem.length//杞挱鍏冪礌涓暟 zturnPy涓烘瘡涓殑鍋忕Щ閲�
 		this.zturnPy=turn.Awidth/(this.num_li-1)  
 		this.init()
 		this.turn_()
 		return this
 	}
 	zturn.prototype={
 		constructor:zturn,
 		 init:function(){
 		 		var _self = this;
				this.zturn.children(".zturn-item").each(function(index,element){	 		
								//index鏄鍑犱釜鍏冪礌 X鏄€夊彇鐨勪腑闂存暟 num_li鏄€绘暟
							var rt=1//1:鍙充晶锛�-1锛氬乏渚�
							if((index-_self.X)>_self.num_li/2||(index-_self.X)<0&&(index-_self.X)>(-_self.num_li/2)){rt=-1}//鍒ゆ柇鍏冪礌宸︿晶杩樻槸鍙充晶
							var i=Math.abs(index-_self.X);//鍙栫粷瀵瑰€�
							if(i>_self.num_li/2){i=parseInt(_self.X)+parseInt(_self.num_li)-index;}//i:鏄乏鎴栬€呭彸鐨勭鍑犱釜
							if((index-_self.X)<(-_self.num_li/2)){i=_self.num_li+index-_self.X}
							$(this).css({
								'position':'absolute',
								'left': '50%',
								'margin-left':-_self.turn.width/2+_self.zturnPy*rt*i+"px",
								'z-index':_self.num_li-i, 
								'opacity': Math.pow(_self.turn.opacity,i),
								'transform':'scale('+Math.pow(_self.turn.scale,i)+')',
								'-webkit-transform':'scale('+Math.pow(_self.turn.scale,i)+')',
								'-webkit-transform':'scale('+Math.pow(_self.turn.scale,i)+')',
								'-moz-transform':'scale('+Math.pow(_self.turn.scale,i)+')',
								'-ms-transform':'scale('+Math.pow(_self.turn.scale,i)+')',
								'-o-transform':'scale('+Math.pow(_self.turn.scale,i)+')'
							})
							$(this).attr("data_n",index)
					})
 		 },
 		 turn_:function(){
 		 	var _self=this
 		 	this.zturnitem.click(function(){	 			
 		 		_self.X=$(this).attr("data_n")
 		 		_self.init()
 		 	})
 		 },
 		 prev_:function(){
 		 		var _self=this
 		 		this.X--
				if(this.X<0){this.X=this.num_li-1}
 		 		this.init()
 		 },
 		next_:function(){
 		 		var _self=this
 		 		this.X++
				if(this.X>=this.num_li){this.X=0}
 		 		this.init()
 		 }
 	} 	
 		win.zturn = zturn;
}(window,document))
 
