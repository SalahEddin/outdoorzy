(window.webpackJsonppackwise=window.webpackJsonppackwise||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n(0),r=n(14),o=n.n(r),s=n(61),c=n(119),l=n(117),u=n(25),d=Object(i.c)("html{font-family:",u.default.font,";font-size:",u.default.fontSize,";}body{margin:0;padding:0;}"),p=n(12),m=n(3),g=n(106),b=n(122),f=n(121),h=n(114),O=n(120),y=n(113),j=n(116),v=function(e){return Object(i.d)(g.a,Object(m.a)({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))};var _=function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),r=n[0],o=n[1];return Object(i.d)(g.a,{fill:!0},Object(i.d)(v,null,Object(i.d)(b.a,{level:"4",margin:"none"},"Packwise"),Object(i.d)(f.a,{icon:Object(i.d)(y.a,null),onClick:function(){return o(!r)}})),Object(i.d)(g.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},Object(i.d)(g.a,{flex:!0,align:"center",justify:"center"},e.mainBox),r&&"small"===e.size?Object(i.d)(O.a,null,Object(i.d)(g.a,{background:"light-2",tag:"header",justify:"end",align:"center",direction:"row"},Object(i.d)(f.a,{icon:Object(i.d)(j.a,null),onClick:function(){return o(!1)}})),Object(i.d)(g.a,{fill:!0,background:"light-2",align:"center",justify:"center"},"sidebar")):Object(i.d)(h.a,{direction:"horizontal",open:r},Object(i.d)(g.a,{flex:!0,width:"medium",background:"light-2",elevation:"small",align:"center",justify:"center"},"sidebar"))))},k=n(23),w=n(11),x=Object(w.a)("section",{target:"eohigpr0"})("box-sizing:border-box;box-shadow:0rem 0.0625rem 0.125rem ",function(e){return e.theme.card.boxShadowColor?e.theme.card.boxShadowColor:"rgba(0, 0, 0, 0.45)"},";display:flex;flex:1;flex-direction:column;max-height:",function(e){return e.theme.card.maxHeight?e.theme.card.maxHeight:"700px"},";margin:",function(e){return e.margin?e.margin:"0"},";padding:",function(e){return e.padding?e.padding:"0"},";"),C=Object(w.a)("header",{target:"eohigpr1"})("display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid ",function(e){return e.theme.card.header.borderBottom},";padding:0.5rem 1rem;"),S=Object(w.a)("div",{target:"eohigpr2"})("height:100%;overflow:auto;margin:",function(e){return e.margin?e.margin:"0"},";padding:",function(e){return e.padding?e.padding:"0 1rem"},";");var P=function(e){var t=e.Icon,n=e.children,a=e.header,r=e.onIconClick,o=e.showHeader;return Object(i.d)(x,null,o&&Object(i.d)(C,null,Object(i.d)("span",null,a),Object(i.d)(t,{onClick:r})),Object(i.d)(S,null,n))},D=Object(w.a)("section",{target:"e16mdi8r0"})("margin:",function(e){return e.margin?e.margin:"1rem"},";padding:",function(e){return e.padding?e.padding:"0"},";"),q=Object(w.a)("div",{target:"e16mdi8r1"})("height:100%;overflow:auto;margin:",function(e){return e.margin?e.margin:"0"},";padding:",function(e){return e.padding?e.padding:"0 1rem"},";");var z=function(e){return Object(i.d)(q,null,Object(i.d)(b.a,{style:{marginLeft:0},color:{dark:"light-1",light:"dark-2"},margin:"small",level:2},e.label),Object(i.d)(D,null),e.children)},I=n(118);var E=function(e){return Object(i.d)(I.a,{valueKey:function(e){return e.value},labelKey:function(e){return e.label},options:e.options,value:e.selectedOption,onChange:function(t){var n=t.option;return e.onChange(n)}})},J=n(123),B=Object(w.a)("div",{target:"e1286b9u0"})("display:flex;flex-direction:column;height:100%;overflow:auto;margin:",function(e){return e.margin?e.margin:"0"},";padding:",function(e){return e.padding?e.padding:"0 1rem"},";"),N=Object(w.a)("div",{target:"e1286b9u1"})("margin-top:",function(e){return e.margin?e.margin:"0.3em"},";");var Q=function(e){return Object(i.d)(B,null,e.options.map(function(t){return Object(i.d)(N,{key:t.value},Object(i.d)(J.a,{checked:t.checked||!1,label:t.label,onChange:function(n){return e.setChecked(t.value,n.target.checked)}}))}))};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var R=function(e){var t=Object(a.useState)(e.weatherQuestion.options[0]),n=Object(p.a)(t,2),r=n[0],o=n[1],s=Object(a.useState)(e.activitiesQuestion.options),c=Object(p.a)(s,2),l=c[0],u=c[1];function d(e,t){var n=l.map(function(n){return n.value===e?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach(function(t){Object(k.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n,{checked:t}):n});u(n)}return Object(i.d)(P,{header:"Answer these questions to get a packing list appropriate to your activities"},Object(i.d)(z,{label:e.weatherQuestion.label},Object(i.d)(E,{options:e.weatherQuestion.options,selectedOption:r,onChange:function(e){return o(e)}})),Object(i.d)(D,{margin:"14px"}),Object(i.d)(z,{label:e.activitiesQuestion.label},Object(i.d)(Q,{options:l,setChecked:function(e,t){return d(e,t)}})),Object(i.d)(f.a,{margin:"medium",label:"Submit",primary:!0,type:"submit",hoverIndicator:!0,onClick:function(){e.onCompleted(r.value,l.filter(function(e){return e.checked}))}}))},H=n(24),W=n(78),K=n(79),L=n(80),T=n(81),G=n(82),A=[].concat(Object(H.a)(W),Object(H.a)(K),Object(H.a)(L));function V(){return A}function X(e){return{value:e.activity_ID,label:e.activity_name}}function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function F(e,t){return e.filter(function(e){for(var n=e.apropriate_conditions,i=0,a=n.length;i<a;i++){if(Y(n[i],t))return!0}return!1})}function U(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(0===i.length)return[];var a=e.filter(function(e){return i.includes(e.activity_ID)}).map(function(e){return e.equipment});if(0===a.length)return[];for(var r=(t=[]).concat.apply(t,Object(H.a)(a)),o=[],s=function(){var e=r[c],t=o.filter(function(t){return t.item===e.item});0===t.length?o.push(e):!t.reduce(function(e,t){return e.essential||t.essential}).essential&&e.essential&&(o=o.map(function(t){return t.item===e.item?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach(function(t){Object(k.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e):t}))},c=0;c<r.length;c++)s();return(n=[]).concat.apply(n,Object(H.a)(o))}function Y(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;e.sort(),t.sort();for(var n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}var Z=Object(w.a)("div",{target:"e1vwnliz0"})({name:"1utz6kq",styles:"display:flex;flex-direction:column;max-height:700px;width:100%;justify-content:start;padding-left:1rem;"}),ee=Object(w.a)("div",{target:"e1vwnliz1"})({name:"j7qwjs",styles:"display:flex;flex-direction:column;"}),te=Object(w.a)("p",{target:"e1vwnliz2"})("text-decoration:",function(e){return e.isStriked?"line-through":"none"},";font-size:1.2rem;padding:0;margin:0.2rem;");var ne=function(e){var t=e.text,n=e.isChecked,a=e.onChange;return Object(i.d)(J.a,{type:"checkbox",label:Object(i.d)(te,{isStriked:n},t),checked:n,onChange:function(e){return a(e.target.checked)}})};var ie=function(e){var t=e.title,n=e.items,a=e.onChange;return n.length?Object(i.d)(Z,null,Object(i.d)(b.a,{level:2},t),Object(i.d)(ee,null,n.map(function(e){return Object(i.d)(ne,{key:e.key,text:e.text,isChecked:e.isChecked,onChange:function(t){return a(e.key,t)}})}))):null},ae=n(53),re=n.n(ae),oe=n(83);var se=function(e){var t=Object(a.useState)([]),n=Object(p.a)(t,2),i=n[0],r=n[1],o=Object(a.useState)(!1),s=Object(p.a)(o,2),c=s[0],l=s[1],u=Object(a.useState)(!1),d=Object(p.a)(u,2),m=d[0],g=d[1];return Object(a.useEffect)(function(){function t(){return(t=Object(oe.a)(re.a.mark(function t(){var n,i,a;return re.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),n=Math.floor(100*Math.random()),t.next=4,fetch("https://api.giphy.com/v1/gifs/search?api_key=XxwaJMGo8dKhEuNdDVlkTk2DsDdus2Mr&q=".concat(e,"&limit=1&offset=").concat(n,"&rating=G&lang=en"));case 4:return i=t.sent,t.prev=5,t.next=8,i.json();case 8:a=t.sent,g(!0),r(a.data.map(function(e){return e.images.preview.mp4})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),g(!1);case 16:return t.prev=16,l(!1),t.finish(16);case 19:case"end":return t.stop()}},t,null,[[5,13,16,19]])}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[e]),[i,c,m]};function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(n,!0).forEach(function(t){Object(k.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ue={label:"what will the weather be like?",options:[{label:"Sunny",value:["sunny"]},{label:"Rainy",value:["rain"]},{label:"Rainy & Windy",value:["rain","strong_wind"]},{label:"Snowy",value:["snow"]}]},de={label:"What activities do you plan to do",options:V().map(X)};var pe=function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),r=n[0],o=n[1],s=Object(a.useState)([]),c=Object(p.a)(s,2),l=c[0],u=c[1],d=se("outdoors"),m=Object(p.a)(d,3);function g(e,t){o(!0);var n,i,a=V(),r=T,s=G,c=U(a,t.map(function(e){return e.value})),l=F(r,e),d=function(e,t){return F(e,t)}(s,e),p=(n=c,i=d,{shelter:l.map(function(e){return{text:e.shelter_name,key:e.shelter_name,essential:!0}}),equipment:n.map(function(e){return{text:e.item,key:e.item,essential:e.essential}}),clothing:i.map(function(e){return{text:e.gear_name,key:e.gear_name,essential:!0}})});u(p)}function b(e,t,n){var i=le({},l,Object(k.a)({},t,l[t].map(function(t){return t.key===e?le({},t,{isChecked:n}):t})));u(i)}return m[0],m[1],m[2],Object(i.d)("div",{style:{height:"900px",width:"900px",marginTop:"50px"}},Object(i.d)("div",{style:{display:r?"none":"block",height:"100%"}},Object(i.d)(R,{weatherQuestion:ue,activitiesQuestion:de,onCompleted:function(e,t){return g(e,t)}})),Object(i.d)("div",{style:{display:r?"block":"none",height:"100%"}},r&&Object(i.d)(P,{header:"Packing List"},Object(i.d)(ie,{title:"Shelter",items:l.shelter,onChange:function(e,t){b(e,"shelter",t)}}),Object(i.d)(ie,{title:"Equipment",items:l.equipment,onChange:function(e,t){b(e,"equipment",t)}}),Object(i.d)(ie,{title:"Clothing",items:l.clothing,onChange:function(e,t){b(e,"clothing",t)}}))))};var me=function(e){return Object(i.d)(_,{size:e.size,mainBox:Object(i.d)(pe,null)})};var ge=function(){return Object(i.d)(s.a,{theme:u},Object(i.d)(i.a,{styles:d}),Object(i.d)(c.a,{theme:u,full:!0},Object(i.d)(l.a.Consumer,null,function(e){return Object(i.d)(me,{size:e})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=n(85);o.a.render(Object(i.d)(be.a,{basename:"/packwise"},Object(i.d)(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},25:function(e){e.exports=JSON.parse('{"default":{"fontSize":"16px","font":"Roboto"},"global":{"colors":{"brand":"#3ca300"},"icon":{"size":{"small":"12px","medium":"24px","large":"48px","xlarge":"96px"}},"font":{"family":"Roboto","size":"14px","height":"20px"}},"card":{"boxShadowColor":"rgba(0, 0, 0, 0.45)","maxHeight":"100%","header":{"borderBottom":"rgba(0, 0, 0, 0.45)"}}}')},78:function(e){e.exports=JSON.parse('[{"activity_ID":"activity_toprope_climbing","activity_name":"Top-Rope Climbing","short_description":"","aliases":[],"shelter_needed":false,"equipment":[{"item":"chalk","essential":true},{"item":"brush","essential":true},{"item":"rope","essential":true},{"item":"climbing shoes","essential":true},{"item":"topo","essential":true}]},{"activity_ID":"activity_lead_climbing","activity_name":"Lead Climbing","short_description":"","aliases":[],"shelter_needed":false,"equipment":[{"item":"chalk","essential":true},{"item":"brush","essential":true},{"item":"rope","essential":true},{"item":"climbing shoes","essential":true},{"item":"topo","essential":true}]},{"activity_ID":"activity_bouldering","activity_name":"Bouldering","short_description":"","aliases":[],"shelter_needed":false,"equipment":[{"item":"chalk","essential":true},{"item":"brush","essential":true},{"item":"rope","essential":true},{"item":"climbing shoes","essential":true},{"item":"topo","essential":true},{"item":"crashpad","essential":true}]}]')},79:function(e){e.exports=JSON.parse('[{"activity_ID":"activity_one_day_hike","activity_name":"one-day hiking","short_description":"","aliases":["trekking"],"shelter_needed":false,"equipment":[{"item":"daypack","essential":true},{"item":"daypack rain cover","essential":true,"conditions":["rain"]},{"item":"hiking boots","essential":true},{"item":"water bottle","essential":true},{"item":"hiking sticks","essential":false},{"item":"map & trail guide","essential":true}]},{"activity_ID":"activity_multi_day_hike","activity_name":"multi-day hiking","short_description":"","aliases":["thru-hiking"],"shelter_needed":true,"equipment":[{"item":"backpack","essential":true},{"item":"daypack rain cover","essential":true,"conditions":["rain"]},{"item":"hiking boots","essential":true},{"item":"hiking shoes","essential":false},{"item":"water bottle","essential":true},{"item":"hiking sticks","essential":true},{"item":"map & trail guide","essential":true},{"item":"headlamp","essential":true},{"item":"folding knife","essential":false},{"item":"water treatment system","essential":false}]}]')},80:function(e){e.exports=JSON.parse('[{"activity_ID":"activity_make_coffee","activity_name":"make coffee","short_description":"","aliases":["tea","hot beverage"],"shelter_needed":false,"equipment":[{"item":"camp stove or burner","essential":true},{"item":"gas cannister","essential":true},{"item":"matches or lighter","essential":true},{"item":"coffee maker","essential":false},{"item":"cups","essential":true}]},{"activity_ID":"activity_make_food","activity_name":"cook warm food","short_description":"","aliases":[],"shelter_needed":false,"equipment":[{"item":"camp stove or burner","essential":true},{"item":"gas cannister","essential":true},{"item":"matches or lighter","essential":true},{"item":"cookware set","essential":false},{"item":"plates","essential":true},{"item":"utensils","essential":true}]}]')},81:function(e){e.exports=JSON.parse('[{"shelter_name":"tent","aliases":[],"apropriate_conditions":[[]]},{"shelter_name":"geodesic tent","aliases":["semi-geodesic"],"apropriate_conditions":[["strong_wind"],["snow"],["snow","strong_wind"]]},{"shelter_name":"hammock","aliases":["Mexican hammock"],"apropriate_conditions":[["sunny","warm"]]}]')},82:function(e){e.exports=JSON.parse('[{"gear_name":"quick-dry pants","gear_type":"pants","aliases":[],"apropriate_conditions":[[]]},{"gear_name":"quick-dry shorts","gear_type":"pants","aliases":[],"apropriate_conditions":[["warm"],["warm","sunny"]]},{"gear_name":"base layer","gear_type":"base","aliases":[],"apropriate_conditions":[["cold"]]},{"gear_name":"leggings","gear_type":"base","aliases":[],"apropriate_conditions":[["cold"]]},{"gear_name":"fleece","gear_type":"base_outwear","aliases":[],"apropriate_conditions":[["cold"]]},{"gear_name":"beanie","gear_type":"headwear","aliases":[],"apropriate_conditions":[["cold"]]},{"gear_name":"hat","gear_type":"headwear","aliases":[],"apropriate_conditions":[["sunny"]]},{"gear_name":"gloves","gear_type":"handwear","aliases":[],"apropriate_conditions":[["cold"]]},{"gear_name":"windstopper","gear_type":"condition_protection_gear","aliases":[],"apropriate_conditions":[["strong_wind"]]},{"gear_name":"rain jacket","gear_type":"condition_protection_gear","aliases":[],"apropriate_conditions":[["strong_wind","rain"],["rain"],["snow"]]},{"gear_name":"rain pants","gear_type":"condition_protection_pants","aliases":[],"apropriate_conditions":[["rain"],["snow"]]},{"gear_name":"socks","gear_type":"socks","aliases":[],"apropriate_conditions":[[]]},{"gear_name":"wool socks","gear_type":"socks","aliases":[],"apropriate_conditions":[["cold"]]},{"gear_name":"sunglasses","gear_type":"eyewear","aliases":[],"apropriate_conditions":[["sunny"],["snow"]]}]')},90:function(e,t,n){e.exports=n(105)}},[[90,1,2]]]);
//# sourceMappingURL=main.6683286a.chunk.js.map