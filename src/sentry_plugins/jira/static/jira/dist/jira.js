!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=27)}([function(t,e){t.exports=React},function(t,e){t.exports=SentryApp},function(t,e,n){var r=n(10);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){var r=n(5);t.exports=function(t,e){return r(t,e)}},function(t,e,n){var r=n(6),o=n(26);t.exports=function t(e,n,i,a,u){return e===n||(null==e||null==n||!o(e)&&!o(n)?e!=e&&n!=n:r(e,n,i,a,t,u))}},function(t,e,n){var r=n(7),o=n(14),i=n(19),a=n(20),u=n(23),c=n(3),s=n(24),f=n(25),l=1,p="[object Arguments]",y="[object Array]",b="[object Object]",v=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,h,g,m){var d=c(t),O=c(e),S=d?y:u(t),j=O?y:u(e),_=(S=S==p?b:S)==b,P=(j=j==p?b:j)==b,w=S==j;if(w&&s(t)){if(!s(e))return!1;d=!0,_=!1}if(w&&!_)return m||(m=new r),d||f(t)?o(t,e,n,h,g,m):i(t,e,S,n,h,g,m);if(!(n&l)){var E=_&&v.call(t,"__wrapped__"),D=P&&v.call(e,"__wrapped__");if(E||D){var L=E?t.value():t,k=D?e.value():e;return m||(m=new r),g(L,k,n,h,m)}}return!!w&&(m||(m=new r),a(t,e,n,h,g,m))}},function(t,e,n){var r=n(8),o=n(9),i=n(11),a=n(12),u=n(13);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=u,t.exports=c},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(2),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():o.call(e,n,1),--this.size,0))}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(2);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(2);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(2);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},function(t,e,n){var r=n(15),o=n(16),i=n(17),a=1,u=2;t.exports=function(t,e,n,c,s,f){var l=n&a,p=t.length,y=e.length;if(p!=y&&!(l&&y>p))return!1;var b=f.get(t);if(b&&f.get(e))return b==e;var v=-1,h=!0,g=n&u?new r:void 0;for(f.set(t,e),f.set(e,t);++v<p;){var m=t[v],d=e[v];if(c)var O=l?c(d,m,v,e,t,f):c(m,d,v,t,e,f);if(void 0!==O){if(O)continue;h=!1;break}if(g){if(!o(e,function(t,e){if(!i(g,e)&&(m===t||s(m,t,n,c,f)))return g.push(e)})){h=!1;break}}else if(m!==d&&!s(m,d,n,c,f)){h=!1;break}}return f.delete(t),f.delete(e),h}},function(t,e,n){var r=n(3);t.exports=function(){if(!arguments.length)return[];var t=arguments[0];return r(t)?t:[t]}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},function(t,e,n){var r=n(18);t.exports=function(t,e){return!(null==t||!t.length)&&r(t,e,0)>-1}},function(t,e){t.exports=function(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(21),o=1,i=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,a,u,c){var s=n&o,f=r(t),l=f.length;if(l!=r(e).length&&!s)return!1;for(var p=l;p--;){var y=f[p];if(!(s?y in e:i.call(e,y)))return!1}var b=c.get(t);if(b&&c.get(e))return b==e;var v=!0;c.set(t,e),c.set(e,t);for(var h=s;++p<l;){var g=t[y=f[p]],m=e[y];if(a)var d=s?a(m,g,y,e,t,c):a(g,m,y,t,e,c);if(!(void 0===d?g===m||u(g,m,n,a,c):d)){v=!1;break}h||(h="constructor"==y)}if(v&&!h){var O=t.constructor,S=e.constructor;O!=S&&"constructor"in t&&"constructor"in e&&!("function"==typeof O&&O instanceof O&&"function"==typeof S&&S instanceof S)&&(v=!1)}return c.delete(t),c.delete(e),v}},function(t,e,n){var r=n(22)(Object.keys,Object);t.exports=r},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(){return!1}},function(t,e){t.exports=function(){return!1}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n(4),u=n.n(a);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var y=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=f(e).call(this,t))||"object"!==c(o)&&"function"!=typeof o?p(r):o).PAGE_FIELD_LIST={0:["instance_url","username","password"],1:["default_project"],2:["ignored_fields","default_priority","default_issue_type","auto_create"]},n.back=n.back.bind(p(p(n))),n.startEditing=n.startEditing.bind(p(p(n))),n.isLastPage=n.isLastPage.bind(p(p(n))),Object.assign(n.state,{page:0}),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,i["plugins"].BasePlugin.DefaultSettings),n=e,(r=[{key:"isConfigured",value:function(t){return t=t||this.state,!(!this.state.formData||!this.state.formData.default_project)}},{key:"isLastPage",value:function(){return 2===this.state.page}},{key:"fetchData",value:function(){var t=this;this.api.request(this.getPluginEndpoint(),{success:function(e){var n={},r={};e.config.forEach(function(t){n[t.name]=t.value||t.defaultValue,r[t.name]=t.value}),t.setState({fieldList:e.config,formData:n,initialData:r,editing:!(n&&n.default_project)},t.onLoadSuccess)},error:this.onLoadError})}},{key:"startEditing",value:function(){this.setState({editing:!0})}},{key:"onSubmit",value:function(){var t=this;if(u()(this.state.initialData,this.state.formData))return this.isLastPage()?this.setState({editing:!1,page:0}):this.setState({page:this.state.page+1}),void this.onSaveSuccess(this.onSaveComplete);var e=Object.assign({},this.state.formData);e.default_project!==this.state.initialData.default_project&&(e.default_issue_type=null,e.default_priority=null),this.api.request(this.getPluginEndpoint(),{data:e,method:"PUT",success:this.onSaveSuccess.bind(this,function(e){var n={},r={};e.config.forEach(function(t){n[t.name]=t.value||t.defaultValue,r[t.name]=t.value});var o={formData:n,initialData:r,errors:{},fieldList:e.config};t.isLastPage()?(o.editing=!1,o.page=0):o.page=t.state.page+1,t.setState(o)}),error:this.onSaveError.bind(this,function(e){t.setState({errors:(e.responseJSON||{}).errors||{}})}),complete:this.onSaveComplete})}},{key:"back",value:function(t){t.preventDefault(),this.state.state!==i.FormState.SAVING&&this.setState({page:this.state.page-1})}},{key:"render",value:function(){var t=this;if(this.state.state===i.FormState.LOADING)return o.a.createElement(i.LoadingIndicator,null);if(this.state.state===i.FormState.ERROR&&!this.state.fieldList)return o.a.createElement("div",{className:"alert alert-error m-b-1"},"An unknown error occurred. Need help with this? ",o.a.createElement("a",{href:"https://sentry.io/support/"},"Contact support"));var e,n,r,a=this.state.state===i.FormState.SAVING;return this.state.editing?(e=this.state.fieldList.filter(function(e){return t.PAGE_FIELD_LIST[t.state.page].includes(e.name)}),n=this.onSubmit,r=this.isLastPage()?"Finish":"Save and Continue"):(e=this.state.fieldList.map(function(t){return Object.assign({},t,{readonly:!0})}),n=this.startEditing,r="Edit"),o.a.createElement(i.Form,{onSubmit:n,submitDisabled:a,submitLabel:r,extraButton:0===this.state.page?null:o.a.createElement("a",{href:"#",className:"btn btn-default pull-left"+(a?" disabled":""),onClick:this.back},"Back")},this.state.errors.__all__&&o.a.createElement("div",{className:"alert alert-block alert-error"},o.a.createElement("ul",null,o.a.createElement("li",null,this.state.errors.__all__))),e.map(function(e){return t.renderField({config:e,formData:t.state.formData,formErrors:t.state.errors,onChange:t.changeField.bind(t,e.name)})}))}}])&&s(n.prototype,r),a&&s(n,a),e}();function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t,e,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var S=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,d(e).apply(this,arguments))}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,i["plugins"].DefaultIssuePlugin.DefaultIssueActions),n=e,(r=[{key:"changeField",value:function(t,e,n){var r=this,o=t+"FormData",a=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){v(t,e,n[e])})}return t}({},this.state[o],v({},e,n)),u=v({},o,a);if("issuetype"===e)return u.state=i.FormState.LOADING,void this.setState(u,this.onLoad.bind(this,function(){r.api.request(r.getPluginCreateEndpoint()+"?issuetype="+encodeURIComponent(n),{success:function(t){var e=r.state.createFormData,n={};t.forEach(function(t){var r;r=t.choices&&!t.choices.find(function(n){return n[0]===e[t.name]})?t.default:e[t.name]||t.default,n[t.name]=r}),r.setState({createFieldList:t,error:null,loading:!1,createFormData:n},r.onLoadSuccess)},error:r.errorHandler})}));this.setState(u)}},{key:"renderForm",value:function(){var t,n=this;if("create"===this.props.actionType){if(this.state.createFieldList){var r=function(t){return t.has_autocomplete&&(t=Object.assign({url:"/api/0/issues/"+n.getGroup().id+"/plugins/"+n.props.plugin.slug+"/autocomplete"},t)),o.a.createElement("div",{key:t.name},n.renderField({config:t,formData:n.state.createFormData,onChange:n.changeField.bind(n,"create",t.name)}))},a=function(t){return null==t.required||t.required},u=this.state.createFieldList,c=u.filter(function(t){return a(t)}).map(function(t){return r(t)}),s=u.filter(function(t){return!a(t)}).map(function(t){return r(t)});t=o.a.createElement(i.Form,{onSubmit:this.createIssue,submitLabel:"Create Issue",footerClass:""},o.a.createElement("h5",null,"Required Fields"),c,s.length?o.a.createElement("h5",null,"Optional Fields"):null,s)}}else t=m(d(e.prototype),"renderForm",this).call(this);return t}}])&&h(n.prototype,r),a&&h(n,a),e}();function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var L=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,E(e).apply(this,arguments))}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(e,i["plugins"].DefaultIssuePlugin),n=e,(r=[{key:"renderSettings",value:function(t){return o.a.createElement(y,_({plugin:this},t))}},{key:"renderGroupActions",value:function(t){return o.a.createElement(S,_({plugin:this},t))}}])&&P(n.prototype,r),a&&P(n,a),e}();L.displayName="Jira",i.plugins.add("jira",L);e.default=L}]);
//# sourceMappingURL=jira.js.map