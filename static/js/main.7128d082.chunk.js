(this["webpackJsonptest-shop-react-app"]=this["webpackJsonptest-shop-react-app"]||[]).push([[0],{64:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(25),a=n.n(s),i=(n(64),n(14)),l=n(18),j=n.n(l),o=n(28),u="https://www.themealdb.com/api/json/v1/".concat(1,"/"),d=function(){var e=Object(o.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"lookup.php?i="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"filter.php?c="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"filter.php?a="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"list.php?a=list");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=n(103),f=n(22),p=n(105),m=n(104),v=n(53),y=n(101),I=n(11),M=n(1),k=Object(y.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function w(e){var t=k(),n=(e.idCategory,e.strCategory),r=e.strCategoryThumb;e.strCategoryDescription;return Object(M.jsxs)(v.a,{className:t.paper,children:[Object(M.jsx)(g.a,{variant:"h6",gutterBottom:!0,style:{color:"#FFB800"},children:n}),Object(M.jsx)(I.b,{to:"/category/".concat(n),children:Object(M.jsx)("img",{src:r,alt:"img",style:{width:"200px"}})})]})}function C(e){var t=e.requiredData;return Object(M.jsx)(m.a,{maxWidth:"lg",children:Object(M.jsx)(p.a,{container:!0,spacing:3,children:t&&t.map((function(e){return Object(M.jsx)(p.a,{item:!0,xs:3,children:Object(M.jsx)(w,Object(f.a)({},e))},e.idCategory)}))})})}function N(){return Object(M.jsx)(g.a,{variant:"h2",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}function A(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){b().then((function(e){c(e.categories)}))}),[]),Object(M.jsx)(M.Fragment,{children:n.length?Object(M.jsxs)("div",{children:[Object(M.jsx)(g.a,{variant:"h5",style:{textAlign:"center",margin:"1rem 0 2rem 0",color:"#a67800"},children:"Categories of dishes"}),Object(M.jsx)(C,{requiredData:n})]}):Object(M.jsx)(N,{})})}var B=n(108),F=n(109),S=n(107),D=n(106),T=n(5),W=n(50),E=n.n(W),H=Object(T.a)((function(e){return{badge:{right:-3,top:13,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px",background:"#b393eb",color:"#ffffff"}}}))(D.a);function L(e){var t=e.mealCount;return Object(M.jsx)(S.a,{"aria-label":"cart",children:Object(M.jsx)(H,{badgeContent:t,children:Object(M.jsx)(E.a,{})})})}var z=Object(y.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{margin:"auto"},headerLink:{textDecoration:"none",color:"#fff",display:"flex",marginRight:"15px"},offset:e.mixins.toolbar}})),R={display:"flex",justifyContent:"space-between",background:"#FFB800",height:"80px"};function q(e){var t=z(),n=e.mealCount;return Object(M.jsxs)("div",{className:t.root,children:[Object(M.jsxs)(B.a,{position:"fixed",style:{background:"#a67800"},children:[Object(M.jsxs)(F.a,{style:R,children:[Object(M.jsxs)("div",{style:{display:"flex"},children:[Object(M.jsxs)(I.b,{to:"/",className:t.headerLink,children:[Object(M.jsx)(S.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(M.jsx)("i",{children:"TestShop"})}),Object(M.jsx)(g.a,{variant:"h6",className:t.title,children:"All categories"})]}),Object(M.jsx)(I.b,{to:"/countries",className:t.headerLink,children:Object(M.jsx)(g.a,{variant:"h6",className:t.title,children:"Countries"})})]}),Object(M.jsx)(I.b,{to:"/check",className:t.headerLink,children:Object(M.jsx)(L,{mealCount:n})})]}),Object(M.jsx)("div",{style:{height:"3px"}})]}),Object(M.jsx)("div",{className:t.offset})]})}var J=Object(y.a)((function(){return{footer:{minHeight:"60px",padding:"5px 0",marginTop:"50px",background:"rgba(122, 69, 214, 0.5)",textAlign:"center",color:"#ffffff",lineHeight:"2rem"}}}));function G(){var e=J();return Object(M.jsx)("div",{className:e.footer,children:Object(M.jsxs)("div",{children:["\xa9 ",(new Date).getFullYear()," Test shop"]})})}var Y=n(8),K=n(110),P=n(111),Q=n(112),U=n(113),V=n(114),X=Object(y.a)((function(e){return{root:{maxWidth:300},media:{height:0,paddingTop:"56.25%"},title:{fontSize:14,height:"2rem"}}}));function Z(e){var t=e.strMeal,n=e.strMealThumb,r=e.idMeal,c=e.buyButtonHandler,s=(e.recipeButtonHandler,X());return Object(M.jsxs)(K.a,{className:s.root,children:[Object(M.jsx)(P.a,{children:Object(M.jsx)(g.a,{className:s.title,style:{color:"#FFB800"},gutterBottom:!0,children:t})}),Object(M.jsx)(Q.a,{className:s.media,image:n,title:t}),Object(M.jsxs)(U.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(M.jsx)(V.a,{size:"small",style:{color:"#7a45d6"},onClick:function(){return c({name:t,id:r,count:1})},children:"Buy"}),Object(M.jsx)(I.b,{to:"/meal-recipe/".concat(r),style:{textDecoration:"none"},children:Object(M.jsx)(V.a,{size:"small",style:{color:"#7a45d6"},children:"Cooking recipe"})})]})]})}function $(e){var t=Object(Y.h)().catName,n=Object(r.useState)([]),c=Object(i.a)(n,2),s=c[0],a=c[1];return console.log(t),Object(r.useEffect)((function(){h(t).then((function(e){a(e.meals)}))}),[]),Object(M.jsxs)(m.a,{maxWidth:"lg",children:[Object(M.jsxs)(g.a,{variant:"h6",style:{textAlign:"center",margin:"1rem 0 2rem 0",color:"#a67800"},children:["Dishes from the category: ",t]}),Object(M.jsx)(p.a,{container:!0,spacing:3,children:s&&s.map((function(t){return Object(M.jsx)(p.a,{item:!0,xs:3,children:Object(M.jsx)(Z,Object(f.a)(Object(f.a)({},t),{},{buyButtonHandler:e.buyMeal}))},t.idMeal)}))})]})}var _=n(116),ee=n(120),te=n(119),ne=n(115),re=n(117),ce=n(118),se=Object(y.a)({table:{minWidth:650}});function ae(e){var t=e.mealArray,n=e.removeMeal,r=se();return Object(M.jsx)(M.Fragment,{children:t.length>0&&Object(M.jsx)(ne.a,{component:v.a,children:Object(M.jsxs)(_.a,{className:r.table,size:"small","aria-label":"a dense table",children:[Object(M.jsx)(re.a,{children:Object(M.jsxs)(ce.a,{children:[Object(M.jsx)(te.a,{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(M.jsx)(te.a,{align:"right",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(M.jsx)(te.a,{align:"right",children:"\xa0"})]})}),Object(M.jsx)(ee.a,{children:t.map((function(e){return Object(M.jsxs)(ce.a,{children:[Object(M.jsx)(te.a,{component:"th",scope:"row",children:e.name}),Object(M.jsx)(te.a,{align:"right",children:e.count}),Object(M.jsx)(te.a,{align:"right",onClick:function(){return n(e.id)},children:Object(M.jsx)("span",{style:{cursor:"pointer"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]},e.id)}))})]})})})}function ie(e){var t=e.mealCount,n=e.mealArray,r=e.removeMeal,c=Object(M.jsx)(g.a,{variant:"body1",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"});return Object(M.jsx)(m.a,{maxWidth:"md",children:t?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(g.a,{variant:"body1",style:{marginTop:"50px"},children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u0431\u043b\u044e\u0434: ",t]}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:Object(M.jsx)(ae,{mealArray:n,removeMeal:r})})]}):c})}var le=n(121),je=n(39),oe=Object(T.a)((function(){return{root:{color:"#ffffff",backgroundColor:le.a[200],width:"200px","&:hover":{backgroundColor:je.a[300]}}}}))(V.a);function ue(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){O().then((function(e){c(e.meals)}))}),[]),Object(M.jsx)(m.a,{maxWidth:"lg",children:Object(M.jsx)(p.a,{container:!0,spacing:3,style:{marginTop:"20px",textAlign:"center"},children:n.length?n.map((function(e){return Object(M.jsx)(p.a,{item:!0,xs:3,children:Object(M.jsx)(I.b,{style:{textDecoration:"none",marginRight:"10px"},to:"/meals/".concat(e.strArea),children:Object(M.jsx)(oe,{children:e.strArea})})},e.strArea)})):Object(M.jsx)(N,{})})})}function de(e){var t=Object(Y.h)().areaName,n=Object(r.useState)([]),c=Object(i.a)(n,2),s=c[0],a=c[1];return Object(r.useEffect)((function(){x(t).then((function(e){a(e.meals)}))}),[]),Object(M.jsxs)(m.a,{maxWidth:"lg",children:[Object(M.jsxs)(g.a,{variant:"h6",style:{textAlign:"center",margin:"1rem 0 2rem 0",color:"#a67800"},children:["Dishes from: ",t]}),Object(M.jsx)(p.a,{container:!0,spacing:3,children:s&&s.map((function(t){return Object(M.jsx)(p.a,{item:!0,xs:3,children:Object(M.jsx)(Z,Object(f.a)(Object(f.a)({},t),{},{buyButtonHandler:e.buyMeal}))},t.idMeal)}))})]})}var be=n(51),he=n.n(be);function xe(){var e=Object(Y.h)().mealId,t=Object(r.useState)([]),n=Object(i.a)(t,2),c=n[0],s=n[1],a=Object(Y.g)();return console.log(a),Object(r.useEffect)((function(){d(e).then((function(e){console.log(e.meals),s(e.meals)}))}),[]),Object(M.jsx)(m.a,{maxWidth:"lg",style:{color:"#795548"},children:c.map((function(e){return Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{style:{display:"flex"},children:[Object(M.jsx)("img",{src:e.strMealThumb,alt:e.strMeal,style:{width:"280px",height:"auto",margin:"20px",borderRadius:"5px"}}),Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(M.jsxs)("h3",{children:[" ",e.strMeal," "]}),Object(M.jsx)("div",{onClick:function(){return a.goBack()},children:Object(M.jsx)(he.a,{style:{margin:"18.7px 0",cursor:"pointer"}})})]}),Object(M.jsx)("p",{children:e.strInstructions})]})]}),Object(M.jsx)("p",{style:{margin:"0 20px"},children:"Ingredients:"}),Object(M.jsxs)("div",{style:{marginLeft:"20px",display:"flex"},children:[Object(M.jsxs)("ul",{children:[e.strIngredient1?Object(M.jsxs)("li",{children:[e.strIngredient1," ",e.strMeasure1]}):null,e.strIngredient2?Object(M.jsxs)("li",{children:[e.strIngredient2," ",e.strMeasure2]}):null,e.strIngredient3?Object(M.jsxs)("li",{children:[e.strIngredient3," ",e.strMeasure3]}):null,e.strIngredient4?Object(M.jsxs)("li",{children:[e.strIngredient4," ",e.strMeasure4]}):null,e.strIngredient5?Object(M.jsxs)("li",{children:[e.strIngredient5," ",e.strMeasure5]}):null]}),Object(M.jsxs)("ul",{children:[e.strIngredient6?Object(M.jsxs)("li",{children:[e.strIngredient6," ",e.strMeasure6]}):null,e.strIngredient7?Object(M.jsxs)("li",{children:[e.strIngredient7," ",e.strMeasure7]}):null,e.strIngredient8?Object(M.jsxs)("li",{children:[e.strIngredient8," ",e.strMeasure8]}):null,e.strIngredient9?Object(M.jsxs)("li",{children:[e.strIngredient9," ",e.strMeasure9]}):null,e.strIngredient10?Object(M.jsxs)("li",{children:[e.strIngredient10," ",e.strMeasure10]}):null]}),Object(M.jsxs)("ul",{children:[e.strIngredient11?Object(M.jsxs)("li",{children:[e.strIngredient11," ",e.strMeasure11]}):null,e.strIngredient12?Object(M.jsxs)("li",{children:[e.strIngredient12," ",e.strMeasure12]}):null,e.strIngredient13?Object(M.jsxs)("li",{children:[e.strIngredient13," ",e.strMeasure13]}):null,e.strIngredient14?Object(M.jsxs)("li",{children:[e.strIngredient14," ",e.strMeasure14]}):null,e.strIngredient15?Object(M.jsxs)("li",{children:[e.strIngredient15," ",e.strMeasure15]}):null]}),Object(M.jsxs)("ul",{children:[e.strIngredient16?Object(M.jsxs)("li",{children:[e.strIngredient16," ",e.strMeasure16]}):null,e.strIngredient17?Object(M.jsxs)("li",{children:[e.strIngredient17," ",e.strMeasure17]}):null,e.strIngredient18?Object(M.jsxs)("li",{children:[e.strIngredient18," ",e.strMeasure18]}):null,e.strIngredient19?Object(M.jsxs)("li",{children:[e.strIngredient19," ",e.strMeasure19]}):null,e.strIngredient20?Object(M.jsxs)("li",{children:[e.strIngredient20," ",e.strMeasure20]}):null]})]})]},e.idMeal)}))})}var Oe=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),a=Object(i.a)(s,2),l=a[0],j=a[1],o=function(e){c((function(e){return e+1}));var t=l,n=t.find((function(t){return t.id===e.id}));n?n.count=n.count+1:t.push(e),j(t)};return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(I.a,{children:[Object(M.jsx)(q,{mealCount:n}),Object(M.jsx)("div",{className:"content",children:Object(M.jsxs)(Y.d,{children:[Object(M.jsx)(Y.b,{exact:!0,path:"/",children:Object(M.jsx)(A,{})}),Object(M.jsx)(Y.b,{exact:!0,path:"/category/:catName",children:Object(M.jsx)($,{buyMeal:o})}),Object(M.jsx)(Y.b,{exact:!0,path:"/meals/:areaName",children:Object(M.jsx)(de,{buyMeal:o})}),Object(M.jsx)(Y.b,{exact:!0,path:"/check",children:Object(M.jsx)(ie,{mealCount:n,mealArray:l,removeMeal:function(e){var t=l.find((function(t){return t.id===e})),n=l.filter((function(t){return t.id!==e}));c((function(e){return e-t.count})),j(n)}})}),Object(M.jsx)(Y.b,{exact:!0,path:"/meal-recipe/:mealId",children:Object(M.jsx)(xe,{})}),Object(M.jsx)(Y.b,{exact:!0,path:"/countries",children:Object(M.jsx)(ue,{})}),Object(M.jsx)(Y.a,{to:"/"})]})}),Object(M.jsx)(G,{})]})})};a.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(Oe,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.7128d082.chunk.js.map