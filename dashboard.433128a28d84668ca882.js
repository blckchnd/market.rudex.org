(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{2070:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(26),s=n(22),i=n(251),c=n(129),u=(n(11),n(1861),n(1766),n(3)),l=n.n(u),p=n(39),f=n(48),h=n(140),d=n(5),m=n.n(d),y=n(85),g=n(35),v=n(16),b=n(1),w=n.n(b),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var S=function(e){function t(){k(this,t);var e=_(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.statsInterval=null,e.state={imgError:!1},e}return O(t,a.a.Component),E(t,[{key:"_checkStats",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{close:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{close:{}};return e.volumeBase!==t.volumeBase||!v.a.are_equal_shallow(e.close&&e.close.base,t.close&&t.close.base)||!v.a.are_equal_shallow(e.close&&e.close.quote,t.close&&t.close.quote)}},{key:"shouldComponentUpdate",value:function(e,t){return this._checkStats(e.marketStats,this.props.marketStats)||e.base.get("id")!==this.props.base.get("id")||e.quote.get("id")!==this.props.quote.get("id")||t.imgError!==this.state.imgError}},{key:"componentWillMount",value:function(){y.a.getMarketStats.defer(this.props.quote,this.props.base),this.statsChecked=new Date,this.statsInterval=setInterval(y.a.getMarketStats.bind(this,this.props.quote,this.props.base),35e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.statsInterval)}},{key:"goToMarket",value:function(e){e.preventDefault(),this.context.router.history.push("/market/"+this.props.base.get("symbol")+"_"+this.props.quote.get("symbol"))}},{key:"_onError",value:function(e){this.state.imgError||(this.refs[e.toLowerCase()].src="asset-symbols/bts.png",this.setState({imgError:!0}))}},{key:"render",value:function(){var e=this.props,t=e.hide,n=e.isLowVolume,r=e.base,o=e.quote,s=e.marketStats;if(n||t)return null;var i=function(e){return e.get("symbol")}(r),c=s?parseFloat(s.change)>0?"change-up":parseFloat(s.change)<0?"change-down":"":"";return a.a.createElement("div",{className:m()("grid-block no-overflow fm-container",this.props.className),onClick:this.goToMarket.bind(this)},a.a.createElement("div",{className:"grid-block vertical shrink"},a.a.createElement("div",{className:"v-align"},a.a.createElement("img",{className:"align-center",ref:i.toLowerCase(),onError:this._onError.bind(this,i),style:{maxWidth:70},src:"asset-symbols/"+i.toLowerCase()+".png"}))),a.a.createElement("div",{className:"grid-block vertical no-overflow"},a.a.createElement("div",{className:"fm-name"},a.a.createElement(h.a,{dataPlace:"top",name:r.get("symbol")})," ",":"," ",a.a.createElement(h.a,{dataPlace:"top",name:o.get("symbol")})),a.a.createElement("div",{className:"fm-volume"},a.a.createElement(l.a,{content:"exchange.price"}),":"," ",a.a.createElement("div",{className:"float-right"},s&&s.price?v.a.price_text(s.price.toReal(),r,o):null)),a.a.createElement("div",{className:"fm-volume"},a.a.createElement(l.a,{content:"exchange.volume"}),":"," ",a.a.createElement("div",{className:"float-right"},s?v.a.format_volume(s.volumeBase,o.get("precision")):null)),a.a.createElement("div",{className:"fm-change"},a.a.createElement(l.a,{content:"exchange.change"}),":"," ",a.a.createElement("div",{className:m()("float-right",c)},s?s.change:null,"%"))))}}]),t}();S.contextTypes={router:w.a.object.isRequired},S.propTypes={quote:p.a.ChainAsset.isRequired,base:p.a.ChainAsset.isRequired,invert:w.a.bool},S.defaultProps={invert:!0},S=Object(f.a)(S);var A=function(e){function t(){return k(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,a.a.Component),E(t,[{key:"render",value:function(){return a.a.createElement(S,this.props)}}]),t}(),j=Object(g.a)(A,{listenTo:function(){return[i.a]},getProps:function(e){return{marketStats:i.a.getState().allMarketStats.get(e.marketId)}}}),T=n(13),P=n(41),N=n(546),q=n(23),C=n(37),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var I=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),r={"4018d784":Object(C.h)(),"39f5e2ed":[["TEST","PEG.FAKEUSD"],["TEST","BTWTY"]]},a=T.Apis.instance().chain_id;return a&&(a=a.substr(0,8)),n.state={width:null,showIgnored:!1,featuredMarkets:r[a]||r["4018d784"],newAssets:[],currentEntry:e.currentEntry},n._setDimensions=n._setDimensions.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),x(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"shouldComponentUpdate",value:function(e,t){return!v.a.are_equal_shallow(t.featuredMarkets,this.state.featuredMarkets)||!v.a.are_equal_shallow(t.newAssets,this.state.newAssets)||e.linkedAccounts!==this.props.linkedAccounts||e.ignoredAccounts!==this.props.ignoredAccounts||e.passwordAccount!==this.props.passwordAccount||t.width!==this.state.width||e.accountsReady!==this.props.accountsReady||t.showIgnored!==this.state.showIgnored||t.currentEntry!==this.state.currentEntry}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_onToggleIgnored",value:function(){this.setState({showIgnored:!this.state.showIgnored})}},{key:"_onSwitchType",value:function(e){this.setState({currentEntry:e}),q.a.changeViewSetting({dashboardEntry:e})}},{key:"render",value:function(){var e=this.props,t=e.linkedAccounts,n=e.myHiddenAccounts,r=e.accountsReady,o=e.passwordAccount,s=this.state,i=(s.width,s.showIgnored,s.featuredMarkets),c=s.newAssets;s.currentEntry;o&&!t.has(o)&&(t=t.add(o));var u=t.toArray().sort();o&&-1===u.indexOf(o)&&u.push(o);n.toArray().sort();var p=t.size+n.size+(o?1:0);if(!r)return a.a.createElement(P.a,null);var f=0,h=i.map(function(e){var t="";return++f>15?t+=" show-for-"+(p?"large":"xlarge"):f>12&&(t+=" show-for-"+(p?"medium":"large")),a.a.createElement(j,{key:e[0]+"_"+e[1],marketId:e[1]+"_"+e[0],new:-1!==c.indexOf(e[1]),className:t,quote:e[0],base:e[1],invert:e[2],hide:f>35})}).filter(function(e){return!!e});if(!p)return a.a.createElement(N.a,null);return a.a.createElement("div",{ref:"wrapper",className:"grid-block vertical"},a.a.createElement("div",{ref:"container",className:"grid-container",style:{padding:"2rem 8px"}},this.props.onlyAccounts?null:a.a.createElement("div",{className:"block-content-header",style:{marginBottom:15,paddingTop:0}},a.a.createElement(l.a,{content:"exchange.featured"})),this.props.onlyAccounts?null:a.a.createElement("div",{className:"grid-block small-up-1 medium-up-3 large-up-4 no-overflow fm-outer-container"},h)))}}]),t}(),M=function(e){return a.a.createElement(I,e)},R=M=Object(g.a)(M,{listenTo:function(){return[s.a]},getProps:function(){return{viewSettings:s.a.getState().viewSettings}}}),D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var L=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),D(t,[{key:"render",value:function(){return a.a.createElement(c.a,{stores:[o.a,s.a,i.a],inject:{linkedAccounts:function(){return o.a.getState().linkedAccounts},myHiddenAccounts:function(){return o.a.getState().myHiddenAccounts},accountsReady:function(){return o.a.getState().accountsLoaded&&o.a.getState().refsLoaded},passwordAccount:function(){return o.a.getState().passwordAccount},currentEntry:s.a.getState().viewSettings.get("dashboardEntry","accounts")}},a.a.createElement(R,this.props))}}]),t}();t.default=L}}]);
//# sourceMappingURL=dashboard.js.map