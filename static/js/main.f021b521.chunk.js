(this["webpackJsonpdemo-gdxjs"]=this["webpackJsonpdemo-gdxjs"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(2),s=n(3),o=(n(26),n(0)),d=Object(o.e)().getCanvas(),j=Object(o.f)(d,50,100),u=Object(o.g)(d,j),b={x:5,y:5},x=0,i="",g=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,d,u,g,p,O,l,w,f,h,y,k,v,C,m,T,W;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.getContext(),n=j.getCamera(),r=Object(o.c)(t),s=Object(o.h)(t),e.next=6,Object(o.j)(t,"./mole.png");case 6:return d=e.sent,e.next=9,Object(o.j)(t,"./1.png");case 9:return u=e.sent,e.next=12,Object(o.j)(t,"./2.png");case 12:return g=e.sent,e.next=15,Object(o.j)(t,"./3.png");case 15:return p=e.sent,e.next=18,Object(o.j)(t,"./4.png");case 18:return O=e.sent,e.next=21,Object(o.j)(t,"./5.png");case 21:return l=e.sent,e.next=24,Object(o.j)(t,"./6.png");case 24:return w=e.sent,e.next=27,Object(o.j)(t,"./7.png");case 27:return f=e.sent,e.next=30,Object(o.j)(t,"./8.png");case 30:return h=e.sent,e.next=33,Object(o.j)(t,"./9.png");case 33:return y=e.sent,e.next=36,Object(o.j)(t,"./0.png");case 36:return k=e.sent,e.next=39,Object(o.j)(t,"./score.png");case 39:return e.sent,e.next=42,Object(o.j)(t,"./background.png");case 42:return v=e.sent,e.next=45,Object(o.i)(t,"./main.atlas",{});case 45:C=e.sent,C.findRegion("boss_attack",6),m=[],0,0,4,T=0,10,{x:0,y:0},W=1,0,0,0,t.clearColor(0,0,0,1),Object(o.d)((function(e){(T+=e)>4&&(T=0,m.push({x1:50*Math.random(),y:15/Math.random()}),W=0),t.clear(t.COLOR_BUFFER_BIT),r.setProjection(n.combined),r.begin(),r.draw(s,0,0,50,100),r.draw(v,0,0,50,100);var a,o=Object(c.a)(m);try{for(o.s();!(a=o.n()).done;){var j=a.value;r.draw(d,j.x1,j.y,10,10),0==W&&(b.x=j.x1,b.y=j.y,W=1),setTimeout((function(){m.splice(0,1)}),2e3)}}catch(R){o.e(R)}finally{o.f()}1;for(var C=(i=x.toString()).length-1;C>=0;C--)switch(i[C]){case"0":r.draw(k,10+2*C,0,2,2);break;case"1":r.draw(u,10+2*C,0,2,2);break;case"2":r.draw(g,10+2*C,0,2,2);break;case"3":r.draw(p,10+2*C,0,2,2);break;case"4":r.draw(O,10+2*C,0,2,2);break;case"5":r.draw(l,10+2*C,0,2,2);break;case"6":r.draw(w,10+2*C,0,2,2);break;case"7":r.draw(f,10+2*C,0,2,2);break;case"8":r.draw(h,10+2*C,0,2,2);break;case"9":r.draw(y,10+2*C,0,2,2)}r.setColor(.4,.4,.4,1),r.setColor(1,1,1,1),e,r.end()}));case 60:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(window.addEventListener("click",(function(e){var t=u.getTouchedWorldCoord().y,n=u.getTouchedWorldCoord().x;n<=b.x+6&&n>=b.x+2.7&&t>=b.y+1.5&&t<=b.y+5.2&&(x++,console.log(x),b.x=3,b.y=3)})),u.isTouched()){var p=u.getTouchedWorldCoord().y,O=u.getTouchedWorldCoord().x;O<=b.x+6&&O>=b.x+2.7&&p>=b.y+1.5&&p<=b.y+5.2&&(x++,console.log(x),b.x=3,b.y=3)}g()},26:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.f021b521.chunk.js.map