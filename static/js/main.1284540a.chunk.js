(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),o=a(5),c=a.n(o),i=(a(4),a(2)),r=a(6),h=a(7),d=a(9),l=a(8),k=a(0),u=function(e){return Object(k.jsx)("div",{children:e.snakeDots.map((function(e,t){var a={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return Object(k.jsx)("div",{className:"snake-dot",style:a},t)}))})},f=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%")};return Object(k.jsx)("div",{className:"snake-food",style:t})},v=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},j={food:v(),speed:70,direction:"RIGHT",snakeDots:[[0,0],[2,0]]},m=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state=j,e.onKeyDown=function(t){switch((t=t||window.event).keyCode){case 38:e.setState({direction:"UP"});break;case 40:e.setState({direction:"DOWN"});break;case 37:e.setState({direction:"LEFT"});break;case 39:e.setState({direction:"RIGHT"})}},e.moveSnake=function(){var t=Object(i.a)(e.state.snakeDots),a=t[t.length-1];switch(e.state.direction){case"RIGHT":a=[a[0]+2,a[1]];break;case"LEFT":a=[a[0]-2,a[1]];break;case"DOWN":a=[a[0],a[1]+2];break;case"UP":a=[a[0],a[1]-2]}t.push(a),t.shift(),e.setState({snakeDots:t})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){setInterval(this.moveSnake,this.state.speed),document.onkeydown=this.onKeyDown}},{key:"componentDidUpdate",value:function(){this.checkIfOutOfBorders(),this.checkIfCollapsed(),this.checkIfEat()}},{key:"checkIfOutOfBorders",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.onGameOver()}},{key:"checkIfCollapsed",value:function(){var e=this,t=Object(i.a)(this.state.snakeDots),a=t[t.length-1];t.pop(),t.forEach((function(t){a[0]===t[0]&&a[1]===t[1]&&e.onGameOver()}))}},{key:"checkIfEat",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1],t=this.state.food;e[0]===t[0]&&e[1]===t[1]&&(this.setState({food:v()}),this.enlargeSnake(),this.increaseSpeed())}},{key:"enlargeSnake",value:function(){var e=Object(i.a)(this.state.snakeDots);e.unshift([]),this.setState({snakeDots:e})}},{key:"increaseSpeed",value:function(){this.state.speed>20&&this.setState({speed:this.state.speed-20})}},{key:"onGameOver",value:function(){alert("Game Over. Your Score is ".concat(this.state.snakeDots.length-2)),this.setState(j)}},{key:"render",value:function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"titleBar",children:Object(k.jsx)("h1",{className:"title",children:"SNAKE GAME"})}),Object(k.jsx)("div",{className:"board",children:Object(k.jsxs)("h1",{className:"score",children:["Score ",this.state.snakeDots.length-2]})}),Object(k.jsxs)("div",{className:"game-area",children:[Object(k.jsx)(u,{snakeDots:this.state.snakeDots}),Object(k.jsx)(f,{dot:this.state.food})]})]})}}]),a}(n.a.Component),p=m;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(k.jsx)(p,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,a){}},[[15,1,2]]]);
//# sourceMappingURL=main.1284540a.chunk.js.map