(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"Dv/5":function(t,e,n){},FA89:function(t,e,n){t.exports=n.p+"images/opengraph.jpg"},MIzE:function(t,e,n){t.exports=n.p+"images/favicon.png"},"Pe+1":function(t,e,n){var s=n("mp5j");t.exports=(s.default||s).template({1:function(t,e,n,s,o){var r,i=null!=e?e:t.nullContext||{},l=t.hooks.helperMissing,a=t.escapeExpression,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'  <tr>\r\n    <th class="p-1 text-center" scope="row">'+a("function"==typeof(r=null!=(r=u(n,"position")||(null!=e?u(e,"position"):e))?r:l)?r.call(i,{name:"position",hash:{},data:o,loc:{start:{line:3,column:44},end:{line:3,column:56}}}):r)+'</th>\r\n    <td class="p-1 text-center text-break">'+a("function"==typeof(r=null!=(r=u(n,"name")||(null!=e?u(e,"name"):e))?r:l)?r.call(i,{name:"name",hash:{},data:o,loc:{start:{line:4,column:43},end:{line:4,column:51}}}):r)+'</td>\r\n    <td class="p-1 text-center">'+a("function"==typeof(r=null!=(r=u(n,"score")||(null!=e?u(e,"score"):e))?r:l)?r.call(i,{name:"score",hash:{},data:o,loc:{start:{line:5,column:32},end:{line:5,column:41}}}):r)+"</td>\r\n  </tr>\r\n"},compiler:[8,">= 4.3.0"],main:function(t,e,n,s,o){var r;return null!=(r=(t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]})(n,"each").call(null!=e?e:t.nullContext||{},e,{name:"each",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o,loc:{start:{line:1,column:0},end:{line:7,column:9}}}))?r:""},useData:!0})},QfWi:function(t,e,n){"use strict";n.r(e);n("D/wG"),n("JBxO"),n("FdtR"),new Promise((function(t){setTimeout(t,0)})).then((function(){var t=document.getElementById("preloader");t.classList.add("hidden"),t.classList.remove("visible")}));var s=n("60sD"),o=(n("hi3g"),n("lYjL"),n("RtS0"),n("3dw1"),{_cubes:[],_filledCoords:[],get cubes(){return this._cubes},set cubes(t){this._cubes=[].concat(this._cubes,t)},removeCube:function(t){var e=this.cubes;this.resetCubes(),this.cubes=e.filter((function(e){return e.id!==t}))},resetCubes:function(){this._cubes=[]},get filledCoords(){return this._filledCoords},set filledCoords(t){this._filledCoords=[].concat(this._filledCoords,t)},updateFilledCoords:function(){var t=[];this.cubes.forEach((function(e){t=[].concat(t,e.filledCoords)})),this.resetFilledCoords(),this.filledCoords=t},resetFilledCoords:function(){this._filledCoords=[]}}),r=(n("fp7Y"),n("SQIU"),n("9UJh"),n("e+qc"),function(){function t(t){var e=t.selector,n=t.targetTime,s=t.endHandler;this.$timer=document.querySelector(e),this.targetTime=n,this.timeLeft=this.targetTime,this.endHandler=s,this.isActive=!1,this.intervalID=null,this.render(this.convertTime(this.timeLeft))}var e=t.prototype;return e.start=function(){this.isActive||(this.isActive=!0,this.play())},e.play=function(){var t=this,e=this.timeLeft+Date.now();this.intervalID=setInterval((function(){var n=Date.now();t.timeLeft=1e3*Math.ceil((e-n)/1e3),t.render(t.convertTime(t.timeLeft)),0===t.timeLeft&&t.stop()}),1e3)},e.pause=function(){clearInterval(this.intervalID)},e.stop=function(){clearInterval(this.intervalID),this.timeLeft<=0&&this.endHandler(),this.isActive=!1,this.timeLeft=this.targetTime,this.render(this.convertTime(this.timeLeft))},e.changeTime=function(t){if(Number.isNaN(+t))return 0;this.pause(),this.timeLeft+=+t,this.timeLeft<=0?this.stop():this.play()},e.convertTime=function(t){return Math.floor(t%36e5/6e4).toString().padStart(2,"0")+":"+Math.round(t%6e4/1e3).toString().padStart(2,"0")},e.render=function(t){this.$timer.textContent=t},t}()),i=function(t,e){var n=t+Math.random()*(e-t+1);return Math.floor(n)},l={_startCubesAmount:50,_colors:["#a9bc48","#479b45","#d693d0","#ff0026","#3fd0d4"],_columnsQuant:25,_rowsQuant:20,_timer:6e4,get startCubesAmount(){return this._startCubesAmount},get colors(){return this._colors},get columnsQuant(){return this._columnsQuant},get rowsQuant(){return this._rowsQuant},get timer(){return this._timer}},a={_points:0,get points(){return this._points},set points(t){this._points=t},addPoints:function(t){Number.isNaN(+t)||(this.points+=+t)},resetPoints:function(){this._points=0}},u={gameBoard:document.querySelector(".js-game-board"),newGame:document.querySelector(".js-new-game"),pause:document.querySelector(".js-pause"),points:document.querySelector(".js-points"),resultForm:document.querySelector(".js-result-form"),resultPoints:document.querySelector(".js-result-points"),resultPopup:document.querySelector("#staticBackdrop2"),resultTable:document.querySelector(".js-result-table")},c=(n("aOEW"),n("WB5j"),n("Pe+1")),d=n.n(c),p=function(t){if(t.length){var e=t.slice(0,10);u.resultTable.innerHTML=d()(e)}};function h(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var m=function(){function t(){var t,e,n;n=[{name:"AI",score:1,position:1}],(e="_results")in(t=this)?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}var e,n,s,o=t.prototype;return o.addPlayer=function(t){var e={name:t.name,score:t.score,position:null};this.results=[].concat(this.results,[e]),this.results.sort((function(t,e){return e.score-t.score})).forEach((function(t,e){return t.position=e+1})),this.saveResults()},o.loadResults=function(){var t=localStorage.getItem("results");if(t){var e=JSON.parse(t);this.results=[].concat(e)}},o.saveResults=function(){var t=JSON.stringify(this.results);localStorage.setItem("results",t)},o.render=function(){p(this.results)},o.init=function(){this.loadResults(),this.render()},e=t,(n=[{key:"results",get:function(){return this._results},set:function(t){this._results=t}}])&&h(e.prototype,n),s&&h(e,s),t}(),f=n("A3AF"),v=function(t,e,n,s){for(var o=t,r=0;r<=s-1;r+=1)for(var i=0;i<=s-1;i+=1)o=[].concat(o,[e+r,n+i]);return o};function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function(){function t(){g(this,"color",this.getColor()),g(this,"span",this.getSize()),g(this,"coords",this.getCoords()),g(this,"filledCoords",v([],this.coords[0],this.coords[1],this.span)),g(this,"id",Object(f.a)()),g(this,"points",this.getPoints()),g(this,"time",this.getTime()),g(this,"clicksToRemove",this.getClicksToRemove())}var e=t.prototype;return e.getColor=function(){var t=l.colors;return t[i(0,t.length-1)]},e.getSize=function(){return i(1,2)},e.getPoints=function(){var t,e=2===this.span?1:2;switch(this.color){case l.colors[1]:t=2*e;break;case l.colors[4]:t=3*e;break;default:t=e}return t},e.getTime=function(){return this.color===l.colors[2]?1e3:this.color===l.colors[3]?-2e3:0},e.getClicksToRemove=function(){return this.color===l.colors[4]?2:1},e.getCoords=function(){var t=[];t.push(i(1,l.columnsQuant-this.span+1),i(1,l.rowsQuant-this.span+1));var e=v([],t[0],t[1],this.span);return this.isPlaceEmpty(e)||(t=this.changeCoords(t)),t},e.isPlaceEmpty=function(t){for(var e=o.filledCoords,n=0;n<e.length-1;n+=2)for(var s=0;s<t.length-1;s+=2)if(t[s]===e[n]&&t[s+1]===e[n+1])return!1;return!0},e.changeCoords=function(t){for(var e=t[0],n=t[1],s=v([],e,n,this.span);!this.isPlaceEmpty(s);)s=e<l.columnsQuant-this.span+1?v([],e+=1,n,this.span):n<l.rowsQuant-this.span+1?v([],e=1,n+=1,this.span):v([],e=1,n=1,this.span);return[e,n]},t}(),y=n("XWsn"),C=n.n(y),w=function(t){for(var e=0;e<t;e+=1){var n=new b;o.filledCoords=v([],n.coords[0],n.coords[1],n.span),o.cubes=[n]}u.gameBoard.innerHTML=C()(o.cubes)},P=(n("Dv/5"),n("FA89"),n("MIzE"),new m),k=new s.a(u.resultPopup,{}),_=new r({selector:"#timer-1",targetTime:l.timer,endHandler:function(){u.points.textContent="0",k.show(),u.resultPoints.textContent=a.points,u.pause.disabled=!0,u.gameBoard.classList.add("blocked")}});u.gameBoard.addEventListener("click",(function(t){var e=t.target,n=t.target.dataset;if("LI"===e.nodeName)if(2!=+n.clicks){if(0!=+n.time&&_.changeTime(n.time),a.addPoints(n.points),o.removeCube(n.id),e.remove(),!_.isActive)return u.points.textContent="0",void(u.resultPoints.textContent=a.points);u.points.textContent=a.points,o.updateFilledCoords(),o.filledCoords.length>=l.rowsQuant*l.columnsQuant*.9||(1!==o.cubes.length?w(i(0,2)):w(10))}else n.clicks=1})),u.newGame.addEventListener("click",(function(){_.isActive&&_.stop(),o.resetCubes(),o.resetFilledCoords(),a.resetPoints(),u.points.textContent="0",w(l.startCubesAmount),u.gameBoard.classList.remove("blocked"),_.start(),"paused"===u.pause.dataset.state&&(u.pause.dataset.state="started",u.pause.textContent="Pause",u.gameBoard.classList.remove("blocked")),u.pause.disabled&&(u.pause.disabled=!1)})),u.pause.addEventListener("click",(function(){if(u.gameBoard.classList.toggle("blocked"),"started"===u.pause.dataset.state)return _.pause(),u.pause.dataset.state="paused",void(u.pause.textContent="Resume");_.play(),u.pause.dataset.state="started",u.pause.textContent="Pause"})),u.resultForm.addEventListener("submit",(function(t){t.preventDefault();var e=t.currentTarget,n={name:e.elements.name.value,score:a.points};e.reset(),k.hide(),P.addPlayer(n),P.render()})),P.init()},XWsn:function(t,e,n){var s=n("mp5j");t.exports=(s.default||s).template({1:function(t,e,n,s,o){var r,i,l=t.lambda,a=t.escapeExpression,u=null!=e?e:t.nullContext||{},c=t.hooks.helperMissing,d="function",p=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'  <li class="game-board__item" style="grid-column: '+a(l(null!=(r=null!=e?p(e,"coords"):e)?p(r,"0"):r,e))+" / span "+a(typeof(i=null!=(i=p(n,"span")||(null!=e?p(e,"span"):e))?i:c)===d?i.call(u,{name:"span",hash:{},data:o,loc:{start:{line:2,column:73},end:{line:2,column:81}}}):i)+";\r\n  grid-row: "+a(l(null!=(r=null!=e?p(e,"coords"):e)?p(r,"1"):r,e))+" / span "+a(typeof(i=null!=(i=p(n,"span")||(null!=e?p(e,"span"):e))?i:c)===d?i.call(u,{name:"span",hash:{},data:o,loc:{start:{line:3,column:34},end:{line:3,column:42}}}):i)+";\r\n  background-color: "+a(typeof(i=null!=(i=p(n,"color")||(null!=e?p(e,"color"):e))?i:c)===d?i.call(u,{name:"color",hash:{},data:o,loc:{start:{line:4,column:20},end:{line:4,column:29}}}):i)+';" data-id="'+a(typeof(i=null!=(i=p(n,"id")||(null!=e?p(e,"id"):e))?i:c)===d?i.call(u,{name:"id",hash:{},data:o,loc:{start:{line:4,column:41},end:{line:4,column:47}}}):i)+'" data-filled="'+a(typeof(i=null!=(i=p(n,"filledCoords")||(null!=e?p(e,"filledCoords"):e))?i:c)===d?i.call(u,{name:"filledCoords",hash:{},data:o,loc:{start:{line:4,column:62},end:{line:4,column:78}}}):i)+'" data-points="'+a(typeof(i=null!=(i=p(n,"points")||(null!=e?p(e,"points"):e))?i:c)===d?i.call(u,{name:"points",hash:{},data:o,loc:{start:{line:4,column:93},end:{line:4,column:103}}}):i)+'" data-time="'+a(typeof(i=null!=(i=p(n,"time")||(null!=e?p(e,"time"):e))?i:c)===d?i.call(u,{name:"time",hash:{},data:o,loc:{start:{line:4,column:116},end:{line:4,column:124}}}):i)+'" data-clicks="'+a(typeof(i=null!=(i=p(n,"clicksToRemove")||(null!=e?p(e,"clicksToRemove"):e))?i:c)===d?i.call(u,{name:"clicksToRemove",hash:{},data:o,loc:{start:{line:4,column:139},end:{line:4,column:157}}}):i)+'"\r\n  ></li>\r\n'},compiler:[8,">= 4.3.0"],main:function(t,e,n,s,o){var r;return null!=(r=(t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]})(n,"each").call(null!=e?e:t.nullContext||{},e,{name:"each",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o,loc:{start:{line:1,column:0},end:{line:6,column:9}}}))?r:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.6d5d7467f9ae4489419e.js.map