(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+fof":function(r,t,e){"use strict";e.r(t);var n=e("q1tI"),o=e.n(n),a=e("YMtY");function i(r){var t=r.data,e=[];return sgoyt_data.sgoyt_entries.forEach((function(r){e.push({game_name:r.game_name,link:o.a.createElement("a",{href:r.geeklist_item_link,target:"_blank",rel:"noreferrer"},"[sgoyt]"),contributor:r.contributor,id:r.geeklist_item_id})})),o.a.createElement("div",null,o.a.createElement("h2",null,t.year_month),o.a.createElement("p",null,"Hosted by ",t.geeklist_host),o.a.createElement("small",null,"The column header can be used to filter the results for a particular game or user."),o.a.createElement("div",{style:{height:670,width:"100%"}},o.a.createElement(a.a,{rows:e,columns:[{field:"game_name",headerName:"Game",width:780},{field:"link",headerName:"Link",width:120,filterable:!1,sortable:!1,renderCell:function(r){return r.value}},{field:"contributor",headerName:"Contributor",width:250},{field:"id",headerName:"ID",hide:!0}],pageSize:10,rowsPerPageOptions:[10,20,50,100],hideFooterSelectedRowCount:!0})))}var c=e("vrFN"),u=e("Bl7J"),l=e("pDJo");t.default=Object(l.a)((function(r){var t=r.data,e=r.search.geeklistid,n=t.allYearMonthDataJson.nodes.filter((function(r){return r.geeklist_id===e})),a={};return n.forEach((function(r){a=r})),o.a.createElement(u.a,null,o.a.createElement(c.a,{title:a.year_month}),o.a.createElement(i,{data:a}))}))},"8jRI":function(r,t,e){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(r,t){try{return decodeURIComponent(r.join(""))}catch(o){}if(1===r.length)return r;t=t||1;var e=r.slice(0,t),n=r.slice(t);return Array.prototype.concat.call([],a(e),a(n))}function i(r){try{return decodeURIComponent(r)}catch(o){for(var t=r.match(n),e=1;e<t.length;e++)t=(r=a(t,e).join("")).match(n);return r}}r.exports=function(r){if("string"!=typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(t){return function(r){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(r);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(t){var a=i(n[0]);a!==n[0]&&(e[n[0]]=a)}n=o.exec(r)}e["%C2"]="�";for(var c=Object.keys(e),u=0;u<c.length;u++){var l=c[u];r=r.replace(new RegExp(l,"g"),e[l])}return r}(r)}}},"8yz6":function(r,t,e){"use strict";r.exports=function(r,t){if("string"!=typeof r||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[r];var e=r.indexOf(t);return-1===e?[r]:[r.slice(0,e),r.slice(e+t.length)]}},Bnag:function(r,t){r.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(r,t){r.exports=function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}},Ijbi:function(r,t,e){var n=e("WkPL");r.exports=function(r){if(Array.isArray(r))return n(r)}},J4zp:function(r,t,e){var n=e("wTVA"),o=e("m0LI"),a=e("ZhPi"),i=e("wkBT");r.exports=function(r,t){return n(r)||o(r,t)||a(r,t)||i()}},RIqP:function(r,t,e){var n=e("Ijbi"),o=e("EbDI"),a=e("ZhPi"),i=e("Bnag");r.exports=function(r){return n(r)||o(r)||a(r)||i()}},WkPL:function(r,t){r.exports=function(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}},ZFOp:function(r,t,e){"use strict";r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}},ZhPi:function(r,t,e){var n=e("WkPL");r.exports=function(r,t){if(r){if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}},"cr+I":function(r,t,e){"use strict";e("E9XD");var n=e("J4zp"),o=e("RIqP");function a(r,t){var e;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(e=function(r,t){if(!r)return;if("string"==typeof r)return i(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(r,t)}(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){e=r[Symbol.iterator]()},n:function(){var r=e.next();return c=r.done,r},e:function(r){u=!0,a=r},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw a}}}}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var c=e("ZFOp"),u=e("8jRI"),l=e("8yz6");function s(r){if("string"!=typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(r,t){return t.encode?t.strict?c(r):encodeURIComponent(r):r}function p(r,t){return t.decode?u(r):r}function y(r){var t=r.indexOf("#");return-1!==t&&(r=r.slice(0,t)),r}function d(r){var t=(r=y(r)).indexOf("?");return-1===t?"":r.slice(t+1)}function m(r,t){return t.parseNumbers&&!Number.isNaN(Number(r))&&"string"==typeof r&&""!==r.trim()?r=Number(r):!t.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function g(r,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var e=function(r){var t;switch(r.arrayFormat){case"index":return function(r,e,n){t=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),t?(void 0===n[r]&&(n[r]={}),n[r][t[1]]=e):n[r]=e};case"bracket":return function(r,e,n){t=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),t?void 0!==n[r]?n[r]=[].concat(n[r],e):n[r]=[e]:n[r]=e};case"comma":case"separator":return function(t,e,n){var o="string"==typeof e&&e.includes(r.arrayFormatSeparator),a="string"==typeof e&&!o&&p(e,r).includes(r.arrayFormatSeparator);e=a?p(e,r):e;var i=o||a?e.split(r.arrayFormatSeparator).map((function(t){return p(t,r)})):null===e?e:p(e,r);n[t]=i};default:return function(r,t,e){void 0!==e[r]?e[r]=[].concat(e[r],t):e[r]=t}}}(t),o=Object.create(null);if("string"!=typeof r)return o;if(!(r=r.trim().replace(/^[?#&]/,"")))return o;var i,c=a(r.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value,f=l(t.decode?u.replace(/\+/g," "):u,"="),y=n(f,2),d=y[0],g=y[1];g=void 0===g?null:["comma","separator"].includes(t.arrayFormat)?g:p(g,t),e(p(d,t),g,o)}}catch(E){c.e(E)}finally{c.f()}for(var h=0,b=Object.keys(o);h<b.length;h++){var v=b[h],j=o[v];if("object"==typeof j&&null!==j)for(var w=0,k=Object.keys(j);w<k.length;w++){var I=k[w];j[I]=m(j[I],t)}else o[v]=m(j,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((function(r,t){var e=o[t];return Boolean(e)&&"object"==typeof e&&!Array.isArray(e)?r[t]=function r(t){return Array.isArray(t)?t.sort():"object"==typeof t?r(Object.keys(t)).sort((function(r,t){return Number(r)-Number(t)})).map((function(r){return t[r]})):t}(e):r[t]=e,r}),Object.create(null))}t.extract=d,t.parse=g,t.stringify=function(r,t){if(!r)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var e=function(e){return t.skipNull&&null==r[e]||t.skipEmptyString&&""===r[e]},n=function(r){switch(r.arrayFormat){case"index":return function(t){return function(e,n){var a=e.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(o(e),null===n?[[f(t,r),"[",a,"]"].join("")]:[[f(t,r),"[",f(a,r),"]=",f(n,r)].join("")])}};case"bracket":return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(o(e),null===n?[[f(t,r),"[]"].join("")]:[[f(t,r),"[]=",f(n,r)].join("")])}};case"comma":case"separator":return function(t){return function(e,n){return null==n||0===n.length?e:0===e.length?[[f(t,r),"=",f(n,r)].join("")]:[[e,f(n,r)].join(r.arrayFormatSeparator)]}};default:return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(o(e),null===n?[f(t,r)]:[[f(t,r),"=",f(n,r)].join("")])}}}}(t),a={},i=0,c=Object.keys(r);i<c.length;i++){var u=c[i];e(u)||(a[u]=r[u])}var l=Object.keys(a);return!1!==t.sort&&l.sort(t.sort),l.map((function(e){var o=r[e];return void 0===o?"":null===o?f(e,t):Array.isArray(o)?o.reduce(n(e),[]).join("&"):f(e,t)+"="+f(o,t)})).filter((function(r){return r.length>0})).join("&")},t.parseUrl=function(r,t){t=Object.assign({decode:!0},t);var e=l(r,"#"),o=n(e,2),a=o[0],i=o[1];return Object.assign({url:a.split("?")[0]||"",query:g(d(r),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:p(i,t)}:{})},t.stringifyUrl=function(r,e){e=Object.assign({encode:!0,strict:!0},e);var n=y(r.url).split("?")[0]||"",o=t.extract(r.url),a=t.parse(o,{sort:!1}),i=Object.assign(a,r.query),c=t.stringify(i,e);c&&(c="?".concat(c));var u=function(r){var t="",e=r.indexOf("#");return-1!==e&&(t=r.slice(e)),t}(r.url);return r.fragmentIdentifier&&(u="#".concat(f(r.fragmentIdentifier,e))),"".concat(n).concat(c).concat(u)}},m0LI:function(r,t){r.exports=function(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,c=r[Symbol.iterator]();!(n=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return e}}},pDJo:function(r,t,e){"use strict";var n=e("q1tI"),o=e.n(n),a=e("IxVq"),i=e("cr+I"),c=e.n(i);t.a=function(r){return function(t){return o.a.createElement(a.Location,null,(function(e){var n=e.location,a=e.navigate;return o.a.createElement(r,Object.assign({},t,{location:n,navigate:a,search:n.search?c.a.parse(n.search):{}}))}))}}},wTVA:function(r,t){r.exports=function(r){if(Array.isArray(r))return r}},wkBT:function(r,t){r.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=component---src-pages-yearmonthdetails-js-bb2a196467a39cad744a.js.map