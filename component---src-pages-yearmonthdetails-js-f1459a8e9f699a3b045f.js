(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+fof":function(r,e,t){"use strict";t.r(e);var n=t("q1tI"),o=t.n(n),a=t("YMtY");function i(r){var e=r.data,t=[];return e.sgoyt_entries.forEach((function(r){t.push({game_name:r.game_name,link:o.a.createElement("a",{href:r.geeklist_item_link,target:"_blank",rel:"noreferrer"},"[sgoyt]"),contributor:r.contributor,id:r.geeklist_item_id})})),o.a.createElement("div",null,o.a.createElement("h2",null,e.year_month),o.a.createElement("p",null,"Hosted by ",e.geeklist_host),o.a.createElement("small",null,"The column header can be used to filter the results for a particular game or user."),o.a.createElement("div",{style:{height:670,width:"100%"}},o.a.createElement(a.a,{rows:t,columns:[{field:"game_name",headerName:"Game",width:780},{field:"link",headerName:"Link",width:120,filterable:!1,sortable:!1,renderCell:function(r){return r.value}},{field:"contributor",headerName:"Contributor",width:250},{field:"id",headerName:"ID",hide:!0}],pageSize:10,rowsPerPageOptions:[10,20,50,100],hideFooterSelectedRowCount:!0})))}var c=t("vrFN"),u=t("Bl7J"),l=t("pDJo");e.default=Object(l.a)((function(r){var e=r.data,t=r.search.geeklistid,n=e.allYearMonthDataJson.nodes.filter((function(r){return r.geeklist_id===t})),a={};return n.forEach((function(r){a=r})),o.a.createElement(u.a,null,o.a.createElement(c.a,{title:a.year_month}),o.a.createElement(i,{data:a}))}))},"8jRI":function(r,e,t){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(r,e){try{return decodeURIComponent(r.join(""))}catch(o){}if(1===r.length)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],a(t),a(n))}function i(r){try{return decodeURIComponent(r)}catch(o){for(var e=r.match(n),t=1;t<e.length;t++)e=(r=a(e,t).join("")).match(n);return r}}r.exports=function(r){if("string"!=typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return function(r){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(r);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var a=i(n[0]);a!==n[0]&&(t[n[0]]=a)}n=o.exec(r)}t["%C2"]="�";for(var c=Object.keys(t),u=0;u<c.length;u++){var l=c[u];r=r.replace(new RegExp(l,"g"),t[l])}return r}(r)}}},"8yz6":function(r,e,t){"use strict";r.exports=function(r,e){if("string"!=typeof r||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[r];var t=r.indexOf(e);return-1===t?[r]:[r.slice(0,t),r.slice(t+e.length)]}},Bnag:function(r,e){r.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(r,e){r.exports=function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}},Ijbi:function(r,e,t){var n=t("WkPL");r.exports=function(r){if(Array.isArray(r))return n(r)}},J4zp:function(r,e,t){var n=t("wTVA"),o=t("m0LI"),a=t("ZhPi"),i=t("wkBT");r.exports=function(r,e){return n(r)||o(r,e)||a(r,e)||i()}},RIqP:function(r,e,t){var n=t("Ijbi"),o=t("EbDI"),a=t("ZhPi"),i=t("Bnag");r.exports=function(r){return n(r)||o(r)||a(r)||i()}},WkPL:function(r,e){r.exports=function(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}},ZFOp:function(r,e,t){"use strict";r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}},ZhPi:function(r,e,t){var n=t("WkPL");r.exports=function(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}},"cr+I":function(r,e,t){"use strict";t("E9XD");var n=t("J4zp"),o=t("RIqP");function a(r,e){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=function(r,e){if(!r)return;if("string"==typeof r)return i(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(r,e)}(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return c=r.done,r},e:function(r){u=!0,a=r},f:function(){try{c||null==t.return||t.return()}finally{if(u)throw a}}}}function i(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var c=t("ZFOp"),u=t("8jRI"),l=t("8yz6");function s(r){if("string"!=typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(r,e){return e.encode?e.strict?c(r):encodeURIComponent(r):r}function p(r,e){return e.decode?u(r):r}function y(r){var e=r.indexOf("#");return-1!==e&&(r=r.slice(0,e)),r}function m(r){var e=(r=y(r)).indexOf("?");return-1===e?"":r.slice(e+1)}function d(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&"string"==typeof r&&""!==r.trim()?r=Number(r):!e.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function g(r,e){s((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var t=function(r){var e;switch(r.arrayFormat){case"index":return function(r,t,n){e=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),e?(void 0===n[r]&&(n[r]={}),n[r][e[1]]=t):n[r]=t};case"bracket":return function(r,t,n){e=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"comma":case"separator":return function(e,t,n){var o="string"==typeof t&&t.includes(r.arrayFormatSeparator),a="string"==typeof t&&!o&&p(t,r).includes(r.arrayFormatSeparator);t=a?p(t,r):t;var i=o||a?t.split(r.arrayFormatSeparator).map((function(e){return p(e,r)})):null===t?t:p(t,r);n[e]=i};default:return function(r,e,t){void 0!==t[r]?t[r]=[].concat(t[r],e):t[r]=e}}}(e),o=Object.create(null);if("string"!=typeof r)return o;if(!(r=r.trim().replace(/^[?#&]/,"")))return o;var i,c=a(r.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value,f=l(e.decode?u.replace(/\+/g," "):u,"="),y=n(f,2),m=y[0],g=y[1];g=void 0===g?null:["comma","separator"].includes(e.arrayFormat)?g:p(g,e),t(p(m,e),g,o)}}catch(E){c.e(E)}finally{c.f()}for(var h=0,b=Object.keys(o);h<b.length;h++){var v=b[h],j=o[v];if("object"==typeof j&&null!==j)for(var w=0,k=Object.keys(j);w<k.length;w++){var I=k[w];j[I]=d(j[I],e)}else o[v]=d(j,e)}return!1===e.sort?o:(!0===e.sort?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce((function(r,e){var t=o[e];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?r[e]=function r(e){return Array.isArray(e)?e.sort():"object"==typeof e?r(Object.keys(e)).sort((function(r,e){return Number(r)-Number(e)})).map((function(r){return e[r]})):e}(t):r[e]=t,r}),Object.create(null))}e.extract=m,e.parse=g,e.stringify=function(r,e){if(!r)return"";s((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var t=function(t){return e.skipNull&&null==r[t]||e.skipEmptyString&&""===r[t]},n=function(r){switch(r.arrayFormat){case"index":return function(e){return function(t,n){var a=t.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(o(t),null===n?[[f(e,r),"[",a,"]"].join("")]:[[f(e,r),"[",f(a,r),"]=",f(n,r)].join("")])}};case"bracket":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(o(t),null===n?[[f(e,r),"[]"].join("")]:[[f(e,r),"[]=",f(n,r)].join("")])}};case"comma":case"separator":return function(e){return function(t,n){return null==n||0===n.length?t:0===t.length?[[f(e,r),"=",f(n,r)].join("")]:[[t,f(n,r)].join(r.arrayFormatSeparator)]}};default:return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(o(t),null===n?[f(e,r)]:[[f(e,r),"=",f(n,r)].join("")])}}}}(e),a={},i=0,c=Object.keys(r);i<c.length;i++){var u=c[i];t(u)||(a[u]=r[u])}var l=Object.keys(a);return!1!==e.sort&&l.sort(e.sort),l.map((function(t){var o=r[t];return void 0===o?"":null===o?f(t,e):Array.isArray(o)?o.reduce(n(t),[]).join("&"):f(t,e)+"="+f(o,e)})).filter((function(r){return r.length>0})).join("&")},e.parseUrl=function(r,e){e=Object.assign({decode:!0},e);var t=l(r,"#"),o=n(t,2),a=o[0],i=o[1];return Object.assign({url:a.split("?")[0]||"",query:g(m(r),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:p(i,e)}:{})},e.stringifyUrl=function(r,t){t=Object.assign({encode:!0,strict:!0},t);var n=y(r.url).split("?")[0]||"",o=e.extract(r.url),a=e.parse(o,{sort:!1}),i=Object.assign(a,r.query),c=e.stringify(i,t);c&&(c="?".concat(c));var u=function(r){var e="",t=r.indexOf("#");return-1!==t&&(e=r.slice(t)),e}(r.url);return r.fragmentIdentifier&&(u="#".concat(f(r.fragmentIdentifier,t))),"".concat(n).concat(c).concat(u)}},m0LI:function(r,e){r.exports=function(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,c=r[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return t}}},pDJo:function(r,e,t){"use strict";var n=t("q1tI"),o=t.n(n),a=t("IxVq"),i=t("cr+I"),c=t.n(i);e.a=function(r){return function(e){return o.a.createElement(a.Location,null,(function(t){var n=t.location,a=t.navigate;return o.a.createElement(r,Object.assign({},e,{location:n,navigate:a,search:n.search?c.a.parse(n.search):{}}))}))}}},wTVA:function(r,e){r.exports=function(r){if(Array.isArray(r))return r}},wkBT:function(r,e){r.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=component---src-pages-yearmonthdetails-js-f1459a8e9f699a3b045f.js.map