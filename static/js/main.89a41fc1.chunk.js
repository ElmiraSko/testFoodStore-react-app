(this["webpackJsonptest-shop-react-app"]=this["webpackJsonptest-shop-react-app"]||[]).push([[0],{58:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(23),i=n.n(a),s=(n(58),n(21)),j=n(16),o=n.n(j),l=n(26),b="https://www.themealdb.com/api/json/v1/".concat(1,"/"),d=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b+"filter.php?c="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=n(100),x=n(32),O=n(102),f=n(101),m=n(47),p=n(98),g=n(19),v=n(2),y=Object(p.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function k(e){var t=y(),n=(e.idCategory,e.strCategory),c=e.strCategoryThumb;e.strCategoryDescription;return Object(v.jsxs)(m.a,{className:t.paper,children:[Object(v.jsx)(h.a,{variant:"h6",gutterBottom:!0,style:{color:"#FFB800"},children:n}),Object(v.jsx)(g.b,{to:"/category/".concat(n),children:Object(v.jsx)("img",{src:c,alt:"img",style:{width:"200px"}})})]})}function C(e){var t=e.requiredData;return Object(v.jsx)(f.a,{maxWidth:"lg",children:Object(v.jsx)(O.a,{container:!0,spacing:3,children:t&&t.map((function(e){return Object(v.jsx)(O.a,{item:!0,xs:3,children:Object(v.jsx)(k,Object(x.a)({},e))},e.idCategory)}))})})}function w(){return Object(v.jsx)(h.a,{variant:"h2",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}function N(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){d().then((function(e){r(e.categories)}))}),[]),Object(v.jsx)(v.Fragment,{children:n.length?Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0443"}),Object(v.jsx)(h.a,{variant:"h5",style:{textAlign:"center",margin:"1rem 0 2rem 0",color:"#a67800"},children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0431\u043b\u044e\u0434"}),Object(v.jsx)(C,{requiredData:n})]}):Object(v.jsx)(w,{})})}var F=n(105),M=n(106),A=n(104),B=n(103),S=n(5),T=n(45),D=n.n(T),W=Object(S.a)((function(e){return{badge:{right:-3,top:13,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px",background:"#b393eb",color:"#ffffff"}}}))(B.a);function z(e){var t=e.mealCount;return Object(v.jsx)(A.a,{"aria-label":"cart",children:Object(v.jsx)(W,{badgeContent:t,children:Object(v.jsx)(D.a,{})})})}var H=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{margin:"auto"},headerLink:{textDecoration:"none",color:"#fff",display:"flex"},offset:e.mixins.toolbar}})),E={display:"flex",justifyContent:"space-between",background:"#FFB800",height:"80px"};function L(e){var t=H(),n=e.mealCount;return Object(v.jsxs)("div",{className:t.root,children:[Object(v.jsxs)(F.a,{position:"fixed",style:{background:"#a67800"},children:[Object(v.jsxs)(M.a,{style:E,children:[Object(v.jsxs)(g.b,{to:"/",className:t.headerLink,children:[Object(v.jsx)(A.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(v.jsx)("i",{children:"TestShop"})}),Object(v.jsx)(h.a,{variant:"h6",className:t.title,children:"\u0412\u0441\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"})]}),Object(v.jsx)(g.b,{to:"/check",className:t.headerLink,children:Object(v.jsx)(z,{mealCount:n})})]}),Object(v.jsx)("div",{style:{height:"3px"}})]}),Object(v.jsx)("div",{className:t.offset})]})}var q=Object(p.a)((function(){return{footer:{minHeight:"60px",padding:"5px 0",marginTop:"50px",background:"rgba(122, 69, 214, 0.5)",textAlign:"center",color:"#ffffff",lineHeight:"2rem"}}}));function J(){var e=q();return Object(v.jsx)("div",{className:e.footer,children:Object(v.jsxs)("div",{children:["\xa9 ",(new Date).getFullYear()," Test shop"]})})}var G=n(9),I=n(107),R=n(108),Y=n(109),K=n(110),P=n(111),Q=Object(p.a)((function(e){return{root:{maxWidth:300},media:{height:0,paddingTop:"56.25%"},title:{fontSize:14,height:"2rem"}}}));function U(e){var t=e.strMeal,n=e.strMealThumb,c=e.idMeal,r=e.buttonHandler,a=Q();return Object(v.jsxs)(I.a,{className:a.root,children:[Object(v.jsx)(R.a,{children:Object(v.jsx)(h.a,{className:a.title,style:{color:"#FFB800"},gutterBottom:!0,children:t})}),Object(v.jsx)(Y.a,{className:a.media,image:n,title:t}),Object(v.jsxs)(K.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(v.jsx)(P.a,{size:"small",style:{color:"#7a45d6"},onClick:function(){return r({name:t,id:c,count:1})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(v.jsx)(P.a,{size:"small",style:{color:"#7a45d6"},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]})]})}function V(e){var t=Object(G.g)().catName,n=Object(c.useState)([]),r=Object(s.a)(n,2),a=r[0],i=r[1];return console.log(t),Object(c.useEffect)((function(){u(t).then((function(e){i(e.meals)}))}),[]),Object(v.jsxs)(f.a,{maxWidth:"lg",children:[Object(v.jsxs)(h.a,{variant:"h6",style:{textAlign:"center",margin:"1rem 0 2rem 0",color:"#a67800"},children:["\u0411\u043b\u044e\u0434\u0430 \u0438\u0437 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438: ",t]}),Object(v.jsx)(O.a,{container:!0,spacing:3,children:a&&a.map((function(t){return Object(v.jsx)(O.a,{item:!0,xs:3,children:Object(v.jsx)(U,Object(x.a)(Object(x.a)({},t),{},{buttonHandler:e.buyMeal}))},t.idMeal)}))})]})}var X=n(113),Z=n(117),$=n(116),_=n(112),ee=n(114),te=n(115),ne=Object(p.a)({table:{minWidth:650}});function ce(e){var t=e.mealArray,n=e.removeMeal,c=ne();return Object(v.jsx)(v.Fragment,{children:t.length>0&&Object(v.jsx)(_.a,{component:m.a,children:Object(v.jsxs)(X.a,{className:c.table,size:"small","aria-label":"a dense table",children:[Object(v.jsx)(ee.a,{children:Object(v.jsxs)(te.a,{children:[Object(v.jsx)($.a,{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(v.jsx)($.a,{align:"right",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(v.jsx)($.a,{align:"right",children:"\xa0"})]})}),Object(v.jsx)(Z.a,{children:t.map((function(e){return Object(v.jsxs)(te.a,{children:[Object(v.jsx)($.a,{component:"th",scope:"row",children:e.name}),Object(v.jsx)($.a,{align:"right",children:e.count}),Object(v.jsx)($.a,{align:"right",onClick:function(){return n(e.id)},children:Object(v.jsx)("span",{style:{cursor:"pointer"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]},e.id)}))})]})})})}function re(e){var t=e.mealCount,n=e.mealArray,c=e.removeMeal,r=Object(v.jsx)(h.a,{variant:"body1",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"});return Object(v.jsx)(f.a,{maxWidth:"md",children:t?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(h.a,{variant:"body1",style:{marginTop:"50px"},children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u0431\u043b\u044e\u0434: ",t]}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:Object(v.jsx)(ce,{mealArray:n,removeMeal:c})})]}):r})}var ae=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(s.a)(a,2),j=i[0],o=i[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(g.a,{children:[Object(v.jsx)(L,{mealCount:n}),Object(v.jsx)("div",{className:"content",children:Object(v.jsxs)(G.d,{children:[Object(v.jsx)(G.b,{exact:!0,path:"/",children:Object(v.jsx)(N,{})}),Object(v.jsx)(G.b,{exact:!0,path:"/category/:catName",children:Object(v.jsx)(V,{buyMeal:function(e){r((function(e){return e+1}));var t=j,n=t.find((function(t){return t.id===e.id}));n?n.count=n.count+1:t.push(e),o(t)}})}),Object(v.jsx)(G.b,{exact:!0,path:"/check",children:Object(v.jsx)(re,{mealCount:n,mealArray:j,removeMeal:function(e){var t=j.find((function(t){return t.id===e})),n=j.filter((function(t){return t.id!==e}));r((function(e){return e-t.count})),o(n)}})}),Object(v.jsx)(G.a,{to:"/"})]})}),Object(v.jsx)(J,{})]})})};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(ae,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.89a41fc1.chunk.js.map