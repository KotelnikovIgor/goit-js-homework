(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,t,e){},QfWi:function(n,t,e){"use strict";e.r(t);e("x3Br"),e("D/wG"),e("L1EO"),e("JBxO"),e("FdtR");var a=e("dIfx"),i=(e("IlkV"),document.querySelector(".input")),o=document.querySelector(".todo");i.addEventListener("input",function(n){var t;(t=n.target.value,fetch("https://restcountries.eu/rest/v2/name/"+t).then(function(n){return n.json()})).then(function(n){return n.length<=11&&1!==n.length?(a.a.defaults.icons="material",a.a.alert({title:"To many matches found.",text:"Please enter a more specific query!",addClass:"custom nonblock",delay:2e3,icon:!0}),n.reduce(function(n,t){return n+="<li>"+t.name+"</li>",o.innerHTML=n},"")):1===n.length?n.reduce(function(n,t){return n+='\n          <h2 class="country__title">'+t.name+'</h2>\n          <div class="country__wrapper"><div class="left__side">\n          <p><span style="font-weight: bold">Capital:</span>'+t.capital+'</p>\n          <p><span style="font-weight: bold">Population:</span>'+t.population+'</p>\n          <p><span style="font-weight: bold">Languages:</span></p>\n          </div><div class="right__side"><img src="'+t.flag+'"\n          width="500" height="400" alt="Flag"></div>',o.innerHTML=n},""):""}).catch(function(n){return console.log(n)})})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.7ad735cd652792afd30f.js.map