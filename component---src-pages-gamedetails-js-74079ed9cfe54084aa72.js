(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4DEa":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),a=n("YMtY"),s=n("TQ0l"),l=n.n(s);function c(e){var t=e.data,n=[],r=o.a.createElement("div",null),s=o.a.createElement("div",null);null!=t.sgoyt_entries&&(t.sgoyt_entries.forEach((function(e){n.push({link:o.a.createElement("a",{href:e.geeklist_item_link,target:"_blank",rel:"noreferrer"},"[sgoyt]"),year_month:e.year_month,contributor:e.contributor,id:e.geeklist_item_id})})),t.expansions.length>0&&(r=o.a.createElement("h4",null,"Expansions:")),t.expansion_for.length>0&&(s=o.a.createElement("h4",null,"Expansion for:")));var c=o.a.createElement("div",null,o.a.createElement(l.a,{trigger:"Game Details"},o.a.createElement("p",null,"No data")));return null!=t.game_name&&(c=o.a.createElement("div",null,o.a.createElement("h3",null,t.game_name),o.a.createElement(l.a,{trigger:"Game Details"},o.a.createElement("div",null,o.a.createElement("img",{alt:t.game_name,style:{margin:"10px 10px"},src:t.thumbnail}),o.a.createElement("p",null,o.a.createElement("a",{href:t.bgg_link,target:"_blank",rel:"noreferrer"},"[bgg]")),o.a.createElement("p",null,"Designer(s): ",t.designers_string),o.a.createElement("p",null,"Rating: ",t.rating),o.a.createElement("p",null,"Weight: ",t.weight),o.a.createElement("p",null,"Year Published: ",t.year_published),o.a.createElement("p",null,"Play Time: ",t.play_time),o.a.createElement("p",null,"Game Categories: ",t.categories_string),o.a.createElement("p",null,"Game Mechanics: ",t.mechanics_string),o.a.createElement("p",null,"Recommended as a solo game: ",t.recommended_string),r,t.expansions.map((function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("p",null,e.expansion_name)),o.a.createElement("td",null," ",o.a.createElement("p",null,o.a.createElement(i.Link,{to:"/gamedetails/?gameid="+e.expansion_id,target:"_blank",rel:"noreferrer"},"[details]"))),o.a.createElement("td",null,o.a.createElement("p",null,o.a.createElement("a",{href:e.expansion_bgg_link,target:"_blank",rel:"noreferrer"},"[bgg]"))))})),s,t.expansion_for.map((function(e){return o.a.createElement("tr",null,o.a.createElement("td",{"padding-top":"20px","padding-bottom":"20px","padding-right":"20px"},o.a.createElement("p",null,e.game_name)),o.a.createElement("td",{"padding-top":"20px","padding-bottom":"20px","padding-right":"20px"},o.a.createElement("p",null,o.a.createElement(i.Link,{to:"/gamedetails/?gameid="+e.game_id,target:"_blank",rel:"noreferrer"},"[details]"))),o.a.createElement("td",{"padding-top":"20px","padding-bottom":"20px","padding-right":"20px"},o.a.createElement("p",null,o.a.createElement("a",{href:e.game_bgg_link,target:"_blank",rel:"noreferrer"},"[bgg]"))))})))))),o.a.createElement("div",null,c,o.a.createElement("small",null,"The column header can be used to filter the results for a particular year/month or user."),o.a.createElement("div",{style:{height:670,width:"100%"}},o.a.createElement(a.a,{rows:n,columns:[{field:"link",headerName:"Link",width:200,filterable:!1,sortable:!1,renderCell:function(e){return e.value}},{field:"year_month",headerName:"Year/Month",width:200},{field:"contributor",headerName:"Contributor",width:200},{field:"id",headerName:"ID",hide:!0}],pageSize:10,rowsPerPageOptions:[10,20,50,100],hideFooterSelectedRowCount:!0})))}var u=n("vrFN"),p=n("Bl7J"),f=n("pDJo");n("fT0I");t.default=Object(f.a)((function(e){var t=e.data,n=e.search.gameid,r=t.allGameDataJson.nodes.filter((function(e){return e.game_id===n})),i={},a="",s="",l="";return r.forEach((function(e){i.game_name=e.game_name,i.bgg_link=e.bgg_link,i.categories_string=e.categories_string,i.designers_string=e.designers_string,i.mechanics_string=e.mechanics_string,i.play_time=e.play_time,i.rating=e.rating,i.thumbnail=e.thumbnail,i.weight=e.weight,i.year_published=e.year_published,i.sgoyt_entries=function(e,t,n){void 0===n&&(n=1);return e.sort((function(e,r){var o=e[t],i=r[t];return n*(o<i?-1:o>i?1:0)}))}(e.sgoyt_entries,"year_month",-1),i.expansions=e.expansions,i.expansion_for=e.expansion_for,a=e.recommended,s=e.not_recommended,l=e.best})),i.recommended_string=String(parseInt(a,10)+parseInt(l,10))+" out of "+String(parseInt(a,10)+parseInt(l,10)+parseInt(s,10))+" ("+String((100*(parseFloat(a)+parseFloat(l))/(parseFloat(a)+parseFloat(l)+parseFloat(s))).toFixed(2))+"%)",o.a.createElement(p.a,null,o.a.createElement(u.a,{title:i.game_name}),o.a.createElement(c,{data:i}))}))},"8jRI":function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function i(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],i(n),i(r))}function a(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=i(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var i=a(r[0]);i!==r[0]&&(n[r[0]]=i)}r=o.exec(e)}n["%C2"]="�";for(var s=Object.keys(n),l=0;l<s.length;l++){var c=s[l];e=e.replace(new RegExp(c,"g"),n[c])}return e}(e)}}},"8yz6":function(e,t,n){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},J4zp:function(e,t,n){var r=n("wTVA"),o=n("m0LI"),i=n("ZhPi"),a=n("wkBT");e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},TQ0l:function(e,t,n){var r;e.exports=(r=n("q1tI"),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(2)()},function(e,t){e.exports=r},function(e,t,n){"use strict";var r=n(3);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),a=n.n(i),s=function(e){return 0!==e};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),d(g(t=r.call(this,e)),"continueOpenCollapsible",(function(){var e=g(t).innerRef;t.setState({height:e.scrollHeight,transition:"height ".concat(t.props.transitionTime,"ms ").concat(t.props.easing),isClosed:!1,hasBeenOpened:!0,inTransition:s(e.scrollHeight),shouldOpenOnNextCycle:!1})})),d(g(t),"handleTriggerClick",(function(e){t.props.triggerDisabled||t.state.inTransition||(e.preventDefault(),t.props.handleTriggerClick?t.props.handleTriggerClick(t.props.accordionPosition):!0===t.state.isClosed?(t.openCollapsible(),t.props.onOpening(),t.props.onTriggerOpening()):(t.closeCollapsible(),t.props.onClosing(),t.props.onTriggerClosing()))})),d(g(t),"handleTransitionEnd",(function(e){e.target===t.innerRef&&(t.state.isClosed?(t.setState({inTransition:!1}),t.props.onClose()):(t.setState({height:"auto",overflow:t.props.overflowWhenOpen,inTransition:!1}),t.props.onOpen()))})),d(g(t),"setInnerRef",(function(e){return t.innerRef=e})),t.timeout=void 0,e.open?t.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:t.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height ".concat(e.transitionTime,"ms ").concat(e.easing),hasBeenOpened:!1,overflow:"hidden",inTransition:!1},t}return t=i,(n=[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"!==t.height&&0!==t.height||!0!==this.state.shouldSwitchAutoOnNextCycle||(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){var e=this.innerRef;this.setState({shouldSwitchAutoOnNextCycle:!0,height:e.scrollHeight,transition:"height ".concat(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime,"ms ").concat(this.props.easing),inTransition:s(e.scrollHeight)})}},{key:"openCollapsible",value:function(){this.setState({inTransition:s(this.innerRef.scrollHeight),shouldOpenOnNextCycle:!0})}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?o.a.createElement("span",{className:"".concat(this.props.classParentString,"__trigger-sibling")},this.props.triggerSibling):this.props.triggerSibling&&"function"==typeof this.props.triggerSibling?this.props.triggerSibling():this.props.triggerSibling?o.a.createElement(this.props.triggerSibling,null):null}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",r=this.props.triggerDisabled?"is-disabled":"",i=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,a=this.props.contentContainerTagName,s=this.props.triggerTagName,l=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,u="".concat(this.props.classParentString,"__trigger ").concat(n," ").concat(r," ").concat(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),p="".concat(this.props.classParentString," ").concat(this.state.isClosed?this.props.className:this.props.openedClassName),f="".concat(this.props.classParentString,"__contentOuter ").concat(this.props.contentOuterClassName),g="".concat(this.props.classParentString,"__contentInner ").concat(this.props.contentInnerClassName);return o.a.createElement(a,c({className:p.trim()},this.props.containerElementProps),o.a.createElement(s,c({className:u.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;(" "===n&&"button"!==e.props.triggerTagName.toLowerCase()||"Enter"===n)&&e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},this.props.triggerElementProps),i),this.renderNonClickableTriggerElement(),o.a.createElement("div",{className:f.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef,hidden:this.props.contentHiddenWhenClosed&&this.state.isClosed&&!this.state.inTransition},o.a.createElement("div",{className:g.trim()},l)))}}])&&u(t.prototype,n),i}(r.Component);h.propTypes={transitionTime:a.a.number,transitionCloseTime:a.a.number,triggerTagName:a.a.string,easing:a.a.string,open:a.a.bool,containerElementProps:a.a.object,triggerElementProps:a.a.object,classParentString:a.a.string,openedClassName:a.a.string,triggerStyle:a.a.object,triggerClassName:a.a.string,triggerOpenedClassName:a.a.string,contentOuterClassName:a.a.string,contentInnerClassName:a.a.string,accordionPosition:a.a.oneOfType([a.a.string,a.a.number]),handleTriggerClick:a.a.func,onOpen:a.a.func,onClose:a.a.func,onOpening:a.a.func,onClosing:a.a.func,onTriggerOpening:a.a.func,onTriggerClosing:a.a.func,trigger:a.a.oneOfType([a.a.string,a.a.element]),triggerWhenOpen:a.a.oneOfType([a.a.string,a.a.element]),triggerDisabled:a.a.bool,lazyRender:a.a.bool,overflowWhenOpen:a.a.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),contentHiddenWhenClosed:a.a.bool,triggerSibling:a.a.oneOfType([a.a.element,a.a.func]),tabIndex:a.a.number,contentContainerTagName:a.a.string},h.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",contentHiddenWhenClosed:!1,openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},onTriggerOpening:function(){},onTriggerClosing:function(){},tabIndex:null,contentContainerTagName:"div"},t.default=h}]))},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},ZFOp:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},"cr+I":function(e,t,n){"use strict";n("E9XD");var r=n("J4zp"),o=n("RIqP");function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=n("ZFOp"),l=n("8jRI"),c=n("8yz6");function u(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(e,t){return t.encode?t.strict?s(e):encodeURIComponent(e):e}function f(e,t){return t.decode?l(e):e}function g(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function m(e){var t=(e=g(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){u((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return function(t,n,r){var o="string"==typeof n&&n.includes(e.arrayFormatSeparator),i="string"==typeof n&&!o&&f(n,e).includes(e.arrayFormatSeparator);n=i?f(n,e):n;var a=o||i?n.split(e.arrayFormatSeparator).map((function(t){return f(t,e)})):null===n?n:f(n,e);r[t]=a};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),o=Object.create(null);if("string"!=typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;var a,s=i(e.split("&"));try{for(s.s();!(a=s.n()).done;){var l=a.value,p=c(t.decode?l.replace(/\+/g," "):l,"="),g=r(p,2),m=g[0],h=g[1];h=void 0===h?null:["comma","separator"].includes(t.arrayFormat)?h:f(h,t),n(f(m,t),h,o)}}catch(x){s.e(x)}finally{s.f()}for(var y=0,b=Object.keys(o);y<b.length;y++){var v=b[y],O=o[v];if("object"==typeof O&&null!==O)for(var E=0,C=Object.keys(O);E<C.length;E++){var _=C[E];O[_]=d(O[_],t)}else o[v]=d(O,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((function(e,t){var n=o[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))}t.extract=m,t.parse=h,t.stringify=function(e,t){if(!e)return"";u((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var n=function(n){return t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n]},r=function(e){switch(e.arrayFormat){case"index":return function(t){return function(n,r){var i=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[[p(t,e),"[",i,"]"].join("")]:[[p(t,e),"[",p(i,e),"]=",p(r,e)].join("")])}};case"bracket":return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[[p(t,e),"[]"].join("")]:[[p(t,e),"[]=",p(r,e)].join("")])}};case"comma":case"separator":return function(t){return function(n,r){return null==r||0===r.length?n:0===n.length?[[p(t,e),"=",p(r,e)].join("")]:[[n,p(r,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[p(t,e)]:[[p(t,e),"=",p(r,e)].join("")])}}}}(t),i={},a=0,s=Object.keys(e);a<s.length;a++){var l=s[a];n(l)||(i[l]=e[l])}var c=Object.keys(i);return!1!==t.sort&&c.sort(t.sort),c.map((function(n){var o=e[n];return void 0===o?"":null===o?p(n,t):Array.isArray(o)?o.reduce(r(n),[]).join("&"):p(n,t)+"="+p(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var n=c(e,"#"),o=r(n,2),i=o[0],a=o[1];return Object.assign({url:i.split("?")[0]||"",query:h(m(e),t)},t&&t.parseFragmentIdentifier&&a?{fragmentIdentifier:f(a,t)}:{})},t.stringifyUrl=function(e,n){n=Object.assign({encode:!0,strict:!0},n);var r=g(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),a=Object.assign(i,e.query),s=t.stringify(a,n);s&&(s="?".concat(s));var l=function(e){var t="",n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(l="#".concat(p(e.fragmentIdentifier,n))),"".concat(r).concat(s).concat(l)}},fT0I:function(e,t,n){},m0LI:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}},pDJo:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("IxVq"),a=n("cr+I"),s=n.n(a);t.a=function(e){return function(t){return o.a.createElement(i.Location,null,(function(n){var r=n.location,i=n.navigate;return o.a.createElement(e,Object.assign({},t,{location:r,navigate:i,search:r.search?s.a.parse(r.search):{}}))}))}}},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=component---src-pages-gamedetails-js-74079ed9cfe54084aa72.js.map