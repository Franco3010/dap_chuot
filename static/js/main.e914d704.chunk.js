(this["webpackJsonpdemo-gdxjs"]=this["webpackJsonpdemo-gdxjs"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(2),s=n(3),o=(n(26),n(0)),d=Object(o.g)().getCanvas(),u=Object(o.h)(d,50,100),i=Object(o.i)(d,u),b={x:5,y:5},l=0,g="",x=0,O=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,r,s,d,i,O,j,p,w,h,y,f,k,m,v,C,T,L,_,F,R,W,E;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.getContext(),n=u.getCamera(),r=Object(o.e)(t),s=Object(o.j)(t),e.next=6,Object(o.l)(t,"./mole.png");case 6:return e.sent,e.next=9,Object(o.l)(t,"./1.png");case 9:return d=e.sent,e.next=12,Object(o.l)(t,"./2.png");case 12:return i=e.sent,e.next=15,Object(o.l)(t,"./3.png");case 15:return O=e.sent,e.next=18,Object(o.l)(t,"./4.png");case 18:return j=e.sent,e.next=21,Object(o.l)(t,"./5.png");case 21:return p=e.sent,e.next=24,Object(o.l)(t,"./6.png");case 24:return w=e.sent,e.next=27,Object(o.l)(t,"./7.png");case 27:return h=e.sent,e.next=30,Object(o.l)(t,"./8.png");case 30:return y=e.sent,e.next=33,Object(o.l)(t,"./9.png");case 33:return f=e.sent,e.next=36,Object(o.l)(t,"./0.png");case 36:return k=e.sent,e.next=39,Object(o.l)(t,"./score.png");case 39:return e.sent,e.next=42,Object(o.l)(t,"./background.png");case 42:return m=e.sent,e.next=45,Object(o.k)(t,"./enemy.atlas",{});case 45:v=e.sent,C=v.findRegions("boss_projectile_A"),T=v.findRegions("boss_die"),L=Object(o.d)(.4,T),_=Object(o.d)(.1,C),F=[],0,0,4,R=0,10,{x:0,y:0},W=1,0,E=0,0,t.clearColor(0,0,0,1),Object(o.f)((function(e){(R+=e)>4&&(R=0,F.push({x1:50*Math.random(),y:15/Math.random()}),W=0),t.clear(t.COLOR_BUFFER_BIT),r.setProjection(n.combined),r.begin(),r.draw(s,0,0,50,100),r.draw(m,0,0,50,100),E+=e;var c,u=Object(a.a)(F);try{for(u.s();!(c=u.n()).done;){var v=c.value;0==x?L.getKeyFrame(E,o.a.LOOP).draw(r,v.x1,v.y,10,10):_.getKeyFrame(E,o.a.LOOP).draw(r,v.x1,v.y,10,10),0==W&&(b.x=v.x1,b.y=v.y,W=1),setTimeout((function(){F.splice(0,1)}),2e3)}}catch(T){u.e(T)}finally{u.f()}1;for(var C=(g=l.toString()).length-1;C>=0;C--)switch(g[C]){case"0":r.draw(k,10+2*C,0,2,2);break;case"1":r.draw(d,10+2*C,0,2,2);break;case"2":r.draw(i,10+2*C,0,2,2);break;case"3":r.draw(O,10+2*C,0,2,2);break;case"4":r.draw(j,10+2*C,0,2,2);break;case"5":r.draw(p,10+2*C,0,2,2);break;case"6":r.draw(w,10+2*C,0,2,2);break;case"7":r.draw(h,10+2*C,0,2,2);break;case"8":r.draw(y,10+2*C,0,2,2);break;case"9":r.draw(f,10+2*C,0,2,2)}r.setColor(.4,.4,.4,1),r.setColor(1,1,1,1),r.end()}));case 63:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();window.addEventListener("click",(function(e){var t=i.getTouchedWorldCoord().y,n=i.getTouchedWorldCoord().x;n<=b.x+6&&n>=b.x+2.7&&t>=b.y+1.5&&t<=b.y+5.2&&(l++,console.log(x),x=1,b.x=3,b.y=3),this.setTimeout((function(){x=0}),1e3)})),window.addEventListener("touchstart",(function(e){var t=i.getTouchedWorldCoord().y,n=i.getTouchedWorldCoord().x,r=e.touches[0].screenX,c=e.touches[0].screenY;c=t,(r=n)<=b.x+6&&r>=b.x+2.7&&c>=b.y+1.5&&c<=b.y+5.2&&(l++,console.log(l),x=1,b.x=3,b.y=3),this.setTimeout((function(){x=0}),1e3)})),O()},26:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.e914d704.chunk.js.map