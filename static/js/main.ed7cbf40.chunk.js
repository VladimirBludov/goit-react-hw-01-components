(this["webpackJsonptemplate-react-app"]=this["webpackJsonptemplate-react-app"]||[]).push([[0],[,function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var c=t(2),n=t.n(c),s=t(5),i=t.n(s),r=(t(12),t(13),t.p+"static/media/default_512x512.0e1cf547.jpg"),l=(t(14),t(0));var d=function(e){var a=e.username,t=e.tag,c=e.location,n=e.avatar,s=void 0===n?r:n,i=e.followers,d=void 0===i?0:i,o=e.views,b=void 0===o?0:o,p=e.likes,j=void 0===p?0:p;return Object(l.jsxs)("div",{className:"profile",children:[Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)("img",{src:s,alt:"User avatar",class:"avatar"}),Object(l.jsx)("p",{className:"name",children:a}),Object(l.jsxs)("p",{className:"tag",children:["@",t]}),Object(l.jsx)("p",{className:"location",children:c})]}),Object(l.jsxs)("ul",{className:"stats",children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"label",children:"Followers"}),Object(l.jsx)("span",{className:"quantity",children:d})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"label",children:"Views"}),Object(l.jsx)("span",{className:"quantity",children:b})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"label",children:"Likes"}),Object(l.jsx)("span",{className:"quantity",children:j})]})]})]})};var o=function(e){var a=e.title,t=e.stats;return Object(l.jsxs)("section",{className:"statistics",children:[a&&Object(l.jsx)("h2",{className:"title",children:a}),Object(l.jsx)("ul",{className:"stat-list",children:t.map((function(e){return Object(l.jsxs)("li",{className:"item",children:[Object(l.jsx)("span",{className:"label",children:e.label}),Object(l.jsxs)("span",{className:"percentage",children:[e.percentage,"%"]})]},e.id)}))})]})};function b(e){var a=e.avatar,t=e.name,c=e.isOnline;return Object(l.jsxs)("li",{className:"item",children:[Object(l.jsx)("span",{className:"status",children:c?"Online":"Offline"}),Object(l.jsx)("img",{className:"avatar",src:a,alt:"User avatar",width:"48"}),Object(l.jsx)("p",{className:"name",children:t})]})}var p=function(e){var a=e.friends;return Object(l.jsx)("ul",{className:"friend-list",children:a.map((function(e){var a=e.id,t=e.avatar,c=e.name,n=e.isOnline;return Object(l.jsx)(b,{avatar:t,name:c,isOnline:n},a)}))})};var j=function(e){var a=e.items;return Object(l.jsxs)("table",{className:"transaction-history",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Type"}),Object(l.jsx)("th",{children:"Amount"}),Object(l.jsx)("th",{children:"Currency"})]})}),Object(l.jsx)("tbody",{children:a.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.type}),Object(l.jsx)("td",{children:e.amount}),Object(l.jsx)("td",{children:e.currency})]},e.id)}))})]})},u=t(1),m=t(4),f=t(6),O=t(7);var h=function(){var e,a,t;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{username:u.username,tag:u.tag,location:u.location,avatar:null===u||void 0===u?void 0:u.avatar,followers:null===u||void 0===u||null===(e=u.stats)||void 0===e?void 0:e.followers,views:null===u||void 0===u||null===(a=u.stats)||void 0===a?void 0:a.views,likes:null===u||void 0===u||null===(t=u.stats)||void 0===t?void 0:t.likes}),Object(l.jsx)(o,{title:"Upload stats",stats:m}),Object(l.jsx)(o,{stats:m}),Object(l.jsx)(p,{friends:f}),Object(l.jsx)(j,{items:O})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.ed7cbf40.chunk.js.map