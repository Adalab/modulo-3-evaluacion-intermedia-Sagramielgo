(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),o=s(5),a=s.n(o),i=s(6),c=s(7),u=s(9),p=s(8),m=(s(14),s(4)),l=s(2),h=(s(15),s(0));var b=function(e){var t=Object(n.useState)(""),s=Object(l.a)(t,2),r=s[0],o=s[1],a=e.types.map((function(e,t){return Object(h.jsx)("li",{className:"pokeCard__types--type",children:e},t)}));return Object(h.jsxs)("article",{className:"pokeCard ".concat(r),onClick:function(){o(r?"":"blue")},onMouseOver:function(){e.getChoose()},onMouseOut:function(){e.getRemove()},children:[Object(h.jsx)("h2",{className:"pokeCard__name",children:e.name}),Object(h.jsx)("img",{className:"pokeCard__image",src:e.img,alt:e.name}),Object(h.jsx)("ul",{className:"pokeCard__types",children:a})]})};s(17);var j=function(e){var t=Object(n.useState)(""),s=Object(l.a)(t,2),r=s[0],o=s[1];function a(){o("HAZ CLICK EN TU FAVORITO")}function i(){o("")}var c=e.pokemons.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(b,{getChoose:a,getRemove:i,name:e.name,img:e.url,types:e.types})},e.id)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Who's your favourite pokemon? ".concat(r)}),Object(h.jsx)("ul",{className:"listContainer",children:c})]})},g=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return console.log(m),Object(h.jsx)("div",{children:Object(h.jsx)(j,{pokemons:m})})}}]),s}(n.Component);a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))},4:function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.4e48e08b.chunk.js.map