(this.webpackJsonp=this.webpackJsonp||[]).push([[5],{1967:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(0),o=n.n(r),s=n(1),a=n.n(s),i=n(4),p=n(5),l=n.n(p),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var c=o.a.createRef();function h(e){var t=e.onChange,n=e.value,r=e.placeholder,s=e.maxLength,a=e.style,p=e.className,l=e.name,h=e.autoComplete,f=e.onClear,m=e.type,d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["onChange","value","placeholder","maxLength","style","className","name","autoComplete","onClear","type"]);return null==f&&(f=function(){t({target:{value:""}}),c.current.focus()}),o.a.createElement(i.Input,u({ref:c,autoComplete:h,style:a,type:m,className:p+" search-input",placeholder:r,maxLength:s,name:l,value:n,onChange:t,addonAfter:o.a.createElement(i.Icon,{type:"search"}),suffix:f?o.a.createElement(i.Icon,{onClick:f,type:"close",className:n?"cursor-pointer":"hide"}):o.a.createElement("span",null)},d))}h.propTypes={onChange:a.a.func.isRequired,value:a.a.string,placeholder:a.a.string,style:a.a.object,className:a.a.string,type:a.a.string,name:a.a.string,autoComplete:a.a.string,maxLength:a.a.number,onClear:a.a.func},h.defaultProps={placeholder:l.a.translate("exchange.filter"),style:{width:"200px"},className:"",type:"text",name:"focus",autoComplete:"off",maxLength:16,onClear:void 0}},1970:function(e,t,n){"use strict";var r=n(0),o=n.n(r),s=n(343),a=n(42),i=n(48),p=n(8),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=function(e){function t(){c(this,t);var e=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.getDynamicObject=e.getDynamicObject.bind(e),e}return f(t,e),u(t,[{key:"getDynamicObject",value:function(e){return this.props.dos.find((function(t){return t&&t.get("id")===e}))}},{key:"render",value:function(){return o.a.cloneElement(o.a.Children.only(this.props.children),l({},this.props,{getDynamicObject:this.getDynamicObject}))}}]),t}(o.a.Component);m.propTypes={dos:a.a.ChainObjectsList},m.defaultProps={dos:Object(p.List)()},m=Object(i.a)(m);var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.propNames=t.propNames||[t.asList?"assets":"asset"];var n=t.propNames.reduce((function(e,n){return e[n]=t.asList?a.a.ChainAssetsList:a.a.ChainAsset.isRequired,e}),{}),r=Object.keys(n).reduce((function(e,n){var r=t.defaultProps&&t.defaultProps[n];return e[n]=t.asList?Object(p.List)(r||[]):r||"1.3.0",e}),{});t.defaultProps&&t.defaultProps.tempComponent&&(r.tempComponent=t.defaultProps.tempComponent);var d=function(e){function n(){return c(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f(n,e),u(n,[{key:"render",value:function(){var e=this,n={},r={},s=Object(p.List)();Object.keys(this.props).forEach((function(o){e.props[o]&&-1!==t.propNames.indexOf(o)?(t.withDynamic&&(t.asList?e.props[o].forEach((function(e){e&&(s=s.push(e.get("dynamic_asset_data_id")))})):s=s.push(e.props[o].get("dynamic_asset_data_id"))),n[o]=t.asList?e.props[o].filter((function(e){return!!e})):e.props[o]):r[o]=e.props[o]}));var a=o.a.cloneElement(o.a.Children.only(this.props.children),l({},r,n));return t.withDynamic?o.a.createElement(m,{dos:s},a):a}}]),n}(o.a.Component);d.propTypes=n,d.defaultProps=r,d=Object(i.a)(d);var y=function(t){function n(){return c(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f(n,t),u(n,[{key:"render",value:function(){return o.a.createElement(d,this.props,o.a.createElement(e,{ref:"bound_component"}))}}]),n}(o.a.Component);return y.displayName="Wrapper("+Object(s.a)(e)+")",y},y=n(1),b=n.n(y),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var w=function(e){function t(e){_(this,t);var n=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={imgError:!1},n}return C(t,e),g(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.asset!==e.asset||this.props.maxWidth!==e.maxWidth||this.props.whiteList!==e.whiteList||this.state.imgError!==t.imgError}},{key:"_onError",value:function(e){this.state.imgError||(this.props.replaceNoneToBts?this.refs[e.toLowerCase()].src="asset-symbols/bts.png":this.refs[e.toLowerCase()].remove(),this.setState({imgError:!0}))}},{key:"render",value:function(){var e=function(e){return e.get("symbol")}(this.props.asset);return o.a.createElement("img",{ref:e.toLowerCase(),className:"column-hide-small",onError:this._onError.bind(this,e),style:{maxWidth:this.props.maxWidth,marginRight:5},src:"asset-symbols/"+e.toLowerCase()+".png"})}}]),t}(o.a.Component);w.propTypes={replaceNoneToBts:b.a.bool,maxWidth:b.a.number},w.defaultProps={replaceNoneToBts:!0,maxWidth:20},w=d(w);var E=function(e){function t(){return _(this,t),O(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return C(t,e),g(t,[{key:"render",value:function(){return o.a.createElement(w,v({},this.props,{asset:this.props.name}))}}]),t}(o.a.Component);t.a=E},1977:function(e,t,n){"use strict";var r=n(0),o=n.n(r),s=n(11),a=n(1),i=n.n(a),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);e.scroll_length;var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={active:!1},n.listener=!1,n.onBodyClick=n.onBodyClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),p(t,[{key:"componentDidMount",value:function(){this._setListener()}},{key:"shouldComponentUpdate",value:function(e,t){return!s.a.are_equal_shallow(e.entries,this.props.entries)||!s.a.are_equal_shallow(t,this.state)||e.value!==this.props.value}},{key:"_setListener",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;e.entries.length>1&&!this.listener&&(this.listener=!0,document.body.addEventListener("click",this.onBodyClick,{capture:!1,passive:!0}))}},{key:"_removeListener",value:function(){document.body.removeEventListener("click",this.onBodyClick),this.listener=!1}},{key:"componentWillReceiveProps",value:function(e){1===e.entries.length?this._removeListener():e.entries.length>1&&this._setListener(e)}},{key:"componentWillUnmount",value:function(){this._removeListener()}},{key:"onBodyClick",value:function(e){var t=e.target,n=!1;do{if(t.classList&&t.classList.contains("dropdown")&&t.id===this.props.id){n=!0;break}}while(t=t.parentNode);n?e.stopPropagation():this.setState({active:!1})}},{key:"onChange",value:function(e,t){t.preventDefault(),t.stopPropagation(),this.props.onChange(e),this.setState({active:!1})}},{key:"_toggleDropdown",value:function(){this.setState({active:!this.state.active})}},{key:"render",value:function(){var e=this,t=this.props,n=t.entries,r=t.value,s=this.state.active;if(0===n.length)return null;if(1==n.length)return o.a.createElement("div",{className:"dropdown-wrapper inactive"+(this.props.upperCase?" upper-case":"")},o.a.createElement("div",null,this.props.singleEntry?this.props.singleEntry:n[0]));var a=n.map((function(t){return o.a.createElement("li",{className:e.props.upperCase?"upper-case":"",key:t,onClick:e.onChange.bind(e,e.props.values[t])},o.a.createElement("span",null,t))}));return o.a.createElement("div",{onClick:this._toggleDropdown.bind(this),className:"dropdown-wrapper"+(s?" active":"")+(this.props.upperCase?" upper-case":"")},o.a.createElement("div",{style:{paddingRight:15}},r||o.a.createElement("span",{className:"hidden"},"A")),o.a.createElement("ul",{className:"dropdown",style:{overflow:n.length>this.props.scroll_length?"auto":"hidden"}},a))}}]),t}(o.a.Component);l.propTypes={scroll_length:i.a.number},l.defaultProps={scroll_length:9},t.a=l},1987:function(e,t,n){"use strict";var r=n(0),o=n.n(r),s=n(2),a=n.n(s),i=n(6),p=n(42),l=n(48),u=n(5),c=n.n(u),h=n(1977),f=n(35),m=n(8),d=n.n(m),y=n(3),b=n.n(y),v=n(126),g=n(1),_=n.n(g),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var j=function(e){function t(){return C(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return E(t,e),O(t,[{key:"render",value:function(){return 0!==this.props.assets.length&&this.props.value?o.a.createElement(h.a,{entries:this.props.assets.map((function(e){return e&&e.get("symbol")})).filter((function(e){return!!e})),values:this.props.assets.reduce((function(e,t){return t&&t.get("symbol")&&(e[t.get("symbol")]=t),e}),{}),singleEntry:this.props.assets[0]?o.a.createElement(f.a,{asset:this.props.assets[0].get("id"),amount:0,hide_amount:!0}):null,value:"",onChange:this.props.onChange}):null}}]),t}(o.a.Component);j.propTypes={value:_.a.string,onChange:_.a.func},j=Object(v.a)(j,{asList:!0});var k=function(e){function t(){return C(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return E(t,e),O(t,[{key:"getAsset",value:function(){return this.props.asset}},{key:"getError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.assetInput,t=this.props.error;return t||!e||this.getNameType(e)||(t=c.a.translate("explorer.asset.invalid",{name:e})),t}},{key:"getNameType",value:function(e){return e?i.ChainValidation.is_valid_symbol_error(e,!0)?null:"symbol":null}},{key:"onInputChanged",value:function(e){var t=e.target.value.trim().substr(0,16).toUpperCase();this.props.onChange&&t!==this.props.assetInput&&this.props.onChange(t)}},{key:"onKeyDown",value:function(e){13===e.keyCode&&(this.onFound(e),this.onAction(e))}},{key:"componentDidMount",value:function(){this.props.onFound&&this.props.asset&&this.props.onFound(this.props.asset)}},{key:"componentWillReceiveProps",value:function(e){this.props.onFound&&e.asset!==this.props.asset&&this.props.onFound(e.asset)}},{key:"onFound",value:function(e){e.preventDefault(),!this.props.onFound||this.getError()||this.props.disableActionButton||this.props.asset&&this.props.onFound(this.props.asset)}},{key:"onAssetSelect",value:function(e){e&&(this.props.onFound(e),this.props.onChange(e.get("symbol")))}},{key:"onAction",value:function(e){e.preventDefault(),!this.props.onAction||this.getError()||this.props.disableActionButton||this.props.asset&&this.props.onAction(this.props.asset)}},{key:"render",value:function(){var e=this.props,t=e.disabled,n=e.noLabel,r=this.getError(),s=void 0;t||(this.props.asset?s=this.props.asset.get("symbol"):!r&&this.props.assetInput&&(r=c.a.translate("explorer.asset.not_found",{name:this.props.assetInput})));var i=b()("button",{disabled:!this.props.asset||r||this.props.disableActionButton});return o.a.createElement("div",{className:"asset-selector",style:this.props.style},o.a.createElement("div",null,o.a.createElement("div",{className:"header-area"},r||n?null:o.a.createElement("label",{className:"right-label"},"  ",o.a.createElement("span",null,s)),o.a.createElement(a.a,{component:"label",content:this.props.label})),o.a.createElement("div",{className:"input-area"},o.a.createElement("div",{className:"inline-label input-wrapper"},o.a.createElement("input",{style:this.props.inputStyle,disabled:this.props.disabled,type:"text",value:this.props.assetInput||"",placeholder:this.props.placeholder||c.a.translate("explorer.assets.symbol"),ref:"user_input",onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex}),o.a.createElement("div",{className:"form-label select floating-dropdown"},this.props.asset?o.a.createElement(j,{ref:this.props.refCallback,value:this.props.asset.get("symbol"),assets:d.a.List(this.props.assets),onChange:this.onAssetSelect.bind(this)}):null),this.props.children,this.props.onAction?o.a.createElement("button",{className:i,onClick:this.onAction.bind(this)},o.a.createElement(a.a,{content:this.props.action_label})):null)),o.a.createElement("div",{className:"error-area",style:{paddingBottom:"10px"}},o.a.createElement("span",{style:{wordBreak:"break-all"}},r))))}}]),t}(o.a.Component);k.propTypes={label:_.a.string,error:_.a.string,placeholder:_.a.string,onChange:_.a.func,onFound:_.a.func,assetInput:_.a.string,asset:p.a.ChainAsset,tabIndex:_.a.number,disableActionButton:_.a.bool},k.defaultProps={disabled:!1},t.a=Object(l.a)(k)},1998:function(e,t,n){"use strict";n.d(t,"b",(function(){return L})),n.d(t,"a",(function(){return T})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return N}));var r=n(0),o=n.n(r),s=n(35),a=n(42),i=n(48),p=n(126),l=n(11),u=n(28),c=n(197),h=n(2),f=n.n(h),m=n(5),d=n.n(m),y=n(626),b=n(66),v=n(4),g=n(1),_=n.n(g),O=n(6),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function E(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function P(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var N=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;try{return b.a.convertValue(e,t,n,s||c.a.getState().allMarketStats,o||O.ChainStore.getAsset("1.3.0"),r||!0)}catch(e){console.log(e)}},A=function(e){function t(e){return j(this,t),k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return P(t,e),w(t,[{key:"shouldComponentUpdate",value:function(e){return function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"shouldComponentUpdate",this).call(this,e)||!l.a.are_equal_shallow(e.pulsate,this.props.pulsate)||e.toAsset!==this.props.toAsset||e.fromAsset!==this.props.fromAsset||e.amount!==this.props.amount}},{key:"render",value:function(){var e=this.props,t=e.amount,n=e.toAsset,r=e.fromAsset,a=e.fullPrecision,i=e.coreAsset,p=E(e,["amount","toAsset","fromAsset","fullPrecision","coreAsset"]),l=n.get("id"),u=n.get("symbol"),c=N(t,n,r,a,i);return c||0===c?o.a.createElement(s.a,C({noPrefix:!0,amount:c,asset:l,decimalOffset:-1!==u.indexOf("BTC")?4:this.props.fullDecimals?0:this.props.noDecimals?n.get("precision"):n.get("precision")-2},p)):o.a.createElement(v.Tooltip,{placement:"bottom",title:d.a.translate("tooltip.no_price")},o.a.createElement("div",{className:"tooltip inline-block",style:{fontSize:"0.9rem"}},o.a.createElement(f.a,{content:"account.no_price"})))}}]),t}(y.a);A.defaultProps={fullPrecision:!0,noDecimals:!1,fullDecimals:!1,hide_asset:!1},A=Object(p.a)(A,{propNames:["toAsset","fromAsset","coreAsset"],defaultProps:{toAsset:"1.3.0",coreAsset:"1.3.0"}});var L=function(e){function t(){return j(this,t),k(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return P(t,e),w(t,[{key:"render",value:function(){var e=this.props,t=e.refCallback,n=E(e,["refCallback"]);return o.a.createElement(A,C({},n,{ref:t}))}}]),t}(o.a.Component);L=Object(u.a)(L,{listenTo:function(){return[c.a]},getProps:function(){return{allMarketStats:c.a.getState().allMarketStats}}});var x=function(e){var t=e.getIn(["balance","amount"]);return t||0===t?{asset_id:e.getIn(["balance","asset_id"]),amount:Number(e.getIn(["balance","amount"]))}:{asset_id:e.get("asset_type"),amount:Number(e.get("balance"))}},T=function(e){function t(){return j(this,t),k(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return P(t,e),w(t,[{key:"render",value:function(){var e=this.props,t=e.balance,n=E(e,["balance"]),r=x(t),s=r.amount;this.props.satoshis&&(s=this.props.satoshis);var a=r.asset_id;return isNaN(s)?o.a.createElement("span",null,"--"):o.a.createElement(L,C({amount:s,fromAsset:a,noDecimals:!0,fullPrecision:!this.props.satoshis&&this.props.fullPrecision},n))}}]),t}(o.a.Component);T.propTypes={balance:a.a.ChainObject.isRequired,satoshis:_.a.number},T.defaultProps={satoshis:null},T=Object(i.a)(T,{keep_updating:!0})}}]);
//# sourceMappingURL=account~explorer.js.map