"use strict";(self.webpackChunkShawn_Canavan_Portfolio=self.webpackChunkShawn_Canavan_Portfolio||[]).push([[521],{7521:function(t,i,e){e.r(i);var h=e(5671),s=e(3144),l=document.getElementById("canvas"),c=(document.getElementById("p1hp"),document.getElementById("p2hp"),document.getElementById("main"),l.getContext("2d"));l.height=576,l.width=1076;var o=function(){function t(i){var e=i.x,s=i.y,l=i.color,c=i.width,o=i.height,y=i.velocity,d=i.hp;(0,h.Z)(this,t),this.x=e,this.y=s,this.color=l,this.height=o,this.width=c,this.velocity=y,this.hp=d}return(0,s.Z)(t,[{key:"render",value:function(){c.fillStyle=this.color,c.fillRect(this.x,this.y,this.width,this.height)}},{key:"update",value:function(){this.render(),this.y+=this.velocity.y,this.x+=this.velocity.x,this.x+this.width+this.velocity.x>l.width?(this.velocity.x=0,this.x=l.width-this.width):this.x+=this.velocity.x,this.x-this.velocity.x<0&&(console.log(!0),this.velocity.x=0,this.x=0),this.y+this.height+this.velocity.y>l.height?this.velocity.y=0:this.velocity.y+=.2}},{key:"attack",value:function(){y.y<426&&d.x>this.x+this.width?(c.fillStyle="pink",c.fillRect(this.x+this.width,this.y+this.height/1.5,this.width/4,this.height/1.3)):y.y>426&&d.x>this.x+this.width?(y.velocity.x=0,c.fillStyle="pink",c.fillRect(this.x+this.width,this.y+this.height/2.5,this.width,this.height/3)):y.y<426&&d.x<this.x+this.width?(c.fillStyle="pink",c.fillRect(this.x,this.y+this.height/1.5,this.width/-4,this.height/1.3)):y.y>426&&d.x>this.x+this.width&&(y.velocity.x=0,c.fillStyle="pink",c.fillRect(this.x,this.y+this.height/2.5,this.width,this.height/3),c.fillRect())}}]),t}(),y=new o({x:160,y:426,color:"blue",width:100,height:150,velocity:{x:0,y:0},hp:100}),d=new o({x:807,y:426,color:"green",width:100,height:150,velocity:{x:0,y:0},hp:100});window.addEventListener("keydown",(function(t){switch(console.log(t.key),t.key){case"a":n.a.pressed=!0;break;case"d":n.d.pressed=!0;break;case"w":0==y.velocity.y&&(y.velocity.y=-10);break;case"x":n.x.pressed=!0}})),window.addEventListener("keyup",(function(t){switch(console.log(t.key),t.key){case"a":n.a.pressed=!1;break;case"d":n.d.pressed=!1;break;case"w":n.w.pressed=!1;break;case"x":n.x.pressed=!1}}));var n={a:{pressed:!1},s:{pressed:!1},d:{pressed:!1},w:{pressed:!1},x:{pressed:!1}};!function t(){window.requestAnimationFrame(t),c.clearRect(0,0,l.width,l.height);var i=function(t,i){var e=!1;return t.x<i.x+i.width&&t.x+t.width>i.x&&t.y<i.y+i.height&&t.height+t.y>i.y&&(e=!0),e&&(t.velocity.x=0),e}(y,d);y.update(),d.update(),i||(n.a.pressed?y.velocity.x=-1:n.d.pressed?y.velocity.x=2:y.velocity.x=0),n.x.pressed&&y.attack()}()}}]);
//# sourceMappingURL=521.95ec27a3.chunk.js.map